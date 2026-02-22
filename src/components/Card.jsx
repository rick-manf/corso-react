function Card({title, imgURL}) {

    const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, excepturi!"

    return (
        <div className="rounded-md bg-zinc-950">
            <img src={imgURL} className="h-48 w-full object-cover rounded-t-md"
            alt="" />
            <div className="flex flex-col p-4">
                <h2 className="text-2x1 text-white font-bold">{title}</h2>
                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    )
}

export default Card;