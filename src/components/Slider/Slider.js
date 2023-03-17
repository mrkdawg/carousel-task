import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

import "./Slider.css";

export function Slider({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(currentIndex + 1);
            }
        }, 1000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    });

    const handlers = useSwipeable({
       onSwipedLeft: () => updateIndex(currentIndex + 1), 
       onSwipedRight: () => updateIndex(currentIndex - 1) 
    });

    return (
        <div className="slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} {...handlers}>
            <div style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {React.Children.map(children, child => {
                    return React.cloneElement(child, { width: "100%" });
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