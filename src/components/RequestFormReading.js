import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { mediaQueries, Flex } from "../styles/GlobalStyles";
import { MainText, MenuAndFootnote, SectionHeading, SmallerText } from "../styles/TextStyles";
import ColoredText from "./ColoredText";
import { Asterisk } from "./ListSection";
import { Box, Loader } from "./index";
import { pricing } from "../pageData/data.reading.js";

const RequestFormReading = ({ pageData, grids, id, handleClick, selectedTariff, toggleGift, isGift, type, userType, margin }) => {
  const { title, asterisk } = pageData;
  const boxes = pageData.boxes.map((box) => box);
  const rightTariff = pricing.tariffs.find(t => t.name === selectedTariff);
  const price = rightTariff.price;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let userName = watch("name");
  let email = watch("email");
  let telegram = watch("telegram") || "—";
  let tariff = watch("tariff") || selectedTariff;
  let gift = isGift;

  // Extract hash and update state
  const onSubmit = async () => {
    setIsLoading(true);

    try {
      // Send data to Google Sheets API
      await fetch('/.netlify/functions/sendToSheets', {
        method: 'POST',
        body: JSON.stringify({
          Name: userName,
          Email: email,
          Telegram: telegram || '—',
          Date: Date(),
          Tariff: selectedTariff,
          Gift: '—',
          License: false, 
        }),
      });
      // Send data to UniSender
      const UNISENDER_KEY = '6ij7fqkbfr5y7uk6tpyouztzztr3ggzejstss1eo';
      const uniSenderResponse = await fetch('https://api.unisender.com/ru/api/subscribe?format=json&api_key=' + encodeURIComponent(UNISENDER_KEY) + '&list_ids=1&fields[email]=' + encodeURIComponent(email) + '&fields[Name]=' + encodeURIComponent(userName) + '&fields[Type]=' + encodeURIComponent(selectedTariff) + '&fields[isGift]=' + encodeURIComponent(gift) + '&fields[telegram]=' + encodeURIComponent(telegram) + '&double_optin=3&overwrite=1', {
        method: 'POST',
      });

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

    // practice tariff
    Boolean(selectedTariff === "reading-practice") && window.open(
        "https://konspekt.zenclass.ru/public/t/61cb3c16-b3e3-416c-8614-fca725c07353",
        "_self");

    // expert tariff
    Boolean(selectedTariff === "reading-personal") && window.open(
        "https://konspekt.zenclass.ru/public/t/a1c3e0c6-2115-4c18-b818-9bcd618a2a55",
        "_self");

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
        {Boolean(type === 'free' && isSubmitted) ? (
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
                <ColoredText component={SmallerText} data={isSubmitted ? boxes[1] : boxes[0]} />
              </Box>}
              <Box fontSize="20px">
                <FlexVertical>
                  {/* <Flex>
                  {Boolean(type !== 'free') && <InputSelect
                    name="Подарок"
                    {...register("gift", {
                      required: true,
                    })}
                    onChange={(e) => toggleGift(e.target.value)}
                  >
                    <option value="—" selected={!isGift ? true : false}>Себе</option>
                    <option value="gift" selected={isGift? true : false}>
                      В подарок
                    </option>
                  </InputSelect>}*/}

                  {Boolean(type !== 'free') &&
                  <InputSelect
                    name="Тариф"
                    {...register("tariff", {
                      required: true,
                    })}
                    onChange={(e) => handleClick(e.target.value)}
                  >
                    <option value="" disabled>
                      Тариф
                    </option>
                    {/* <option value="self-paced" selected={selectedTariff === 'self-paced' ? true : false}>Сам(а)</option> */}
                    <option value="reading-practice" selected={selectedTariff === 'reading-practice' ? true : false}>
                      Основной
                    </option>
                    <option value="reading-personal" selected={selectedTariff === 'reading-personal' ? true : false}>
                      Индивидуальный
                    </option>
                  </InputSelect>}

                  {Boolean(type !== 'register') && (
                    <InputItem>
                      <Input
                        type="text"req
                        placeholder={isGift ? "Ваше имя" : "Имя" }
                        {...register("name", {
                          required: true,
                          maxLength: 20,
                          pattern: /^[а-яА-ЯЁё]+/g,
                        })}
                      />
                      {errors.name&& <p>Введите имя кириллицей</p>}
                    </InputItem>
                  )}
                  {Boolean(type !== 'free' && !isGift) && <InputItem> 
                    <Input
                      type="text"
                      placeholder="Telegram — @ник"
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
                      placeholder={isGift ? "Ваша почта" : "Почта"}
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    {errors.email && <p>Введите адрес почты</p>}
                  </InputItem>


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
                  <InputItem style={{ border: "none"}}>
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
                {Boolean(isLoading) ? <Loader /> :  `Оплатить ${price}`}
              </Button>
            </ButtonWrapper>
          </FormWrapper>)}
      </CTA>
          {Boolean(selectedTariff === 'practice' || selectedTariff === 'personal') && <Asterisk
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

export default RequestFormReading;

const Wrapper = styled.section``;

const Input = styled.input`
padding: 12.5px;
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
padding: 12.5px;
border-radius: 15px;
border: 1px solid var(--text);
width: 100%;
font-size: 24px;
font-family: Coolvetica;
color: grey;

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
border: 1px solid var(--text);
border-radius: 15px;
// background-color: var(--main);
gap: 10px;
`;

export const FlexContainer = styled.div`
display: flex;
gap: 20px;
`;
