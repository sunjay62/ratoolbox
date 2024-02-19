'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.scss';

const index = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
  };

  return (
    <div className={`${styles.navbar}`}>
      <div className="menuContainer flex justify-between items-center ">
        <div className="img">
          <Link href="/" onClick={() => handleMenuClick('Blacklist')}>
            <Image src="/assets/logoremala.png" alt="Logo" width={75} height={100} />
          </Link>
        </div>
        <div className={`${styles.navbarMenu} flex gap-2 `}>
          <Link
            href="/"
            className={`menu-item ${
              activeMenu === 'Blacklist'
                ? 'bg-color-hover  text-color-primary p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                : 'hover:bg-color-hover text-color-hovertwo  p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
            }`}
            onClick={() => handleMenuClick('Blacklist')}
          >
            Blacklist
          </Link>
          <Link
            href="/speedtest"
            className={`menu-item ${
              activeMenu === 'SpeedTest'
                ? 'bg-color-hover text-color-primary p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                : 'hover:bg-color-hover text-color-hovertwo  p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
            }`}
            onClick={() => handleMenuClick('SpeedTest')}
          >
            SpeedTest
          </Link>
          <Link
            href="/products"
            className={`menu-item ${
              activeMenu === 'Products'
                ? 'bg-color-hover text-color-primary p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                : 'hover:bg-color-hover text-color-hovertwo  p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
            }`}
            onClick={() => handleMenuClick('Products')}
          >
            Products
          </Link>
          <Link
            href="/support"
            className={`menu-item ${
              activeMenu === 'Support'
                ? 'bg-color-hover  text-color-primary p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                : 'hover:bg-color-hover text-color-hovertwo  p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
            }`}
            onClick={() => handleMenuClick('Support')}
          >
            Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
