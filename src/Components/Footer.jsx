import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid mainColor p-5'>
            <div className='row align-items-center'>

                <div className="col-12 col-md-6 col-lg-6">
                    <h1 className='text-white fontStyle px-lg-5'>Let's Work Together -</h1>
                </div>

                <div className="col-12 col-md-6 col-lg-6 text-center text-lg-start">
                    <div className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-3">

                        <div className="d-flex align-items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} className='img-fluid' viewBox="0 0 256 193"><path fill="#4285f4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"></path><path fill="#34a853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"></path><path fill="#ea4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"></path><path fill="#fbbc04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"></path><path fill="#c5221f" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"></path></svg>
                            <a className='textColor fontInter m-0 text-decoration-none' href="mailto:jinitmewada41@gmail.com">jinitmewada41@gmail.com</a>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60" /><rect width="256" height="256" fill="#0a66c2" rx="60" /><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4" /></g></svg>
                            <a className='textColor fontInter m-0 text-decoration-none' href='https://linkedin.com/in/jinit--mewada'>jinit--mewada</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;