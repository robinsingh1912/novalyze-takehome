'use client';

import { PopoverGroup } from '@headlessui/react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
import ThemeToggler from './ThemeToggler';

export default function Header() {
  return (
    <header className='bg-black'>
      <nav
        aria-label='Global'
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 h-28 gap-2'
      >
        <div className='flex lg:flex-1'>
          <Link to='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img alt='Novalyze logo' src={Logo} className='h-10 w-auto' />
          </Link>
        </div>
        <PopoverGroup className='hidden lg:flex lg:gap-x-12'>
          <a href='/' className='text-sm/6 font-semibold text-secondary'>
            Home
          </a>
          <a href='#' className='text-sm/6 font-semibold text-secondary'>
            Marketplace
          </a>
          <a href='#' className='text-sm/6 font-semibold text-secondary'>
            Company
          </a>
        </PopoverGroup>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a href='/login' className='text-sm/6 font-semibold text-secondary'>
            Log in <span aria-hidden='true'>&rarr;</span>
          </a>
        </div>
        <ThemeToggler />
      </nav>
    </header>
  );
}
