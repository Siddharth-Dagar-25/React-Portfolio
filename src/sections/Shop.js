import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/img1.png";
import img2 from "../assets/Images/project1.png";
import img3 from "../assets/Images/img2.png";
import img4 from "../assets/Images/project2.png";
import img5 from "../assets/Images/img3.png";
import img6 from "../assets/Images/project3.png";
import img7 from "../assets/Images/img4.png";
import img9 from "../assets/Images/img9.png";

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = "" }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img width="400" height="600" src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
        Projects
      </Title>
      <Left>
      <p>  
        <ul>
          <li>Study Notion - StudyNotion is a versatile and intuitive ed-tech platform that is designed to provide an immersive learning experience to students.</li> <br />
          <li>Netflix-GPT - A GPT OpenAI based Netflix to offering a sophisticated movie recommender through an intelligent search feature</li> <br />
          <li>ToDo Application - Simple yet Powerful tool aims to boost productivity and ensure nothing gets forgotten in the hustle of daily life.</li> <br />
          <li>AI Text-Summarizer App - A powerful full-stack web application harnessing artificial intelligence to efficiently condense and summarize text.</li> 
        </ul>
        </p>

      </Left>
      <Right data-scroll ref={Horizontalref}>
        <a href="https://studynotion-frontend-six-dun.vercel.app/" target="_blank" rel="noreferrer"><Product img={img1} title="Study Notion" /></a>
        <a href="https://github.com/Siddharth-Dagar-25/Study-Notion"target="_blank" rel="noreferrer"><Product img={img9} title="Github" /></a>
        <a href="https://netflixx-gpt-seven.vercel.app/"target="_blank" rel="noreferrer"><Product img={img2} title="Netflix-GPT" /></a>
        <a href="https://github.com/Siddharth-Dagar-25/netflix-gpt"target="_blank" rel="noreferrer"><Product img={img3} title="Github" /></a>
        <a href="https://todo-application-sigma-ten.vercel.app/"target="_blank" rel="noreferrer"><Product img={img4} title="ToDo Application" /></a>
        <a href="https://github.com/Siddharth-Dagar-25/todo-application"target="_blank" rel="noreferrer"><Product img={img5} title="Github" /></a>
        <a href="https://ai-text-summarizer-app.siddharthdagar.repl.co/"target="_blank" rel="noreferrer"><Product img={img6} title="AI-Text-Summarizer-App" /></a>
        <a href="https://github.com/Siddharth-Dagar-25/AI-Text-Summarizer-App"target="_blank" rel="noreferrer"><Product img={img7} title="Github" /></a>
      </Right>
    </Section>
  );
};

export default Shop;