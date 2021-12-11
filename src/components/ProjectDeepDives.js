import React, { Component } from 'react';
import styled from 'styled-components';
import { ButtonLight } from "../user-interface-styles/buttonsAndHr.js"
import { Heading, SubHeading }  from "../user-interface-styles/headings.js"
import { ContentContainer }  from "../user-interface-styles/layout.js"

/* ===============================
The projectDeepDives sections are dynamically created
by mapping over the filteredProjects array.

We're using Styled Components for Heading, SubHeading & ContentContainer
=============================== */

const DeepDivesContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const DeepDivesImageContainer = styled.div`
  max-width: 450px;
  margin-right: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin-right: unset;
    margin: 1rem auto;
  }

  @media (max-width: 500px) {

  }
`

const DeepDivesTextContainer = styled.section`
  display: block;
  color: rgba(255,255,255, 0.7);
  margin-left: 1rem;
`

const DeepDivesImageList = styled.div``


const DeepDivesMobileImageList = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: unset;
    width: 100%;
    max-width: 100%;
    margin: 1rem auto;
  }

  @media (max-width: 500px) {

  }
`
const DeepDivesImage = styled.img`
  width: auto;
  height: auto;
  margin-bottom: 1rem;
  margin-right: 1rem;
  max-width: 466px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`
const DeepDivesImageMobile = styled(DeepDivesImage)`
  max-width: 225px;

  @media (max-width: 768px) {
    width: 45%;
    max-width: 45%;
  }

  @media (max-width: 500px) {
    width: 100%;
    max-width: 100%;
  }
`

const ListTechUsedDeepDive = styled.ul`
  display: block;
  list-style-type: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
`;

const ListFeatures = styled(ListTechUsedDeepDive)``




export default function ProjectDeepDive(props) {

    return (

        <ContentContainer>

          {props.filteredProjects.map( (item, key) => {

            let itemIndex = props.filteredProjects.indexOf(item)


            /* Map over the array of images
            and display them all as img */
            let imageUrlList = item.imageUrl.map( (linkItem, key) => {

              return(
                <DeepDivesImage
                  src={linkItem}
                  alt={item.title}
                  key={key}
                  width="auto"
                  height="auto"
                />
              )
            })

            /* Map over the array of mobile images
            and display them all as img */
            let mobileImageUrlList = item.mobileImageUrl.map( (linkItem, key) => {

              return(
                <DeepDivesImageMobile
                  src={linkItem}
                  alt={item.title}
                  key={key}
                  width="auto"
                  height="auto"
                />
              )
            })


            /* map over the array of features
            and display them each as list items */
            let featuresList = item.features.map( (featuresItem, key) => {

              return(
                <li key={key}>- {featuresItem}</li>
              )
            })


            // map over the array of tech used
            // and display them each as list items
            let techUsedList = item.techUsed.map( (techItem, key) => {

              return(
                <li key={key}>- {techItem}</li>
              )
            })


              return(

                <article className="deep-dives-section" key={key}>
                  <hr />


                  <Heading id={"project-" + itemIndex}>
                    {item.title}
                  </Heading>

                  <DeepDivesContent>

                    <DeepDivesImageContainer className="deep-dives-image-container">

                      <DeepDivesImageList>
                        {imageUrlList}
                      </DeepDivesImageList>

                      <DeepDivesMobileImageList>
                        {mobileImageUrlList}
                      </DeepDivesMobileImageList>

                    </DeepDivesImageContainer>


                    <DeepDivesTextContainer className="deep-dives-text-container">

                      <article className="deep-dives-text" dangerouslySetInnerHTML={{__html: item.statement }} />

                        <br/>

                        <SubHeading as="h3">features</SubHeading>
                        <ListFeatures>{featuresList}</ListFeatures>

                        <SubHeading as="h3">Tech Used</SubHeading>
                        <ListTechUsedDeepDive>{techUsedList}</ListTechUsedDeepDive>

                        <footer className="deep-dives-links-footer">
                          <ButtonLight as="a" href={item.url}>visit site</ButtonLight>
                          <br/>
                          <ButtonLight as="a" href={item.githuburl}>github repo <i className="fab fa-github"></i></ButtonLight>
                        </footer>

                    </DeepDivesTextContainer>

                  </DeepDivesContent>
                </article>

              )

            })}

        </ContentContainer>


    );

}

