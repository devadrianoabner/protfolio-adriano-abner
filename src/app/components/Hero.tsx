import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 1.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
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

const CTAButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Intro>Olá, meu nome é</Intro>
      <Name>Adriano Abner.</Name>
      <Statement>Transformo erros em soluções reais.</Statement>
      <Description>
        Sou desenvolvedor Front-end apaixonado por criar experiências digitais que funcionam. Atualmente, estou focado em aprimorar projetos reais com foco em acessibilidade, performance e propósito.
      </Description>
      <CTAButton href="#projects">Veja meus primeiros projetos na prática</CTAButton>
    </HeroSection>
  );
};

export default Hero;
