const Header = () => {
  const element = document.createElement("header");
  element.innerHTML = `<nav class="container">
  <ul>
      <li><a class="nav-link" href="#" name="home">Home</a></li>
      <li><a class="nav-link" href="#" name="menu">Menu</a></li>
      <li><a class="nav-link" href="#" name="contact">Contact</a></li>
  </ul>
</nav>`;

  return element;
};

export default Header;
