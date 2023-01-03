const Header = () => {
  const element = document.createElement("header");
  element.innerHTML = `<nav class="container">
  <ul>
      <li><a class="nav-link" href="#home" name="home">Home</a></li>
      <li><a class="nav-link" href="#menu" name="menu">Menu</a></li>
      <li><a class="nav-link" href="#contact" name="contact">Contact</a></li>
  </ul>
</nav>`;

  return element;
};

export default Header;
