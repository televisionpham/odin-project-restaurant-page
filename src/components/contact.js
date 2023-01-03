const Contact = () => {
  const element = document.createElement("main");
  element.innerHTML = `<div class="container">    
    <div id="contact">
        <h1>Contact Us</h1>
        <div class="card">
            <div class="card-title">The Restaurant</div>
            <div class="card-content">
                <p>Somebody</p>
                <p>555-555-5554</p>
                <p>totallyRealEmail@notFake.com</p>
            </div>
        </div>
    </div>
</div>`;

  return element;
};

export default Contact;
