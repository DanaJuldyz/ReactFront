import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Dana Galymzhan",
  title: "Барлықтарыңа сәлем! Менің есімім Dana",
  description:
    "Мен React.js және Next.js көмегімен Front-End веб-қосымшаларын жасау тәжірибесі бар Front-End веб-әзірлеушісімін. Мен жаңа технологияларды үйренуге және оларды өз жобаларыма енгізуге қатты қызығамын. Мен әрқашан жаңа нәрселерді үйренуге және командада жұмыс істеуге дайын, өзін-өзі ынталандыратын және еңбекқор адаммын.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "DanaJuldyz",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:dana.galymzhan@narxoz.kz",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/DanaJuldyz",
  instagram: "https://www.instagram.com/glmzhn_dana",

};

export const skillsSection: SkillsSectionType = {
  title: "Мен",
  subTitle: "Барлық жаңа программалау тілдерін тез үйренуге тырысатын Front-End әзірлеушімін",
  data: [
    {
      title: "Front-End әзерлеу",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ React.js қолдану арқылы веб-қосымшалар әзірлеу"),
        emoji("⚡ Next.js қолдану арқылы оптимизациялау"),
        emoji("⚡ Redux қолдану арқылы қосымшаларды басқару."),
      ],
      softwareSkills: [
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Laravel",
          iconifyTag: "logos:laravel",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend және Дизайн",
    progressPercentage: "95",
  },
  {
    Stack: "Backend",
    progressPercentage: "80",
  },
  {
    Stack: "Программалау",
    progressPercentage: "89",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Narxoz University",
    subHeader: "Digital Management and Design in IT",
    duration: "Қыркүйек 2021 - Шілде 2025",
    desc: "",
    grade: "GPA:3.15",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Версталщик",
    company: "Init.kz",
    companyLogo: "/img/icons/common/init.jpg",
    date: "Қараша 2022 - Желтоқсан 2022",
    desc: "Осы жұмыс барысында мен HTML/CSS-ті толық меңгеруді бастадым.",
  },
  {
    role: "Front-End әзірлеуші",
    company: "MAK IT",
    companyLogo: "/img/icons/common/Qazaq.png",
    date: "Қаңтар 2023 - Сәуір 2023",
    desc: "Front-End әзірлеушінің барлық жұмыстарын атқардым. Бағдарламау тілі ReactJS",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },

];

export const projects: ProjectType[] = [
  {
    name: "Server-Side Rendering",
    desc: "SSR жасаған болатынбыз.",
    github: "https://github.com/DanaJuldyz/Final-Project",
    link: "https://github.com/DanaJuldyz/Final-Project",
  },
  {
    name: "React with Redux",
    desc: "Қосымшамызды оптималды түрде басқау үшін Redux орнатқан болатынбыз.",
    github: "https://github.com/DanaJuldyz/Final-Project",
    link: "https://github.com/DanaJuldyz/Final-Project",
  },
  {
    name: "Webpack Configuration",
    desc: "React қосымшасының Серверлік бөлігі үшін Webpack қолдандық.",
    github: "https://github.com/DanaJuldyz/Final-Project",
    link: "https://github.com/DanaJuldyz/Final-Project",
  },
  {
    name: "Hooks ",
    desc: "Бұл бөлімде біз Hook-тарды яғни useState(), useEffect() деректерді сақтауға пайдаланған болатынбыз.",
    github: "https://github.com/DanaJuldyz/Final-Project",
    link: "https://github.com/DanaJuldyz/Final-Project",
  },
];

export const feedbacks: FeedbackType[] = [

];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Dana Galymzhan",
  description: greetings.description,
  author: "Dana Galymzhan",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Hanzla Tauqeer",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Hanzla Tauqeer Portfolio",
  ],
};
