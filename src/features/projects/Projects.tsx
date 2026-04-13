import { useState } from "react";
import { projectsData } from "../../data/projects";
import Divider from "../../components/Divider";

const Projects = () => {
  // Estado para saber qué filtro está seleccionado
  const [activeFilter, setActiveFilter] = useState('Todos');

  // Lógica para filtrar los proyectos en tiempo real
  const filteredProjects = projectsData.filter(project => 
    activeFilter === 'Todos' ? true : project.category === activeFilter
  );

  const filters = ['Todos', 'PulseCode', 'Personal'];

  return (
    <section id="proyectos" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-spaceGrotesk-400 text-sm tracking-[0.2em] uppercase mb-3 text-zinc-500">
                Proyectos
              </p>
              <h2 className="font-spaceGrotesk-700 text-4xl md:text-5xl text-zinc-900 dark:text-white">
                Mis Trabajos
              </h2>
            </div>
            
            {/* Filtros Funcionales */}
            <div className="flex gap-2 self-start md:self-auto font-spaceGrotesk-400">
              {filters.map((filter) => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`cursor-pointer px-5 py-2 text-sm rounded-full transition-all duration-300 border ${
                    activeFilter === filter 
                      ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-black dark:border-white' 
                      : 'bg-transparent text-zinc-500 border-zinc-200 hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-800 dark:hover:text-white dark:hover:border-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid de Proyectos con Animación simple */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-500">
          {filteredProjects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className={`group block relative overflow-hidden rounded-2xl min-h-[280px] transition-all 
                ${project.featured && activeFilter === 'Todos' ? 'md:col-span-2 md:row-span-2 min-h-[320px] md:min-h-[420px]' : ''}`}
            >
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </div>

              <div className="relative h-full flex flex-col justify-end p-5 md:p-6">
                <div className="mb-auto flex items-center justify-between">
                  <span className={`text-[11px] font-spaceGrotesk-400 tracking-wide uppercase px-3 py-1 rounded-full backdrop-blur-md
                    ${project.category === 'PulseCode' 
                      ? 'bg-white text-black' 
                      : 'bg-white/20 text-white border border-white/30'}`}>
                    {project.category}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/60 group-hover:text-white transition-colors"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg md:text-xl font-spaceGrotesk-700 font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-spaceGrotesk-400 px-2 py-0.5 rounded-full bg-white/10 text-white/80 backdrop-blur-sm border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <Divider className="mt-20" />
      </div>
    </section>
  );
};

export default Projects;