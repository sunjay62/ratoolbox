'use client';

import React, { useEffect } from 'react';
import styles from './hyperglass.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <div className={styles.hyperglass} data-aos="fade-up">
      <iframe className={styles.iframe} src="http://172.16.36.218:8001/" frameborder="0"></iframe>
    </div>
  );
};

export default Index;
