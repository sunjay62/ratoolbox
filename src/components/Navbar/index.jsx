'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Close, Menu } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './navbar.module.scss';

const Index = () => {
  const [focusMenu, setFocusMenu] = useState('');
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const menuRef = useRef(null);

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 860);
  };

  const handleScroll = () => {
    if (isMenuActive) {
      setIsMenuActive(false);
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuActive]);

  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
      case '/':
        setFocusMenu('Blacklist');
        break;
      case '/looking-glass':
        setFocusMenu('LookingGlass');
        break;
      case '/speedtest':
        setFocusMenu('SpeedTest');
        break;
      case '/products':
        setFocusMenu('Products');
        break;
      case '/support':
        setFocusMenu('Support');
        break;
      default:
        setFocusMenu('');
        break;
    }
  }, []);

  const handleMenuClick = (menuName) => {
    setFocusMenu(menuName);
    setIsMenuActive(false); // Close the menu after clicking
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className={`${styles.navbar}`}>
      <div className="menuContainer flex justify-between items-center">
        <div>
          <Link href="/" onClick={() => handleMenuClick('Blacklist')}>
            <Image className={`${styles.image}`} src="/assets/logoremala.png" alt="Logo" width={75} height={100} />
          </Link>
        </div>
        {isMobileView ? (
          <div className={`${styles.navbarMenu}`} ref={menuRef}>
            <div className={`${styles.hamburgerMenu} ${isMenuActive ? 'active' : 'inactive'} `}>
              <button onClick={toggleMenu}>{isMenuActive ? <Close className={`${styles.iconMenu}`} /> : <Menu className={`${styles.iconMenu}`} />}</button>
              <AnimatePresence>
                {isMenuActive && (
                  <motion.div
                    className={`${styles.menuContainer} ${isMenuActive ? styles.active : ''} `}
                    initial={{ height: 0, width: 0 }}
                    animate={{ height: 'auto', width: 'auto' }}
                    exit={{ height: 0, width: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div className={`${styles.menuContainerTwo}`} initial={{ height: 0, width: 0 }} animate={{ height: 'auto', width: 'auto' }} exit={{ height: 0, width: 0, opacity: 0, transition: { duration: 0 } }}>
                      <Link
                        href="/"
                        className={`menu-item  ${
                          focusMenu === 'Blacklist'
                            ? 'bg-color-hover text-color-primary p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                            : 'hover:bg-color-hover text-color-hovertwo p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                        }`}
                        onClick={() => handleMenuClick('Blacklist')}
                      >
                        Blacklist
                      </Link>
                      <Link
                        href="/looking-glass"
                        className={`menu-item ${
                          focusMenu === 'LookingGlass'
                            ? 'bg-color-hover text-color-primary p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                            : 'hover:bg-color-hover text-color-hovertwo p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                        }`}
                        onClick={() => handleMenuClick('LookingGlass')}
                      >
                        Looking Glass
                      </Link>
                      <Link
                        href="/speedtest"
                        className={`menu-item ${
                          focusMenu === 'SpeedTest'
                            ? 'bg-color-hover text-color-primary p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                            : 'hover:bg-color-hover text-color-hovertwo p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                        }`}
                        onClick={() => handleMenuClick('SpeedTest')}
                      >
                        SpeedTest
                      </Link>
                      <Link
                        href="/products"
                        className={`menu-item ${
                          focusMenu === 'Products'
                            ? 'bg-color-hover text-color-primary p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                            : 'hover:bg-color-hover text-color-hovertwo p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                        }`}
                        onClick={() => handleMenuClick('Products')}
                      >
                        Products
                      </Link>
                      <Link
                        href="/support"
                        className={`menu-item ${
                          focusMenu === 'Support'
                            ? 'bg-color-hover text-color-primary p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                            : 'hover:bg-color-hover text-color-hovertwo p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                        }`}
                        onClick={() => handleMenuClick('Support')}
                      >
                        Support
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className={`${styles.navbarMenu} `} ref={menuRef}>
            <motion.div className={`${styles.menuContainer} `} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
              <Link
                href="/"
                className={`menu-item ${
                  focusMenu === 'Blacklist'
                    ? 'bg-color-hover text-color-primary p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                    : 'hover:bg-color-hover text-color-hovertwo p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                }`}
                onClick={() => handleMenuClick('Blacklist')}
              >
                Blacklist
              </Link>
              <Link
                href="/looking-glass"
                className={`menu-item ${
                  focusMenu === 'LookingGlass'
                    ? 'bg-color-hover text-color-primary p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                    : 'hover:bg-color-hover text-color-hovertwo p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                }`}
                onClick={() => handleMenuClick('LookingGlass')}
              >
                Looking Glass
              </Link>
              <Link
                href="/speedtest"
                className={`menu-item ${
                  focusMenu === 'SpeedTest'
                    ? 'bg-color-hover text-color-primary p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                    : 'hover:bg-color-hover text-color-hovertwo p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                }`}
                onClick={() => handleMenuClick('SpeedTest')}
              >
                SpeedTest
              </Link>
              <Link
                href="/products"
                className={`menu-item ${
                  focusMenu === 'Products'
                    ? 'bg-color-hover text-color-primary p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                    : 'hover:bg-color-hover text-color-hovertwo p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                }`}
                onClick={() => handleMenuClick('Products')}
              >
                Products
              </Link>
              <Link
                href="/support"
                className={`menu-item ${
                  focusMenu === 'Support'
                    ? 'bg-color-hover text-color-primary p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                    : 'hover:bg-color-hover text-color-hovertwo p-4 pt-1 pb-1 rounded-lg transition-all hover:text-color-primary'
                }`}
                onClick={() => handleMenuClick('Support')}
              >
                Support
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
