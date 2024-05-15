import Button from "../Button/Button"
import imgHero from "../../assets/creativo-heroImg.svg"
import { useState, useEffect } from "react";


function Hero() {


    //responsive

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);



    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 645;

    useEffect(() => {



    }, [width]);



    return (
        <section className="sm:flex sm:flex-row items-center justify-between w-full gap-8 container-c">


            <div>
                <h1>Where
                    Design Meets Innovation!</h1>
                <p className="text-secondary-color my-4">Whether you're a startup looking to establish your brand identity or an established business aiming to refresh your image, we've got the creative firepower to make it happen.</p>
                <Button text={`Let's Talk`} />
            </div>
            <img src={imgHero} className={`${width > breakpoint ? 'w-1/2' : 'hidden'} max-w-[42rem]`} alt="Creativo agency" />

        </section>
    )
}
export default Hero