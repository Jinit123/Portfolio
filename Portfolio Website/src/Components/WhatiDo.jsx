import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


const WhatiDo = () => {

  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // const cards = containerRef.current.querySelectorAll(".card");

    gsap.fromTo(containerRef.current, {
      opacity: 0,
      y: 50
    },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        delay: 0.5,
        marker: true,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      }
    );

  }, []);


  return (
    <div id='whatiDo' className='container-fluid mainColor'>
      <div ref={containerRef}>
        <h1 className='text-center text-white fontStyle fw-bold'>What I Do</h1>
        <h6 className='text-white text-center mb-2'>My Services</h6>
        <div className='container p-5' ref={containerRef}>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card text-white bg-dark shadow-lg" style={{ borderRadius: "12px" }}>
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="fas fa-laptop-code fa-3x text-info p-3"></i>
                  </div>
                  <h4 className="card-title fw-bold pb-3 fontStyle">Full-Stack Dev</h4>
                  <p className="card-text fontInter">
                    I build dynamic, high-performance web applications using MongoDB, Express.js, React, and Node.js. By leveraging the power of MERN, I ensure seamless integration between the frontend and backend, delivering a fast, scalable, and user-friendly experience.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card text-white bg-dark shadow-lg" style={{ borderRadius: "12px" }}>
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="fab fa-react fa-3x text-info p-3"></i>
                  </div>
                  <h4 className="card-title fw-bold pb-3 fontStyle">React Interfaces</h4>
                  <p className="card-text fontInter">
                    Using React.js, I craft intuitive and interactive user interfaces that enhance user experience. From responsive designs to state management, my focus is on creating fast, efficient, and visually appealing applications optimized for performance.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card text-white bg-dark shadow-lg" style={{ borderRadius: "12px" }}>
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="fab fa-node-js fa-3x text-info p-3"></i>
                  </div>
                  <h4 className="card-title fw-bold pb-3 fontStyle">Node & Express</h4>
                  <p className="card-text fontInter">
                    With Node.js and Express.js, I develop robust and scalable backend solutions. Whether it's API development, real-time processing, or server-side logic, I ensure smooth data flow and secure communication between the client and database</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card text-white bg-dark shadow-lg" style={{ borderRadius: "12px" }}>
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="fas fa-database fa-3x text-info p-3"></i>
                  </div>
                  <h4 className="card-title fw-bold pb-3 fontStyle"> Database Management</h4>
                  <p className="card-text fontInter">
                    MongoDB allows me to create flexible and efficient database structures that scale with demand. With optimized queries and structured data handling, I ensure fast retrieval and storage, making applications data-driven and highly performant.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card text-white bg-dark shadow-lg" style={{ borderRadius: "12px" }}>
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="fas fa-exchange-alt fa-3x text-info p-3"></i>
                  </div>
                  <h4 className="card-title fw-bold pb-3 fontStyle">API Integration</h4>
                  <p className="card-text fontInter">
                    I design and implement RESTful and GraphQL APIs for seamless communication between frontend and backend systems. Secure authentication, efficient data exchange, and third-party integrations ensure a smooth and connected experience.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card text-white bg-dark shadow-lg" style={{ borderRadius: "12px" }}>
                <div className="card-body text-center">
                  <div className="mb-3">
                    <i className="fas fa-tachometer-alt fa-3x text-info p-3"></i>
                  </div>
                  <h4 className="card-title fw-bold pb-3 fontStyle">Performance, Speed, Scaling</h4>
                  <p className="card-text fontInter pb-4">
                    From code efficiency to server-side optimizations, I focus on improving application speed and scalability. Caching strategies, load balancing, and responsive UI ensure that applications perform well under increasing user demand.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatiDo
