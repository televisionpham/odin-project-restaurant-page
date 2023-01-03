import Header from "./components/header";
import Home from "./components/home";
import Menu from "./components/menu";
import Contact from "./components/contact";

const content = document.getElementById("content");

content.appendChild(Header());
content.appendChild(Home());

document.querySelector('a[name="home"]').addEventListener('click', () => {
    document.querySelector('main').remove()
    content.appendChild(Home())
})


document.querySelector('a[name="menu"]').addEventListener('click', () => {
    document.querySelector('main').remove()
    content.appendChild(Menu())
})

document.querySelector('a[name="contact"]').addEventListener('click', () => {
    document.querySelector('main').remove()
    content.appendChild(Contact())
})