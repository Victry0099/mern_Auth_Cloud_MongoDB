import React from 'react'
import { useAuth } from '../store/auth';

const About = () => {
  const {user}= useAuth();
  return (
    <>
      <section>
        <div className="main-about">
          <div className="about-left-content">
            <p className="para-about">Welcome to EduUniverse</p>
            <p className="para-about ">Welcome <span className="user">{user ? `${user.username}` :`to our website`}</span></p>
            <h1>Why Choose Us?</h1>
            <p className="para-about">Experties: Our team of experienced IT professionals wheo are passionate avout staying up-to-date with the latest industry trends</p>

            <p className="para-about">Customization: We understand that every business unique. That's why  we create solution that are tailored to your specific needs and goals</p>
            <p className="para-about">Costumer-Centric-Approach: We priortize your satisfaction and provide top-notch support to address your IT concerns</p>

            <p className="para-about">Affordability: We offer competative pricing without compromising on the quality of our Services </p>

            <p className="para-about">Reliability: Count on us to be there when you need us We're commited to esnuring your IT environment is reliavle and availavle 24/7.</p>

            <div className=" btn-group">
              <a href="/contact"><button className="btn btn-con">Connect now</button></a>
              <a href="/services"><button className="btn btn-more">learn more</button></a>
            </div>
          </div>
          <div className="about-right-image">
            <figure>
              <img src="./images/study.png" alt="no image" />
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
