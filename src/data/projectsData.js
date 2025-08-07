// Import project images
import Klimate from '../assets/klimate/549_1x_shots_so.png';
import SchoolMarines from '../assets/school-marines/school-marines.png';
import IhsaaMaintenance from '../assets/ihsaa-maintenance/ihsaa-maintenance.png';
import Laptix from '../assets/laptix/laptix.png';

export const projectsData = [
  {
    id: 1,
    slug: "klimate",
    image: Klimate,
    images: [Klimate,], // Main image + 4 alternatives
    title: "Klimate | Weather App",
    shortDescription: "Modern real-time weather app with React and TypeScript",
    longDescription: "Klimate is a sophisticated weather application that provides real-time weather data, forecasts, and climate information. Built with React and TypeScript, it features an elegant UI with dynamic backgrounds that change based on weather conditions. The app includes location-based weather detection, detailed forecasts, and supports dark and light modes.",
    technologies: ["React", "TypeScript", "OpenWeather API", "TailwindCSS", "Shadcn UI", "Tanstack Query", "Geolocation API"],
    features: [
      "Real-time weather updates", "Comprehensive weather forecasts", "Favorite cities management", "Interactive city list", "Modern responsive UI", "Dynamic data retrieval", "Customizable user settings", "Dark mode support", "Global weather search"
    ],
    liveUrl: "https://ali-shetia1.github.io/klimate",
    githubUrl: "https://github.com/Ali-Shetia1/klimate"
  },
  {
    id: 2,
    slug: "school-marines",
    image: SchoolMarines,
    images: [SchoolMarines], // Main image + 4 alternatives
    title: "School Management APP",
    shortDescription: "Responsive school management dashboard with Next.js and TypeScript",
    longDescription: "a robust, full-stack web application built with Next.js and TypeScript, designed to streamline educational institution operations. It features role-based dashboards for admins, teachers, students, and parents, offering tailored functionalities like user management. Utilizing Prisma for seamless PostgreSQL integration, it supports CRUD operations and pagination for efficient data handling. The responsive UI, styled with Tailwind CSS, ensures accessibility across devices, while Clerk authentication secures user access.",
    technologies: ["React", "TypeScript", "TailwindCSS", "NextJS", "PostgreSQL", "Prisma Client", "Recharts"],
    features: [
      "User login and signup", "Customized user dashboards", "Responsive TailwindCSS layouts", "Varied charts for visualization", "Tabular data with CRUD", "PostgreSQL integration via Prisma", "Paginated data fetching", "Table data search", "Forms with Zod validation"
    ],
    liveUrl: "https://shcool-marines.vercel.app/",
    githubUrl: "https://github.com/Ali-Shetia1/shcool-marines"
  },
  {
    id: 3,
    slug: "ihsaa-maintenance",
    image: IhsaaMaintenance,
    images: [IhsaaMaintenance], // Main image + 4 alternatives
    title: "Ihsaa Maintenance",
    shortDescription: "Maintenance services landing page with React and TailwindCSS",
    longDescription: "Maintenance Services landing page, built with React and TailwindCSS, showcases maintenance services for business in Al-Ahsa, Saudi Arabia. It highlights the types of services provided, emphasizing reliability and quality through customer testimonials. The responsive design ensures seamless navigation, with multiple methods for submitting service requests and contacting the provider, enhancing user engagement.",
    technologies: ["React", "CSS3"],
    features: [
      "Responsive design with mobile-first approach",
      "Smooth scroll animations and transitions",
      "Service showcase with detailed descriptions",
      "Customer testimonials and reviews section",
      "Integrated contact form with email functionality",
      "Direct moible and Whats app contact",
    ],
    liveUrl: "https://ihsaa-maintenance.vercel.app",
    githubUrl: "https://github.com/Ali-Shetia1/ihsaa-maintenance"
  },
  {
    id: 4,
    slug: "laptix",
    image: Laptix,
    images: [Laptix], // Main image + 4 alternatives
    title: "Laptix Store",
    shortDescription: "Professional e-commerce store for selling laptops in Egypt",
    longDescription: "Laptix eCommerce Store is a modern online platform built with React and Next.js, offering high-quality, pre-owned laptops in Egypt. Tailored for tech enthusiasts and students, it features a responsive TailwindCSS interface for seamless navigation. Powered by Prisma and PostgreSQL, it manages product listings and orders efficiently. Shoppers can filter laptops by specifications and use Algolia search for quick discovery. Secure payments via Stripe and Clerk authentication ensure a safe, personalized experience, with customer reviews boosting trust.",
    technologies: ["React", "NextJS", "TailwindCSS"],
    features: [
    ],
    liveUrl: "https://laptix-egypt.vercel.app",
    githubUrl: "https://github.com/Ali-Shetia1/Laptix"
  },
];

// Function to get project by slug
export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug)
}

// Function to get project by ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === parseInt(id));
};