import Header from "../Header/Header"
import Hero from "../Hero/Hero"
import Accordeon from "../Accordeon/Accordeon"
import Portfolio from "../Portfolio/Portfolio"
import { portfolioData } from "../../constants/constants"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"


function App() {

  return (
    <>

      <Header />


      <main>


        <Hero />
        <section id="about" className="bg-dark-background">
          <div className="container-c">
            <h2 className="text-slate-300 text-lg mb-8">Our services</h2>
            <Accordeon />
          </div>
        </section>

        <section id="portfolio" className="container-c flex flex-row flex-wrap">



          <div className="flex flex-col sm:flex-row ">
            <h2 className="text-primary-color text-lg mb-8">Our Portfolio</h2>
            <p className="font-semi-bold text-2xl sm:ml-12 mb-8 max-w-[45rem]">
              We envision a world where every idea, product, or service is brought to life through exceptional design.
            </p>
          </div>

          <Portfolio data={portfolioData} />

        </section>

        <Contact id="contact" className={"container-c flex flex-row flex-wrap bg-dark-background text-slate-200"} />

      </main>
      <Footer />
    </>
  )
}

export default App
