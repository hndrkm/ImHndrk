import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { useRef, useEffect, useState } from "react";
import { myRandomNumber, getRandomChar } from "../lib/utils";

function TextLabel({ children }) {
    const [hasRendered, setHasRendered] = useState(false);
    const [chars, setChar] = useState([]);

    const [duration, setDuration] = useState(1000);
    const elapsedRef = useRef(0);
    const previousTimeRef = useRef(null);
    const requestRef = useRef(null);
    const lastUpdateRef = useRef(0);

    const [isAnimating, setIsAnimating] = useState(false);

    const textElement = useRef(null);


    function setAnim() {
        if (!isAnimating) {
            setIsAnimating(true);
            elapsedRef.current = 0;
            previousTimeRef.current = null;
            requestRef.current = requestAnimationFrame(animate);
        }
    }


    const animate = (currentTime) => {
        if (previousTimeRef.current === null) {
            previousTimeRef.current = currentTime;
            lastUpdateRef.current = currentTime;
        }
        const deltaTime = (currentTime - previousTimeRef.current) / 1000;
        elapsedRef.current = elapsedRef.current + (deltaTime * 1000);

        const timeSinceLastUpdate = currentTime - lastUpdateRef.current;

        const updateInterval = 100; 

        if (timeSinceLastUpdate >= updateInterval) {
            lastUpdateRef.current = currentTime;
            //console.log(timeSinceLastUpdate)
            for (const c of chars) {
                //c[1].style.opacity = elapsedRef.current / duration
                c[1].style.color = ['#18868c', '#18718c', '#18528c'][Math.floor(Math.random() * 3)]
                c[1].innerHTML = getRandomChar();
            }
        }

        if (elapsedRef.current < duration) {
            previousTimeRef.current = currentTime;
            requestRef.current = requestAnimationFrame(animate);
        }
        else {
            for (const c of chars) {
                //c[1].style.opacity = 1
                c[1].style.color = ['#ffffff','#ffffff','#ffffff'][1]
                c[1].innerHTML = c[2];
            }
            setIsAnimating(false);
            cancelAnimationFrame(requestRef.current);
        }
    };

    useEffect(() => {

        if (!hasRendered) {
            var charElements = []
            const results = Splitting({ target: textElement.current, by: 'lines' });
            results.forEach(s => Splitting({ target: s.words }));
            let i = 0
            for (const [linePosition, lineArr] of results[0].lines.entries()) {
                for (const word of lineArr) {
                    for (const char of [...word.querySelectorAll('.char')]) {
                        charElements.push([i, char, char.innerHTML]);
                        i++
                    }
                }
            }
            setHasRendered(true);
            setChar(charElements);
        }
        return () => {
        };
    }, [hasRendered]);
    return (
        <div
            onMouseEnter={() => setAnim()}
            ref={textElement}>
            {children}
        </div>
    )
}
export default TextLabel;