import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { SectionHeading } from '../styles/TextStyles';
import { Button, FlexContainer } from './Hero';
import { mail } from './mail';

const Contact = ({ pageData, id, type }) => {
  const { title, buttonText } = pageData;

  return (
    <Wrapper id={id}>
      <SectionHeading
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 20,
        }}
        transition={{
          ease: [0.165, 0.84, 0.44, 1],
          duration: 1,
          delay: 0.25,
        }}
        viewport={{ once: true }}>
        {title}
      </SectionHeading>

      <FlexContainer>
        <ButtonWrapper
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 20,
          }}
          transition={{
            ease: [0.165, 0.84, 0.44, 1],
            duration: 1,
            delay: 0.3,
          }}
          viewport={{ once: true }}>
          <a
            // href='https://t.me/konspekt_support'
            href={Boolean(type === 'b2b') ? mail : 'mailto:valerii.s.shevchenko@gmail.com?subject=Вопрос по «Системе письма»'}
            target='_blank'>
            <Button>{buttonText}</Button>
          </a>
      </ButtonWrapper>
      <ButtonWrapper
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 20,
        }}
        transition={{
          ease: [0.165, 0.84, 0.44, 1],
          duration: 1,
          delay: 0.3,
        }}
        viewport={{ once: true }}>
        <a
          href='https://t.me/konspekt_support'
          target='_blank'>
			<Button>Написать в Telegram</Button>
        </a>
      </ButtonWrapper>

      </FlexContainer>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  padding: 0px 60px;
`;

const ButtonWrapper = styled(motion.div)`
  width: 100%;
`;
