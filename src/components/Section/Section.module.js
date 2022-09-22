import styled from 'styled-components';

export const SectionWrap = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
  border-radius: 5px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;

  &:first-child {
    margin-bottom: 25px;
  }
  &:last-child {
    height: 25%;
  }
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  font-family: monospace;
`;
