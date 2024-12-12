import * as React from "react"
import { useEffect, useRef } from "react";
import type { HeadFC, PageProps } from "gatsby"
import classNames from 'classnames';
import { SEO } from "../components/seo"

import {MainNav} from '../components/main-nav/MainNav';
import {Logo} from '../components/logo/Logo';
import {Badge} from '../components/badge/Badge';
import {Midichlorian} from '../components/midichlorian/Midichlorian';
import {SpotlightPanel} from '../components/spotlight-panel/SpotlightPanel';
import {Testimonial} from '../components/testimonial/Testimonial';
import {ProcessCard} from '../components/process-card/ProcessCard';
import {SmileyProfile} from '../components/smiley-profile/SmileyProfile';
import {Footer} from '../components/footer/Footer';

// Gsap stuff
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

import * as styles from './index.module.css';

export const Head: HeadFC = () => (
  <>
    <title>Luminous | Design & build digital products</title>
    <SEO 
      title="Luminous | Design & build digital products"
      description="Designing, building and evolving your digital products."
      pathname="/"
      children={undefined}
    />
  </>
)   

const IndexPage: React.FC<PageProps> = () => {

  useEffect(() => {   

    gsap.fromTo(
      '.home-hero__intro *',
      { 
        opacity: 0,
        filter: "blur(50px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 2,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.home-hero__intro', // Element that triggers the animation
          start: "top 80%", // Start the animation when the top of the element reaches 80% of the viewport
          toggleActions: "play none none none" // Play animation on scroll
        }
      }
    );    

    gsap.fromTo(
      '.home-hero .midi.back',
      { 
        opacity: 1,
        filter: "blur(500px)",
      },
      {
        opacity: 1,
        filter: "blur(15px)",
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.home-hero',
        }
      }
    );

    gsap.fromTo(
      '.home-hero .midi.middle',
      { 
        opacity: 1,
        filter: "blur(600px)",
      },
      {
        opacity: 1,
        filter: "blur(5px)",
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.home-hero',
        }
      }
    );

    gsap.fromTo(
      '.home-hero .midi.front',
      { 
        opacity: 1,
        filter: "blur(700px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 3,                
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.home-hero',
        }
      }
    );

    gsap.fromTo(
      '.spotlight .orb',
      { 
        opacity: 0,
        filter: "blur(50px)",
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.spotlights',
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    );

    document.querySelectorAll('.process-card').forEach(card => {
      gsap.fromTo(
        card,
        { 
          opacity: 0,
          y: 50,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,  
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
          }
        }
      );
    });

  }, []); // Empty dependency array ensures this runs only once after the component mounts

  const spotlightRef = useRef(null);
  const processRef = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <main>
      <MainNav 
        onScrollToSpotlight={() => scrollToSection(spotlightRef)} 
        onScrollToProcess={() => scrollToSection(processRef)} 
      />

      <div className={`home-hero ${styles.homeHero}`}>
        {midichlorians.map((midi, index) => (
          <Midichlorian
            key={index}
            colour={midi.colour}
            floating={midi.floating}
            depth={midi.depth}
            className={midi.className}
          />
        ))}

        <div className={`u-container u-flex`}>
          <div className={`u-flex-6`}>
            <div className={`home-hero__intro ${styles.homeHero__intro}`}>
              <h1 className={classNames("u-font-heading", "u-pad-be-s")}>Digital Products <span className={classNames("u-fontsize-5")}>with a bit of life in them</span></h1>
              <h2 className={classNames("u-fontsize-1", "u-font-body")}>We work with purpose-driven start-ups and scale-ups; designing, building and evolving your human-centred digital products.</h2>
            </div>        
          </div>
        </div>

        <div className={`home-hero__badge ${styles.homeHero__badge}`}>
          <Badge
            brightness="light"
            onClick={() => {}}
            text1="Made in"
            text2="Bristol"
          />
        </div>

      </div>

      <section 
        className={`spotlights ${styles.spotlights} u-pad-be-3xl`} 
        id="what-we-do"
        ref={spotlightRef}
      >
        <div className={`u-grid u-grid-half u-nogap`}>
          <SpotlightPanel
            body="Discovering, designing and developing the first iteration of your product. Working in close alignment with your go-to-market strategy to find product-market fit."
            colour="orange"
            heading="Zero to launch"
            preHeading="Get your start-up from"
          />
          <SpotlightPanel
            body="Lorem ipsum dolor sit amet consectetur. Nibh odio amet quisque tempor id eget auctor pharetra."
            colour="green"
            heading="Product led growth"
            preHeading="Scale up with"
          />
          <SpotlightPanel
            body="Lorem ipsum dolor sit amet consectetur. Nibh odio amet quisque tempor id eget auctor pharetra."
            colour="pink"
            heading="Transforming your team"
            preHeading="Increase your product maturity by"
          />
          <SpotlightPanel
            body="Lorem ipsum dolor sit amet consectetur. Nibh odio amet quisque tempor id eget auctor pharetra."
            colour="purple"
            heading="Branding and web design"
            preHeading="Be your best self with"
          />
        </div>
      </section>

      <section className={`testimonials ${styles.testimonials} u-container u-pad-be-3xl`}>
        <p className={`u-subtitle u-pad-be-2xl`}>Smart people saying nice things</p>
        <div className={`u-grid u-grid-half u-rowgap-xl testimonials__quotes ${styles.testimonials__quotes}`}>
          <Testimonial
            body="Jon and Sim helped our team, including Miss Piggy and Fozzie Bear, create something truly magical. Their creativity made the process as fun as a sing-along with the Electric Mayhem. If you want your project to sparkle like my banjo, go with Luminous!"
            colour="green"
            smileyProfileProps={{
              brightness: 'dark',
              images: [
                {
                  alt: 'Photo of Kermit',
                  src: 'https://static01.nyt.com/images/2020/07/26/arts/26MUPPETSa/merlin_174639525_a9ae2a18-54f6-4e58-aab2-560ea57dad0d-mediumSquareAt3X.jpg'
                }
              ],
              meta: 'Head of The Muppets',
              name: 'Kermit the Frog',
              size: 'small'
            }}
            title="A Green Team"
          />
          <Testimonial
            body="Jon and Sim helped our team, including Miss Piggy and Fozzie Bear, create something truly magical. Their creativity made the process as fun as a sing-along with the Electric Mayhem. If you want your project to sparkle like my banjo, go with Luminous!"
            colour="purple"
            smileyProfileProps={{
              brightness: 'dark',
              images: [
                {
                  alt: 'Photo of Kermit',
                  src: 'https://static01.nyt.com/images/2020/07/26/arts/26MUPPETSa/merlin_174639525_a9ae2a18-54f6-4e58-aab2-560ea57dad0d-mediumSquareAt3X.jpg'
                }
              ],
              meta: 'Head of The Muppets',
              name: 'Kermit the Frog',
              size: 'small'
            }}
            title="A Green Team"
          />
          <Testimonial
            body="Jon and Sim helped our team, including Miss Piggy and Fozzie Bear, create something truly magical. Their creativity made the process as fun as a sing-along with the Electric Mayhem. If you want your project to sparkle like my banjo, go with Luminous!"
            colour="pink"
            smileyProfileProps={{
              brightness: 'dark',
              images: [
                {
                  alt: 'Photo of Kermit',
                  src: 'https://static01.nyt.com/images/2020/07/26/arts/26MUPPETSa/merlin_174639525_a9ae2a18-54f6-4e58-aab2-560ea57dad0d-mediumSquareAt3X.jpg'
                }
              ],
              meta: 'Head of The Muppets',
              name: 'Kermit the Frog',
              size: 'small'
            }}
            title="A Green Team"
          />
          <Testimonial
            body="Jon and Sim helped our team, including Miss Piggy and Fozzie Bear, create something truly magical. Their creativity made the process as fun as a sing-along with the Electric Mayhem. If you want your project to sparkle like my banjo, go with Luminous!"
            colour="orange"
            smileyProfileProps={{
              brightness: 'dark',
              images: [
                {
                  alt: 'Photo of Kermit',
                  src: 'https://static01.nyt.com/images/2020/07/26/arts/26MUPPETSa/merlin_174639525_a9ae2a18-54f6-4e58-aab2-560ea57dad0d-mediumSquareAt3X.jpg'
                }
              ],
              meta: 'Head of The Muppets',
              name: 'Kermit the Frog',
              size: 'small'
            }}
            title="A Green Team"
          />
        </div>
      </section>

      <section 
        className={`process ${styles.process} u-pad-bs-3xl`} 
        id="how-we-do-it" 
        ref={processRef}
      >
        <div className={`u-container`}>
          <h2 className={`process__heading ${styles.process__heading} u-font-display u-fontsize-4 u-pad-be-xl`}>Building your product the right way</h2>
          <div className={`process__cards ${styles.process__cards}`}>
            <ProcessCard
              colour="purple"
              heading="Discover"
              illustration="/images/discover-illustration.svg"
              intro="Uncovering the right problems to find holistic, smart and viable solutions"
              servicePills={[
                {
                  text: 'Workshops'
                },
                {
                  text: 'Ideation'
                },
                {
                  text: 'Strategy'
                }
              ]}
            />
            <ProcessCard
              colour="orange"
              heading="Design"
              illustration="/images/design-illustration.svg"
              intro="Doing some designing of things. Making them reasonably pretty and pretty usable. Doing some designing of things. Making them reasonably pretty and pretty usable."
              servicePills={[
                {
                  text: 'Workshops'
                },
                {
                  text: 'Ideation'
                },
                {
                  text: 'Strategy'
                }
              ]}
            />
            <ProcessCard
              colour="green"
              heading="Engineer"
              illustration="/images/engineer-illustration.svg"
              intro="Build some things, engineer your way to success. Build some things, engineer your way to success. "
              servicePills={[
                {
                  text: 'Workshops'
                },
                {
                  text: 'Ideation'
                },
                {
                  text: 'Strategy'
                }
              ]}
            />
            <ProcessCard
              colour="pink"
              heading="Evolve"
              illustration="/images/evolve-illustration.svg"
              intro="Change is the only constant, you gotta get good at the impermanence of all things. Change is the only constant, you gotta get good at the impermanence of all things."
              servicePills={[
                {
                  text: 'Workshops'
                },
                {
                  text: 'Ideation'
                },
                {
                  text: 'Strategy'
                }
              ]}
            />
          </div>          
        </div>
      </section>

      <section className={`manifesto ${styles.manifesto} u-pad-b-2xl u-mrg-be-s`}>
        <div className={`u-container u-flex`}>          
          <div className={`u-flex-7 manifesto__content ${styles.manifesto__content}`}>
            <Badge
              brightness="light"
              text1="We are"
              text2="Luminous"
            />
            <div className={`u-wysiwyg`}>
              <p>Here we are then, in the middle of an increasingly data-driven, algorithmically predictive, AI generated world. Overwhelming isn't it.</p>
              <p>It's too easy to forget who we are. These organic, emotional, instinctual beings, muddling through together as best we can.</p>
              <p><b>We love digital products, they're awesome. But we also love community and the real world.</b></p>
              <p>We make digital products that impact the business metrics you care about whilst bringing real-world value to people, communities and our environments. We work with strategic clarity, prioritising outcomes whilst embracing the uncertainty of the creative process and appreciating the joy of making things with great people.</p>
              <p>Digital products with a bit of life in them.</p>
            </div>
            <SmileyProfile
              brightness="light"
              images={[                
                {
                  alt: 'Photo of Sim',
                  src: 'https://avatars.githubusercontent.com/u/8200440?v=4'
                },
                {
                  alt: 'Photo of Jon',
                  src: 'https://avatars.githubusercontent.com/u/1651943?v=4'
                }
              ]}
              meta="The ones running this joint"
              name="Jon and Sim"
              size="large"
            />
          </div>
          <div className={`manifesto__midis ${styles.manifesto__midis}`}>
            <Midichlorian
              colour="green"
              floating="true"
              depth="middle"
            />            
            <Midichlorian
              colour="purple"
              floating="true"
              depth="front"
            />
            <Midichlorian
              colour="pink"
              floating="true"
              depth="back"
              className={styles.midiBottom}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default IndexPage

