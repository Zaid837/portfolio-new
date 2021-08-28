import React from 'react';
import { AiFillGithub, AiOutlineEye } from 'react-icons/ai';

import {
  BlogCard,
  ProjectLinkBox,
  ProjectContent,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Featured Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, title, tags, source, visit, color }) => (
        <BlogCard key={id} color={color}>
          <ProjectLinkBox>
            {source && (
              <a href={source} target="_blank">
                <AiFillGithub />
              </a>
            )}
            <a href={visit} target="_blank">
              <AiOutlineEye />
            </a>
          </ProjectLinkBox>
          <ProjectContent>
            <h3>{title}</h3>
          </ProjectContent>
          <TagList>
            {tags.map((tag, i) => (
              <p key={i}>{tag}</p>
            ))}
          </TagList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
