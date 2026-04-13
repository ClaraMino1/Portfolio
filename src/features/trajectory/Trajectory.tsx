import Divider from "../../components/Divider";

const Trajectory = () => {
  return (
    <>
      <section id="trayectoria" className="py-24 md:py-32">
        <div className="container px-6">

          <div className="mb-16" style={{ opacity: 1, transform: "none" }}>
            <p className="font-spaceGrotesk-400 text-[var(--text-grey)] text-sm tracking-[0.2em] uppercase mb-3">
              Trayectoria
            </p>
            <h2 className="font-spaceGrotesk-700 text-4xl md:text-5xl">
              Mi Recorrido
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-16 md:gap-24">

            {/* LEFT */}
            <div className="flex-1 font-spaceGrotesk-400">

              {/* ITEM 1 */}
              <div className="relative flex items-start gap-6 md:gap-8" style={{ opacity: 1 }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center border">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-briefcase-business-icon lucide-briefcase-business">
                      <path d="M12 12h.01"/>
                      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                      <path d="M22 13a18.15 18.15 0 0 1-20 0"/>
                      <rect width="20" height="14" x="2" y="6" rx="2"/>
                    </svg>
                  </div>

                  <div className="w-px h-20 bg-gradient-to-b from-gray-400 to-transparent mt-2"></div>
                </div>

                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="pb-12 ">
                    <span className="text-xs uppercase mb-1 block text-[var(--text-grey)] tracking-[0.2em]">
                      2026 — Presente
                    </span>
                    <h3 className="font-spaceGrotesk-600 text-lg text-[var(--text-black)]">
                      PulseCode
                    </h3>
                    <p className="font-DM-Sans-400 text-sm max-w-md text-[var(--text-grey)]">
                      Integrante en el equipo de desarrollo en proyectos web para clientes de diversos sectores. Arquitectura de soluciones escalables y metodología SCRUM.
                    </p>
                  </div>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="relative flex items-start gap-6 md:gap-8" style={{ opacity: 1 }}>
                <div className="flex flex-col items-center flex-shrink-0">

                  <div className="w-10 h-10 rounded-full flex items-center justify-center border border-border">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code-xml-icon lucide-code-xml">
                      <path d="m18 16 4-4-4-4"/>
                      <path d="m6 8-4 4 4 4"/>
                      <path d="m14.5 4-5 16"/>
                    </svg>
                  </div>

                  <div className="w-px h-40 bg-gradient-to-b from-gray-400 to-transparent mt-2"></div>
                </div>

                <div className="pb-12">
                  <span className="text-xs uppercase mb-1 block text-[var(--text-grey)] tracking-[0.2em]">
                    2024 — 2026 — Presente
                  </span>
                  <h3 className="font-spaceGrotesk-600 text-lg text-[var(--text-black)]">
                    Carrera de Desarrollo Full Stack
                  </h3>
                  <p className="text-sm mb-2 text-[var(--text-grey)]">CoderHouse</p>
                  <ul className="text-sm max-w-md text-[var(--text-grey)]">
                    <li>Construir interfaces de usuario dinámicas y escalables utilizando React y JavaScript.</li>
                    <li>Desarrollar servidores robustos y APIs eficientes mediante el entorno de Node.js.</li>
                    <li>Gestionar bases de datos relacionales y NoSQL para el almacenamiento seguro de información.</li>
                  </ul>
                </div>
              </div>

              {/* ITEM 3*/}
              <div className="relative flex items-start gap-6 md:gap-8" style={{ opacity: 1 }}>
                <div className="flex flex-col items-center flex-shrink-0">

                  <div className="w-10 h-10 rounded-full flex items-center justify-center border border-border">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                      <path d="M22 10v6" />
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                    </svg>
                  </div>

                </div>

                <div className="pb-12">
                  <span className="text-xs uppercase mb-1 block text-[var(--text-grey)] tracking-[0.2em]">
                    2024 — 2026
                  </span>
                  <h3 className="font-spaceGrotesk-600 text-lg text-[var(--text-black)]">
                    Tecnicatura Universitaria en Programación
                  </h3>
                  <p className="text-sm mb-2 text-[var(--text-grey)]">Universidad Tecnológica Nacional (UTN)</p>
                  <p className="text-sm max-w-md text-[var(--text-grey)]">
                    Formación en algoritmos, arquitectura de software, bases de datos, entre otros en la UTN sede Chivilcoy.
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT */}
            <div className="flex-1 max-w-md" style={{ opacity: 1 }}>
              <h3 className="text-xs font-spaceGrotesk-400 tracking-[0.2em] uppercase mb-6 pb-3 border-b border-black text-[var(--text-black)]">
                Sobre mí
              </h3>

              <div className="space-y-4 text-[var(--text-grey)]">
                <p>
                  Tengo 20 años y soy programadora Full Stack con un enfoque apasionado en el desarrollo web.
                </p>
                <p>
                  Junto a mi amigo y compañero de equipo, Joaquín, decidimos crear <span className="font-medium">PulseCode</span> en 2026. En donde creamos soluciones digitales para clientes de diversos sectores, desde startups hasta empresas consolidadas.
                </p>
                <p>
                  Me mueve la curiosidad, el aprendizaje continuo y la búsqueda de la mejor solución ante el problema presentado.
                </p>
              </div>
            </div>

          </div>
          
          <Divider className="mt-20" />
        </div>
      </section>
    </>
  );
};

export default Trajectory;