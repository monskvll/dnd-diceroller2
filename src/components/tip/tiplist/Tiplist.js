import { Component } from "react";

/* Tiplist: get random string from tipsArray on page load */
/* tipsArray: contains strings with mostly Dungeons & Dragons/roleplaying tips*/

const tipsArray = [
    "Don't split the party.",
    "Don't split the party. Again.",
    "If you roll a 1 more than once with the same physical dice, throw it away.",
    "Check for traps.",
    "Loot everything that ain't nailed down.",
    "Loot everything that ain't nailed down. Except for that chest with teeth.",
    "The DM's word is rule.",
    "Don't be afraid to run.",
    "If the DM asks 'Are you sure?', don't be sure.",
    "Don't try to seduce the dragon.",
    "Beauty is in the eye of the beholder. Along with its death ray.",
    "If it looks like an ambush, it most likely is an ambush.",
    "Don't be a murderhobo.",
    "Be nice at the table.",
    "Share the loot.",
    "Rocks fall, everyone dies.",
    "Be a team player at the table and off it.",
    "Roleplay your character, it's way more fun for everyone!",
    "Compliment and thank each other after the session, share the love.",
    "The team having fun is more important than just you having fun.",
    "Talk to the mysterious stranger sitting by the the farthest table of the inn.",
    "Don't trust the bad guy.",
    "A natural 20 doesn't mean you can do the impossible.",
    "Kazuhisa Hashimoto created the Konami Code, a piece of gaming culture and history.",
    "Poke the sleeping tarrasque for a surprise!"
];

class Tiplist extends Component {

    constructor(props) {
        super(props);
        this.state = { currentTips: [] }
    };

    componentDidMount() {
        this.setState({ currentTips: tipsArray[Math.floor(Math.random() * tipsArray.length)] })
    }

    render() {
        return (
            <span>{this.state.currentTips}</span>
        );
    }
};

export default Tiplist;