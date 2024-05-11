import React from 'react'


function Home() {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two--cols">
            <div className="hero-content">
              <h1>Welcome to EduUniverse name</h1>
              <p>I am lern MERN with BldVictry Technical</p>
              <p>Are you ready to taketour business to the next level with cutting-edge IT solution? Look no further! At Thap Technical we spacialize in providing innovative IT services and solution meet your unique idia?  </p>

              <div className=" btn-group">
                <a href="/contact"><button className="btn btn-con">Connect now</button></a>
                <a href="/services"><button className="btn btn-more">learn more</button></a>

              </div>
            </div>
            <div className="hero-image">
              <figure>
                <img src="/images/home.png" alt="no imgae" width=" 600" height="400" />
              </figure>
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}

      <section className="section-hero">
        <div className="container grid grid-two--cols">
        <div className="hero-image">
            <figure>
              <img src="/images/study.png" alt="no imgae" width=" 600" height="400" />
            </figure>
          </div>
          <div className="hero-content">
            <h1>Get Started Today</h1>
            <p>I am lern MERN with BldVictry Technical</p>
            <p>Ready to take first step towords a more afficient and secure IT infrastructure? Contact us today for a free consultation and let's discus how EduUniverse can help your business thrive in digital age </p>

            <div className=" btn-group">
              <a href="/contact"><button className="btn btn-con">Connect now</button></a>
              <a href="/services"><button className="btn btn-more">learn more</button></a>
            </div>
          </div>
         
        </div>
      </section>

    </>
  )
}

export default Home;

