import TextLabel from "./TextLabel"

function ProjectCard({ title, embedId, description, tags = [] }) {
    return (
        <div className="max-w-full rounded overflow-hidden shadow-lg pt-4">
            <div className="">
                <iframe
                    className="w-full min-h-80"
                    src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><TextLabel>{title}</TextLabel></div>
                <TextLabel>
                    <p className="text-zinc-500 text-base">
                        {description}
                    </p>
                </TextLabel>
            </div>
            <div className="px-6 pt-4 pb-2">
                {tags.map((tag, index) => {
                    return (<span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>)
                })
                }
            </div>
        </div>
    )
}
export default ProjectCard