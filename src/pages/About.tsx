import { Heading } from '../UI-styles/headings';
import { ContentContainer } from '../UI-styles/layout';
import { AboutColumns } from '../UI-styles/paragraphs';

export default function About() {
  return (
    <ContentContainer id='about'>
      <hr />
      <Heading>About</Heading>
      <AboutColumns>

        <p>
        I am a Brooklyn-based developer formally trained in art with a background in municipal
        service delivery.
        </p>
        <p>
        From 2022 to 2023 I was a Software Engineer for ed-tech startup Newsela where I worked on
        two React.js internal content management systems for the content creation team. Prior to
        that, I worked as an Interaction Engineer at the ad tech startup TripleLift where I created
        bespoke, consumer-centric templates for programatic ads and developed the in-house React
        application our team used to create those templates.
        </p>
        <p>
        I strive to create visually interesting solutions that are broadly appealing. I
        believe tech should be intuitive, welcoming and delightful to interact with.
        </p>
      </AboutColumns>
    </ContentContainer>
  );
}
