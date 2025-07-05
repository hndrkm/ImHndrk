import Matrixbg from "./components/Matrixbg";
import MePixel from "./components/MePixel";
import ProjectCard from "./components/ProjectCard";
import SpotifyComponet from "./components/SpotifyComponet";
import TextLabel from "./components/TextLabel";

function App() {


  const embedId1 = 'sATXpuyBlc4';
  const embedId2 = 'LS7PAul4Wws';
  //https://www.youtube.com/embed/LS7PAul4Wws?ps=play&vq=large&rel=0&autohide=1&showinfo=0&autoplay=1&authuser=0
  return (
    <div className="">
      <div className="flex justify-around">
        <div className="p-2 text-zinc-300 text-2xl font-extrabold">
          HNDRK /(o_o')\
        </div>
        <div className="flex p-1 text-white text-2xl font-extrabold">
          <div className="p-1 text-cyan-600 hover:text-cyan-500">Home/</div>
          <div className="p-1 hover:text-cyan-500">About/</div>
          <div className="p-1 hover:text-cyan-500">Blog/</div>
        </div>
      </div>

      <Matrixbg />
      <div className="flex justify-center   w-full p-4 h-svh">

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
      <div className="flex flex-col w-full h-full  text-zinc-200">
        <div className="p-2 m-1">
          <div className="flex justify-center">
            <h4 className="text-4xl font-semibold p-1"><TextLabel> Games</TextLabel></h4>
          </div>
          <div className="py-4">
            <div className="p-4 flex justify-center">
              <div className="flex flex-col">
                <ProjectCard
                  embedId={embedId1}
                  title={"COLTIS UNIVERSE"}
                  subtitle={"Multiplayer Batleroyal"}
                  description={"Videojuego con integracion NFT, batallas a disparos, con variedad de armas skins y habilidades"}
                  tags={["Equipo", "Desarrollador", "Multiplayer"]} />
                <ProjectCard
                  embedId={embedId2}
                  title={"WHO IS HAYLEY?"}
                  subtitle={"Horror Arcade Puzzle"}
                  description={"Juego de terror donde tienes que encontrar pistas de como moriste. basado en el libro HAYLEY escrito por Adrian Nieve"} tags={["Equipo", "Direccion de arte", "Desarrollador"]} />
              </div>
            </div>
          </div>


        </div>
        <div className="p-2 m-1">
          <div className="flex justify-center">
            <h4 className="text-4xl font-semibold p-1"><TextLabel> Webs</TextLabel></h4>
          </div>
          <div className="py-4">
            <div className="p-4 flex justify-center">
              <div className="flex flex-col">
                <ProjectCard
                  embedId={embedId1}
                  title={"COLTIS UNIVERSE"}
                  subtitle={"Multiplayer Batleroyal"}
                  description={"Videojuego con integracion NFT, batallas a disparos, con variedad de armas skins y habilidades"}
                  tags={["Equipo", "Desarrollador", "Multiplayer"]} />
                <ProjectCard
                  embedId={embedId2}
                  title={"WHO IS HAYLEY?"}
                  subtitle={"Horror Arcade Puzzle"}
                  description={"Juego de terror donde tienes que encontrar pistas de como moriste. basado en el libro HAYLEY escrito por Adrian Nieve"} tags={["Equipo", "Direccion de arte", "Desarrollador"]} />
              </div>
            </div>
          </div>


        </div>
        <div className="h-svh">

          <div className="h-2/3">
            
          </div>

        </div>
        <div className="flex justify-center"> © hEndrIk  2024 </div>

      </div>
    </div>
  )
}

export default App
