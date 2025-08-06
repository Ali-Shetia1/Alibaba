// Import project images
import Work1 from '../assets/work1.jpg';
import Work2 from '../assets/work2.jpg';
import Work3 from '../assets/work3.jpg';
import Work4 from '../assets/work4.jpg';
import Work5 from '../assets/work5.jpg';
import Klimate from '../assets/klimate/549_1x_shots_so.png'

export const projectsData = [
  {
    id: 1,
    slug: "laptix-ecommerce",
    image: Klimate,
    images: [Klimate, Work1, Work2, Work4, Work5], // Main image + 4 alternatives
    title: "Klimate | Weather App",
    shortDescription: "Modern real-time weather app with React and TypeScript",
    longDescription: "Klimate is a sophisticated weather application that provides real-time weather data, forecasts, and climate information. Built with React and TypeScript, it features an elegant UI with dynamic backgrounds that change based on weather conditions. The app includes location-based weather detection, detailed forecasts, and supports dark and light modes.",
    technologies: ["React", "TypeScript", "OpenWeather API", "TailwindCSS", "Shadcn UI", "Tanstack Query", "Geolocation API"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order tracking and management",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
      "Email notifications for orders"
    ],
    liveUrl: "https://ali-shetia1.github.io/klimate",
    githubUrl: "https://github.com/Ali-Shetia1/klimate"
  },
  {
    id: 2,
    slug: "Laptix - Store",
    image: Work2,
    images: [Work2, Work3, Work4, Work1, Work5], // Main image + 4 alternatives
    title: "Klimate | Weather App",
    shortDescription: "Modern real-time weather app with React and TypeScript",
    longDescription: "Laptix is a comprehensive e-commerce platform designed for selling laptops and electronic devices. Built with modern web technologies, it features a responsive design, secure payment integration, real-time inventory management, and an intuitive admin dashboard. The platform provides a seamless shopping experience with advanced search filters, product comparisons, and user reviews.",
    technologies: ["", ""],
    features: [
      "Real-time weather data for any location",
      "7-day weather forecast with hourly details",
      "Dynamic backgrounds based on weather conditions",
      "Geolocation-based automatic weather detection",
      "Weather charts and data visualization",
      "Search functionality for global cities",
      "Weather alerts and notifications",
      "Responsive design with smooth animations"
    ],
    learned: [
      "Working with external APIs and data fetching",
      "TypeScript implementation in React projects",
      "Creating dynamic UI components based on data",
      "Implementing geolocation services",
      "Data visualization with Chart.js",
      "Optimizing performance for real-time data"
    ],
    liveUrl: "https://klimate-weather.vercel.app",
    githubUrl: "https://github.com/username/klimate"
  },
  {
    id: 3,
    slug: "school-marines-management",
    image: Work3,
    images: [Work3, Work5, Work1, Work2, Work4], // Main image + 4 alternatives
    title: "School Marines | School Management App",
    shortDescription: "Comprehensive school management system",
    longDescription: "School Marines is a complete school management system designed to streamline educational institution operations. The platform includes modules for student enrollment, grade management, attendance tracking, parent communication, and administrative tasks. Built with modern web technologies, it provides role-based access for students, teachers, parents, and administrators.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io", "JWT", "Material-UI"],
    features: [
      "Student enrollment and profile management",
      "Grade and assignment tracking system",
      "Attendance monitoring with analytics",
      "Parent-teacher communication portal",
      "Class scheduling and timetable management",
      "Fee payment and financial tracking",
      "Real-time notifications and messaging",
      "Report generation and analytics dashboard"
    ],
    learned: [
      "Complex database relationships and modeling",
      "Real-time communication with Socket.io",
      "Role-based authentication and authorization",
      "Building scalable multi-user applications",
      "Creating comprehensive admin dashboards",
      "Implementing notification systems"
    ],
    liveUrl: "https://schoolmarines.edu",
    githubUrl: "https://github.com/username/school-marines"
  },
  {
    id: 4,
    slug: "ihsaa-maintenance-landing",
    image: Work4,
    images: [Work4, Work2, Work3, Work5, Work1], // Main image + 4 alternatives
    title: "Ihsaa Maintenance | Landing Page",
    shortDescription: "Professional maintenance service landing page",
    longDescription: "A modern, responsive landing page for Ihsaa Maintenance Services, showcasing their comprehensive maintenance and repair solutions. The website features an elegant design with smooth animations, service portfolios, customer testimonials, and an integrated contact system. Built to convert visitors into customers with strategic call-to-action placements.",
    technologies: ["React", "CSS3", "JavaScript", "EmailJS", "AOS Animation", "React Router"],
    features: [
      "Responsive design with mobile-first approach",
      "Smooth scroll animations and transitions",
      "Service showcase with detailed descriptions",
      "Customer testimonials and reviews section",
      "Integrated contact form with email functionality",
      "Before/after project galleries",
      "SEO optimized content structure",
      "Performance optimized loading"
    ],
    learned: [
      "Creating high-converting landing pages",
      "Advanced CSS animations and transitions",
      "SEO best practices implementation",
      "Performance optimization techniques",
      "Client communication and requirements gathering",
      "Business-focused web development"
    ],
    liveUrl: "https://ihsaa-maintenance.com",
    githubUrl: "https://github.com/username/ihsaa-landing"
  },
  {
    id: 5,
    slug: "social-media-app",
    image: Work5,
    images: [Work5, Work4, Work1, Work3, Work2], // Main image + 4 alternatives
    title: "Social Media App",
    shortDescription: "Full-stack social media application",
    longDescription: "A comprehensive social media platform that enables users to connect, share content, and interact with friends and communities. Features include real-time messaging, photo/video sharing, news feed algorithms, story features, and group functionality. Built with modern full-stack technologies for scalability and performance.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Cloudinary", "JWT", "Redux"],
    features: [
      "User profiles with customizable settings",
      "Real-time messaging and chat functionality",
      "Photo and video sharing with filters",
      "News feed with algorithmic content sorting",
      "Story creation and viewing features",
      "Friend requests and connection management",
      "Group creation and management",
      "Like, comment, and share interactions"
    ],
    learned: [
      "Real-time application development",
      "Complex state management with Redux",
      "File upload and media management",
      "Building scalable social features",
      "Algorithm development for content feeds",
      "WebSocket implementation for live features"
    ],
    liveUrl: "https://social-connect-app.vercel.app",
    githubUrl: "https://github.com/username/social-media-app"
  },
  {
    id: 6,
    slug: "food-delivery-app",
    image: Work1,
    images: [Work1, Work5, Work4, Work3, Work2], // Main image + 4 alternatives
    title: "Food Delivery App",
    shortDescription: "Mobile-first food ordering platform",
    longDescription: "A modern food delivery application that connects customers with local restaurants. Features include restaurant browsing, menu management, order tracking, payment processing, and delivery coordination. The app provides a seamless experience for customers, restaurants, and delivery partners with real-time updates and notifications.",
    technologies: ["React Native", "Node.js", "Express", "MongoDB", "Stripe", "Google Maps API", "Socket.io"],
    features: [
      "Restaurant discovery with location-based search",
      "Menu browsing with categories and filters",
      "Shopping cart with order customization",
      "Real-time order tracking with GPS",
      "Multiple payment options integration",
      "Rating and review system",
      "Push notifications for order updates",
      "Restaurant dashboard for order management"
    ],
    learned: [
      "Mobile app development with React Native",
      "Location-based services and mapping",
      "Payment gateway integration",
      "Real-time tracking implementation",
      "Multi-user role management",
      "Building marketplace applications"
    ],
    liveUrl: "https://fooddelivery-app.vercel.app",
    githubUrl: "https://github.com/username/food-delivery-app"
  }
];

// Function to get project by slug
export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

// Function to get project by ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === parseInt(id));
};