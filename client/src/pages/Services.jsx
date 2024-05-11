import React from 'react'
import { useAuth } from '../store/auth'

const Services = () => {
  const { services } = useAuth();

  return (
    <>
      <section className="section-service">
        <div className="container">
          <h1>Service</h1>
        </div>

        <div className="container grid grid-three--cols">
          {
            services.map((curElem, index) => {
              const { price, description, service, provider } = curElem;

              return (
                <div className="card" key={index}>
                  <div className="card-img">
                    <img src="/images/home.png" alt="no image" height="200px" width="200px" />
                  </div>
                  <div className="card-details">
                    <div className="grid grid-two--cols">
                      <p>{provider}</p>
                      <p>{price}</p>
                    </div>
                    <h2>{service}</h2>
                    <p>{description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Services

