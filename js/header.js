document.addEventListener('DOMContentLoaded', function () {
  const headerContainer = document.getElementById('headerID');
  headerContainer.innerHTML = generateHeader();
});

function generateHeader() {
  var doc = /*html*/`<header class="header_section">
  <div class="header_top">
    <div class="container-fluid header_top_container">
      <a class="navbar-brand " href="index.html"> JLI <span>Engineering</span> Services</a>
      <div class="contact_nav">
        <a href="location.html">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span>
            Location
          </span>
        </a>
        <a href="">
          <i class="fa fa-phone" aria-hidden="true"></i>
          <span>
            Call : +63936-771-6404
          </span>
        </a>
        <a href="">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <span>
          anljhn65@gmail.com
          </span>
        </a>
      </div>
      <div class="social_box">
        <a href="">
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
  <div class="header_bottom">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container ">
        <a class="navbar-brand navbar_brand_mobile" href="index.html"> JLI <span>ES</span></a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  ">
            <li class="nav-item ">
              <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="service.html">Services</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="about.html"> About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="project.html">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about-me.html">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="location.html">Location</a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  </div>
</header>`;
  return  doc;
}