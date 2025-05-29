import React from 'react';
import styled from 'styled-components';
import { Heading } from '../UI-styles/headings';
import { ContentContainer } from '../UI-styles/layout';

const ContactUList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ContactListItemLink = styled.a`
  color: rgba(255, 255, 255, 0.7); /* white */
`;

// note: Heading & ContentContainer are "styled-components"

export default function Contact() {
  return (
    <ContentContainer id='contact'>
      <hr />
      <Heading>Contact</Heading>
      <ContactUList>
        <li>snphillips [at] gmail [dot] com</li>
        <li>
          <ContactListItemLink
            className='content-link'
            href='https://www.linkedin.com/in/sarah-n-phillips/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </ContactListItemLink>
        </li>
        <li>
          <ContactListItemLink
            className='content-link'
            href='https://github.com/snphillips'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </ContactListItemLink>
        </li>
        <li>
          <ContactListItemLink className='content-link' href='#resume'>
            View resume
          </ContactListItemLink>
        </li>
      </ContactUList>
    </ContentContainer>
  );
}
