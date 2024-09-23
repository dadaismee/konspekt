import { navigate } from 'gatsby';
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { mediaQueries } from "../styles/GlobalStyles";
import { MenuAndFootnote, SectionHeading, SmallerText } from "../styles/TextStyles";
import ColoredText from "./ColoredText";
import { Asterisk } from "./ListSection";
import { Box, Loader } from "./index";

const RequestForm = ({ pageData, grids, id, selectedTariff, type, userType, margin }) => {
  const { title, asterisk, buttonText } = pageData;
  const boxes = pageData.boxes.map((box) => box);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let name = watch("name");
  let email = watch("email");
  let telegram = watch("telegram") || "—";
  // let tariff = watch("tariff") || selectedTariff;
  // let stream = watch("stream");


  const onSubmit = async () => {
    setIsLoading(true);

    try {
      // Send data to Google Sheets API
      await fetch('/.netlify/functions/sendToSheets', {
        method: 'POST',
        body: JSON.stringify({
          Name: name,
          Email: email,
          Telegram: telegram || '—',
          Date: Date(),
          Tariff: selectedTariff,
        }),
      });

      // Send data to UniSender
      const UNISENDER_KEY = '6ij7fqkbfr5y7uk6tpyouztzztr3ggzejstss1eo';
      const uniSenderResponse = await fetch('https://api.unisender.com/ru/api/subscribe?format=json&api_key=' + encodeURIComponent(UNISENDER_KEY) + '&list_ids=1&fields[email]=' + encodeURIComponent(email) + '&fields[Name]=' + encodeURIComponent(name) + '&fields[Type]=' + encodeURIComponent(selectedTariff) + '&fields[telegram]=' + encodeURIComponent(telegram) + '&double_optin=3&overwrite=1', {
        method: 'POST',
      });
      // const uniSenderResponse = await fetch('https://api.unisender.com/ru/api/subscribe', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     format: 'json',
      //     api_key: '6ij7fqkbfr5y7uk6tpyouztzztr3ggzejstss1eo',
      //     list_ids: '1',
      //     fields: {
      //       email: email,
      //       Name: name,
      //       type: selectedTariff
      //     },
      //     double_optin: 0,
      //   }),
      // });

      const uniSenderData = await uniSenderResponse.json();
      if (uniSenderData.error) {
        console.error('Error sending data to UniSender:', uniSenderData.error);
      } else {
        console.log('Data sent successfully to UniSender!');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    } finally {
      setIsLoading(false);
    }
    // const onSubmit = async () => {
    //   setIsLoading(true);
    //   await fetch("/.netlify/functions/sendToSheets", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       Name: name,
    //       Email: email,
    //       Telegram: telegram || '—',
    //       Date: Date(),
    //       Tariff: selectedTariff,
    //       // Tariff: type === 'free' ? 'lead' : 'buyer',
    // Stream: stream,
    //   }),
    // });
    //
    // window.open('https://self.payanyway.ru/1693655679114', '_blank');

    // Logic for 2 active and passive tariffs

    // Boolean(selectedTariff === 'active' || tariff === 'active') && window.open(
    //     "https://konspekt.zenclass.ru/public/t/79b6d42c-18dd-46c5-b708-bb5cf68b8505",
    //     "_self",
    // Boolean(selectedTariff === 'passive' || tariff === 'passive') && window.open(
    //   "https://konspekt.zenclass.ru/public/t/baac62a5-135b-4017-8043-c53e9ab611eb",
    //   "_self",
    // );

    {
      Boolean(selectedTariff === 'buyer') && window.open(
        "https://konspekt.zenclass.ru/public/product/731e4edc-9279-40a8-ad40-668820810803/tariffs",
        // "https://konspekt.zenclass.ru/public/t/baac62a5-135b-4017-8043-c53e9ab611eb",
        "_self",
      )
    }
    setIsSubmitted(true);
  };

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
          delay: 0.1,
        }}
        viewport={{ once: true }}
        margin={margin}
      >
        {title}
      </SectionHeading>

      <CTA onSubmit={handleSubmit(onSubmit)}>
        {Boolean(selectedTariff !== 'buyer' && isSubmitted) ? (
          <div>
            <Box height='auto'>
              <ColoredText data={boxes[1]} />
            </Box>
          </div>
        ) : (
          <FormWrapper>
            <BoxWrapper>
              {Boolean(type !== 'register' || selectedTariff) && <Box fontSize="40px" grid={grids[0]}>
                {/* Boolean(selectedTariff) ? <ColoredText data={selectedTariff === 'passive' ? boxes[0] : boxes[2]}></ColoredText> : <ColoredText data
             ={boxes[0]}></ColoredText>*/}
                <ColoredText component={SmallerText} data={boxes[0]} />
              </Box>}
              <Box fontSize="20px">
                <FlexVertical>
                  {Boolean(type !== 'register') && (
                    <InputItem>
                      <Input
                        type="text"
                        placeholder="Имя"
                        {...register("name", {
                          required: true,
                          maxLength: 20,
                          pattern: /^[а-яА-ЯЁё]+/g,
                        })}
                      />
                      {errors.name && <p>Введите имя кириллицей</p>}
                    </InputItem>
                  )}
                  {Boolean(selectedTariff === 'buyer') && <InputItem>
                    <Input
                      type="text"
                      placeholder="Telegram"
                      {...register("telegram", {
                        required: true,
                        maxLength: 20,
                        pattern: /^@[ea-zA-Z]+/g,
                      })}
                    />
                    {errors.telegram && <p>Введите ник в Telegram c @ в начале)</p>}
                  </InputItem>}
                  <InputItem>
                    <Input
                      type="email"
                      placeholder="Почта"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    {errors.email && <p>Введите адрес почты</p>}
                  </InputItem>
                  {/* {Boolean(selectedTariff) && <InputItem>
                  <InputSelect
                    name="Тариф"
                    {...register("tariff", {
                      required: true,
                    })}
                  >
                    <option value="" disabled selected={selectedTariff !== 'passive' || tariff !== 'active'}>
                      Тариф
                    </option>
                    <option value="passive" selected={selectedTariff === 'passive' ? true : false}>«Курс» — самостоятельный тариф</option>
                    <option value="active" selected={selectedTariff === 'active' ? true : false}>
                      «Спринт» — тариф с преподавателем
                    </option>
                  </InputSelect>
                </InputItem>} */}
                  {/* {(Boolean(selectedTariff === "active") || Boolean(tariff === "active")) && (
                  <InputItem>
                    <InputSelect
                      name="Поток"
                      {...register("stream", {
                        required: true,
                      })}
                    >
                      <option value="" disabled selected>
                        Поток
                      </option>
                      <option value="day">Дневной — 15:00-16:30 (МСК)</option>
                      <option value="evening">
                        Вечерний — 19:30-21:00 (МСК)
                      </option>
                    </InputSelect>
                  </InputItem>
                )} */}
                  <InputItem>
                    <FlexContainer>
                      <Checkbox
                        type="checkbox"
                        {...register("policy", {
                          required: true,
                        })}
                      />
                      <StyledLink
                        href="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ColoredText
                          component={MenuAndFootnote}
                          data={{
                            mainText: "Принимаю политику конфиденциальности",
                            spanText: ["политику конфиденциальности"],
                          }}
                        />
                      </StyledLink>
                    </FlexContainer>
                    {errors.policy && (
                      <p>
                        <strong>↑</strong> Поставьте галочку (лучше предварительно
                        прочитав)
                      </p>
                    )}
                  </InputItem>
                </FlexVertical>
              </Box>
            </BoxWrapper>
            <ButtonWrapper>
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
                viewport={{ once: true }}
                type="submit"
                height="100%"
              >
                {Boolean(isLoading) ? <Loader /> : buttonText}
              </Button>
            </ButtonWrapper>
          </FormWrapper>)}
      </CTA>
          {Boolean(asterisk) && <Asterisk
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
      delay: 0.4,
    }}
    viewport={{ once: true }}
  >{asterisk}</Asterisk>}
    </Wrapper>
  );
};

