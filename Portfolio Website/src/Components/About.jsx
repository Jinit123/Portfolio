import React from 'react'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    const containerRef = useRef(null);

    useEffect(() => {
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
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        )
    }, [])

    return (
        <div id='about' className='container-fluid mainColor'>
            <div className='row justify-content-center'>
                <div className='col-sm-12 col-md-10 col-lg-6'>
                    <div className="container p-5" ref={containerRef}>
                        <h1 className='text-center text-white fontStyle fw-bold m-0'>About Me</h1>
                        <h6 className='text-white text-center mb-5'>Get to know me</h6>
                        <p className='text-center text-white'>I am a MERN Stack Developer, passionate about building scalable, and user-friendly web applications using MongoDB, Express.js, React, and Node.js. My expertise lies in crafting seamless backend systems that integrate effortlessly with dynamic frontend experiences, ensuring optimal performance and a smooth user journey. With a strong foundation in modern web technologies, I focus on creating solutions that are efficient, reliable, and tailored to meet diverse user needs.<br /><br />
                            Beyond technical implementation, I have a keen eye for design, ensuring that interfaces are not only visually appealing but also responsive across all devices. I continuously refine database structures and API interactions to enhance speed and security, optimizing applications for a seamless and intuitive experience. Problem-solving is at the core of my approach, allowing me to troubleshoot challenges effectively and improve overall functionality.<br /><br />
                            Dedicated to innovation, I embrace cutting-edge web technologies to develop solutions that function flawlessly while engaging users intuitively. My goal is to combine technical proficiency with creative insight, delivering projects that align with modern development standards and user expectations. If you're looking for a developer who can bring your ideas to life with precision and creativity, let's collaborate to build something remarkable.
                        </p>
                        <div className='d-flex justify-content-center'>
                            <a className="btn btn-outline-primary text-white mt-3 px-4 py-2" href='/Jinit-Mewada-Resume.pdf' download>Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
