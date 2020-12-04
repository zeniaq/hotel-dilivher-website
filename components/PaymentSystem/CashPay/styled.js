import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    justify-content: center;
`;
export const OxxoPay = styled.div`
    width: 450px;
    display: block;
    flex-flow: row;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid #333;
    font-family: "Open Sans", sans-serif;
    color: #4f5365;
    background-color: #dfe6ed;
    overflow: hidden;
    @media screen and (max-width: 736px) {
        width: 95%;
        padding: 10px;
    }
`;
export const Header = styled.div``;
export const Reminder = styled.div`
    padding: 5px;
    font-size: 11px;
    text-transform: uppercase;
    text-align: center;
    color: #ffffff;
    background: #242943;
`;
export const Info = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 736px) {
        display: block;
    }
`;
export const Brand = styled.div`
    margin-right: 10px;
    @media screen and (max-width: 736px) {
        margin-right: 0;
    }
`;
export const Img = styled.img`
    max-width: 150px;
    display: block;
    margin: auto;
`;
export const Ammount = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    width: 55%;
    @media screen and (max-width: 736px) {
        margin-top: 10px;
        width: 100%;
    }
`;
export const Reference = styled.div`
    margin-top: 14px;
    margin-bottom: 14px;
`;
export const Instructions = styled.div`
    margin: 0px;
    padding: 10px;
    border-top: 1px solid #b0afb5;
    background-color: #f8f9fa;
`;
export const FootNote = styled.div`
    margin-top: 22px;
    padding: 2px;
    display: block;
    color: #242943;
    text-align: center;
    border: 1px solid #242943;
    border-radius: 3px;
    background: #ffffff;
    font-size: 14px;
`;
export const TitleH3 = styled.h3`
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    color: #242943;
    display: block;
    margin: auto;
`;
export const TitleH2 = styled.h2`
    font-size: 30px;
    color: #000000;
    line-height: 24px;
    margin-bottom: 15px;
    @media screen and (max-width: 736px) {
        text-align: center;
    }
`;
export const Sup = styled.sup`
    font-size: 12px;
`;
export const P = styled.p`
    font-size: 10px;
`;
export const TitleH1 = styled.h1`
    font-size: 27px;
    color: #000000;
    text-align: center;
    border: 1px solid #242943;
    border-radius: 3px;
    background-color: #f8f9fa;
    @media screen and (max-width: 736px) {
        font-size: 22px;
    }
`;
export const OrderList = styled.ol`
    margin: 17px 0 0 16px;
`;
export const Item = styled.li`
    width: 100%;
    margin-top: 10px;
    color: #242943;
    font-size: 12px;
`;
export const Anchor = styled.a`
    transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
    color: inherit;
    text-decoration: none;
    border-bottom: dotted 1px;
    :hover {
        border-bottom-color: transparent;
        color: #9bf1ff !important;
    }
    :active {
        color: #53e3fb !important;
    }
`;
export const Strong = styled.strong`
    font-weight: bold;
`;
export const DivPrint = styled.div`
    width: 450px;
    display: flex;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border: 1px solid #333;
    background-color: #dfe6ed;
    @media screen and (max-width: 736px) {
        width: 95%;
        padding: 10px;
    }
`;
