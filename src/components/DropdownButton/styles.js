
import styled from 'styled-components';


export const Container = styled.div`
  background-color: #ff5;
  border-radius: 5px;

`;
export const DropdownButton = styled.div`
  position: relative;
  display: inline-block;
`;

export const Button = styled.button`
  padding: 10;
  border: 0;
  border-radius: 5px;
  background-color: #ff5;
  color: #333;
  cursor: pointer;
  outline: 0;
  font-size: 30px;
  &:hover {
    background: #00FFFF;
  }
`;


export const Dropdown = styled.button`
 position: absolute;
  top: 100%;
  left: 0;
  width: 300px;
  z-index: 0;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
`;


export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;


export const Li = styled.li`
 padding: 8px 12px;
 &:hover {
    background: #00FFFF;
    
  }
 `;



