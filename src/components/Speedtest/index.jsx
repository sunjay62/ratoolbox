'use client';

import React, { useEffect } from 'react';
import styles from './speedtest.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <div className={styles.speedtest} data-aos="fade-up">
      <iframe className={styles.iframe} src="https://sini.tachyon.net.id/" frameborder="0"></iframe>
    </div>
  );
};

export default index;
