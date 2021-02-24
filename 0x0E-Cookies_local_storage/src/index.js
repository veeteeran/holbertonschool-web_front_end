// document.getElementById("firstname").onclick = console.log("Clicked")

const setCookies = () => {
    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;
    let date = new Date();
    date.setDate(date.getDate() + 10);
    document.cookie = `firstname=${firstname};`
    document.cookie = `email = ${email};`
    document.cookie = `expires = ${date.toUTCString()};`
    document.cookie = `path = /`;
}

const showCookies = () => {
    const cookie = document.cookie;
    const p = document.createElement("p");
    p.innerHTML = `Cookies: ${cookie}`;
    document.body.append(p);
}