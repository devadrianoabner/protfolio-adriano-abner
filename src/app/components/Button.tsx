import React from "react";
import styled, { css } from "styled-components";

export type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "outlined";
  fullWidth?: boolean;
  href?: string;
};

const baseStyles = css<{
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
  text-align: center;
  text-decoration: none;

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

const StyledButton = styled.button<{ $variant: "primary" | "outlined"; $fullWidth?: boolean }>`
  ${baseStyles}
`;

const StyledLink = styled.a<{ $variant: "primary" | "outlined"; $fullWidth?: boolean }>`
  ${baseStyles}
`;

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  fullWidth = false,
  href,
}) => {
  if (href) {
    return (
      <StyledLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        $variant={variant}
        $fullWidth={fullWidth}
      >
        {label}
      </StyledLink>
    );
  }

  return (
    <StyledButton onClick={onClick} $variant={variant} $fullWidth={fullWidth}>
      {label}
    </StyledButton>
  );
};

export default Button;
