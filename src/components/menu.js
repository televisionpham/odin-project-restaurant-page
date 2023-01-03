const Menu = () => {
  const element = document.createElement("main");
  element.innerHTML = `<div class="container">    
    <div id="menu">
        <h1>Menu</h1>
        <h2>Beverages</h2>
        <div class="card">
            <div class="card-title">Black Coffee</div>
            <div class="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
            <img src="./images/drink-01.JPG" class="card-image">
            <div class="card-footer">
                <strong>Price: $100</strong>
            </div>
        </div>
        <div class="card">
            <div class="card-title">Cappuchino</div>
            <div class="card-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
            <img src="./images/drink-02.JPG" class="card-image">
            <div class="card-footer">
                <strong>Price: $100</strong>
            </div>
        </div>
    </div>    
</div>`;

  return element;
};

export default Menu;
