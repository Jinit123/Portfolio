import React from 'react'
import resume from '../../public/Jinit_Mewada_Resume.pdf'

const Navbar = () => {

    return (
        <nav id="navbar" className="navbar navbar-expand-sm bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand text-white" href="">Jinit Mewada</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav d-flex gap-3">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#mainPart">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#whatiDo">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/Jinit-Mewada-Resume.pdf" download>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar