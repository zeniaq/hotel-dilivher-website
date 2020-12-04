import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    justify-content: center;
`;
export const DivMenu = styled.div`
    display: block;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    background-color: #dfe6ed;
    width: 450px;
    @media screen and (max-width: 736px) {
        width: 95%;
    }
`;
export const Ammount = styled.div`
    background-color: #242943;
    display: block;
    margin: 5px;
    margin-bottom: 35px;
    border-radius: 3px;
    padding: 5px 20px;
`;
export const P = styled.p`
    font-size: 0.8em;
    font-weight: bold;
`;
export const H1 = styled.h1`
    font-size: 27px;
    font-weight: bold;
`;
export const Header = styled.div`
    border-bottom: 1px solid #999;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    margin-top: 20px;
`;
export const Anchor = styled.a`
    height: 20px;
`;
export const ImgLogo = styled.img`
    height: 20px;
`;
export const H2 = styled.h2`
    color: #242943;
    font-weight: bold;
    font-size: 18px;
`;
export const Options = styled.div`
    padding: 15px;
    margin-top: 20px;
    @media screen and (max-width: 736px) {
        padding: 10px;
    }
`;
export const Option = styled.div`
    cursor: pointer;
    background-color: #f8f9fa;
    border-radius: 3px;
    margin-top: 10px;
    display: block;
    flex-flow: row;
    height: 35px;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    @media screen and (max-width: 736px) {
        padding: 5px;
    }
`;
export const H3 = styled.h3`
    color: #242943;
    font-size: 15px;
    font-weight: 500;
    margin-right: 30px;
    float: left;
    @media screen and (max-width: 736px) {
        margin-right: 10px;
    }
`;
export const ImgPay = styled.img`
    height: 15px;
    margin-top: 5px;
    margin-left: 10px;
    float: right;
`;

export const Sup = styled.sup`
    font-size: 15px;
`;
export const PaySystem = styled.div``;
