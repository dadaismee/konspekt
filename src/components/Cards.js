import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { styled } from 'styled-components';
import { Card } from '../components/index';
import { mediaQueries } from '../styles/GlobalStyles';
import { MainText, SectionHeading } from '../styles/TextStyles';

const Cards = ({ data, filter }) => {
  const cards = data.map((card) => {
    if (Boolean(card.tags)) {
      const { tags } = card; // Access tags directly from the card object
      return {
        ...card, // Spread the card properties
        isFiltered: filter !== 'Все' ? tags.includes(filter) : true, // Add isFiltered property
      };
    } else {
      return card;
    }
  });

  const filteredCards = cards.filter((card) => card.isFiltered);

  return (
    <>
      <SectionHeading id="courses"
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
        viewport={{ once: true }}>
        Решения для исследователей
      </SectionHeading>
    {/* <MainText style={{ marginTop: "60px"}}>Для исследователей</MainText> */}
    <CardsWrapper>
      {data.map((card, index) => (
        <Card
          key={index}
          index={index}
          to={`/${card.url}`}
          image={card.image}
          animation={card.animation}
          title={card.title}
          description={card.description}
          difficulty={card.difficulty}
          tags={card.tags}
          soon={card.soon}
        />
      ))}
    </CardsWrapper>
    </>
  );
};

export default Cards;

export const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: var(--grid-repeat);
  // grid-template-rows: repeat(2, 1fr);
  gap: var(--flex-gap);
  padding: 20px 0px;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${mediaQueries.phone}) {
    padding: 10px 20px 10px 20px;
    gap: 20px;
  }
`;
