import { useState, useEffect, useRef } from 'react';
import { getRandomChar2 } from "../lib/utils";

const FFTVisualizer = ({ previewUrl }) => {
    const [audioContext, setAudioContext] = useState(null);
    const [analyser, setAnalyser] = useState(null);
    const canvasRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleStart = () => {
        if (!audioContext) {
            // Crear el AudioContext solo cuando el usuario haga clic
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            setAudioContext(audioCtx);

            // Crear el AnalyserNode para realizar la FFT
            const analyserNode = audioCtx.createAnalyser();
            analyserNode.fftSize = 1024; // Ajusta el tamaño de la FFT (2048 es común)
            setAnalyser(analyserNode);

            // Cargar y reproducir el audio
            fetchAudio(previewUrl, audioCtx, analyserNode);
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
            visualize(analyserNode);
        } catch (error) {
            console.error('Error al cargar el audio:', error);
        }
    };

    const visualize = (analyserNode) => {
        const canvas = canvasRef.current;
        const canvasCtx = canvas.getContext('2d');
        const bufferLength = analyserNode.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        let y = canvas.height;
        let vy = 1
        let arrayChar = []
        let lastUpdateRef = 0;
        let flag = false;
        let char = '0';
        const draw = (currentTime) => {

            lastUpdateRef
            const timeSinceLastUpdate = currentTime - lastUpdateRef;
            const updateInterval = 300;

            if (timeSinceLastUpdate >= updateInterval) {
                lastUpdateRef = currentTime;
                flag =  true;
            }
            analyserNode.getByteFrequencyData(dataArray);

            canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

            const barWidth = (canvas.width / bufferLength) * 2.5;
            let barHeight;
            let x = 0;

            const sampleRate = analyserNode.context.sampleRate;
            const nyquist = sampleRate / 2;
            const binWidth = nyquist / analyserNode.frequencyBinCount;
            
            for (let i = 0; i < bufferLength; i+=4) {
                barHeight = dataArray[i];
                const frequency = i * binWidth;
                let color = 'rgb(116, 219, 188)';
                //canvasCtx.fillStyle = color;
                //canvasCtx.fillRect(x, (canvas.height - barHeight / 2), barWidth, barHeight / 2);
                canvasCtx.font = "10px monospace";
                canvasCtx.fillStyle = color;
                if(flag){
                    char = getRandomChar2()
                }
                vy = barHeight
                canvasCtx.fillText(char, x, y - vy/5);
                if (barHeight > 80 && flag) {
                    arrayChar.push([x, y-vy/6,vy])
                    //console.log(arrayChar.length)
                }
                
                x += barWidth + 4;

            }
            let color2;
            for (let j = 0; j < arrayChar.length; j++) {
                color2 = "rgb(50, 168, "+Math.floor(arrayChar[j][1])+")";
                drawCharacter(arrayChar[j][0], arrayChar[j][1] -= arrayChar[j][2]/100, color2, canvasCtx);
                if (arrayChar[j][1] < 0) arrayChar.shift();
            }
            flag = false;
            requestAnimationFrame(draw);
        };

        draw();
    };
    function drawCharacter(x, y, c, cntx) {
        if (y <= 0) return;

        cntx.fillStyle = c;
        cntx.fillText(getRandomChar2(), x, y);
    }

    return (
        <div className='flex flex-col align-middle'>
            <div className='flex'>Visualizador</div>
            <div className='border-2 border-sky-700 rounded-md p-4'>
            <canvas ref={canvasRef} width="550" height="400"></canvas>
            {!isPlaying && (
                <button className='border-2 border-cyan-500 rounded-lg hover:bg-sky-900 font-bold px-6' onClick={handleStart}>
                    PLAY
                </button>
            )}
            </div>
            
        </div>
    );
};

export default FFTVisualizer;
