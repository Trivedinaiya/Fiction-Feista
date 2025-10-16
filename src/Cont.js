import React, { useState, useEffect } from 'react';
import './Cont.css';
import gg1 from "./img/fffff.png";
import gg2 from "./img/img3.png";
import gg3 from "./img/img4.png";

function Contactt() {
    const facts = [
        { src: gg1, alt: 'ggg1' },
        { src: gg2, alt: 'gggg1' },
        { src: gg3, alt: 'ggig1' }
    ];

    const [currentFact, setCurrentFact] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentFact(prevFact => (prevFact + 1) % facts.length);
        }, 5000); 

        return () => clearInterval(intervalId); 
    }, [facts.length]);
    const formStyle = {
        backgroundImage: `url(${facts[currentFact].src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.9,
        padding: '20px',
        textAlign: 'center',
        height: '400px',
        width: '940px',
        marginTop: '50px',
        marginLeft: '250px',
        boxShadow: '0 0 5px',
        backgroundColor: '#ffffff',
        color: '#1f1a28',
    };

    return (
        <div className='jj'>
            <div style={formStyle}>
                <form>
                    <div className='qq'>
                        <h2>FEEDBACK FORM</h2>
                        <div><input type='text' placeholder='NAME' /></div>
                        <div><input type='email' placeholder='EMAIL' /></div>
                        <div><input type='phone' placeholder='PHONE NO.' /></div>
                        <div><input type='text' placeholder='ADDRESS' /></div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            <div className='hh'>
                <div className="gm">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.456949466474!2d72.66014617501145!3d23.26284047900613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2c7e0221745b%3A0xba4024dd0991caef!2sMangal%20Murti%20Apartment%2C%20Gandhinagar%20-%20Vijapur%20Rd%2C%20Pethapur%2C%20Gandhinagar%2C%20Gujarat%20382041!5e0!3m2!1sen!2sin!4v1718534309990!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='vv'>
                    <div>
                        <h3>Sign up today to receive exclusive updates, personalized recommendations, and special offers straight to your inbox. Let your imagination run wild and embrace the magic of storytelling with Fiction Fiesta! Join the celebration and start your next great adventure at Fiction Fiesta Online Book Store.</h3>
                    </div>
                    <div className='kk'>
                        <h3>Warm regards,</h3>
                        <h3>The Fiction Fiesta Team.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contactt;
