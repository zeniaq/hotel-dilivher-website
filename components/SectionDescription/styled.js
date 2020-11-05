import styled from "styled-components";

export const Section = styled.section`
    padding: 4em 0 3em;
    margin: 0 auto;
    max-width: 65em;
    width: calc(100% - 6em);
`;
export const Div = styled.div``;
export const Header = styled.header`
    width: -moz-max-content;
    width: -webkit-max-content;
    width: -ms-max-content;
    width: max-content;
    margin-bottom: 2em;

    > :first-child {
        margin-bottom: 0;
        width: calc(100% + 0.5em);
    }
    > :first-child:after {
        content: "";
        background-color: #ffffff;
        display: block;
        height: 2px;
        margin: 0.325em 0 0.5em 0;
        width: 100%;
    }
`;
export const H2 = styled.h2`
    color: #ffffff;
    font-weight: 600;
    line-height: 1.65;
    margin: 0 0 1em 0;

    a {
        color: inherit;
        border-bottom: 0;
    }

    font-size: 1.75em;

    @media screen and (max-width: 736px) {
        font-size: 1.5em;
    }
`;
export const P = styled.p``;
export const Ul = styled.ul`
    li {
        padding: 0 0 0 1em;
        vertical-align: middle;
    }

    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    cursor: default;
    list-style: none;
    margin-left: -1em;
    padding-left: 0;

    a {
        background-color: transparent;
        border: 0;
        border-radius: 0;
        box-shadow: inset 0 0 0 2px #ffffff;
        color: #ffffff;
        cursor: pointer;
        display: inline-block;
        font-size: 0.8em;
        font-weight: 600;
        height: 3.5em;
        letter-spacing: 0.25em;
        line-height: 3.5em;
        padding: 0 1.75em;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        white-space: nowrap;
        padding-right: 4.5em;
        position: relative;
    }
    a:hover {
        box-shadow: inset 0 0 0 2px #9bf1ff;
        color: #9bf1ff;
    }

    a:before,
    a:after {
        background-position: center right;
        background-repeat: no-repeat;
        background-size: 36px 24px;
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        right: 1.5em;
        top: 0;
        width: 36px;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='36px' height='24px' viewBox='0 0 36 24' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23ffffff%3B stroke-width: 2px%3B %7D%3C/style%3E%3Cline x1='0' y1='12' x2='34' y2='12' /%3E%3Cline x1='25' y1='4' x2='34' y2='12.5' /%3E%3Cline x1='25' y1='20' x2='34' y2='11.5' /%3E%3C/svg%3E");
    }

    @media screen and (max-width: 1280px) {
        padding-right: 5em;
    }
`;
