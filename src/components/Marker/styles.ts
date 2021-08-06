import styled from 'styled-components';

interface ICircleMarker {
  radius: number;
  color: string;
}

export const Container = styled.div`
  img {
    position: absolute;
    top: -10px;
    right: -10px;

    width: 20px;
    height: 20px;
  }
`;

export const CircleMarker = styled.div<ICircleMarker>`
  position: absolute;
  top: -${props => props.radius}px;
  right: -${props => props.radius}px;
  width: ${props => props.radius * 2}px;
  height: ${props => props.radius * 2}px;

  background-color: ${props => props.color};
  opacity: 0.2;
  border-radius: 50%;
`;
