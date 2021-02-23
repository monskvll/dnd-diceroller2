import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Logo } from './Title.styles';

/* Title: app title + github nickname as link */

const Title = () => {
    return (
        <Logo>
            <p><FontAwesomeIcon icon={faDiceD20} /> DND: Dice Roller</p>
            <a href="https://github.com/monskvll" target="_blank" rel="noreferrer">@monskvll</a>
        </Logo>
    );
};

export default Title;