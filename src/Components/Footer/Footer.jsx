


function Footer() {
    return (
        <footer className="  bg-dark-background text-slate-200 p-4">
            <div className="flex flex-wrap justify-center sm:justify-between container-c">
                <div className="max-w-[24rem] mx-4 mb-4 sm:mx-auto">
                    <p className="text-2xl">Creativo</p>
                    <p className="text-slate-500 my-2">Creativo is where your imagination and our expertise converge to create design solutions that elevate your brand and set you apart from the competition.</p>
                    <p>hello@creativo.com</p>
                    <p >+1-800-123 4567</p>
                </div>
                <div className="flex justify-around w-full max-w-lg sm:mx-auto">
                    <div className=" mx-4 my-4 sm:my-0">
                        <p className="text-xl">Company</p>
                        <p className="my-2">About</p>
                        <p className="my-2">Services</p>
                        <p className="my-2">Careers</p>
                        <p className="my-2">Blog</p>
                        <p className="my-2">Pricing</p>
                    </div>
                    <div className=" mx-4 my-4 sm:my-0 ">
                        <p className="text-xl">Contact</p>
                        <p className="my-2">Help</p>
                        <p className="my-2">FAQs</p>
                        <p className="my-2">Press</p>
                        <p className="my-2">Terms & Conditions</p>
                        <p className="my-2">Partners</p>

                    </div></div>
            </div>
        </footer>
    )
}
export default Footer