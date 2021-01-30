import styled from 'styled-components';
import LinkEstilizado from '../LinkEstilizado';

export const StyledLink = styled(LinkEstilizado)`
  transition: .3s;
  width: 24px;
  height: 24px;
  display: inline-block;
  &:hover {
    opacity: .5;
  }
`;

export const SVG = styled.svg`
  vertical-align: middle;
`;