// Make all the Midichlorians
const midichlorians = [
  { colour: "pink", floating: true, className: styles.midi1 },
  { colour: "purple", floating: true, className: styles.midi2 },
  { colour: "green", floating: true, className: styles.midi3 },
  { colour: "pink", floating: true, depth: "middle", className: styles.midi5 },
  { colour: "purple", floating: true, depth: "front", className: styles.midi6 },
  { colour: "purple", floating: true, depth: "middle", className: styles.midi7 },
  { colour: "green", floating: true, depth: "middle", className: styles.midi8 },
  { colour: "purple", floating: true, depth: "back", className: styles.midi9 },
  { colour: "purple", floating: true, depth: "back", className: styles.midi10 },
  { colour: "green", floating: true, depth: "back", className: styles.midi11 },
  { colour: "pink", floating: true, depth: "back", className: styles.midi12 },
  { colour: "purple", floating: true, depth: "back", className: styles.midi13 },
  { colour: "green", floating: true, depth: "back", className: styles.midi14 },
  { colour: "pink", floating: true, depth: "back", className: styles.midi15 },
  { colour: "pink", floating: true, depth: "middle", className: styles.midi16 },
  { colour: "green", floating: true, depth: "middle", className: styles.midi17 },
  { colour: "purple", floating: true, depth: "back", className: styles.midi18 },
];