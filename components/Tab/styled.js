import styled from "styled-components";

export const Anchor = styled.a`
    text-decoration: none;
    color: black;
    display: block;
    position: relative;
    top: 4px;
    padding: 10px 25px;
    border-radius: 2px 2px 0 0;
    background: white;
    opacity: 0.7;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    :hover {
        opacity: 1;
        top: 0;
    }
    ${(props) => (props.id === props.actual ? `opacity: 1;top: 0;` : null)}
`;
export const Li = styled.li`
    :not(:last-child) {
        margin-right: 7px;
    }
`;
export const Ul = styled.ul`
    list-style: none;
    display: flex;
    overflow-scrolling: touch;
    overflow-x: auto;
    overflow-y: hidden;
`;
export const Container = styled.div`
    padding: 20px;
    @media screen and (max-width: 736px) {
        padding: 10px;
    }
`;
export const Content = styled.div`
    position: relative;
    z-index: 2;
    padding: 5px;
    border-radius: 0 3px 3px 3px;
    background: white;
`;
export const Panel = styled.div`
    background-color: rgba(36, 41, 67, 0.9);
    padding: 5px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 736px) {
        display: block;
    }
`;
export const Div2 = styled.div``;
