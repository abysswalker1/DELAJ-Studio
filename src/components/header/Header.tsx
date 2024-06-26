'use client';
import { IWithClass } from '@/types';
import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

//Images
import kidsLogo from '../../../public/images/kids-header-logo.svg';  
import adultLogo from '../../../public/images/adult-header-logo.svg';
import logo from '../../../public/images/logo.svg';
import burger from '../../../public/images/header-burger.svg';
import blueBurger from '../../../public/images/blue-burger.svg';
import darkBurger from '../../../public/images/dark-burger.svg';
import mail from '../../../public/images/mail.svg';
import whiteMail from '../../../public/images/white-mail.svg';
import blueMail from '../../../public/images/blue-mail.svg';
import whiteLogo from '../../../public/images/white-logo.svg'
import close from '../../../public/images/close.svg';

import './header.scss';
import { useHash } from '@/utils/useHash';
import { P, match } from 'ts-pattern';
import { observer } from 'mobx-react-lite';
import store from '@/store/store';
import { useRouter } from 'next/navigation';

const styles = {
  default: {
    mail: mail,
    logo: logo,
    burger: darkBurger,
  },
  kids: {
    mail: blueMail,
    logo: kidsLogo,
    burger: blueBurger,
  },
  adult: {
    mail: whiteMail,
    logo: adultLogo,
    burger: burger,
  },
  mainScreen: {
    mail: whiteMail,
    logo: logo,
    burger: burger,
  }
}

type HeaderTheme = {
  hash: string, 
  isLandingSwiped: boolean, 
  isMenuOpened: boolean
}

const Header: FC<IWithClass> = (props) => {
  const className = cn('header', props.className);
  const hash = useHash();
  const router = useRouter();
  const { isLandingSwiped, isMenuOpened, changeMenuOpened } = store;
  const theme: HeaderTheme = {hash, isLandingSwiped, isMenuOpened};
  const modalHashes = ['about', 'ideas', 'career', 'contacts', 'faq'];

    return (
      <>
        {match(theme)
        // Первый экран
          .with({hash: '', isMenuOpened: false}, () => (
            <header className={className} >
              <div className={('container header-first')}>
                <a href="#menu">
                  <Image className='header-burger' src={styles.default.burger} alt=""/>
                </a>
              </div>
            </header>
          ))
        // Открыто меню выбора лэндоса
          .with({hash: '', isMenuOpened: true}, {hash: 'main-screen', isMenuOpened: true}, () => (
            <header className={className} >
              <div className='container'>
                <button onClick={() => changeMenuOpened(false)} type="button">
                  <Image className='header-logo' src={whiteLogo} alt=""/>
                </button>
                
                <a href="#menu">
                  <Image className='header-burger' src={burger} alt=""/>
                </a>
              </div>
            </header>
          ))
          // Детский дэндос
          .with(
            {hash: 'first-landing', isLandingSwiped: false},
            {hash: 'second-landing', isLandingSwiped: true},
            () => (
              <header className={cn(className, "white-header")} >
                <div className='container'>
                  <a href="#contacts">
                    <Image className='header-mail' src={blueMail} alt=""/>
                  </a>

                  <a href="#main-screen">
                    <Image className='header-logo' src={kidsLogo} alt=""/>
                  </a>
                  
                  <a href="#menu">
                    <Image className='header-burger' src={blueBurger} alt=""/>
                  </a>
                </div>
              </header>
            )
          )
          // Взрослый лэндос 
          .with(
            {hash: 'first-landing', isLandingSwiped: true},
            {hash: 'second-landing', isLandingSwiped: false},
            () => (
              <header className={cn(className, "black-header")} >
                <div className='container'>
                  <a href="#contacts">
                    <Image className='header-mail' src={whiteMail} alt=""/>
                  </a>

                  <a href="#main-screen">
                    <Image className='header-logo' src={adultLogo} alt=""/>
                  </a>
                  
                  <a href="#menu">
                    <Image className='header-burger' src={burger} alt=""/>
                  </a>
                </div>
              </header>
            )
          )
          // Меню
          .with(
            {hash: 'menu'},
            () => (
              <header className={cn(className)} >
                <div className='container'>
                  <a>
                    <Image className='header-mail menu-mail' src={mail} alt=""/>
                  </a>

                  <a href="#main-screen">
                    <Image className='header-logo' src={logo} alt=""/>
                  </a>

                  <a href='#second-landing'>
                    <Image className='header-close' src={close} alt=""/>
                  </a>
                </div>
              </header>
            )
          )
          // Разделы меню
          .with(
            {hash: P.when(hash => modalHashes.includes(hash))},
            () => (
              <header className={cn(className)} >
                  <div className="container header-first">
                    <a href="#menu">
                      <Image className='header-close' src={close} alt=""/>
                    </a>
                  </div>
              </header>
            )
          )
          .otherwise(() => (
            <header className={cn(className)} >
              <div className='container'>
                <a href="#contacts">
                  <Image className='header-mail menu-mail' src={styles.default.mail} alt=""/>
                </a>

                <a href="#main-screen">
                  <Image className='header-logo' src={styles.default.logo} alt=""/>
                </a>
                
                <a href="#menu">
                  <Image className='header-burger' src={styles.default.burger} alt=""/>
                </a>
              </div>
            </header>
          ))
      }
    </>
  );
};

export default observer(Header);