import styled from "styled-components";

export const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xxl}`};
  box-shadow: ${({ theme }) => theme.colors.shadow} 0 0 0.3rem 0 inset;
  border-radius: 3rem;

  &.skills-section {
    border: 5px double ${({ theme }) => theme.colors.accent};
  }
`;

export const Tag = styled.span`
  font: ${({ theme }) => theme.fonts.meta};
  color: ${({ theme }) => theme.colors.bodyTextSecondary};
  border: 3px solid;
  border-color: ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.s}`};
  max-height: 2rem;
  border-radius: 3rem;
  margin-top: ${({ theme }) => theme.spacing.l};

  &.summary {
    font: ${({ theme }) => theme.fonts.body};
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.l}`};
    border-color: ${({ theme }) => theme.colors.accent};
    max-height: none;
  }
`;

export const Title = styled.h2`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.heading};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media only screen and (max-width: ${({ theme }) => theme.bp.narrow}) {
    text-align: center;
  }
`;
