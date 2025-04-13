import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { mediaQueries, Flex } from "../styles/GlobalStyles";
import { MainText, MenuAndFootnote, SectionHeading, SmallerText } from "../styles/TextStyles";
import ColoredText from "./ColoredText";
import { Asterisk } from "./ListSection";
import { Box, Loader } from "./index";
import { pricing } from "../pageData/writing-pro";

const RequestForm = ({ pageData, grids, id, handleClick, selectedTariff, toggleGift, isGift, type, userType, margin }) => {
  const { title, asterisk } = pageData;
  const boxes = pageData.boxes.map((box) => box);
  const tariffs = pricing.tariffs.map(tariff => tariff);
  const getTariffPrice = (tariffName) => {
      const tariff = tariffs.find(t => t.name === tariffName);
      return tariff ? tariff.price : null; 
  };
  const price = getTariffPrice(selectedTariff);

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
          Gift: gift, 
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

    // active tariff
    //Boolean(selectedTariff === "practice" && !isGift && window.open(
    //    "https://konspekt.zenclass.ru/public/product/731e4edc-9279-40a8-ad40-668820810803/tariffs",
    //    "_self"),

    // gift active tariff
    Boolean(selectedTariff === "active" && isGift && window.open(
        "https://konspekt.zenclass.ru/public/t/35cc2d86-2c6f-46f3-8353-f9097f3ef12e",
        "_self"),

    // self-paced
    Boolean(selectedTariff === 'self-paced' && !isGift) && window.open(
       "https://konspekt.zenclass.ru/public/course/b8ad2556-efe5-482b-ad29-ef0fa39292d8",
       "_self"),

    // self-paced gift
    Boolean(selectedTariff === 'self-paced' && isGift) && window.open(
       "https://konspekt.zenclass.ru/public/t/c0dfffb1-cabe-4bbe-a467-6c8f543dac18",
       "_self"),

    Boolean(selectedTariff === 'free-course') && window.open(
      "https://konspekt.zenclass.ru/public/course/b8ad2556-efe5-482b-ad29-ef0fa39292d8"),
      //"https://konspekt.zenclass.ru/public/product/832e13c7-8b0d-4e5f-8220-81d2f0094d95/tariffs"),

      console.log("tariff", selectedTariff, isGift),
    setIsSubmitted(true));
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
                <ColoredText component={SmallerText} data={isSubmitted ? boxes[2] : boxes[0]} />
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

                  {/*{Boolean(type !== 'free') &&
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
                    <option value="self-paced" selected={selectedTariff === 'self-paced' ? true : false}>«Сам(а)»</option>
                    <option value="active" selected={selectedTariff === 'active' ? true : false}>
                      «С группой»
                    </option>
                  </InputSelect>}
                </Flex>
                */}

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
                {Boolean(isLoading) ? <Loader /> : price }
              </Button>
            </ButtonWrapper>
          </FormWrapper>)}
      </CTA>
          {Boolean(selectedTariff === 'active') && <Asterisk
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
border: none;
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
gap: 10px;
`;

export const FlexContainer = styled.div`
display: flex;
gap: 20px;
`;
