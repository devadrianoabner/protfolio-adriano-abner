"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background: radial-gradient(circle, rgba(100,255,218,0.05) 0%, transparent 70%),
              radial-gradient(circle, rgba(100,255,218,0.05) 0%, transparent 70%);
  background-size: 20% 20%;
  animation: pulse 10s infinite linear;

  @keyframes pulse {
    0% {
      background-position: 0% 0%, 50% 50%;
    }
    100% {
      background-position: 100% 100%, 0% 0%;
    }
  }
`;

const Content = styled(motion.div)`
  position: relative;
  max-width: 700px;
  z-index: 1;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  padding: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Background />
      <Content
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2>Sobre mim</h2>
        <p>
          Olá! Me chamo Adriano Abner. Sou desenvolvedor front-end apaixonado por resolver problemas através de interfaces simples e acessíveis. Gosto de transformar ideias em soluções reais com foco em performance, estética e propósito.
        </p>
      </Content>
    </Section>
  );
};

export default About;
