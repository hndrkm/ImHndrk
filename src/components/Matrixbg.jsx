import { useCallback } from "react";
import { useEffect } from "react";
import { useRef, useState } from "react"
import { myRandomNumber } from "../lib/utils";

const themeColor = "#18868c"; // Color del texto
const backgroundColor = "#000000"; // Color de fondo
const semiTransparentBackground = `${backgroundColor}20`; // Fondo semitransparente
const font = "15pt monospace"; // Fuente del texto
const charSpacing = 20; // Espaciado entre caracteres en píxeles
const frameRate = 15; // Velocidad de actualización

function Matrixbg() {
    const [initialized] = useState(false);
    const canvasRef = useRef(null);

    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const { parentElement } = canvas;
        canvas.width = parentElement?.offsetWidth || window.innerWidth;
        canvas.height = parentElement?.offsetHeight || window.innerHeight;

        const context = canvas.getContext("2d");
        if (context) {
            context.fillStyle = backgroundColor;
            context.fillRect(0, 0, canvas.width, canvas.height);
        }

        const numColumns = Math.floor(canvas.width / charSpacing) + 1;
        return Array(numColumns).fill(0);
    }, []);

    const drawCharacters = useCallback((columnHeights) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        // Fondo semitransparente para crear el efecto de desvanecimiento
        context.fillStyle = semiTransparentBackground;
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = themeColor;
        context.font = font;

        // Dibuja cada carácter en su columna correspondiente
        return columnHeights.map((y, index) => {
            const char = String.fromCharCode(myRandomNumber(33, 126));
            const x = index * charSpacing;

            context.fillText(char, x, y);
            return y > 100 + Math.random() * 10000 ? 0 : y + 50;
        });
    }, []);

    useEffect(() => {
        let columnHeights = resizeCanvas();
        const updateFrame = () => {
            if (!initialized) {
                columnHeights = drawCharacters(columnHeights);
                setTimeout(updateFrame, 1000 / frameRate);
            }
        };

        // Escucha eventos de cambio de tamaño y orientación
        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("orientationchange", resizeCanvas);

        // Iniciar la animación
        updateFrame();

        // Limpiar eventos al desmontar el componente
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("orientationchange", resizeCanvas);
        };

    }, [drawCharacters, resizeCanvas, initialized])
    return (
        <canvas
            ref={canvasRef}
            className="absolute h-full w-full -z-10 opacity-75 ">
        </canvas>
    )
}
export default Matrixbg;