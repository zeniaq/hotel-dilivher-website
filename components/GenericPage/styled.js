import styled from "styled-components";

const Div = styled.div`
    background-color: #2a2f4a;
    background-color: transparent;
    border-bottom: solid 1px rgba(212, 212, 255, 0.1);
    > * {
        border-top: solid 1px rgba(212, 212, 255, 0.1);
    }
    > *:first-child {
        border-top: 0;
    }
    > * > .inner {
        padding: 4em 0 2em 0;
        margin: 0 auto;
        max-width: 65em;
        width: calc(100% - 6em);
    }

    @media screen and (max-width: 736px) {
        > * > .inner {
            padding: 3em 0 1em 0;
            width: calc(100% - 3em);
        }
    }
`;

export default Div;
