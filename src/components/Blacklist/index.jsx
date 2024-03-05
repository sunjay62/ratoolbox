'use client';

import React, { useState, useEffect } from 'react';
import styles from './blacklist.module.scss';
import { Globe, CaretDown } from '@phosphor-icons/react';
import { BASE_URL } from '@/libs/api-libs';
import axios from 'axios';
import { Table } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dropdown = ({ isOpen, children }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className={`${styles.dropdown} overflow-hidden`}>
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const DropdownItem = ({ children }) => <motion.div className={`p-2 rounded-lg ${styles.dropdownItem}`}>{children}</motion.div>;

const Index = () => {
  const [ip, setIp] = useState('');
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState({});
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  const columns = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: '11%',
      filters: [
        {
          text: 'OK',
          value: '0',
        },
        {
          text: 'LISTED',
          value: '1',
        },
        {
          text: 'TIME OUT',
          value: '3',
        },
      ],
      onFilter: (value, record) => record.status.toString() === value,
      render: (text, record) => {
        let statusText = '';
        let statusClass = '';

        switch (record.status) {
          case 0:
            statusText = 'OK';
            statusClass = 'ok';
            break;
          case 3:
            statusText = 'TIME OUT';
            statusClass = 'timeout';
            break;
          case 1:
            statusText = 'LISTED';
            statusClass = 'listed';
            break;
          default:
            statusText = 'UNKNOWN';
            statusClass = 'unknown';
        }

        return <span className={styles[statusClass]}>{statusText}</span>;
      },
    },

    {
      title: 'Blacklist',
      dataIndex: 'blacklist',
      key: 'blacklist',
      width: '30%',
    },
    {
      title: 'Reason',
      dataIndex: 'provider',
      key: 'provider',
      width: '30%',
    },
    {
      title: 'Category',
      dataIndex: 'categories',
      key: 'categories',
    },
    {
      title: 'Response Time',
      dataIndex: 'responsetime',
      key: 'responsetime',
      sorter: (a, b) => a.responsetime - b.responsetime,
    },
  ];

  const fetchData = async () => {
    setIsLoading(true);
    Swal.showLoading();
    const formData = new FormData();
    formData.append('ip', ip);

    try {
      const response = await axios.post(`${BASE_URL}/rblcheck/check`, formData);
      const responseData = response.data;
      console.log(responseData);

      // Iterate over each result_detected array separately
      responseData.forEach((item, index) => {
        const statusCounts = {};
        item.result_detected.forEach((result) => {
          const status = result.status;
          statusCounts[status] = (statusCounts[status] || 0) + 1;
        });

        console.log(statusCounts);
      });

      setData(responseData);
      setIsLoading(false);
      Swal.close();
      Swal.fire({
        title: 'Success!',
        icon: 'success',
        text: 'Blacklist check completed successfully!',
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      Swal.close();
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        text: 'Failed to perform IP inspection, please enter a valid IP address or domain.',
      });
    }
  };

  const sortedData = [...data];

  sortedData.sort((a, b) => {
    return a.ip.localeCompare(b.ip);
  });

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const toggleDropdown = (index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className={`${styles.blacklist}`}>
      <div className={`${styles.top}`} data-aos="fade-up">
        <div className={styles.form}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Server IP or Domain"
              onChange={(e) => setIp(e.target.value)}
              value={ip}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className={`${styles.input} ${isInputFocused ? styles.inputFocused : ''}`}
            />
          </div>
          <button type="submit" onClick={fetchData} className={styles.button}>
            {isLoading ? 'Loading...' : 'Blacklist Check'} {/* Show loading text if isLoading is true */}
          </button>
        </div>
      </div>
      <div className={`${styles.bottom}`} data-aos="fade-up">
        {sortedData.map((item, index) => (
          <div data-aos="fade-up" className={`${styles.list} flex flex-col flex-1 gap-2 text-sm bg-color-greytwo mb-10 rounded-md `} key={index}>
            <div data-aos="fade-up" className={`flex flex-col text-base border-color-grey rounded-lg cursor-pointer transition-transform `}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className={`flex items-center gap-2 text-base p-3 rounded-md cursor-pointer transition-all`}
                onClick={() => toggleDropdown(index)}
              >
                <Globe className="text-color-secondary" size={24} />
                <p>
                  Checking <span className="text-color-hovertwo font-bold">{item.ip}</span> against <span className="text-color-success font-bold">{item.jml_providers}</span> known blacklists ... <br />
                  Listed <span className="text-color-danger font-bold">{item.jml_detected}</span> times
                </p>
                <motion.div animate={{ rotate: isOpen[index] ? 180 : 0 }} transition={{ duration: 0.3 }} className={`ml-auto`} style={{ originX: 0.5, originY: 0.5 }}>
                  <CaretDown size={18} className="transform transition-all" />
                </motion.div>
              </motion.div>
              <Dropdown isOpen={isOpen[index]}>
                <DropdownItem key={item.ip}>
                  <div className={styles.tableWrapper}>
                    <Table className={`${styles.tableBlacklist}`} key={item.ip} columns={columns} dataSource={item.result_detected} rowClassName={() => styles.backgroundTable} />
                  </div>
                </DropdownItem>
              </Dropdown>
            </div>
          </div>
        ))}
        <div>
          <h2 className="font-bold text-3xl text-color-grey mb-3 mt-5">ABOUT BLACKLIST CHECK</h2>
          <hr className="text-color-grey " />
          <p className="font-bold  text-color-grey mt-3 mb-5">
            The blacklist check will test a mail server IP address against over 100 DNS based email blacklists. (Commonly called Realtime blacklist, DNSBL or RBL). If your mail server has been blacklisted, some email you send may not be
            delivered. Email blacklists are a common way of reducing spam. If you don't know your mail server's address, start with a RA Lookup. Or, just send an email to noc@tachyon.net.id
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
