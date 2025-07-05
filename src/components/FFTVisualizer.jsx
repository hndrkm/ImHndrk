import { useState, useEffect, useRef, useCallback } from 'react';
import { getRandomChar2 } from "../lib/utils";

const FFTVisualizer = ({ previewUrl , name}) => {
    const [audioContext, setAudioContext] = useState(null);
    const [analyser, setAnalyser] = useState(null);
    const canvasRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const requestRef = useRef(null);

    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const { parentElement } = canvas;
        canvas.width = parentElement?.offsetWidth || window.innerWidth;
        canvas.height = parentElement?.offsetHeight || window.innerHeight;

        const context = canvas.getContext("2d");
        if (context) {
            context.fillStyle = "#000000";
            context.fillRect(0, 0, canvas.width, canvas.height);
        }

        const numColumns = Math.floor(canvas.width / 5) + 1;
        return Array(numColumns).fill(0);
    }, []);

    const handleStart = () => {
        if (!audioContext) {
            // Crear el AudioContext solo cuando el usuario haga clic
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            setAudioContext(audioCtx);
            // Crear el AnalyserNode para realizar la FFT
            const analyserNode = audioCtx.createAnalyser();
            analyserNode.fftSize = 512; // Ajusta el tamaño de la FFT (2048 es común)
            setAnalyser(analyserNode);

            // Cargar y reproducir el audio
            fetchAudio(previewUrl, audioCtx, analyserNode);
        }
        else if (!isPlaying) {
            const analyserNode = audioContext.createAnalyser();
            analyserNode.fftSize = 512; // Ajusta el tamaño de la FFT (2048 es común)
            setAnalyser(analyserNode);
            fetchAudio(previewUrl, audioContext, analyserNode)
        }

        setIsPlaying(true);
    };

    const fetchAudio = async (url, audioCtx, analyserNode) => {
        try {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

            const source = audioCtx.createBufferSource();
            source.buffer = audioBuffer;

            // Conectar el nodo de la fuente al nodo de análisis y luego a la salida de audio
            source.connect(analyserNode);
            analyserNode.connect(audioCtx.destination);

            source.start(0); // Iniciar la reproducción del audio
            // Iniciar la visualización de la FFT
            visualize(analyserNode, source);
        } catch (error) {
            console.error('Error al cargar el audio:', error);
        }
    };

    const visualize = (analyserNode, source) => {
        const canvas = canvasRef.current;
        const canvasCtx = canvas.getContext('2d');

        const bufferLength = analyserNode.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        let y = canvas.height;
        let vy = 1
        let arrayChar = []
        let lastUpdateRef = 0;
        let flag = false;
        let falgstart = false;
        let char = '0';
        let time = 0;

        const draw = (currentTime) => {

            if (!falgstart && !(currentTime === undefined)) {
                falgstart = true
                time = currentTime
            }
            lastUpdateRef
            const timeSinceLastUpdate = currentTime - lastUpdateRef;
            const updateInterval = 350;

            if (timeSinceLastUpdate >= updateInterval) {
                lastUpdateRef = currentTime;
                flag = true;
            }
            //time = time + timeSinceLastUpdate/100
            analyserNode.getByteFrequencyData(dataArray);

            //canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
            canvasCtx.fillStyle = '#00000030';
            canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

            const barWidth = (canvas.width / bufferLength);
            let barHeight;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i];
                let color = 'rgb(116, 219, 188)';
                canvasCtx.font = "10px monospace";
                canvasCtx.fillStyle = color;
                if (flag) {
                    char = getRandomChar2()
                }
                vy = barHeight
                canvasCtx.fillText(char, x, y - vy / 3);
                canvasCtx.fillText(char, x, y);
                if (barHeight > 80 && flag) {
                    arrayChar.push([x, y, vy])
                }

                x += barWidth + 1;

            }
            let color2;
            for (let j = 0; j < arrayChar.length; j++) {
                color2 = "rgb(50, 168, " + Math.floor(arrayChar[j][1] / 2) + ")";
                drawCharacter(arrayChar[j][0], arrayChar[j][1] -= arrayChar[j][2] / 100, color2, canvasCtx);
                if (arrayChar[j][1] < 0) arrayChar.shift();
            }
            flag = false;
            if (((currentTime - time) / 1000) < source.buffer.duration || currentTime === undefined) {
                requestRef.current = requestAnimationFrame(draw);
            } 
            else {
                canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
                canvasCtx.textAlign = "center";
                canvasCtx.font = "40px monospace";
                canvasCtx.fillText(name, canvas.width/2, canvas.height/2);
                setIsPlaying(false)
                cancelAnimationFrame(requestRef.current);
            }
        };

        draw();
    };
    function drawCharacter(x, y, c, cntx) {
        if (y <= 0) return;

        cntx.fillStyle = c;
        cntx.fillText(getRandomChar2(), x, y);
    }

    useEffect(() => {
        let columnHeights = resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("orientationchange", resizeCanvas);
        // Limpiar eventos al desmontar el componente
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("orientationchange", resizeCanvas);
        };

    }, [resizeCanvas])

    return (
        <div className='w-full h-full pt-3'>
            <div className='flex justify-center'>
                <button className='border-2 border-white hover:bg-zinc-400 font-bold px-6' onClick={handleStart}>
                    {isPlaying}PLAY
                </button>
            </div>

            <canvas ref={canvasRef} className='h-full w-full'></canvas>
        </div>
    );
};

export default FFTVisualizer;
