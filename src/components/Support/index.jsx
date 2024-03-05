'use client';

import React, { useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './support.module.scss';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return (
    <>
      <div className={styles.containerContact} data-aos="fade-up">
        <div className={styles.location}>
          <LocationOnIcon className={styles.icon} />
          <p>Location</p>
        </div>
        <div className={styles.phone}>
          <PhoneInTalkIcon className={styles.icon} />
          <p>Phone</p>
        </div>
        <div className={styles.email}>
          <AttachEmailIcon className={styles.icon} />
          <p>E-mail</p>
        </div>
      </div>
    </>
  );
};

export default Index;
