import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { styled } from 'styled-components';
import { Card } from '../components/index';
import { mediaQueries } from '../styles/GlobalStyles';

const Cards = ({ data, filter }) => {
  const cards = data.map((card) => {
    const { tags } = card; // Access tags directly from the card object
    return {
      ...card, // Spread the card properties
      isFiltered: filter !== 'Все' ? tags.includes(filter) : true, // Add isFiltered property
    };
  });

  const filteredCards = cards.filter((card) => card.isFiltered);

  return (
    <CardsWrapper>
      {filteredCards.map((card, index) => (
        <Card
          key={index}
          index={index}
          to={`/${card.url}`}
          image={card.image}
          animation={card.animation}
          title={card.title}
          description={card.description}
          tags={card.tags}
          soon={card.soon}
        />
      ))}
    </CardsWrapper>
  );
};

export default Cards;

export const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  // grid-template-rows: repeat(2, 1fr);
  gap: 1.38vw; //20px;
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
