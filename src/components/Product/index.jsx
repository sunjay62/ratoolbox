'use client';

import React, { useEffect } from 'react';
import styles from './product.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h1 data-aos="fade-up">Discover Connectivity for Your Needs</h1>
      <p data-aos="fade-up">Providing Digital Solutions for Your Needs</p>
      <div className={styles.cardContainer}>
        <div className={styles.cardTachyon} data-aos="fade-right">
          <div className={styles.containerImage}>
            <Image src="/assets/logotachyon.png" alt="Logo" width={75} height={100} className={styles.tachyonImage} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Tachyon Network Indonesia</h3>
            <p className={styles.cardDescription}>Kembangkan bisnismu bersama Tachyon Network Indonesia, Kami siap membantu bisnis Anda.</p>
            <Link href="https://tachyon.net.id/" className={styles.viewDetailButton} target="_blank" rel="noopener noreferrer">
              View Detail
            </Link>
          </div>
        </div>
        <div className={styles.cardNethome} data-aos="fade-left">
          <div className={styles.containerImage}>
            <Image src="/assets/logonethomee.png" alt="Logo" width={75} height={100} className={styles.nethomeImage} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Nethome Indonesia</h3>
            <p className={styles.cardDescription}>Kapanpun Dimanapun Bersama Nethome.</p>
            <Link href="https://nethome.id/" className={styles.viewDetailButton} target="_blank" rel="noopener noreferrer">
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
