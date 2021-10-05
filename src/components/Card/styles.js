import styled from 'styled-components';

export const Container = styled.div`
  background-color: #00ffff;
`;

export const ContainerBody = styled.h1`
  display: flex;
  flex-wrap: wrap;
`;

export const Text = styled.h1`
  color: #000;
  text-shadow: 5px 2px 4px gray;
  font-size: ${props => `${props.fontSize}px`};
  padding-left: 10px;
`;

export const Card = styled.div`
  /* display: flex; */
  margin: 1rem;
  width: 20rem;
  height: 30rem;
  border-radius: 15px;
  justify-content: space-around;
  box-shadow: 6px 4px 8px gray;
  background-color: #fff;
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  /* padding: 1rem; */
`;

export const BoxText = styled.div`
  width: 18rem;
  padding: 1rem;
`;