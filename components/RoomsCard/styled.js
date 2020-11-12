import styled from "styled-components";

export const P = styled.p`
    color: #242943;
`;
export const Strong = styled.strong`
    font-weight: bold;
`;

export const Li = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const DivCard = styled.div`
    flex-flow: row;
    background-color: #dfe6ed;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 736px) {
        display: block;
    }
`;

export const Figure = styled.figure`
    position: relative;
    width: 150px;
    height: 150px;
    overflow: hidden;
    &:after {
        content: attr(data-title-item);
        position: absolute;
        bottom: 0;
        margin-left: 10px;
        padding: 6px 8px;
        max-width: 100%;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        background-color: #26364a;
        box-sizing: border-box;
    }
`;

export const Img = styled.img`
    position: absolute;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
    &:hover {
        transform: scale(1.1);
    }
`;

export const DivText = styled.div`
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 736px) {
        display: block;
    }
`;

export const DivInfo = styled.div`
    margin-right: 15px;
`;
