import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { SectionHeading } from '../styles/TextStyles';
import ColoredText from './ColoredText';
import { Asterisk } from './ListSection';
import { Box } from './index';

const RequestForm = ({ pageData, grids, id }) => {
  const { title, asterisk } = pageData;
  const boxes = pageData.boxes.map((box) => box);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let name = watch('name');
  let email = watch('email');
  let telegram = watch('telegram');

  const onSubmit = () => {
    fetch('/.netlify/functions/sendToSheets', {
      method: 'POST',
      body: JSON.stringify({
        Name: name,
        Email: email,
        Telegram: telegram,
        Date: Date(),
      }),
    });
    setIsSubmitted(true);
  };

  return (
    <Wrapper id={id}>
      <SectionHeading>{title}</SectionHeading>

      <CTA onSubmit={handleSubmit(onSubmit)}>
        {Boolean(isSubmitted) ? (
          <div style={{ height: '100%' }}>
            <Box>
              <ColoredText data={boxes[1]} />
            </Box>
          </div>
        ) : (
          <>
            <div
              style={{
                width: 'var(--left-column-width)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}>
              <Box grid={grids[0]}>
                <ColoredText data={boxes[0]}></ColoredText>
              </Box>
              <Box>
                <FlexVertical>
                  <Input
                    type='text'
                    placeholder='Имя'
                    {...register('name', {
                      required: true,
                      maxLength: 20,
                      pattern: /^[a-zA-Z]+/g,
                    })}
                  />
                  {errors.name && <p>Введите имя</p>}
                  <Input
                    type='text'
                    placeholder='Telegram'
                    {...register('telegram', {
                      required: true,
                      maxLength: 20,
                      pattern: /^[a-zA-Z]+/g,
                    })}
                  />
                  {errors.telegram && <p>Введите ник в Telegram (без @)</p>}
                  <Input
                    type='email'
                    placeholder='Почта'
                    {...register('email', {
                      required: true,
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                  {errors.email && <p>Введите адрес почты</p>}
                </FlexVertical>
              </Box>
            </div>
            <div style={{ width: 'var(--right-column-width' }}>
              <Button type='submit' height='100%'>
                Отправить заявку и оплатить
              </Button>
            </div>
          </>
        )}
      </CTA>

      {Boolean(asterisk) && <Asterisk>{asterisk}</Asterisk>}
    </Wrapper>
  );
};

export default RequestForm;

const Wrapper = styled.section``;

const Input = styled.input`
  padding: 20px;
  border-radius: 15px;
  border: none;
  /* width: 100%; */
  font-size: 24px;
  font-family: Coolvetica;
`;

const CTA = styled.form`
  display: flex;
  gap: 20px;
`;

const FlexVertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: var(--right-column-width);
  height: ${({ height }) => height || '115px'};
  font-size: 48px;
  font-family: Coolvetica;
  color: var(--accent);
  background-color: transparent;
  border-radius: 15px;
  border: 3px solid var(--accent);
  transition: var(--transition);

  &:hover {
    background-color: var(--accent);
    color: var(--text);
    box-shadow: 0px 0px 40px rgba(235, 235, 235, 0.5);
    cursor: pointer;
  }
`;
