import styled from "styled-components";

export const Li = styled.li`
    a.icon.alt:before {
        -moz-transition: background-color 0.2s ease-in-out;
        -webkit-transition: background-color 0.2s ease-in-out;
        -ms-transition: background-color 0.2s ease-in-out;
        transition: background-color 0.2s ease-in-out;
    }

    a.icon.alt:hover:before {
        background-color: #6fc3df;
    }

    a.icon.alt:active:before {
        background-color: #37a6cb;
    }
`;
export const Anchor = styled.a``;
