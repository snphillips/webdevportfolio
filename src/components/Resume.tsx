import styled from 'styled-components';
import { Heading } from '../UI-styles/headings.js';
import { ContentContainer } from '../UI-styles/layout.js';

const ContactUList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ContactListItemLink = styled.a`
  color: rgba(255, 255, 255, 0.7); /* white */
`;

export default function Resume() {
  return (
    <>
      <Heading>Resume</Heading>
      <ContentContainer id='resume'>
        <embed
          src='https://sarahphillipsdev.surge.sh/Sarah-Phillips-resume.pdf'
          width='800'
          height='1080'
          type='application/pdf'
        />
      </ContentContainer>
    </>
  );
}
