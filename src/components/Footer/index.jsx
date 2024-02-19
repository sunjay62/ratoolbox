'use client';

import React from 'react';
import styles from './footer.module.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';

const index = () => {
  return (
    <>
      <div className={`${styles.mainFooter} ${styles.stickyFooter}`}>
        <div className={`${styles.footerTop} `}>
          <div className={`${styles.footerLeft} `}>
            <div className={`${styles.firstLeft} `}>
              <Image src="/assets/logoremala.png" alt="Remala" width={75} height={100} />
            </div>
            <div className={`${styles.twoLeft} `}>
              <h6>
                <strong>PT. Remala Abadi</strong>
              </h6>
              <p>Graha Mustika Ratu</p>
              <p>
                Jl. Gatot Subroto No 74-75, RT 02/ RW 01. <br />
                Menteng Dalam, Kec. Tebet, Kota Jakarta Selatan, <br />
                Daerah Khusus Ibukota Jakarta 12870
              </p>
              <br />
              <p>Phone : (021) 83708889</p>
              <p>Email : corporatesecretary@remala.id</p>
              {/* <p>
                <h5>Visit Our Office :</h5>
              </p>
              <p>Monday – Saturday</p>
              <p>09 AM – 05 PM</p> */}
            </div>
          </div>
          <span className={`${styles.borderLine} `}></span>
          <div className={`${styles.footerMidle} `}>
            <div className={`${styles.tautan} `}>
              <h6>Important Links</h6>
              <a href="#">About Us</a>
              <a href="#">Investor Relations</a>
              <a href="#">Management</a>
            </div>
            <div className={`${styles.pengumuman} `}>
              <h6>Announcements</h6>
              <a href="#">RUPS Announcements</a>
              <a href="#">Public Disclosure Announcements</a>
              <a href="#">Issuer Announcements</a>
            </div>
            <div className={`${styles.laporan} `}>
              <h6>Reports</h6>
              <a href="#">Financial Reports</a>
              <a href="#">Sustainability Reports</a>
              <a href="#">Annual Reports</a>
            </div>
          </div>

          <div className={`${styles.footerRight} `}>
            <div className={`${styles.rightTop} `}>
              <h3>FOLLOW US</h3>
            </div>
            <div className={`${styles.rightBottom} `}>
              <a href="https://www.instagram.com/tachyon.net.id_/?hl=id" target="_blank">
                <InstagramIcon className="icon" />
              </a>
              <a href="https://www.facebook.com/tachyon.net.id/?locale=id_ID" target="_blank">
                <FacebookOutlinedIcon className="icon" />
              </a>
              <a href="https://twitter.com/tachyonnetwork" target="_blank">
                <YouTubeIcon className="icon" />
              </a>
              <a href="https://www.linkedin.com/company/pt-remala-abadi/mycompany/" target="_blank">
                <LinkedInIcon className="icon" />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className={`${styles.footerBottom} `}>
          <p>Copyright&copy; Remala Group 2024 All Right Reserved</p>
        </div>
      </div>
    </>
  );
};

export default index;
