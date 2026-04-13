export interface Project {
  title: string;
  description: string;
  category: 'PulseCode' | 'Personal';
  image: string;
  tags: string[];
  link: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico completa con pasarela de pagos y gestión de inventario.",
    category: "PulseCode",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    link: "#",
    featured: true,
  },
  {
    title: "Dashboard Analytics",
    description: "Panel de análisis de datos en tiempo real con visualizaciones interactivas.",
    category: "PulseCode",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Next.js", "D3.js", "Python", "AWS"],
    link: "#",
  },
  {
    title: "App de Fitness",
    description: "Aplicación móvil para seguimiento de entrenamientos con IA para planes personalizados.",
    category: "Personal",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    tags: ["React Native", "TypeScript", "Firebase"],
    link: "#",
  },
  {
    title: "Portfolio 3D",
    description: "Sitio web interactivo con elementos 3D y animaciones avanzadas.",
    category: "Personal",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80",
    tags: ["Three.js", "GSAP", "WebGL"],
    link: "#",
  },
  {
    title: "SaaS de Gestión",
    description: "Plataforma SaaS para la gestión de proyectos y equipos con integraciones.",
    category: "PulseCode",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["React", "Supabase", "Tailwind", "Stripe"],
    link: "#",
  },
  {
    title: "CLI Developer Tool",
    description: "Herramienta de línea de comandos open source para automatizar flujos de desarrollo.",
    category: "Personal",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
    tags: ["Rust", "CLI", "Open Source"],
    link: "#",
  },
];