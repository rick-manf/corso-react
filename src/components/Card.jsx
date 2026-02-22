function Card({title, imgURL, isVisited, children}) {

    return (
        <div className="rounded-md bg-zinc-950 flex flex-col">
            <img src={imgURL} className="h-48 w-full object-cover rounded-t-md"
            alt="" />
            <div className="flex flex-col p-4 grow">
                <h2 className="text-2x1 text-white font-bold">{title}</h2>
                <p className="text-gray-500 grow min-h-30">{children}</p>
                <span className="mt-10">{isVisited ? "✔️ Visitata" : "❌ Non visitata"}</span>
            </div>
        </div>
    )
}

export default Card;