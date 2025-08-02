import Matrixbg from "./Matrixbg";
import TextLabel from "./TextLabel";
import MePixel from "./MePixel";
export function Presentation({ title, subtitle }) {
    return (
        <div>
            
            <div className="flex justify-center   w-full p-4 h-full">

                <div className="flex flex-col justify-center max-w-prose h-full">
                    <div className="text-6xl font-semibold">
                        <TextLabel colorF="#18868c">
                            HENDRIK RAMOS
                        </TextLabel>
                    </div>
                    <div className="">
                        <TextLabel>
                            <p className="text-2xl font-bold">Game developer, Creative Web Developer.</p>
                        </TextLabel>
                    </div>

                    <div className="pt-4">
                        <TextLabel>
                            ¡Hola! Me gusta hacer cosas divertidas e interactivas con código.
                        </TextLabel>
                    </div>
                    <div className="">
                        <TextLabel>
                            Mi especialidad son los gráficos 3D interactivos en tiempo real, las interfaces de usuario espaciales y el diseño y desarrollo de Video juegos. Me encanta colaborar con artistas de todo tipo y hacer realidad mis visiones creativas a través de ejecuciones técnicas meticulosamente elaboradas.Fan de los videojuegos independientes.
                        </TextLabel>
                    </div>
                    <div className="flex justify-center ">
                        <MePixel></MePixel>
                    </div>

                </div>
            </div>
        </div>
    );
}