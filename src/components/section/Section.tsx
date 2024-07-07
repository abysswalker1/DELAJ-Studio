'use client';
import { IWithChildren, IWithClass } from '@/types';
import { FC, memo, useEffect, useRef } from 'react';
import cn from 'classnames';
import './section-wrap.scss';
import classNames from 'classnames';

interface Props extends IWithClass, IWithChildren {
  id: string
}

const Section: FC<Props> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null); 
  const ref = useRef<HTMLDivElement>(null);
  const className = cn('section-wrap', props.className);
  let nextName: string | null | undefined;
  let prevName: string | null | undefined;

  useEffect(() => {
    const nextSection = containerRef.current?.nextElementSibling;
    const prevSection = containerRef.current?.previousElementSibling;
    nextName = nextSection?.getAttribute('data-name');
    prevName = prevSection?.getAttribute('data-name');

  },[ref])

  const swipeDown = () => {
    if (window && ref.current) {
      const { bottom } = ref.current.getBoundingClientRect();
      const bottomOffset = window.innerHeight - Math.floor(bottom) >= 0;
      if ( bottomOffset ) {
        if (nextName) {
          window.location.hash = nextName;
        } else {
          window.location.hash = '';
        }
      } 
    }
  }

  const swipeUp = () => {
    if (window && ref.current) {
      const { top } = ref.current.getBoundingClientRect();

      if (top === 0) {
          if (prevName) {
            window.location.hash = prevName;
          } else {
            window.location.hash = 'main-screen';
          }
      } 
    }
  }

  const handleScroll = (e: React.WheelEvent<HTMLElement>) => {
    if (e.deltaY > 0) {
      swipeDown();
    } else if (e.deltaY < 0) {
      swipeUp();
    }
  }

  const handleTouch = (e: React.TouchEvent<HTMLElement>) => {
    // console.log(e.touches, e.touches[1])
    // const isUpGoing = e.touches[0].clientY < e.touches[1].clientY;
    // if (e.touches[1] && isUpGoing ) {
    //   swipeUp();
    // } else {
    //   swipeDown()
    // }
  }

  return (
    <section 
      onWheel={handleScroll} 
      onTouchMove={handleTouch}
      className={className} 
      ref={containerRef}
      data-name={props.id}
    >
      <div 
        ref={ref} 
        className={classNames(
          "section-wrap__content", 
        )}
      >
        {props.children}
      </div>
    </section>
  );
};

export default Section;