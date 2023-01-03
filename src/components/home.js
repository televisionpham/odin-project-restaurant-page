const Home = () => {
  const element = document.createElement("main");
  element.innerHTML = `<div class="container">
    <div id="home">
        <h1>The Odin Project Restaurant</h1>
        <div class="card">
            <div class="card-title">Introduction</div>
            <div class="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
        </div>
        <div class="card">
            <div class="card-title">Hours</div>
            <div class="card-content">
                <ul>
                    <li>Sunday: 8am - 8pm</li>
                    <li>Monday: 8am - 8pm</li>
                    <li>Tuesday: 8am - 8pm</li>
                    <li>Wednesday: 8am - 8pm</li>
                    <li>Thursday: 8am - 8pm</li>
                    <li>Friday: 8am - 8pm</li>
                    <li>Saturday: 8am - 8pm</li>
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="card-title">Location</div>
            <div class="card-content">
                123 Forest Drive, Forestville, Maine
            </div>
        </div>
    </div>    
</div>`;

  return element;
};

export default Home;
