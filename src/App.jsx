import MePixel from "./components/MePixel";
import ProjectCard from "./components/ProjectCard";
import TextLabel from "./components/TextLabel";

function App() {


  const embedId1 = 'sATXpuyBlc4';
  const embedId2 = 'LS7PAul4Wws';
  //https://www.youtube.com/embed/LS7PAul4Wws?ps=play&vq=large&rel=0&autohide=1&showinfo=0&autoplay=1&authuser=0
  return (
    <div className="">
      <div className="p-2 text-zinc-300 text-2xl font-bold">
        HNDRK
      </div>
      <div className="flex w-full h-full p-4 text-zinc-200 ">
        <div className="basis-1/3 p-2 border-dashed border-2 border-zinc-500 m-1">
          <h4 className="text-6xl font-semibold">
            <TextLabel>
              HENDRIK RAMOS
            </TextLabel>
          </h4>
          <br />
          <TextLabel><p className="text-2xl">Game developer, Creative Web Developer, Ilustrador y animador 2D casual.</p></TextLabel>
          <div className="pt-4">
            <TextLabel>
              ¡Hola! Me gusta hacer cosas divertidas e interactivas con código.
            </TextLabel>
          </div>

          <TextLabel>Fan de los videojuegos independientes, estudiante de ciencias fisicas
            a veces escribo y dibujo cosas.</TextLabel>
            <MePixel></MePixel>
        </div>
        <div className="basis-1/3  border-dashed border-2 border-zinc-500 m-1">
          <h4 className="text-6xl font-semibold p-4"><TextLabel>Algunos Proyectos</TextLabel></h4>
          <div className="divide-y-2 divide-dashed divide-zinc-500 py-8">
            <div className="p-4">
              <h3 className="text-4xl font-semibold"><TextLabel>Videojuegos</TextLabel></h3>
              <ProjectCard embedId={embedId1} title={"COLTIS UNIVERSE"}
                description={"Es un videojuego desarrollado por Usyit Studios, iniciando con el proyecto Coltis a mediados de 2020, ideado con el fin de presentar un juego con mecánicas y personajes únicos. Coltis ha evolucionado a tal punto que el equipo de trabajo planea crear un Metaverso con este proyecto e implementar tecnología blockchain y web3. Este proyecto nació de una historia muy emocionante que involucra a la primera especie viviente del planeta Tierra que fue al espacio."} tags={["unity", "NFT", "Multiplayer"]}/>
              <ProjectCard embedId={embedId2} title={"WHO IS HAYLEY?"} description={"Horror Arcade Puzzle"} tags={["unity", "playstore"]} />

            </div>
            <div className="p-4">
              <h4 className="text-4xl font-semibold">Webs</h4>
            </div>
            <div className="p-4">
              <h4 className="text-4xl font-semibold">Ilustraciones - Animaciones</h4>
            </div>
            <div className="p-4">
              <h4 className="text-2xl font-semibold">Escritos</h4>
            </div>
          </div>


        </div>
        <div className="basis-1/3  border-dashed border-2 border-zinc-500 m-1">
        </div>
      </div>
    </div>
  )
}

export default App
