import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.25rem 1rem;
  border: 4px solid ${(props) => props.theme.palette.primary.main};
  border-radius: 0.5rem;
  width: 180px;
  background-color: ${(props) => props.theme.palette.common.white};
`;

export const InputField = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.palette.common.black};
`;
