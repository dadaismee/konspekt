import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const Bar = styled(motion.div)`
    background-color: var(--accent); 
    background-color: rgb(255, 255, 255, 0.50); 
    color: var(--text); 
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
      <Link style={{fontSize: '20px'}} to='#form'>
        Скидка 15% на январский поток до 15 декабря
      </Link>
    </Bar>
    );
};

export default AnnouncementBar;
