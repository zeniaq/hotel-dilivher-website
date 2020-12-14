import styled from "styled-components";

export const DivEmergent = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    visibility: hidden;
    opacity: 0;

 :target{
    visibility: visible;
    opacity: 1;
  }
`;
export const DivEmergentContent = styled.div`
width: 46%;
padding: 2%;
border-radius: 7px;
color: #000000;
box-shadow: 0 0 5px #CCC;
background: #FFF;
position: relative;
margin: 20% auto;
transition: all 5s ease-in-out;
text-align: center;
font-weight: bold;
`;
export const DivClose = styled.div`
position: absolute;
top: 20px;
right: 30px;
font-size: 30px;
font-weight: bold;
text-decoration: none;
color: #000000;
transition: all 200ms;
`;
export const Button = styled.button`
    box-shadow: none;
    border: 0;
    display: block;
    margin: auto;
    border-radius: 3px;
    cursor: pointer;
    font-size: 0.8em;
    height: 2.5em;
    font-weight: 600;
    letter-spacing: 0.25em;
    line-height: 2.5em;
    padding: 0 1em;
    text-align: center;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;

    background-color: #242943;
    box-shadow: inset 0 0 0 2px #ffffff;
    color: #ffffff;
    :hover,
    :active {
        background-color: #9bf1ff;
        color: #242943 !important;
    }
`;