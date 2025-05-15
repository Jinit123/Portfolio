import Profile from '../assets/P.png';
import MERNF from '../assets/EX-Cut.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MainPart = () => {

    const containerRef = useRef(null);
    const profileRef = useRef(null);
    const titleRef = useRef(null);
    const mernImage = useRef(null);
    const mernText = useRef(null);
    const mernParagraph = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (profileRef.current) {
            tl.fromTo(profileRef.current,
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, duration: 0.6 }
            );
        }

        if (titleRef.current) {
            tl.fromTo(titleRef.current,
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, duration: 0.6 },
                "+=0.2"
            );
        }

        if (mernImage.current) {
            tl.fromTo(mernImage.current,
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, duration: 0.6 },
                "+=0.1"
            );
        }

        if (mernText.current) {
            tl.fromTo(mernText.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.6 },
                "+=0.1"
            );
        }

        if (mernParagraph.current) {
            tl.fromTo(mernParagraph.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.6 },
                "+=0.1"
            );
        }
        if (contactRef.current) {
            tl.fromTo(contactRef.current,
                { opacity: 0, y: 50, scale: 0 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6 },
                "+=0.1"
            );
        }

    }, []);

    return (
        <div id='mainPart' className="container-fluid mainColor p-5 mt-5">
            <div className="row justify-content-center mt-3">
                <div className="col-sm-12 col-md-10 col-lg-8">
                    <div className="text-center text-white p-0">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-4">
                                    <img
                                        src={Profile}
                                        className="img-fluid rounded-circle profileBorder"
                                        id='profileImage'
                                        ref={profileRef}
                                        alt="Profile"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row text-center text-white justify-content-center">
                                <div className="col-sm-10 col-md-8">
                                    <h1 className="fontStyle fwTitle responsive-title" ref={titleRef}>
                                        Jinit Mewada
                                    </h1>
                                    <div>
                                        <img
                                            src={MERNF}
                                            alt="MERN Stack"
                                            className="img-fluid"
                                            style={{ maxWidth: '300px' }}
                                            ref={mernImage}
                                        />
                                    </div>
                                    <h4 className="fontStyle fwTagline fontAdjust" ref={mernText}>
                                        MERN
                                    </h4>
                                    <p className="fontStyle fwParagraph" ref={mernParagraph}>
                                        I build fast, scalable, and user-friendly web apps using MongoDB, Express, React, and Node.js —
                                        delivering efficient backend systems and smooth frontend experiences.
                                    </p>
                                    <button className="btn btn-outline-primary text-white mt-3 px-4 py-2" ref={contactRef}>Contact Me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPart;
