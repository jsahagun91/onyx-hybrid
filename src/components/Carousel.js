import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from "react";
import videos from "../videos";
import './Carousel.css';


function handleVideoClick(e) {
    if (e.target.paused) {
        e.target.play();
    } else {
        e.target.pause();
    }
}

function Carousel() {
    const [width, setWidth ] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    console.log(videos)
    return (
        <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
            <motion.div 
                drag="x" 
                dragConstraints={{ right: 0, left: -width }} 
                className='inner-carousel'
                >
                {videos.map(video => {
                    return (
                    <motion.div className='item' key={video} onClick={handleVideoClick}>
                        <video 
                        style={{ borderRadius: '2rem', overflow: 'hidden' }}
                        width="auto" height="auto" autoPlay loop>
                        <source src={video} type="video/mp4" />
                        </video>
                    </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>

        
    )
}

export default Carousel;