import React from 'react';
import { styled } from 'styled-components';
import { Skill, Image, VideoPlayer } from '../components/index';
import { VertFlex, mediaQueries } from '../styles/GlobalStyles';
import { Features, MainText, SectionHeading, SmallThin, SmallerText, ThinFeatures, paragraph, sectionTitle } from '../styles/TextStyles';
import { typograf } from './typograf';
import { Grid } from './ListSection';
import { VideoFlexContainer, VideoVertFlex, VideoWrapper } from './Box';

const About = ({ data }) => {
  const { problem, promise, sectionTitle, audience, videoData } = data;
  const skillsMap = skills.map((skill, index) => (
    <Skill key={index} index={index} title={skill.title} level={skill.level} />
  ));

  return (
    <>
    <Title>{sectionTitle  ||"Что и зачем"}</Title>
    <Wrapper id='about'>
      <Grid>
      <AboutBlock column='1 / 3'>
        <VertFlex>
          <SmallerText>Проблема: </SmallerText>
          <Text>{typograf(problem)}</Text>
          <br/>

        <SmallerText>Решение: </SmallerText>
        <Text dangerouslySetInnerHTML={{ __html: typograf(promise) }} />
        <br/>

        <SmallerText>Для кого: </SmallerText>
        <Text dangerouslySetInnerHTML={{ __html: typograf(audience) }} />
        <br/>
        </VertFlex>

      </AboutBlock>
      <AboutBlock column='4 / 7'>
        <VertFlex>
          <MainText>Как работает система</MainText>
          <video style={{width: "100%", borderRadius: "10px"}} src="/video/demo.mp4" controls />
          <br/>
        <SmallerText>Небольшая история: </SmallerText>
        <Text dangerouslySetInnerHTML={{ __html: typograf("<p>Два года мы делали курс «Система письма»: Более 130 PhD-студентов, исследователей и преподавателей из Кембриджа, Баухауз Ваймар, «Шанинки», ИТМО и других мест прошли его и внедрили нашу систему в свою работу.</p>") }} />

        {Boolean(videoData) && <VideoFlexContainer>
          {videoData.map((review, index) => (
            <VideoWrapper key={index}>
              <VideoPlayer videoSrc={review.video} borderRadius="1000px" />
              <VideoVertFlex>
                <Features>{review.author}</Features>
                <ThinFeatures>{review.occupation}</ThinFeatures>
              </VideoVertFlex>
            </VideoWrapper>
          ))}
        </VideoFlexContainer>}

        <Text dangerouslySetInnerHTML={{ __html: typograf("Мы взяли из курса лучшее и «сжали» в самостоятельный продукт, который не требует месяца обучения.") }} />
        </VertFlex>
      </AboutBlock>
      </Grid>

    </Wrapper>
    </>
  );
};

export default About;

const Wrapper = styled.div`
  display: flex; 
  flex-direction: column;
  background-color: var(--podlozhka);
  padding: 30px;
  border-radius: var(--border-radius-int);
  border: 1px solid var(--text);
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  gap: var(--flex-gap);

  @media (max-width: ${mediaQueries.phone}) {
    margin: var(--padding-mobile);
	padding: 0px;
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
