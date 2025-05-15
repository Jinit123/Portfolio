import React from 'react'
import P1 from '../assets/P1.png'
import ET from '../assets/ET.png'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const cards = containerRef.current.querySelectorAll(".card");

        gsap.fromTo(cards, {
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
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

    }, []);
    return (
        <div id='projects' className='container-fluid mainColor'>
            <h1 className='text-center text-white fontStyle fw-bold'>Projects</h1>
            <h6 className='text-white text-center mb-2'>Some of my work</h6>
            <div className='container p-5' ref={containerRef}>
                <div className="row g-4">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card text-white bg-dark shadow-lg" style={{ borderRadius: "12px" }}>
                            <div className="card-body text-center">
                                <div className='card-img-top' >
                                    <img src={P1} alt="" className='img-fluid' />
                                </div>
                                <h4 className="card-title fw-bold pb-3 mt-4 fontStyle">Clinical Diagnosis</h4>
                                <p className="card-text fontInter">A React-based platform where patients can book doctor appointments online as per their health needs.</p>
                                <div className="mt-3 d-flex align-items-center justify-content-center">
                                    <p className='card-text mb-0 me-2 text-info fontInter'>Technology Used</p>
                                    <i className="fab fa-react fa-2x text-info me-2"></i>
                                    <i className="fab fa-bootstrap fa-2x text-info"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card text-white bg-dark shadow-lg" style={{ borderRadius: "12px" }}>
                            <div className="card-body text-center">
                                <div className='card-img-top' >
                                    <img src={ET} alt="" className='img-fluid' />
                                </div>
                                <h4 className="card-title fw-bold pb-3 mt-4 fontStyle">Expense Tracker</h4>
                                <p className="card-text fontInter">A simple and user-friendly web app to track daily expenses and manage budgets effectively.</p>
                                <div className="mt-3 d-flex align-items-center justify-content-center pt-4">
                                    <p className='card-text mb-0 me-2 text-info fontInter'>Technology Used</p>
                                    <div className='d-flex gap-2'>
                                        <i className="fab fa-html5 fa-2x text-info "></i>
                                        <i className="fab fa-css3 fa-2x text-info"></i>
                                        <i className="fab fa-js fa-2x text-info"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
