//import imgDefault from "../../assets/img/UserDefault.png";
import Divider from "../../components/Divider";
import "./Hero.css";

const Hero = () => {
  return (
    <>
        <section className="py-8 flex items-center relative overflow-hidden">
            <div className="flex-1 max-w-2xl">
                <p className="font-spaceGrotesk-400 text-[var(--text-grey)] text-sm tracking-[0.2em] uppercase mb-6">Desarrolladora web full stack</p>
                <h1 className="font-spaceGrotesk-700 text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.05] mb-8">
                    Diseño y <span className="italic font-light">Desarrollo</span> de páginas y sistemas web
                </h1>
                <p className="font-spaceGrotesk-300 text-lg md:text-xl max-w-xl mb-12  text-[var(--text-grey)]">
                    Transformando ideas en experiencias digitales únicas, de forma personal y junto a mi equipo en <span className="font-medium">PulseCode</span>.
                </p>
                <div className="flex gap-4 font-spaceGrotesk-400">
                    <a href="#proyectos" className="px-8 py-3.5 bg-[var(--text-black)] text-white font-medium text-sm tracking-wide rounded-full hover:opacity-80 transition-opacity">Ver Proyectos</a>
                    <a href="#contacto" className="px-8 py-3.5 font-medium text-sm tracking-wide rounded-full transition-colors border border-[var(--light-grey-2)] hover:bg-[var(--light-grey)]">Descargar CV</a>
                </div>
            </div>

            {/* <img src={imgDefault} alt="Clara Miño" className="img-profile"/> */}
        </section>
        <Divider className="mt-20" />
    </>
  )
}

export default Hero