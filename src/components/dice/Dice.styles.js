import styled from '@emotion/styled';

import { bubblegum, gold, mint } from '../../theme/colors';

export const Block = styled.button`
    display: flex;
    justify-content: center;    
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;     
    color: ${bubblegum.default};
    font-size: 3.25em;  
    background: ${mint.default};
    border: 5px solid ${mint.light};
    border-radius: 20px;
    margin: .1em .1em .2em;
    width: 3.5em;
    transition: 180ms;
    outline: none;

    /* small screen */
    @media (max-width: 767px) and (orientation: portrait) {
        font-size: 1.85em;
        margin: .1em .1em .1em;
    }

    @media (max-width: 767px) and (orientation: landscape) {
        font-size: 1.5em;
    }

    /* medium screen */
    @media (max-width: 1279px) and (min-width: 768px) and (orientation: landscape) {
        font-size: 2.5em;
    }

    &:hover {
        color: ${mint.default};
        background: ${bubblegum.default};
        border-color: ${bubblegum.light};
    }

    &:active {        
        background: ${bubblegum.light};
        border-color: ${bubblegum.default}
    }
`;

export const Result = styled.div`
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 7em;    
    color: ${bubblegum.default};
    text-shadow: 2px 2px ${bubblegum.light}; 

    &.roll-min {
        color: ${mint.light};
        text-shadow: 2px 2px ${mint.default};
    }

    &.roll-max {
        color: ${gold.default};
        text-shadow: 2px 2px ${bubblegum.default};
    }

    /* small screen */
    @media (max-width: 767px) and (orientation: portrait) {
        font-size: 2em;
        margin: .5em 0 .5em;
    }

    @media (max-width: 767px) and (orientation: landscape) {
        font-size: 3em;
        margin: .25em 0 .5em;
    }

    /* medium screen */
    @media (max-width: 1279px) and (min-width: 768px) and (orientation: portrait) {
        font-size: 5em;
    }
`;