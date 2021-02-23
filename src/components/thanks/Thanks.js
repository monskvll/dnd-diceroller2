/* Thanks: Konami Code easter egg: press key sequence in keyMap to present handlers alert */

export const keyMap = {
    konamiCode: 'up up down down left right left right b a'
};

export const handlers = {
    konamiCode: event =>
        alert(
            "Special thanks to shvvffle, Hugus, Helkhan & Master Nuno. ❤"
        ),
};