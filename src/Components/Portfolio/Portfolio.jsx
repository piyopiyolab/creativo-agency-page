function Portfolio({ data }) {
    return (
        <>
            {data.map((element, index) => (
                <article key={index} className="sm:w-1/2 m-auto">
                    <img src={element.img}
                        alt={`${element.title} preview`}
                        className="h-[22rem] w-[20rem] m-auto object-cover" />

                    <h3 className="text-center my-4 text-lg font-bold m-auto">{element.title} - <span className=" font-thin text-lg "> {element.description}</span> </h3>

                </article>
            ))}
        </>
    )
}

export default Portfolio
