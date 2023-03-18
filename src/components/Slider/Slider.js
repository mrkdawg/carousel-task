import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

import "./Slider.css";

export function Slider({ children }) {
    const [currentIndex, setCurrentIndex] = useState(4);
    const [paused, setPaused] = useState(false);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                setCurrentIndex(currentIndex + 1);
            }
        }, 2000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    });

    const handlers = useSwipeable({
       onSwipedLeft: () => setCurrentIndex(currentIndex + 1), 
       onSwipedRight: () => setCurrentIndex(currentIndex - 1) 
    });

    const handleTransitionEnd = () => {
        if (currentIndex === 8 || currentIndex === 0) {
            setTransitionEnabled(false);
            setCurrentIndex(4);
            setTimeout(() => {
                setTransitionEnabled(true);
            }, 500);
        }
    }

    return (
        <div className="slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} {...handlers}>
            <div
                style={{
                    transition: !transitionEnabled ? 'none' : "transform 0.3s",
                    transform: `translateX(-${currentIndex * 25}%)`
                }}
                onTransitionEnd={() => handleTransitionEnd()}
            >
                {React.Children.map(children, child => {
                    return React.cloneElement(child, { width: "25%" });
                })}
                {React.Children.map(children, child => {
                    return React.cloneElement(child, { width: "25%" });
                })}
                {React.Children.map(children, child => {
                    return React.cloneElement(child, { width: "25%" });
                })}
            </div>
        </div>
    );
};

export function Slide({ children, width }) {
    return (
        <div className="slide" style={{ width }}>
            {children}
        </div>
    );
};