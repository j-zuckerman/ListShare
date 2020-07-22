import styled from 'styled-components';

const Button = styled.button`
  font-size: ${(props) => (props.large ? '20px' : '16px')};
  padding: ${(props) => (props.large ? '20px 30px' : '10px 15px')};
  text-transform: uppercase;
  border-radius: 100px;
  box-shadow: 0 1px 5px black;
  color: white;
  background-color: ${(props) => (props.colored ? '#46afb9' : '#2e3233')};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  text-decoration: none;
  margin-right: 20px;
  margin-left: 20px;
`;

export default Button;
