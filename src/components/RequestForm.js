import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link } from "gatsby";
import { mediaQueries } from "../styles/GlobalStyles";
import { SectionHeading } from "../styles/TextStyles";
import ColoredText from "./ColoredText";
import { Asterisk } from "./ListSection";
import { Box } from "./index";

const RequestForm = ({ pageData, grids, id, selectedTariff }) => {
  const { title, asterisk } = pageData;
  const boxes = pageData.boxes.map((box) => box);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTariffState, setSelectedTariffState] =
    useState(selectedTariff);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let name = watch("name");
  let email = watch("email");
  let telegram = watch("telegram");
  let stream = watch("stream");
  let tariff = watch("tariff");

  const onSubmit = () => {
    fetch("/.netlify/functions/sendToSheets", {
      method: "POST",
      body: JSON.stringify({
        Name: name,
        Email: email,
        Telegram: telegram,
        Date: Date(),
        Stream: stream,
        Tariff: tariff,
      }),
    });
    setIsSubmitted(true);
    // Убрал открытие витрины для выбора тарифа и оплаты
    // window.open('https://self.payanyway.ru/1693655679114', '_blank');
    //
    // tariff === "active"
    //   ? window.open(
    //       "https://konspekt.zenclass.ru/public/t/79b6d42c-18dd-46c5-b708-bb5cf68b8505",
    //       "_self",
    //     )
    //   : window.open(
    //       "https://konspekt.zenclass.ru/public/t/cdd3c94c-f791-4b5c-b5f0-b754e9d3d998",
    //       "_self",
    //     );
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
      >
        {title}
      </SectionHeading>

      <CTA onSubmit={handleSubmit(onSubmit)}>
        {/* {Boolean(isSubmitted) ? (
          <div>
            <Box height='50vh'>
              <ColoredText data={boxes[1]} />
            </Box>
          </div>
        ) : ( */}
        <FormWrapper>
          <BoxWrapper>
            <Box grid={grids[0]}>
              <ColoredText data={boxes[0]}></ColoredText>
            </Box>
            <Box fontSize="20px">
              <FlexVertical>
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
                <InputItem>
                  <Input
                    type="text"
                    placeholder="Telegram"
                    {...register("telegram", {
                      required: true,
                      maxLength: 20,
                      pattern: /^[a-zA-Z]+/g,
                    })}
                  />
                  {errors.telegram && <p>Введите ник в Telegram (без @)</p>}
                </InputItem>
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
                <InputItem>
                  <InputSelect
                    name="Тариф"
                    {...register("tariff", {
                      required: true,
                    })}
                  >
                    <option value="" disabled selected={selectedTariff !== 'passive' || tariff !== 'active'}>
                      Тариф
                    </option>
                    <option value="passive" selected={selectedTariff === 'passive' ? true : false}>«Курс» (уроки на платформе)</option>
                    <option value="active" selected={selectedTariff === 'active' ? true : false}>
                      «Лаборатория» (уроки + воркшопы)
                    </option>
                  </InputSelect>
                </InputItem>
                {selectedTariffState == "active" ||
                  (tariff == "active" && (
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
                        <option value="day">Дневной — 14:00-15:30 (МСК)</option>
                        <option value="evening">
                          Вечерний — 19:00-20:30 (МСК)
                        </option>
                      </InputSelect>
                    </InputItem>
                  ))}
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
              Отправить заявку
            </Button>
          </ButtonWrapper>
        </FormWrapper>
      </CTA>

      {Boolean(asterisk) && <Asterisk>{asterisk}</Asterisk>}
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
  width: var(--left-column-width);
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: ${mediaQueries.phone}) {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  width: var(--right-column-width);
  height: 100%;

  @media (max-width: ${mediaQueries.phone}) {
    width: auto;
  }
`;

const Button = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: var(--right-column-width);
  height: ${({ height }) => height || "115px"};
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

  @media (max-width: ${mediaQueries.phone}) {
    font-size: 40px;
    padding: 16px;
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
