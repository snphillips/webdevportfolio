import styled from 'styled-components';
import { ButtonDark } from '../UI-styles/buttonsAndHr.js';
import { Heading, SubHeadingBlue } from '../UI-styles/headings.js';
import { ContentContainer } from '../UI-styles/layout.js';
import ProjectObject from '../interfaces';

/* 
===============================
Project cards are dynamically created
by mapping over the filteredProjects array 
(which is generated from the projectList array)
=============================== 
*/

const ListTechUsed = styled.ul`
  color: rgba(5, 11, 56, 0.8);
  font-size: 0.95rem;
  display: block;
  list-style-type: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
`;

const CardText = styled.summary`
  color: rgba(5, 11, 56, 0.85);
  font-size: 0.9em;
`;

const GithubLogoLink = styled.a`
  color: rgba(5, 11, 56, 0.9); /*navy blue*/
  font-size: 1.9em;
  vertical-align: sub;

  &:hover {
    color: rgba(213, 11, 84, 0.9); /*bright pink*/
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
`;

type Props = {
  filteredProjects: ProjectObject[],
};

export default function ProjectOverview({ filteredProjects }: Props) {
  return (
    <ContentContainer id='projects'>
      <hr />
      <Heading>Projects Overview</Heading>

      <section className='card-columns'>
        {filteredProjects.map((item, key) => {
          let itemIndex = filteredProjects.indexOf(item);

          /* 
          Map over the array of tech and display them all as span items
          we insert this variable within a paragraph below.
          The result is a nice little comma-separated list. 
          */
          let techUsedList = item.techUsed.map((techItem: string, index) => {
            return <li key={index}>+ {techItem}</li>;
          });

          return (
            <div className='card' key={key}>
              <a
                href={'#project-' + itemIndex}
                style={{
                  // gets rid of the hover effect on links
                  backgroundColor: 'none',
                }}
              >
                <img
                  className='card-img-top'
                  src={item.imageUrl[0]}
                  alt={item.title}
                  width='auto'
                  height='auto'
                />
              </a>

              <div className='card-body'>
                <SubHeadingBlue as='a' href={`#project-` + itemIndex}>
                  {item.title}
                </SubHeadingBlue>

                <CardText dangerouslySetInnerHTML={{ __html: item.briefStatement }} />

                <ListTechUsed>{techUsedList}</ListTechUsed>
                <ButtonDark as='a' href={`#project-` + itemIndex}>
                  learn more
                </ButtonDark>
                <ButtonDark as='a' href={item.url}>
                  visit site
                </ButtonDark>

                <span className='github-logo'>
                  <GithubLogoLink href={item.githuburl}>
                    <i className='fab fa-github'></i>
                  </GithubLogoLink>
                </span>
              </div>
            </div>
          );
        })}
      </section>
    </ContentContainer>
  );
}
