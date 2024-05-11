import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (userData && user) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
      setUserData(false);
    }
  }, [userData, user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactURL = "http://localhost:5000/api/form/contact";

    try {
      const response = await fetch(contactURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two--cols">
              <div className="login-image">
                <img
                  src="/images/login.png"
                  alt="no image"
                  width="500"
                  height="500"
                />
              </div>
              {/* Form elements */}
              <div className="login-form">
                <h1 className="main-heading mb-3">Contact Us</h1>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter your name"
                      required
                      autoComplete="off"
                      value={contact.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="abc@gmail.com"
                      required
                      autoComplete="off"
                      value={contact.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="text-div">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="42"
                      rows="3"
                      value={contact.message}
                      onChange={handleInput}
                      placeholder="Write your message"
                    ></textarea>
                  </div>
                  <div className="con-btn">
                    <button className="btn btn-submit" type="submit">
                      Contact Me
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Map */}
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4886935880286!2d77.37325857515475!3d28.615112075674265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff5d2a061a9%3A0x9452c0d3d2d2717c!2sParexl%20Workspaces%20-%20Coworking%20Space%20in%20Noida!5e0!3m2!1sen!2sin!4v1711158907098!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
          </div>
        </main>
      </section>
    </>
  );
};

export default Contact;
