import React from "react";
import styled from "styled-components";
import { SkillsBreakdown } from "../shared/translations/translations";
import { useTranslation } from "react-i18next";
import { SectionContainer, Tag, Title } from "./Styled";

export const SkillsSection = () => {
  const { t } = useTranslation();

  const skillsData = t("skillsBreakdown", {
    returnObjects: true,
  }) as SkillsBreakdown;

  const summaryTags = t("summaryTags", {
    returnObjects: true,
  }) as string[];

  return (
    <SectionContainer id="skills-section" className="skills-section">
      <Title>{t("technicalSkillsExperience")}</Title>

      <SummaryContainer>
        {summaryTags.map((tag) => (
          <Tag key={tag} className="summary">
            {tag}
          </Tag>
        ))}
      </SummaryContainer>

      <TableContainer>
        <SkillsTable>
          <thead>
            <tr>
              <Th>{t("technologyArea")}</Th>
              <Th>{t("proficiencyContext")}</Th>
            </tr>
          </thead>
          <tbody>
            {skillsData.map((group) => (
              <React.Fragment key={group.category}>
                <tr>
                  <TdCategory colSpan={2}>{group.category}</TdCategory>
                </tr>
                {group.skills.map((skill) => (
                  <tr key={skill.area}>
                    <TdArea>
                      <Tag className="summary">{skill.area}</Tag>
                    </TdArea>
                    <TdLevel>{skill.level}</TdLevel>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </SkillsTable>
      </TableContainer>
    </SectionContainer>
  );
};

const SummaryContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 1.5rem;
`;

const SkillsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
`;

const Th = styled.th`
  font: ${({ theme }) => theme.fonts.meta};
  color: ${({ theme }) => theme.colors.bodyTextSecondary};
  text-align: left;
  padding: 1rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const TdCategory = styled.td`
  font: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.heading};
  padding: 1.25rem 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
  font-weight: 700;
`;

const TdArea = styled.td`
  font: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.bodyText};
  padding: 1.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
  width: 35%;
`;

const TdLevel = styled.td`
  font: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.bodyText};
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
`;
