import React from 'react';
import avatar from '../img/programmer.png';

export default function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img className="image" src={avatar} alt=""/>
            </div>
            <div className="about-info">
            <h4>I am<span> Ashish Mishra</span></h4>
                <p className="about-text">
                    Designer, Front-end Developer.
                    I <span>
                    design </span> and <span>
                    code  </span>beautifully simple things, and I love what I do.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Nationality</p>
                        <p>Hobbies</p>
                        <p>E-mail</p>
                    </div>
                    <div className="right-section">
                        <p>: Indian</p>
                        <p>: Football, Table Tennis, Cricket</p>
                        <p>: ashishm1611@gmail.com</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