export default RequestForm;

const Wrapper = styled.section``;

const Input = styled.input`
padding: 15px;
border-radius: 15px;
border: none;
/* width: 100%; */
font-size: 24px;
font-family: Coolvetica;

@media (max-width: ${mediaQueries.phone}) {
  font-size: 20px;
}
`;

const InputSelect = styled.select`
padding: 15px;
border-radius: 15px;
border: none;
/* width: 100%; */
font-size: 24px;
font-family: Coolvetica;

&:first-child {
  color: grey;
}

@media (max-width: ${mediaQueries.phone}) {
  font-size: 20px;
}
`;

const CTA = styled.form`
display: flex;
gap: 20px;
`;

const FlexVertical = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 100%;
`;

const BoxWrapper = styled.div`
width: 100%;
max-width: 35.8vw; 
display: flex;
flex-direction: column;
gap: 10px;

@media (max-width: ${mediaQueries.phone}) {
  width: 100%;
  max-width: 100%; 
}
`;

const ButtonWrapper = styled.div`
width: 100%;
height: 100%;

@media (max-width: ${mediaQueries.phone}) {
  width: auto;
}
`;

export const Button = styled(motion.button)`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
/* max-width: var(--right-column-width); */
height: ${({ height }) => height || "80px"};
font-size: 48px;
font-family: Coolvetica;
color: var(--text) !important;
background-color: var(--accent);
border-radius: 15px;
border: 3px solid var(--accent);
transition: var(--transition);

&:hover {
  background-color: var(--accent);
  color: var(--text) !important;
  box-shadow: 0px 0px 40px rgba(235, 235, 235, 0.5);
  cursor: pointer;
}

@media (max-width: ${mediaQueries.phone}) {
  font-size: 32px;
  padding: 16px;
  color: var(--text);
}
`;

const FormWrapper = styled.div`
gap: 20px;
width: 100%;
display: flex;

@media (max-width: ${mediaQueries.phone}) and (max-height: 1600px) {
  flex-direction: column;
}
`;

const Checkbox = styled.input`
height: 32px;
width: 32px;
border: 3px solid var(--text);

@media (max-width: ${mediaQueries.phone}) {
  width: 48px;
  height: 48px;
}
`;

export const StyledLink = styled.a`
display: flex;
align-self: center;
color: var(--accent);
`;

const InputItem = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

export const FlexContainer = styled.div`
display: flex;
gap: 20px;
`;
