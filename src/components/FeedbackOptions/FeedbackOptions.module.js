import styled from 'styled-components';

export const Button = styled.button`
  background-color: palegreen;
  border-radius: 12px;
  width: 7vh;
  outline: 0;
  border: 1px solid rgba(251, 118, 210, 0.5);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background: orange;
    color: #ffffff;
  }
`;
