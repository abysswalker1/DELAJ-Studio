import { FC } from 'react';
import './menu.scss';
import Image from 'next/image';
import Link from 'next/link';
import { halvar } from '@/fonts';
import './menu-home.scss';

//Images
import logo from '../../../public/images/logo.svg'
import LanguageToggle from '@/components/language-toggle/LanguageToggle';
import bg from '../../../public/images/modals/menu-bg.png';

import cn from 'classnames';

const page: FC = () => {
  return (
    <>
      <div className='menu-home'>
        <Link href="/">
          <Image className='menu-logo' src={logo} alt=''/>
        </Link>

        <div className="menu-home__links">
          <a href="/menu/about" className="menu-link" id="menu-about">
            о нас
          </a>
          <a href="/menu/career" className="menu-link" id="menu-career">
            карьера
          </a>
          <a href="/menu/contacts" className="menu-link" id="menu-contact">
            контакты
          </a>
          <a href="/menu/faq" className="menu-link" id="menu-faq" style={{left: '10%'}}>
            faq
          </a>
          <a href="/menu/ideas" className="menu-link" id="menu-ideas" style={{left: '-7%'}}>
            идеи
          </a>
        </div>

        <LanguageToggle className={cn('menu-home__language', halvar.className)}/>
      </div>
      <Image className='menu-home__bg' src={bg} alt="" fill/>
    </>
  );
};

export default page;