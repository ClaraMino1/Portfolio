export type Skill = {
  name: string;
  icon: string;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "react/react-original.svg" },
      { name: "TypeScript", icon: "typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "javascript/javascript-original.svg" },
      { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg" },
      { name: "AntDesign", icon: "antdesign/antdesign-original.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", icon: "php/php-original.svg" },
      { name: "MySQL", icon: "mysql/mysql-original.svg" },
      { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: "docker/docker-original.svg" },
      { name: "Git", icon: "git/git-original.svg" },
    ],
  },
];