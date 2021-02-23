import React from 'react';
import { GlobalHotKeys } from 'react-hotkeys';
import styled from '@emotion/styled';

import Dice from '../components/dice/Dice';
import Layout from '../components/Layout';
import { keyMap, handlers } from '../components/thanks/Thanks';
import Tip from '../components/tip/Tip';
import Title from '../components/title/Title';

/* APP */

/* STYLING: media queries presented as "small screen" for mobile and "medium screen" for tablet-like devices, as per airbnb's styling guidelines */

const Panel = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 10em 1em 5em;

    /* small screen */
    @media (max-width: 767px) and (orientation: portrait) {
        padding: 3em 1em 0;
    }

    @media (max-width: 767px) and (orientation: landscape) {
        padding: 4em 1em 0;
    }
`;

const Index = () => {
    return (
        <div>
            <Layout>
                <Title />
                <Panel>
                    <Dice sides="4" />
                    <Dice sides="6" />
                    <Dice sides="8" />
                    <Dice sides="10" />
                    <Dice sides="12" />
                    <Dice sides="20" />
                </Panel >
                <Tip />
            </Layout>
            <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
        </div>
    )
}

export default Index;