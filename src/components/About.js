import React from 'react';
import { styled } from 'styled-components';
import { Skill } from '../components/index';
import { VertFlex, mediaQueries } from '../styles/GlobalStyles';
import { MainText, SectionHeading, SmallThin, SmallerText, paragraph, sectionTitle } from '../styles/TextStyles';
import { typograf } from './typograf';

const About = ({ data }) => {
  const { problem, promise, sectionTitle, audience } = data;
  const skillsMap = skills.map((skill, index) => (
    <Skill key={index} index={index} title={skill.title} level={skill.level} />
  ));

  return (
    <Wrapper id='about'>
      <AboutBlock column='1 / 3'>
        <Title>{sectionTitle  ||"Что и зачем"}</Title>

        <VertFlex>
          <SmallerText>Проблема: </SmallerText>
          <Text>{typograf(problem)}</Text>
          <br/>

        <SmallerText>Решение: </SmallerText>
        <Text dangerouslySetInnerHTML={{ __html: typograf(promise) }} />
        <br/>

        <SmallerText>Для кого: </SmallerText>
        <Text>
          {audience}</Text>
        <br/>
        </VertFlex>

      </AboutBlock>
      <AboutBlock column='7 / 7'>
        <Title>зщ</Title>
        <SmallerText>Что получите: </SmallerText>
          <Text>
            
          </Text>
          <img src="/courses.notes.png" alt="course logo" width="100%" />
        <SmallerText>Как устроен курс: </SmallerText>
        <Text>
          Смотрите видеоуроки, делаете задания, получаете обратную связь преподавателя
          <img src="/courses.notes.png" alt="course logo" width="100%" />
          </Text>
      </AboutBlock>

      {/* <SkillsBlock> */}
      {/*   <Title>Чему учим</Title> */}
      {/*   <Skills>{skillsMap}</Skills> */}
      {/* </SkillsBlock> */}
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--flex-gap);

  @media (max-width: ${mediaQueries.phone}) {
    margin: var(--padding-mobile);
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

const AboutBlock = styled.div`
  width: var(--left-column-width);

  @media (max-width: ${mediaQueries.phone}) {
    padding-top: 20px;
    width: auto;
  }
`;
const Title = styled(SectionHeading)``;
const Text = styled(SmallThin)`
  ul {
    margin-top: 10px;
  }

  li {
    list-style: disc;
  }

  strong {
    font-family: 'Coolvetica';
}
`;

const SkillsBlock = styled.div`
  grid-column: 5 / 7;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${mediaQueries.phone}) {
    padding-left: 0px;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const skills = [
  {
    title: 'Ed Product Leadership',
    level: 100,
  },
  {
    title: 'Web Development',
    level: 90,
  },
  {
    title: 'UX/UI Design',
    level: 80,
  },
  {
    title: 'Creative Coding',
    level: 70,
  },
  {
    title: '3D (Blender)',
    level: 60,
  },
];
