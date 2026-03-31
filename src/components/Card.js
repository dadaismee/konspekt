import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import { styled } from 'styled-components';
import { mediaQueries } from '../styles/GlobalStyles';
import { FooterText, MenuAndFootnote, SmallThin, SmallerText, cardTags, logoAndCardTitles, paragraph } from '../styles/TextStyles';
import { typograf } from './typograf';
import Skill from './Skill';

const Card = ({ image, animation, title, description, tags, difficulty, index, to, badge }) => {
  let cardTags = [];
  if (Boolean(tags)) {
    cardTags = tags.map((tag, index) => <Tag key={index}>{tag}</Tag>);
  }
  return (
    <Wrapper
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
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
        delay: 0.5 + index * 0.15,
      }}
      viewport={{ once: true }}
      whileTap={hoverStyles.on}
      transformTemplate={({ y }) => `translateY(-${y}px)`}>
      {Boolean(badge) && <Badge>{badge || "СКОРО"}</Badge>}
      <Image src={image} loading="lazy" alt={title} />
      {Boolean(animation) && <Animation src={animation} loop autoPlay />}
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Title>{typograf(title)}</Title>
        <Description>
          {typograf(description)}
        </Description>
      </div>
      {/* <TagsWrapper>{cardTags}</TagsWrapper> */}
      {Boolean(difficulty) && <p style={{ fontFamily: "Coolvetica Lite" }}>Сложность: {difficulty}</p>}
      <Link to={to}>
        <Button>Подробнее</Button>
      </Link>
    </Wrapper>
  );
};

export default Card;

const hoverStyles = {
  on: {
    boxShadow: 'var(--main-shadow)',
    transition: { duration: 0.25 },
    delay: 0.5,
  },
  off: {
    background: 'transparent',
    boxShadow: 'none',
    transform: 'none',
  },
};

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  border: 1px solid var(--text);
  background-color: var(--podlozhka);
  height: auto;
  padding: 1.38vw; // 20px;
  gap: 10px; //1.38vw; //20px;

  border-radius: 7.5px;
  transition: var(--transition);

  &:hover {
    background: var(--accent);
    box-shadow: var(--main-shadow);
    transform: translateY(-15px);
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  @media (max-width: ${mediaQueries.phone}) {
    padding: 20px;
    gap: 20px;
    width: 70vw;
    min-height: calc(var(--card-max-width) * 1);
  }
`;

const Badge = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: auto;
  padding: 10px;
  color: var(--podlozhka);
  background-color: var(--text);
  border-radius: 15px;
  text-align: center;
  z-index: 1;
  font-size: 16px;
`;

const Image = styled.img`
  height: 12.5vw;
  border-radius: 10px;
  border: 1px solid var(--text);
  object-fit: cover;
  width: 100%;

  @media (max-width: ${mediaQueries.phone}) {
    height: 19vh;
    min-height: auto;
  }
`;

const Animation = styled.video`
  max-height: 25.5vh;
  border-radius: 15px;
  object-fit: fill;
  width: 100%;
  border: 1px solid var(--color-text);

  @media (max-width: ${mediaQueries.phone}) {
    height: 19vh;
    min-height: auto;
  }
`;



const Title = styled(MenuAndFootnote)``;

const Description = styled(SmallThin)`
  font-size: 20px;
  @media (max-width: ${mediaQueries.phone}) {
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled(cardTags)`
  align-self: center;
  padding: 10px;
  border: solid 1px;
  border-radius: 5px;
  color: var(--color-disabled);
  transition: var(--transition);

  ${Wrapper}:hover & {
    color: var(--text);
  }

  @media (max-width: ${mediaQueries.phone}) {
    color: var(--color-text);
    padding: 10px;
  }
`;

const Button = styled(motion.button)`
  display: flex;
  height: 48px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  border-radius: 15px;
  border: 1px solid var(--text);
  background: var(--accent);
  font-size: 20px;
  font-weight: 700;
  line-height: 100%; /* 20px */
  transition: var(--transition);
  transition-delay: 0.2s;
  ${Wrapper}:hover & {
    background: var(--podlozhka);
    cursor: pointer;
  }

  @media (max-width: ${mediaQueries.phone}) {
    display: none;
    height: 48px;
  }
`;
