"use client";

import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Puzzle from "./Puzzel";

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding: 0 2rem;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    padding-top: 5rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const PuzzleWrapper = styled.div`
  flex: 1;
  max-width: 500px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Intro = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Statement = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  max-width: 600px;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <TextContent>
        <Intro>Olá, meu nome é</Intro>
        <Name>Adriano Abner.</Name>
        <Statement>Transformo erros em soluções reais.</Statement>
        <Description>
          Sou desenvolvedor Front-end apaixonado por criar experiências digitais
          que funcionam. Atualmente, estou focado em aprimorar projetos reais
          com foco em acessibilidade, performance e propósito.
        </Description>
        <Button label="Entre em contato" href="https://wa.me/5511962214102" />
      </TextContent>

      <PuzzleWrapper>
        <Puzzle />
      </PuzzleWrapper>
    </HeroWrapper>
  );
};

export default Hero;
