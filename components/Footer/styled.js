import styled from "styled-components";

export const FooterTag = styled.footer`
    padding: 4em 0 2em 0;
    margin: 0 auto;
    max-width: 65em;
    width: calc(100% - 6em);
    a {
        border-bottom: dotted 1px;
    }
`;
export const Div = styled.div``;
export const List1 = styled.ul`
    cursor: default;
    list-style: none;
    padding-left: 0;

    li {
        display: inline-block;
        padding: 0 1em 0 0;
    }

    li:last-child {
        padding-right: 0;
    }
    @media screen and (max-width: 736px) {
        li {
            padding: 0 0.75em 0 0;
        }
    }
`;
export const List2 = styled.ul`
    font-size: 0.8em;
    list-style: none;
    padding-left: 0;

    li {
        border-left: solid 1px rgba(212, 212, 255, 0.1);
        color: rgba(244, 244, 255, 0.2);
        display: inline-block;
        line-height: 1;
        margin-left: 1em;
        padding-left: 1em;
    }

    li:first-child {
        border-left: 0;
        margin-left: 0;
        padding-left: 0;
    }
    @media screen and (max-width: 480px) {
        li {
            display: block;
            border-left: 0;
            margin-left: 0;
            padding-left: 0;
            line-height: inherit;
        }
    }
`;
