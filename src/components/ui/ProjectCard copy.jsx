import TextLabel from "./TextLabel"

function ProjectCard({ title, subtitle, embedId, description, tags = [] }) {
    return (
        <div className="overflow-hidden shadow-lg pt-4">
            <div className="px-4 py-2">
                <div className="font-bold text-xl mb-2"><TextLabel colorF="#18868c">{title}</TextLabel></div>
                <div className="font-semibold text-xs mb-2"><TextLabel>{subtitle}</TextLabel></div>
                <TextLabel>
                    <p className="text-zinc-500 text-base">
                        {description}
                    </p>
                </TextLabel>
            </div>

            <div className="">
                <img src="/ImHndrk/Coltis.png" alt="" className="w-full max-h-80 object-cover"/>
                <iframe
                    className="w-full min-h-80"
                    src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <div className="px-6 pt-4 pb-2">
                {tags.map((tag, index) => {
                    return (<span key={index} className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>)
                })
                }
            </div>
        </div>
    )
}
export default ProjectCard