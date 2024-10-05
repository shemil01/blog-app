interface BlogType {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  imageUrl: string;
}

const Sampleblogs: BlogType[] = [
  {
    id: 1,
    title: "Mastering React: Advanced Patterns and Techniques",
    description:
      "Take your React skills to the next level with these advanced patterns and techniques for building scalable applications.",
    author: "Alice Brown",
    date: "September 10, 2024",
    imageUrl:
      "https://via.placeholder.com/150/8f8e94/FFFFFF?text=React+Mastery",
  },
  {
    id: 2,
    title: "Tailwind CSS vs. Bootstrap: Which Should You Use?",
    description:
      "A detailed comparison between Tailwind CSS and Bootstrap. Learn the pros and cons of each framework for modern web development.",
    author: "Brian Wilson",
    date: "August 15, 2024",
    imageUrl:
      "https://via.placeholder.com/150/3f51b5/FFFFFF?text=Tailwind+vs+Bootstrap",
  },
  {
    id: 3,
    title: "Getting Started with Next.js 13",
    description:
      "An introduction to Next.js 13, covering everything from file-based routing to the new app directory and server components.",
    author: "Chloe Adams",
    date: "July 30, 2024",
    imageUrl: "https://via.placeholder.com/150/43a047/FFFFFF?text=Next.js+13",
  },
  {
    id: 4,
    title: "State Management in React with Redux Toolkit",
    description:
      "Learn how to effectively manage state in your React applications using Redux Toolkit, a modern approach to Redux.",
    author: "David Lee",
    date: "June 5, 2024",
    imageUrl:
      "https://via.placeholder.com/150/ff5722/FFFFFF?text=Redux+Toolkit",
  },
  {
    id: 5,
    title: "Understanding JavaScript Closures",
    description:
      "A comprehensive guide to understanding closures in JavaScript and how they can be used to create powerful, maintainable code.",
    author: "Emily Johnson",
    date: "May 21, 2024",
    imageUrl: "https://via.placeholder.com/150/607d8b/FFFFFF?text=JS+Closures",
  },
  {
    id: 6,
    title: "Optimizing Performance in Web Applications",
    description:
      "Discover key strategies and techniques for optimizing the performance of your web applications, including lazy loading and code splitting.",
    author: "Frankie Monroe",
    date: "April 14, 2024",
    imageUrl:
      "https://via.placeholder.com/150/e91e63/FFFFFF?text=Web+Performance",
  },
  {
    id: 7,
    title: "An Introduction to Serverless Architecture",
    description:
      "Explore the world of serverless computing and learn how to build scalable applications without managing servers.",
    author: "George Taylor",
    date: "March 19, 2024",
    imageUrl:
      "https://via.placeholder.com/150/673ab7/FFFFFF?text=Serverless+Architecture",
  },
  {
    id: 8,
    title: "Why TypeScript is the Future of JavaScript",
    description:
      "Understand why TypeScript is becoming the standard for large-scale JavaScript applications and how it improves developer productivity.",
    author: "Hannah Smith",
    date: "February 27, 2024",
    imageUrl: "https://via.placeholder.com/150/009688/FFFFFF?text=TypeScript",
  },
  {
    id: 9,
    title: "Building Progressive Web Apps (PWAs) with React",
    description:
      "Learn how to create fast, reliable, and engaging progressive web apps (PWAs) using React and modern web technologies.",
    author: "Ian Roberts",
    date: "January 12, 2024",
    imageUrl:
      "https://via.placeholder.com/150/4caf50/FFFFFF?text=PWA+with+React",
  },
];
export default Sampleblogs;
