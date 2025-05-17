import React from "react";
import styled, { css } from "styled-components";

export type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "outlined";
  fullWidth?: boolean;
};

const StyledButton = styled.button<{
  $variant: "primary" | "outlined";
  $fullWidth?: boolean;
}>`
  font-size: 16px;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "fit-content")};
  display: inline-block;
  margin-top: 2rem;

  ${({ $variant, theme }) =>
    $variant === "primary"
      ? css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.background};
          border: 1px solid ${theme.colors.primary};

          &:hover {
            background-color: transparent;
            color: ${theme.colors.primary};
          }
        `
      : css`
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};

          &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.background};
          }
        `}
`;

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  fullWidth = false,
}) => {
  return (
    <StyledButton onClick={onClick} $variant={variant} $fullWidth={fullWidth}>
      {label}
    </StyledButton>
  );
};

export default Button;
