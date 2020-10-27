import styled from "styled-components";

const Button = styled.button`
    color: ${(props) => props.color};
    background: ${(props) => props.background};
`;

export default Button;
