import React from 'react';
import './Home.css'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Background from '../Background/Background';

const Home = ({ scroll }) => {
    const rotacion = scroll / 13
    const limitedRotacion = rotacion > 90 ? 90 : rotacion;

    const [ConsoleW, setConsoleW] = useState(0);

    const updateWidth = () => {
        const div = document.getElementById('Console');
        setConsoleW(div.offsetWidth)
    };

    useEffect(() => {
        updateWidth()
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    return (
        <section id="home">
            <Background/>
            <div className='console' id='Console' style={{ transform: `perspective(${ConsoleW}px) rotatex(-${limitedRotacion}deg)` }}>
                <div className='head'>
                    <div className='options d-flex gap-2'>
                        <div className="option">
                        </div>
                        <div className="option">
                        </div>
                        <div className="option">
                        </div>
                    </div>
                </div>
                <div className='out-body'>
                    <div className='body'>
                        <div className='content'>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Home;
