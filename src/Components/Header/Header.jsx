import logo from '../../assets/logo-creativo.svg'
import { useState, useEffect } from 'react';
import burgerIcon from '../../assets/icons/hamburger-icon.svg'
import closeIcon from '../../assets/icons/close-icon.svg'
import Button from '../Button/Button'

function Header() {



    //mobile menu open/close
    const [showMenu, setShowMenu] = useState(false)



    const showMobileMenu = () => {
        setShowMenu(!showMenu)

    }


    //responsive
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 645;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    useEffect(() => {
        if (width >= breakpoint) {
            setShowMenu(true);
        } else (setShowMenu(false))
    }, [width]);

    return (
        <header className="flex flex-row justify-between items-start p-4 container-c ">



            <img src={logo} alt="Logo" />

            {/* Mobile */}
            {showMenu ? (
                <nav className={`flex ${width > breakpoint ? 'max-w-[32rem] flex-row gap-8 justify-evenly items-center' : 'flex-col '}`}>
                    <img src={closeIcon} className={`w-4 ${width > breakpoint ? 'hidden' : ''}`} alt="mobile menu close icon" onClick={showMobileMenu} />

                    <a href='/' className='hover:bg-dark-grey hover:text-slate-200 duration-300 rounded-md px-2 py-1'>
                        Home
                    </a>
                    <a href='/#about' className='hover:bg-dark-grey hover:text-slate-200 duration-300 rounded-md px-2 py-1'>
                        About us
                    </a>
                    <a href='/#portfolio' className='hover:bg-dark-grey hover:text-slate-200 duration-300 rounded-md px-2 py-1'>
                        Portfolio
                    </a>
                    <a>
                        <Button text={'Get in Touch'} />
                    </a>
                </nav>
            ) : (
                <img src={burgerIcon} alt="mobile menu open icon" className='pr-4' onClick={showMobileMenu} />

            )}



        </header>
    )
}
export default Header