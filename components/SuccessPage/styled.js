import styled from "styled-components";

export const Div1 = styled.div`
    text-align: center;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;
export const Div2 = styled.div`
    text-align: center;
    width: 50%;
    margin-top: 30px;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background-color: #6fc3df;
    border-radius: 20px;

    @media screen and (max-width: 736px) {
        width: 90%;
    }
`;
export const Section = styled.section``;
export const H2 = styled.h2`
    color: black;
`;
export const Img = styled.img`
    filter: invert(28%) sepia(96%) saturate(1279%) hue-rotate(88deg) brightness(88%) contrast(93%);
    width: 100px;
    height: auto;
    margin-bottom: 1em;
    ::hover {
        transition: all 500ms ease-in-out;
        padding: 4px;
    }

    @media screen and (max-width: 736px) {
        width: 80px;
    }
`;
export const Ul = styled.ul`
    list-style: none;
    background-color: #242943;
    padding: 0;

    li {
        padding: 0;
    }
`;
