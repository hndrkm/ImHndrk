import TextLabel from "../components/ui/TextLabel";
import ProjectCard from "../components/ui/ProjectCard";
import SectionProjects from "../components/ui/sections/SectionProjects";
import EmoteAnim from "../components/ui/EmoteAnim";
export default function HomePage() {
  const embedId1 = 'sATXpuyBlc4';
  const embedId2 = 'LS7PAul4Wws';
  return (
    <div>

      <div className="flex flex-col w-full h-screen  text-zinc-200 justify-center">
        <div className="flex justify-around text-center">
          <div className="p-2 max-w-prose flex flex-col justify-center">
            <div className="text-6xl font-semibold p-2">
              <TextLabel colorF="#00bfd9">
                HENDRIK RAMOS
              </TextLabel>
            </div>
            <div className="text-xl font-semibold  p-2">
              <TextLabel colorF="#FFFFFF">Creative web and game developer.</TextLabel>

            </div>
            <div className="text-xl font-semibold p-2">
              <TextLabel colorF="#FFFFFF">¡Hola! Me gusta hacer cosas divertidas e interactivas con código.</TextLabel>
            </div>
            <EmoteAnim></EmoteAnim>
          </div>
        </div>
      </div>
    </div>

  );
}