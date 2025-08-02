import TextLabel from "../TextLabel";
import ProjectCard from "../ProjectCard";
function SectionProjects({ children, sectiontitle }) {

    return (
        <div className="p-2 m-1">
            <div className="flex justify-around">
                <h4 className="text-4xl font-semibold p-1"><TextLabel colorF="#00bfd9"> {sectiontitle} </TextLabel></h4>
            </div>
            <div className="py-4">
                <div className="p-4 flex justify-center">
                    <div className="flex flex-col">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionProjects;