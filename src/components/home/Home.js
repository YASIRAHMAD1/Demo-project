import React from 'react'
import Navbar from '../navbar/Nvabar'

function Home() {
  return (
    <div>
        <Navbar />
      <section className="breadcrumb-section">
        <div className="banner position-relative">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12 text-lg-left text-center" data-wow-delay="0.2s">
                <div className="banner-text">
                  <h2 className="c-white mb-3 mb-md-4">ALAREZ LIMITED RELIABLE INVESTMENT RETURNS </h2>
                  <p className="c-white">ALAREZ helps generate strong investment returns and meets long-term goals,  We are a leading global investment solutions partner, dedicated to improving people's financial security.</p>
                  <a href="/about" className="btn btn-lg btn-custom btn-light mt-4">Read About Us</a>
                </div>
              </div>
              <div className="col-lg-6 col-12 d-none d-lg-block wow zoomIn" data-wow-delay="0.4s">
                <div className="banner-img">
                  <img src="img/home/banner-vector.png" alt="business" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="cta-section position-relative">
        <div class="container">
            <div class="cta-box bg-white wow fadeInUp" data-wow-delay="0.2s">
                <h3>Start growing with ALAREZ today!</h3>
                <p class="mb-20 mx-auto">we are provideing a $800000</p>
                <a href="/signup" class="btn btn-lg btn-custom">Join Now <i class="zmdi zmdi-long-arrow-right ml-2"></i></a>
            </div>
        </div>
    </section>

      <div className="project-section bg-w sp-100-70">
        <div className="container">
          <div className="row d-none d-md-flex">
            <div className="col-12">
              <ul className="sorting mb-60">
              </ul>
            </div>
          </div>
          <div className="row masonary-wrap">
            <div className="col-lg-4 col-md-6 col-12 port-item mb-30 webdesign digitalmarketing">
              <div className="project">
                <div className="proj-img">
                  <img src="img/project/portfolio-1.jpg" alt="project" />
                  <div className="proj-overlay">
                    <h5>Sourcing key investment ideas designed to deliver real value</h5>
                    <a href="img/project/portfolio-1.jpg" className="pop-btn">
                      <i className="zmdi zmdi-zoom-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 port-item mb-30 seo graphicdesign">
              <div className="project">
                <div className="proj-img">
                  <img src="img/project/portfolio-2.jpg" alt="project" />
                  <div className="proj-overlay">
                    <h5>Balancing yield and total return</h5>
                    <a href="img/project/portfolio-2.jpg" className="pop-btn">
                      <i className="zmdi zmdi-zoom-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 port-item mb-30 webdesign graphicdesign">
              <div className="project">
                <div className="proj-img">
                  <img src="img/project/portfolio-3.jpg" alt="project" />
                  <div className="proj-overlay">
                    <h5>Research & insights From our global team of researchers and strategists</h5>
                    <a href="img/project/portfolio-3.jpg" className="pop-btn">
                      <i className="zmdi zmdi-zoom-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<section class="bg-light sp-100-70">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2>investment plans</h2>
            </div>
        </div>
    </div>
</section>
<section className="bg-light sp-100-70">
    <div className="container">
        <div className="tab-content wow fadeIn">
            <div role="tabpanel" className="tab-pane fade show active" id="yearly">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-30">
                        <div className="price-item text-center">
                            <div className="">
                                <h2>10%</h2>
                                <h4 className="mb-0">DAILY FOREVER</h4>
                            </div>
                            <div className="price-content">
                                <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                                    <li>
                                        <i className="zmdi zmdi-check mr-2"></i>
                                        <span className="c-black">Daily Profit 10%</span>
                                    </li>
                                    <li>
                                        <i className="zmdi zmdi-check mr-2"></i>
                                        <span className="c-black">Min $5 - $500</span>
                                    </li>
                                    <li>
                                        <i className="zmdi zmdi-check mr-2"></i>
                                        <span className="c-black">Instant Payment</span>
                                    </li>
                                </ul>
                                <a href="?a=signup" className="btn btn-custom">Invest Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-30">
                        <div className="price-item text-center">
                            <div className="">
                                <h2>12%</h2>
                                <h4 className="mb-0">DAILY FOREVER</h4>
                            </div>
                            <div className="price-content">
                                <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                                    <li>
                                        <i className="zmdi zmdi-check mr-2"></i>
                                        <span className="c-black">Daily Profit 12%</span>
                                    </li>
                                    <li>
                                        <i className="zmdi zmdi-check mr-2"></i>
                                        <span className="c-black">Min $500 - $1000</span>
                                    </li>
                                    <li>
                                        <i className="zmdi zmdi-check mr-2"></i>
                                        <span className="c-black">Instant Payment</span>
                                    </li>
                                </ul>
                                <a href="?a=signup" className="btn btn-custom">Invest Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-30">
                        <div className="price-item text-center">
                            <div className="">
                                <h2>15%</h2>
                                <h4 className="mb-0">DAILY FOREVER</h4>
                            </div>
                            <div className="price-content">
                                <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                                    <li>
                                        <i className="zmdi zmdi-check mr-2"></i>
                                        <span className="c-black">Daily Profit 15%</span>
                                    </li>
                                    <li>
                                        <i className="zmdi zmdi-check mr-2"></i>
                                        <span className="c-black">Min $1000 - $100000</span>
                                    </li>
                                    <li>
                                        <i className="zmdi zmdi-check mr-2"></i>
                                        <span className="c-black">Instant Payment</span>
                                    </li>
                                </ul>
                                <a href="?a=signup" className="btn btn-custom">Invest Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="sp-100-70 bg-gradi counters-section" id="counters">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h3 className="top-c-sep  c-white">Some of Company Real Facts</h3>
                        
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-3 col-md-6 mb-30">
                    <div className="counter-box d-flex d-lg-block">
                        <div className="icon-box mb-3">
                            
                        </div>
                        <div className="ml-5 ml-lg-0 pt-1 pt-lg-0">
                            <h3 className="" >5</h3>
                            <p className="c-black text-capitalize"> Days Online</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-30">
                    <div className="counter-box d-flex d-lg-block">
                        <div className="icon-box mb-3">
                            
                        </div>
                        <div className="ml-5 ml-lg-0 pt-1 pt-lg-0">
                            <h3 className="" >509</h3>
                            <p className="c-black text-capitalize"> Total Accounts</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-30">
                    <div className="counter-box d-flex d-lg-block">
                        <div className="icon-box mb-3">
                            
                        </div>
                        <div className="ml-5 ml-lg-0 pt-1 pt-lg-0">
                            <h3 className="" >$ 10452.15</h3>
                            <p className="c-black text-capitalize"> Total Deposited</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-30">
                    <div className="counter-box d-flex d-lg-block">
                        <div className="icon-box mb-3">
                            
                        </div>
                        <div className="ml-5 ml-lg-0 pt-1 pt-lg-0">
                            <h3 className="" >$ 1914.40</h3>
                            <p className="c-black text-capitalize">Total Withdrawl</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="sp-100-70  counters-section" id="counters">
  <div className="container">
    <div className="row align-items-center justify-content-center">
      <div className="col-lg-3 col-md-6 mb-30">
        <div style={{border:"solid 1px black", borderRadius:"10px", width:"100%", maxWidth: "200px", height:"130px", display:"flex", alignItems:"center", transition: "box-shadow 0.3s"}}>
          <div className="icon-box mb-3">
          </div>
          <div className="ml-5 ml-lg-0 pt-1 pt-lg-0">
            <img src="img/client/client-1.png" className="rounded" alt="client 1" style={{maxWidth: "100%", height: "auto"}} />
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-30">
        <div style={{border:"solid 1px black", borderRadius:"10px", width:"100%", maxWidth: "200px", height:"130px", display:"flex", alignItems:"center", transition: "box-shadow 0.3s"}}>
          <div className="icon-box mb-3">
          </div>
          <div className="ml-5 ml-lg-0 pt-1 pt-lg-0">
            <img src="img/client/client-2.png" className="rounded" alt="client 2" style={{maxWidth: "100%", height: "auto"}} />
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-30">
        <div style={{border:"solid 1px black", borderRadius:"10px", width:"100%", maxWidth: "200px", height:"130px", display:"flex", alignItems:"center", transition: "box-shadow 0.3s"}}>
          <div className="icon-box mb-3">
          </div>
          <div className="ml-5 ml-lg-0 pt-1 pt-lg-0">
            <img src="img/client/client-3.png" className="rounded" alt="client 3" style={{maxWidth: "100%", height: "auto"}} />
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-30">
        <div style={{border:"solid 1px black", borderRadius:"10px", width:"100%", maxWidth: "200px", height:"130px", display:"flex", alignItems:"center", transition: "box-shadow 0.3s"}}>
          <div className="icon-box mb-3">
          </div>
          <div className="ml-5 ml-lg-0 pt-1 pt-lg-0">
            <img src="img/client/client-4.png" className="rounded" alt="client 4" style={{maxWidth: "100%", height: "auto"}} />
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-30">
        <div style={{border:"solid 1px black", borderRadius:"10px", width:"100%", maxWidth: "200px", height:"130px", display:"flex", alignItems:"center", transition: "box-shadow 0.3s"}}>
          <div className="icon-box mb-3">
          </div>
          <div className="ml-5 ml-lg-0 pt-1 pt-lg-0">
            <img src="img/client/client-5.png" className="rounded" alt="client 5" style={{maxWidth: "100%", height: "auto"}} />
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-30">
        <div style={{border:"solid 1px black", borderRadius:"10px", width:"100%", maxWidth: "200px", height:"130px", display:"flex", alignItems:"center", transition: "box-shadow 0.3s"}}>
          <div className="icon-box mb-3">
          </div>
          <div className="ml-5 ml-lg-0 pt-1 pt-lg-0">
            <img src="img/client/client-6.png" className="rounded" alt="client 6" style={{maxWidth: "100%", height: "auto"}} />
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-30">
        <div style={{border:"solid 1px black", borderRadius:"10px", width:"100%", maxWidth: "200px", height:"130px", display:"flex", alignItems:"center", transition: "box-shadow 0.3s"}}>
          <div className="icon-box mb-3">
          </div>
          <div className="ml-5 ml-lg-0 pt-1 pt-lg-0">
            <img src="img/client/client-7.png" className="rounded" alt="client 7" style={{maxWidth: "100%", height: "auto"}} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</section>
    <section className="cta-section position-relative">
        <div className="container">
            <div className="cta-box bg-white wow fadeInUp" data-wow-delay="0.2s">
                <h3>REFERRAL COMMISSIONS 5%</h3>
                
            </div>
        </div>
    </section>
    <footer className="sp-100-70 bg-gradi counters-section" id="counters">
        <div className="container">
            <div className="footer-top">
                <div className="row">
                    <div className="col-md-6 col-xl-3 mb-30">
                        <div className="mb-30">
                            <img className="logo-footer" src="img/logo-light.png" alt="Bootbox"/>
                        </div>
                        <p className="mb-30 c-white">We are a leading global investment solutions partner, dedicated to improving peoples financial security.</p>
                        <div className="socials">
                            <a href="#" className="zmdi zmdi-facebook"></a>
                            <a href="#" className="zmdi zmdi-twitter"></a>
                            <a href="#" className="zmdi zmdi-google"></a>
                            <a href="#" className="zmdi zmdi-instagram"></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 mb-30">
                        <h4 className="btm-sep pb-3 mb-30 c-white font-weight-semi-bolder">Our company</h4>
                        <div className="foot-links">
                            <a href="?a=home">Home</a>
                            <a href="?a=about">About Us</a>
                            
                            <a href="?a=faq">FAQ</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 mb-30">
                        <h4 className="btm-sep pb-3 mb-30 c-white font-weight-semi-bolder">User</h4>
                        <div className="foot-links">
                            <a href="?a=rules">Terms</a>
                            <a href="?a=support">Contact Us</a>
                            <a href="?a=login">Log In</a>
                            <a href="?a=signup">Sign Up</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 mb-30">
                        <h4 className="btm-sep pb-3 mb-30 c-white font-weight-semi-bolder">Contact us</h4>
                        <ul className="contact-info mt-4">
                            <li>
                                <i className="zmdi zmdi-pin"></i>
                                101 Edgware Road, London, W2 2HX
                            </li>
                            <li>
                                <i className="zmdi zmdi-email"></i>
                                ceo@alarez.biz
                            </li>
                            <li>
                                <i className="zmdi zmdi-phone"></i>
                                +44 566-7855-637
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright text-center c-white">
                ALAREZ LIMITED<span className="d-none d-md-inline-block">All rights reserved.</span>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Home
