import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  margin-top: 2rem;
  gap: 2rem;
`;

export const GifsContainer = styled.div`
  margin: 1rem auto 2rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
