import TextLabel from "./TextLabel"

function ProjectCard({ title, subtitle, srcimg, description, tags = [] }) {
    return (
        <div className="overflow-hidden shadow-lg pt-4 max-w-4xl">
            <div className="flex justify-center">
                <img src={srcimg} alt="" className="w-3/4 max-h-80 object-cover"/>
            </div>
            <div className="px-4 py-2">
                <div className="font-bold text-2xl mb-2"><TextLabel colorF="#ffffff">{title}</TextLabel></div>
                <div className="font-semibold text-xl mb-2"><TextLabel>{subtitle}</TextLabel></div>
                <TextLabel>
                    <p className="text-zinc-500 text-base">
                        {description}
                    </p>
                </TextLabel>
            </div>

            
            <div className="px-6 pt-4 pb-2">
                {tags.map((tag, index) => {
                    return (<span key={index} className="inline-block border-2 px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">{tag}</span>)
                })
                }
            </div>
        </div>
    )
}
export default ProjectCard