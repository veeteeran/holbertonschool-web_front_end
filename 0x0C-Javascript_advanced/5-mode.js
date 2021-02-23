#!/usr/bin/node

const changeMode = (
    size,
    weight,
    transform,
    background,
    color) => {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
}
    
const main = () => {
    const spooky = changeMode(
        9,
        'bold',
        'uppercase',
        'pink',
        'green'
    );

    const darkMode = changeMode(
        12,
        'bold',
        'capitalize',
        'black',
        'white'
    );

    const screamMode = changeMode(
        12,
        'normal',
        'lowercase',
        'white',
        'black'
    );

    let paragraph = document.createElement("P");
    paragraph.innerText = "Welcome Holberton!";
    document.body.appendChild(paragraph);
    
    let spookyButton = document.createElement("BUTTON");
    spookyButton.innerHTML = "Spooky";
    document.body.appendChild(spookyButton);
<<<<<<< HEAD
=======
    spookyButton.onclick = spooky;
>>>>>>> aa7dbafe39dea87d7c2180adbbb71a5fa45b5cd7

    let darkModeButton = document.createElement("BUTTON");
    darkModeButton.innerHTML = "Dark mode";
    document.body.appendChild(darkModeButton);
<<<<<<< HEAD
=======
    spookyButton.onclick = darkMode;
>>>>>>> aa7dbafe39dea87d7c2180adbbb71a5fa45b5cd7

    let screamModeButton = document.createElement("BUTTON");
    screamModeButton.innerHTML = "Scream mode";
    document.body.appendChild(screamModeButton);
<<<<<<< HEAD

=======
    spookyButton.onclick = screamMode;
>>>>>>> aa7dbafe39dea87d7c2180adbbb71a5fa45b5cd7
}

main();