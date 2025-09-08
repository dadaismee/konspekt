import React from 'react';
import { styled } from 'styled-components';
import { mediaQueries } from '../styles/GlobalStyles';
import { menuAndTags } from '../styles/TextStyles';
import courses from "../pageData/index.json";

export const getTagsData = (courseFiles) => {
  let tags = ['Все'];
  courseFiles
    .map((courseFile) => courseFile.tags)
    .forEach((tagSet) => tagSet.map((tag) => tags.push(tag)));
  console.log('tags', tags);
  return [...new Set(tags)];
};

const tagsData = getTagsData(courses);

const Tags = ({ activeTag, handleClick }) => {
  return (
    <Wrapper>
      {tagsData.map((tag, index) => (
        <Tag
          key={index}
          active={activeTag === tag}
          onClick={(e) => handleClick(e, tag)}>
          {tag}
        </Tag>
      ))}
    </Wrapper>
  );
};

export default Tags;

// export const tagsData = [
//   'Все',
//   'Zotero',
//   'pop'
// ];


const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;

  @media (max-width: ${mediaQueries.phone}) {
    display: none;
  }
`;

const Tag = styled(menuAndTags)`
  background-color: var(--podlozhka);
  color: var(--color-disabled);
  transition: var(--transition);
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  ${({ active }) =>
    active
      ? 'padding: 10px 20px; background-color: var(--accent);'
      : 'padding: 10px 10px;'}

  &:hover {
    color: var(--color-text);
  }
`;
