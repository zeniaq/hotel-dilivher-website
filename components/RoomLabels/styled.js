import styled from "styled-components";

export const Article1 = styled.article`
		margin: 3em;
`;
export const Article2 = styled.article`
align-items: center;
display: flex;
transition: transform 0.25s ease, opacity 0.25s ease, filter 1s ease, -webkit-filter 1s ease;

background-position: center;
background-repeat: no-repeat;
background-size: cover;
cursor: default;

align-items: center;
    display: flex;
`;
export const Ul = styled.ul`
display: -moz-flex;
display: -webkit-flex;
display: -ms-flex;
display: flex;
cursor: default;
list-style: none;
margin-left: -1em;
padding-left: 0;
`;
export const Li = styled.li`

border: solid 1px rgba(212, 212, 255, 0.1);
		margin-bottom: 2em;
		padding: 6em;
`;
export const P = styled.p`
font-size: 0.7em;
font-weight: 600;
letter-spacing: 0.25em;
margin-bottom: 0;
text-transform: uppercase;
br {
    display: none;
} 
`;