import { ButtonDark } from '../UI-styles/buttonsAndHr.js';
import { SubHeadingBlue } from '../UI-styles/headings.js';
import { ContentContainer } from '../UI-styles/layout.js';
import ProjectObject from '../interfaces.js';

type Props = {
  filteredProjects: ProjectObject[];
};

export default function ProjectOverview({ filteredProjects }: Props) {
  return (
    <ContentContainer id="projects">
      <hr />
      <h2>Projects Overview</h2>

      <section className="card-columns">
        {filteredProjects.map((item, key) => {
          const itemIndex = filteredProjects.indexOf(item);

          const techUsedList = item.techUsed.map((techItem: string, index) => (
            <li key={index}>+ {techItem}</li>
          ));

          return (
            <div className="card" key={key}>
              <a
                href={`#project-${itemIndex}`}
                style={{
                  backgroundColor: 'none',
                }}
              >
                <img
                  className="card-img-top"
                  src={item.imageUrl[0]}
                  alt={item.title}
                  width="auto"
                  height="auto"
                />
              </a>

              <div className="card-body">
                <SubHeadingBlue as="a" href={`#project-${itemIndex}`}>
                  {item.title}
                </SubHeadingBlue>

                <summary
                  className="card-text"
                  dangerouslySetInnerHTML={{ __html: item.briefStatement }}
                />

                <ul className="list-tech-used">{techUsedList}</ul>

                <ButtonDark as="a" href={`#project-${itemIndex}`}>
                  learn more
                </ButtonDark>
                <ButtonDark as="a" href={item.url}>
                  visit site
                </ButtonDark>

                <span className="github-logo">
                  <a href={item.githuburl} className="github-logo-link">
                    <i className="fab fa-github"></i>
                  </a>
                </span>
              </div>
            </div>
          );
        })}
      </section>
    </ContentContainer>
  );
}
