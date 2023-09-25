import React from 'react';
import styled from 'styled-components';
import { SectionHeading } from '../styles/TextStyles';
import { Button } from './Hero';

const Contact = ({ pageData, id }) => {
  const { title } = pageData;

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

      <div style={{ width: 'var(--left-column-width)' }}>
        <a
          href='mailto:valerii.s.shevchenko@gmail.com?subject=Конспект&body=Добрый день! %0D%0A %0D%0A У меня есть вопрос про курс «Академическое письмо будущего»: …'
          target='_blank'>
          <Button
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
            Написать письмо
          </Button>
        </a>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section``;
