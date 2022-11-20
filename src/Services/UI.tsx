import styled from "styled-components";

export const MyButton = styled.button`
  font-size: 20px;
  color: pink;
  background-color: yellow;

  &:hover {
    background-color: darkred;
  }
`

export const InheritedButton = styled(MyButton)`
  border: 1px solid palevioletred;
  background-color: black;
`



interface Props {
    height: number;
}

export const Wrapper = styled.div<Props>`
    padding: 5%;
    height: ${(props) => props.height}%;
`;