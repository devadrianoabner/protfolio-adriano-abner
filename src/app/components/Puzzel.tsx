"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const phrase = "ME CONTRATE";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
  gap: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 60px);
  gap: 10px;
`;

const Piece = styled.button`
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const SuccessMessage = styled.div`
  margin-top: 2rem;
  padding: 1.5rem 2rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
  animation: fadeIn 1s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Puzzle = () => {
  const [tiles, setTiles] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTiles(shuffleArray(phrase.split("")));
  }, []);

  useEffect(() => {
    if (tiles.length && tiles.join("") === phrase) {
      setCompleted(true);
    }
  }, [tiles]);

  const handleClick = (index: number) => {
    if (completed) return;
    const newTiles = [...tiles];
    const nextIndex = (index + 1) % newTiles.length;
    [newTiles[index], newTiles[nextIndex]] = [
      newTiles[nextIndex],
      newTiles[index],
    ];
    setTiles(newTiles);
  };

  return (
    <Container>
      <Grid>
        {tiles.map((char, index) => (
          <Piece key={index} onClick={() => handleClick(index)}>
            {char}
          </Piece>
        ))}
      </Grid>
      {completed && (
        <SuccessMessage>
          ✨ Parabéns! A frase completa é: <strong>{phrase}</strong> <br />
          <a
            href="https://wa.me/5511962214102"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              display: "inline-block",
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              border: "1px solid #64ffda",
              borderRadius: "5px",
            }}
          >
            Vamos conversar no WhatsApp
          </a>
        </SuccessMessage>
      )}
    </Container>
  );
};

export default Puzzle;
