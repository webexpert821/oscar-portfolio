import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';

import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';

import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';

import fiveTextureLarge from 'assets/five-app-large.jpg';
import fiveTexturePlaceholder from 'assets/five-app-placeholder.jpg';
import fiveTexture from 'assets/five-app.jpg';

import fiveTextureLarge2 from 'assets/five2-app-large.jpg';
import fiveTexturePlaceholder2 from 'assets/five2-app-placeholder.jpg';
import fiveTexture2 from 'assets/five2-app.jpg';

import secondTextureLarge from 'assets/second-app-large.jpg';
import secondTexturePlaceholder from 'assets/second-app-placeholder.jpg';
import secondTexture from 'assets/second-app.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Frontend', 'Backend', 'Mobile', 'Smart Contract', 'Web3'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Blockchain + Frontend"
        description="Design portfolio of Oscar Peterson — a FullStack Developer working on web & mobile
          apps with a focus on blockchain."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Developing DeFi Projects"
        description="Developing excellent DeFi projects with full idea."
        buttonText="View project" //********************* */
        buttonLink="/projects/smart-sparrow" //********************* */
        model={{
          type: 'laptop',
          alt: 'DeFi Project',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Developing NFT Projects"
        description="Developing unique and excellent NFT projects"
        buttonText="Visit Website" //************************** */
        buttonLink="https://www.tomzanetti.club/#" //********************** */
        model={{
          type: 'laptop',
          alt: 'NFT project',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Developing Websites"
        description="Developing Perfect, User Friendly Websites"
        buttonText="Visit Website" //************************** */
        buttonLink="https://dreamdatedestinations.com/" //********************** */
        model={{
          type: 'laptop',
          alt: 'NFT project',
          textures: [
            {
              srcSet: [secondTexture, secondTextureLarge],
              placeholder: secondTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Developing Mobile App"
        description="Developing Social, Wallet Android & iOS Mobile App"
        buttonText="View Mobile App"
        buttonLink="https://play.google.com/store/apps/details?id=candy.dating.app"
        model={{
          type: 'phone',
          alt: 'mobile app',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        alternate
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Developing Mobile App"
        description="Developing Social, Wallet Android & iOS Mobile App"
        buttonText="View Mobile App"
        buttonLink="https://play.google.com/store/apps/details?id=com.washos.washos"
        model={{
          type: 'phone',
          alt: 'mobile app',
          textures: [
            {
              srcSet: [fiveTexture, fiveTextureLarge],
              placeholder: fiveTexturePlaceholder,
            },
            {
              srcSet: [fiveTexture2, fiveTextureLarge2],
              placeholder: fiveTexturePlaceholder2,
            },
          ],
        }}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
