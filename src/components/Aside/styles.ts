import styled from 'styled-components';

const Container = styled.div`
  grid-area: AS;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
`;

export {
  Container
}