import styled from 'styled-components';

interface Props {
  primary: true;
}

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: #f38e18;
  color: white;
  outline: none;
  font-size: 1em;
  padding: 1em;
  padding: 0.25em 1em;
  border: 2px solid #f38e18;
  border-radius: 3px;
`;

export default Button;
