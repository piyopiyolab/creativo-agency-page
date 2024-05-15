import Button from "../Button/Button"


function Contact({ id, className }) {
    return (
        <section id={id} className={className}>


            <div className="flex flex-col sm:flex-row ">
                <h2 className="text-slate-200 text-lg mb-8">Let's collaborate !</h2>
                <p className="font-semi-bold text-2xl sm:ml-12 mb-8 max-w-[45rem]">
                    Ready to turn your ideas into exceptional designs ? Contact us today, and let's make something amazing together!

                    <a href='mailto:hello@creativo.com' className="bg-slate-200 block max-w-fit px-2 py-1 rounded-lg text-primary-color font-bold my-2 hover:bg-primary-color hover:text-slate-200 duration-200">LET'S TALK</a>
                </p>

            </div>

        </section>
    )
}
export default Contact