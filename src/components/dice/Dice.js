import React, { Component } from 'react';
import classNames from 'classnames';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Block, Result } from './Dice.styles';

/* Dice: contains Block (clickable button to generate random value with min/max value) and Result (presents value from Block onClick with specific styling according to normal, min and max possible value) */

class Dice extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { random: <FontAwesomeIcon icon={faDice} />, rollClass: 0 };
    }

    handleClick() {
        const min = 1; /* added to allow for cases when roll = min */
        const max = this.props.sides;
        const rand = Math.floor((Math.random() * max) + min);
        this.setState({ random: rand });
    }

    componentDidUpdate(_prevProps, prevState) {
        if (this.state.random !== prevState.random) {
            const min = 1;
            const max = this.props.sides;
            var rollClass = classNames({
                roll: true,
                'roll-max': this.state.random >= max,
                'roll-min': this.state.random <= min
            });
            this.setState({ rollClass: rollClass })
        }
    }

    render() {
        return (
            <div>
                <Block onClick={this.handleClick.bind(this)}>
                    <p>D{this.props.sides}</p>
                </Block>
                <Result className={this.state.rollClass}>
                    <span>{this.state.random}</span>
                </Result>
            </div >
        )
    }
}

export default Dice;