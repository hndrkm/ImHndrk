import TextLabel from "../components/ui/TextLabel";
import ProjectCard from "../components/ui/ProjectCard";
import SectionProjects from "../components/ui/sections/SectionProjects";
import EmoteAnim from "../components/ui/EmoteAnim";
export default function ProjectsPage() {
  const embedId1 = 'sATXpuyBlc4';
  const embedId2 = 'LS7PAul4Wws';
  return (
    <div>

      <div className="flex flex-col w-full h-full  text-zinc-200">
        <div className="flex justify-around h-screen  ">
          <div className="p-2  max-w-prose flex flex-col justify-center">
            <div className="text-6xl font-bold p-2">
              <TextLabel colorF="#FFFFFF">
                HENDRIK RAMOS
              </TextLabel>
            </div>
            <div className="text-xl font-semibold p-2">
              <TextLabel colorF="#FFFFFF">Creative web and game developer.</TextLabel>

            </div>
            <div className="text-xl font-semibold p-2">
              <TextLabel colorF="#FFFFFF">¡Hola! Me gusta hacer cosas divertidas e interactivas con código.</TextLabel>
            </div>
            <EmoteAnim></EmoteAnim>
          </div>
        </div>

        <div>
          <SectionProjects sectiontitle={"Recent Projects"}>
            <ProjectCard
              srcimg={'/ImHndrk/img/PulsStar.gif'}
              title={"PulsStar"}
              subtitle={"Rhythm game"}
              description={"Videojuego 2D de ritmo, visuales sincronizadas con el ritmo de la musica, con personalizacion de entornos y personajes de acuerdo a la letra de musica independiente local."}
              tags={["Solo", "Desarrollador", "Shaders"]} />

          </SectionProjects>

          <SectionProjects sectiontitle={"Games"}>
            <ProjectCard
              srcimg={"/ImHndrk/img/Coltis.png"}
              title={"COLTIS UNIVERSE"}
              subtitle={"Multiplayer Batleroyal"}
              description={"Videojuego con integracion NFT, batallas a disparos, con variedad de armas skins y habilidades"}
              tags={["Equipo", "Desarrollador", "Multiplayer"]} />

            <ProjectCard
              srcimg={"/ImHndrk/img/hayley.jpg"}
              title={"WHO IS HAYLEY?"}
              subtitle={"Horror Arcade Puzzle"}
              description={"Juego de terror donde tienes que encontrar pistas de como moriste. basado en el libro HAYLEY escrito por Adrian Nieve"} tags={["Equipo", "Direccion de arte", "Desarrollador"]} />
          </SectionProjects>

          <SectionProjects sectiontitle={"Prototypes and experiments"}>
            <ProjectCard
              srcimg={"/ImHndrk/img/CanSat.png"}
              title={"CanSat"}
              subtitle={"Prototipo de satelite enlatado"}
              description={"Diseño e incorporacion de todos los subsistemas principales que se encuentran en un satélite, tales como sistema de potencia, componentes electrónicos, sensores, estructura mecánica y el sistema de telemetría dentro de la estructura."}
              tags={["Equipo", "Simulacion", "Dise;o estructural"]} />
            <ProjectCard
              srcimg={"/ImHndrk/img/Orrery.png"}
              title={"Traveler Orrery"}
              subtitle={"Prototipo de visor de objetos Cercanos a la tierra."}
              description={"Visor web en 3D de movimiento de asteroides, cometas, planetas, etc. simulados en base a datos obtenidos de la NASA. "}
              tags={["Equipo", "Simulacion", "FrontEnd", "WebGL"]} />
            <ProjectCard
              srcimg={"/ImHndrk/img/Sim.png"}
              title={"Simulacion Annealing"}
              subtitle={"Simulacion para la optimizacion de tiempos de atencion en base a simulated annealing"}
              description={"En este problema se busca una distribucion de C clientes entre N servidores, cada uno con un teb posiblemente distinto, de manera que el tiempo de espera efectivo medio para todos los clientes sea el minimo."}
              tags={["Solo", "Simulacion", "Optimicacion"]} />
          </SectionProjects>
          <SectionProjects sectiontitle={"Apps"}>
            <ProjectCard
              srcimg={"/ImHndrk/img/Techmechapp.png"}
              title={"TechMech"}
              subtitle={"Aplicacion para la administracion de un taller mecanico"}
              description={"Desarrollo de UI y base de datos para el registro de servicios, ventas y clientes. Ademas de generar tikcets de servicio y administracion de espacio para vehiculos."}
              tags={["Solo", "Base de datos", "Frontend"]} />
          </SectionProjects>
          <SectionProjects sectiontitle={"Archive"}>

          </SectionProjects>
        </div>


      </div>
    </div>

  );
}