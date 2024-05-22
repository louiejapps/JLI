document.addEventListener('DOMContentLoaded', function () {
  const footerContainer = document.getElementById('footer');
  footerContainer.innerHTML = generateFooter();
});

function generateFooter() {
  return /*html*/`
  <section class="info_section ">
    <div class="info_container layout_padding2">
      <div class="container">
        <div class="info_logo">
          <a class="navbar-brand" href="index.html"> JLI<span> Engineering Services</span> </a>
        </div>
        <div class="info_main">
          <div class="row">
            <div class="col-md-3 col-lg-2">
              <div class="info_link-box">
                <h5>
                  Useful Link
                </h5>
                <ul>
                  <li class=" active">
                    <a class="" href="index.html">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="">
                    <a class="" href="about.html">About </a>
                  </li>
                  <li class="">
                    <a class="" href="service.html">Services </a>
                  </li>
                  <li class="">
                    <a class="" href="project.html"> Projects </a>
                  </li>
                  <li class="">
                  <a class="" href="about-me.html"> Profile </a>
                  </li>
                  <li class="">
                    <a class="" href="contact.html"> Contact </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 ">
              <h5>
                Slogan
              </h5>
              <p>
              Precision in Every Plan.<br>
              Excellence in Every Build.<br><br>
              </p>
            </div>
            <div class="col-md-3 mx-auto  ">
              <h5>
                social media
              </h5>
              <div class="social_box">
                <a href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <h5>
                HEADQUARTERS
              </h5>
              <p>
              Menarco Tower<br>
              32nd Street, BGC<br>
              Taguig City, Metro Manila
              </p>
            </div>
          </div>
        </div>
        <div class="info_bottom">
          <div class="row">
            <div class="col-lg-9">
              <div class="info_contact ">
                <div class="row">
                  <div class="col-md-3">
                    <a href="location.html" class="link-box">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span>
                        Location
                      </span>
                    </a>
                  </div>
                  <div class="col-md-5">
                    <a href="#" class="link-box">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      <span>
                        Call +63936-771-6404
                      </span>
                    </a>
                  </div>
                  <div class="col-md-4">
                    <a href="#" class="link-box">
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      <span>
                        anljhn65@gmail.com
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="info_form ">
                <form action="">
                  <input type="email" placeholder="Enter Your Email" />
                  <button>
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end info section -->

  <!-- footer section -->
  <footer class="footer_section">
    <div class="container">
      <p>
        &copy; 2024 All Rights Reserved
        
      </p>
    </div>
  </footer>
              `;
}