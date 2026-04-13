import Divider from "../../components/Divider";
import { skillGroups } from "../../data/skills";

const Skills = () => {

  return (
    <>
        <section id="skills">
        <div className="container px-6">

            {/* HEADER */}
            <div className="mb-16">
            <p className="font-spaceGrotesk-400 text-[var(--text-grey)] text-sm tracking-[0.2em] uppercase mb-3">
                Habilidades
            </p>
            <h2 className="font-spaceGrotesk-700 text-[var(--text-black)] text-4xl md:text-5xl">
                Stack Técnico
            </h2>
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {skillGroups.map((group) => (
                <div key={group.title} className="font-spaceGrotesk-400">
                
                <h3 className="text-xs tracking-[0.2em] uppercase text-[var(--text-grey)] mb-6 pb-3">
                    {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-[var(--light-grey-2)] transition group hover:bg-[var(--light-grey)]"
                    >
                        <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
                        alt={skill.name}
                        className="w-5 h-5 group-hover:scale-110 transition-transform"
                        />
                        <span className="text-sm text-[var(--text-black)]">
                        {skill.name}
                        </span>
                    </div>
                    ))}
                </div>

                </div>
            ))}
            </div>

        </div>
        <Divider className="mt-20" />
        </section>
    </>
  );
};

export default Skills;