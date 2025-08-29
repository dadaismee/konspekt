import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const Bar = styled(motion.div)`
    background-color: var(--podlozhka); 
    font-family: 'Coolvetica Lite';
    color: var(--asterisk); 
    padding: 10px;
    text-align: center;
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
    z-index: 1000; 
`;

const AnnouncementBar = () => {
  return (
    <Bar to='#form'
      initial={{
        opacity: 0,
        y: 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 0,
      }}
      transition={{
        ease: [0.165, 0.84, 0.44, 1],
        duration: 2,
        delay: 0.1,
      }}
      viewport={{ once: true }}>
      <Link style={{fontSize: '20px'}} to='https://konspekt.zenclass.ru/public/product/decd2b90-7e7c-4a65-8a4a-15fa0bb53573/tariffs'>
       Новый 4-дневный интенсив «Система письма» — 15-18 сентября
      </Link>
    </Bar>
    );
};

export default AnnouncementBar;
