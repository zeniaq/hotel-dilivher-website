import styled from "styled-components";

export const Div1 = styled.div``;
export const Div2 = styled.div`
    text-align: center;
    height: 50vh;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-top: 90px;
`;
export const Section = styled.section``;
export const H3 = styled.h3`
    color: #ffffff;
    font-weight: 600;
    line-height: 1.65;
    margin: 0 0 1em 0;

    a {
        color: inherit;
        border-bottom: 0;
    }

    font-size: 1.35em;

    @media screen and (max-width: 736px) {
        font-size: 1.25em;
    }
`;
export const Img = styled.img`
    filter: invert(93%) sepia(37%) saturate(6779%) hue-rotate(1deg) brightness(105%) contrast(101%);
    width: 200px;
    height: auto;
    margin-bottom: 1em;

    :hover {
        filter: invert(26%) sepia(76%) saturate(5534%) hue-rotate(352deg) brightness(89%)
            contrast(130%);
        transition: all 500ms ease-in-out;
        padding: 4px;
    }

    @media screen and (max-width: 736px) {
        width: 80px;
    }
`;
export const Ul = styled.ul`
    list-style: none;
    padding: 0;

    li {
        padding: 0;
    }
`;
