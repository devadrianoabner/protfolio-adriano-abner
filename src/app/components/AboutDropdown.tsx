"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DropdownContainer = styled(motion.div)`
  position: absolute;
  top: 2.8rem;
  left: 0;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  padding: 1.75rem 2rem;
  min-width: 320px;
  max-width: 480px;
  width: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 999;
  backdrop-filter: blur(8px);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 20px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${({ theme }) => theme.colors.backgroundLight};
    z-index: 1;
  }

  @media (max-width: 768px) {
    left: 0;
    right: 0;
    width: auto;
    max-width: calc(100% - 2rem);
    &::before {
      left: 1.5rem;
    }
  }
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 10%;
  opacity: 0.01;
  pointer-events: none;
`;

const Particles = () => {
  const particles = Array.from({ length: 200 });

  return (
    <>
      {particles.map((_, i) => (
        <Particle
          key={i}
          animate={{
            y: ["0%", "-120%"],
            x: ["0%", "20%"],
            opacity: [0.001, 0.01, 0.1],
          }}
          transition={{
            duration: 0.6 + Math.random() * 0.6,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </>
  );
};

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  z-index: 2;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  position: relative;
  z-index: 2;
`;

const AboutDropdown = () => {
  return (
    <DropdownContainer
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Particles />
      <Title>Sobre mim</Title>
      <Text>
        Olá! Me chamo Adriano Abner. Sou desenvolvedor front-end apaixonado por
        resolver problemas através de interfaces simples e acessíveis. Gosto de
        transformar ideias em soluções reais com foco em performance, estética e
        propósito.
      </Text>
    </DropdownContainer>
  );
};

export default AboutDropdown;
