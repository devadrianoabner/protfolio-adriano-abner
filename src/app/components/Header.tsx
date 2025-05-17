"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import AboutDropdown from "./AboutDropdown";
import StacksDropdown from "./StacksDropDown";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const GithubButton = styled.a`
  padding: 0.4rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const AboutWrapper = styled.div`
  position: relative;
`;

const StacksWrapper = styled.div`
  position: relative;
`;

const Header = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showStacks, setShowStacks] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <Link
          href="https://trabalho.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/trabalho-logo.png"
            alt="Logo do Trabalho.app"
            width={40}
            height={40}
          />
        </Link>

        <Nav>
          <AboutWrapper>
            <NavLink
              onClick={() => {
                setShowAbout((prev) => !prev);
                setShowStacks(false);
              }}
            >
              01. Sobre mim
            </NavLink>
            <AnimatePresence>{showAbout && <AboutDropdown />}</AnimatePresence>
          </AboutWrapper>

          <StacksWrapper>
            <NavLink
              onClick={() => {
                setShowStacks((prev) => !prev);
                setShowAbout(false);
              }}
            >
              02. Stacks
            </NavLink>
            <AnimatePresence>
              {showStacks && <StacksDropdown />}
            </AnimatePresence>
          </StacksWrapper>

          <NavLink
            as="a"
            href="https://www.linkedin.com/in/adriano-abner-275736a7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            03. LinkedIn
          </NavLink>
          <NavLink
            as="a"
            href="https://wa.me/5511962214102"
            target="_blank"
            rel="noopener noreferrer"
          >
            04. Contato
          </NavLink>
          <GithubButton
            href="https://github.com/devadrianoabner"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </GithubButton>
        </Nav>
      </HeaderWrapper>
    </>
  );
};

export default Header;
