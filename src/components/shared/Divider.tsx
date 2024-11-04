import styled from "styled-components";

const Divider = () => {
  return (
    <DividerContainer>
      <DividerItem />
    </DividerContainer>
  );
};

export default Divider;

const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DividerItem = styled.div`
  width: 50px;
  border-bottom: 7px dashed ${({ theme }) => theme.colors.accent};
  margin-top: ${({ theme }) => theme.spacing.xxxl};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
`;
