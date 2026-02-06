import { useRef, useEffect, useState } from "react";

function EmoteAnim() {
    const [hasRendered, setHasRendered] = useState(false);
    const requestRef = useRef(null);
    const previousTimeRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [emote, setEmote] = useState(':)');
    const lastUpdateRef = useRef(0);

    const txtelm = useRef(null);
    const emotes = [
        "(；´Д｀)",
        "(´Д｀ ;)",
        "(；￣Д￣）",
        "(￣Д￣ ;）",
        "(；一_一)",
        "(￣□￣」)",
        "(｡•́︿•̀｡)",
        "(⊙_☉)",
        "(╯︵╰,)",
        "(ᗒᗣᗕ)՞",
        "(✖﹏✖)",
        "(∩╹□╹∩)",
        "（；¬＿¬)",
        "(・・；)",
        "(；ﾟДﾟ)",
        "(＠_＠;)",
        "(´･_･`)",
    ];
    const indexRef = useRef(0);

    function setAnim() {

        if (!isAnimating) {
            setIsAnimating(true);
            //elapsedRef.current = 0;
            previousTimeRef.current = null;
            requestRef.current = requestAnimationFrame(Animate);
        }
    }


    const Animate = (currentTime) => {
        if (previousTimeRef.current === null) {
            previousTimeRef.current = currentTime;
            lastUpdateRef.current = currentTime;
        }
        const updateInterval = 1000;
        const timeSinceLastUpdate = currentTime - lastUpdateRef.current;

        if (timeSinceLastUpdate >= updateInterval) {
            lastUpdateRef.current = currentTime;

            indexRef.current = (indexRef.current + 1) % emotes.length;
            setEmote(emotes[indexRef.current]);
            lastUpdateRef.current = currentTime;

        }

        previousTimeRef.current = currentTime;
        requestRef.current = requestAnimationFrame(Animate);
    }
    useEffect(() => {
        if (!hasRendered) {
            setAnim();
            setHasRendered(true);
        }
        return () => {

        };
    }, [hasRendered]);
    useEffect(() => { }, [emote]);
    return (
        <div className="pt-10 text-center font-extrabold" ref={txtelm}>
            <span className="text-4xl">{emote}</span>
        </div>
    );
}
export default EmoteAnim;