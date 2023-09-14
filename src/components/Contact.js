import React from 'react';
import styled from 'styled-components';
import { SectionHeading } from '../styles/TextStyles';
import { Button } from './Hero';

const Contact = ({ pageData, id }) => {
  const { title } = pageData;

  return (
    <Wrapper id={id}>
      <SectionHeading>{title}</SectionHeading>

      <div style={{ width: 'var(--left-column-width)' }}>
        <a
          href='mailto:valerii.s.shevchenko@gmail.com?subject=Конспект&body=Добрый день! %0D%0A %0D%0A У меня есть вопрос про курс «Академическое письмо будущего»: …'
          target='_blank'>
          <Button>Написать письмо</Button>
        </a>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section``;
