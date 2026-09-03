import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
    category: "Frontend",
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
    category: "Frontend",
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
    category: "Frontend",
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
    category: "Frontend",
  },
  {
    name: "Next js",
    Image: "/next.png",
    width: 80,
    height: 80,
    category: "Frontend",
  },
];

export const Socials = [
  {
    name: "Facebook",
    src: "/facebook.svg",
    link: "https://www.facebook.com/wracell1001"
  },
  {
    name: "Instagram",
    src: "/instagram.svg",
    link: "https://www.instagram.com/rhazeljay/"
  },
];
export const Projects = [
  {
    title: "TaleScape",
    text: "A platform to easily generate unique, captivating storybooks for children, families, and friends using an innovative builder.",
    src: "/TaleScape.png",
    link: "https://talescape-storygenerator.vercel.app/",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Tanod Monitoring System",
    text: "A system is developed to monitor the tanod reports within the barangay.",
    src: "/tanod.png",
    link: "http://tanod-monitoring.vercel.app/",
    tags: ["Next.js", "TypeScript"],
  },
  {
    title: "Rekom",
    text: "A movie recommendation website/app with modern design and helps users discover films they love using smart algorithms.",
    src: "/rekom.png",
    link: "https://github.com/Wracell/CCS-230-Final-Project",
    tags: ["React", "Python", "Machine Learning"],
  },
  {
    title: "diAIry",
    text: "A diary website/app where you can write your daily thoughts and experiences.",
    src: "/diAIry.png",
    link: "https://github.com/Wracell/Diary-App",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Caffeinated Spaces",
    text: "A digital platform exploring and celebrating the evolving coffee culture in Iloilo City.",
    src: "/caffeinated-spaces.png",
    link: "https://caffeinatedspaces.vercel.app/",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Iloilo Directory",
    text: "A local business and services directory for Iloilo City with search and categorization features.",
    src: "/iloilo-directory.png",
    link: "https://iloilo-directory-rwlz.vercel.app/",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Abing's Darag",
    text: "A promotional website for Abing's Darag Chicken Trading, showcasing the native Darag breed of Panay Island.",
    src: "/abings-darag.png",
    link: "https://abings-darag.vercel.app/",
    tags: ["Next.js", "Tailwind CSS"],
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
    label: "Home",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
    label: "Skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
    label: "Projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
    label: "Contact",
  },
];
