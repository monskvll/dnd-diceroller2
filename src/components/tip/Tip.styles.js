import styled from '@emotion/styled';

import { mint, bubblegum } from '../../theme/colors';

export const Text = styled.span`
    display: flex;
    justify-content: center;        
    color: ${mint.default};
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2em;        
    text-align: center;
    text-shadow: 1px 1px ${bubblegum.light};

    /* small screen */
    @media (min-width : 320px) and (max-width: 767px) {
        display: none;
    }
`;