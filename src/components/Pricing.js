import React, { useState } from "react";
import styled from "styled-components";
import { Box } from "../components/index";
import {
  Flex,
  mediaQueries,
  FlexContainer,
  VertFlex,
} from "../styles/GlobalStyles";
import {
  MainFeature,
  MainText,
  MenuAndFootnote,
  SectionHeading,
} from "../styles/TextStyles";
import { Button, ButtonWrapper } from "./Hero";
import { Asterisk } from "./ListSection";
import { motion, AnimatePresence } from "framer-motion";

const Pricing = ({ pageData, id, handleClick, selectedTariff }) => {
  const { title, asterisk } = pageData;
  let tariffs = pageData.tariffs || [];

  // State to track which tariff's features are expanded on mobile
  const [expandedTariff, setExpandedTariff] = useState(null);

  // Toggle function for expanding/collapsing features
  const toggleFeatures = (tariffName) => {
    if (expandedTariff === tariffName) {
      setExpandedTariff(null);
    } else {
      setExpandedTariff(tariffName);
    }
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

      <TariffsContainer>
        {tariffs.map((tariff, index) => (
          <TariffCard
            key={tariff.name}
            isActive={selectedTariff === tariff.name}
            isAlternate={index % 2 === 1}
          >
            <TariffHeader>
              <VertFlex style={{ gap: "0px"}}>
                <TariffTitle>{tariff.title}</TariffTitle>
                <TariffMeta>
                    <p>{tariff.capacity || "МНОГО МЕСТ"}</p>
                  <PriceContainer>
                    <OldPrice>{tariff.oldPrice || "39 990 ₽"}</OldPrice>
                    <CurrentPrice>{tariff.price || "27 993 ₽"}</CurrentPrice>
                  </PriceContainer>
                </TariffMeta>
              </VertFlex>
              <TariffDescription>
                {tariff.description ||
                  "Для тех, кто хочет освоить систему работы с текстами в комфортном темпе"}
              </TariffDescription>
            </TariffHeader>

            <BuyButton color={tariff.buyButtonColor} onClick={() => handleClick(tariff.name)} to="#form">
              {tariff.buyButtonText}
            </BuyButton>

            {/* Mobile toggle button */}
            <ToggleButton
              onClick={() => toggleFeatures(tariff.name)}
              isExpanded={expandedTariff === tariff.name}
            >
              {expandedTariff === tariff.name
                ? "Скрыть особенности"
                : "Показать особенности"}
              <ToggleIcon isExpanded={expandedTariff === tariff.name}>
                {expandedTariff === tariff.name ? "↑" : "↓"}
              </ToggleIcon>
            </ToggleButton>

            {/* Features list with animation for mobile */}
            <AnimatePresence>
              <FeaturesList
                initial={{ height: "auto" }}
                animate={{
                  height:
                    expandedTariff === tariff.name || window.innerWidth > 768
                      ? "auto"
                      : 0,
                  opacity:
                    expandedTariff === tariff.name || window.innerWidth > 768
                      ? 1
                      : 0,
                }}
                transition={{ duration: 0.3 }}
                isMobileHidden={expandedTariff !== tariff.name}
              >
                {tariff.features &&
                  tariff.features.map((feature, idx) => (
                    <FeatureItem key={idx}>
                      <FeatureArrow>→</FeatureArrow>
                      <FeatureText>
                        {feature.mainText}{" "}
                        <FeatureSubtext>{feature.spanText}</FeatureSubtext>
                      </FeatureText>
                    </FeatureItem>
                  ))}
              </FeaturesList>
            </AnimatePresence>
          </TariffCard>
        ))}
      </TariffsContainer>

      <Button fontSize='32px'>Полное сравнение тарифов</Button>

      {Boolean(asterisk) && (
        <Asterisk
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
        >
          {asterisk}
        </Asterisk>
      )}
    </Wrapper>
  );
};

export default Pricing;

const Wrapper = styled.section`

  @media (max-width: 991px) {
    max-width: 991px;
  }

  @media (max-width: 640px) {
    max-width: 640px;
    padding: 10px;
  }
`;

const TariffsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const TariffCard = styled.div`
  flex: 1;
  border: 1px solid #000;
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: ${(props) =>
    props.isAlternate ? "var(--accent)" : "var(--podlozhka)"};

  @media (max-width: 991px) {
    width: 100%;
  }

  @media (max-width: 640px) {
    padding: 20px;
    gap: 20px;
  }
`;

const TariffHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 640px) {
    gap: 15px;
  }
`;

const TariffTitle = styled.div`
  font-size: 48px;
  line-height: 105%;
  color: #000;
  font-weight: 400;

  @media (max-width: 640px) {
    font-size: 36px;
  }
`;

const TariffMeta = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;

  @media (max-width: 640px) {
    margin-top: 10px;
  }
`;

const SeatsIcon = styled.div`
  display: flex;
  align-items: center;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const OldPrice = styled.div`
  font-size: 20px;
  line-height: 105%;
  text-decoration: line-through;
  font-family: "Coolvetica Lite";
  color: #000;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const CurrentPrice = styled.div`
  font-size: 40px;
  line-height: 110%;
  color: #000;
  font-weight: 400;

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

const TariffDescription = styled.div`
  font-size: 24px;
  line-height: 105%;
  color: #000;

  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

const BuyButton = styled(Button)`
  padding: 20px;
  border: 1px solid #000;
  border-radius: 15px;
  font-size: 32px;
  line-height: 105%;
  cursor: pointer;
  background-color: ${({ color }) => color };
  text-align: center;

  @media (max-width: 640px) {
    font-size: 24px;
    padding: 15px;
  }
`;

// New toggle button for mobile view
const ToggleButton = styled.div`
  display: none;
  padding: 15px;
  border: 1px solid #000;
  border-radius: 15px;
  font-size: 18px;
  line-height: 105%;
  color: #000;
  cursor: pointer;
  background-color: rgba(241, 241, 241, 0.95);
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ToggleIcon = styled.span`
  font-size: 20px;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isExpanded ? "rotate(180deg)" : "rotate(0)")};
`;

const FeaturesList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    display: ${(props) => (props.isMobileHidden ? "none" : "flex")};
    gap: 20px;
    overflow: hidden;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const FeatureArrow = styled.div`
  font-size: 24px;
  line-height: 105%;
  color: #000;

  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

const FeatureText = styled.div`
  font-size: 24px;
  line-height: 105%;
  color: #000;
  flex: 1;

  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

const FeatureSubtext = styled.span`
  font-family: "Coolvetica Lite";
  line-height: 90%;
  color: var(--asterisk);
  display: block;
`;

const CompareLink = styled.div`
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  font-size: 32px;
  line-height: 110%;
  color: #000;
  background-color: rgba(241, 241, 241, 0.95);
  cursor: pointer;

  @media (max-width: 640px) {
    font-size: 24px;
    padding: 15px;
  }
`;
