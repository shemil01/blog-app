interface BlogType {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  imageUrl: string;
  slug:string
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
        "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg",
      slug: "mastering-react-advanced-patterns-and-techniques",
    },
    {
      id: 2,
      title: "Tailwind CSS vs. Bootstrap: Which Should You Use?",
      description:
        "A detailed comparison between Tailwind CSS and Bootstrap. Learn the pros and cons of each framework for modern web development.",
      author: "Brian Wilson",
      date: "August 15, 2024",
      imageUrl:
        "https://thumbs.dreamstime.com/b/blogging-blog-concepts-ideas-worktable-blogging-blog-concepts-ideas-white-worktable-110423482.jpg",
      slug: "tailwind-css-vs-bootstrap-which-should-you-use",
    },
    {
      id: 3,
      title: "Getting Started with Next.js 13",
      description:
        "An introduction to Next.js 13, covering everything from file-based routing to the new app directory and server components.",
      author: "Chloe Adams",
      date: "July 30, 2024",
      imageUrl:
        "https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e.png",
      slug: "getting-started-with-next-js-13",
    },
    {
      id: 4,
      title: "State Management in React with Redux Toolkit",
      description:
        "Learn how to effectively manage state in your React applications using Redux Toolkit, a modern approach to Redux.",
      author: "David Lee",
      date: "June 5, 2024",
      imageUrl:
        "https://fairuzrazak.my/wp-content/uploads/2017/08/Oli-Blog-2.jpg",
      slug: "state-management-in-react-with-redux-toolkit",
    },
    {
      id: 5,
      title: "Understanding JavaScript Closures",
      description:
        "A comprehensive guide to understanding closures in JavaScript and how they can be used to create powerful, maintainable code.",
      author: "Emily Johnson",
      date: "May 21, 2024",
      imageUrl:
        "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg",
      slug: "understanding-javascript-closures",
    },
    {
      id: 6,
      title: "Optimizing Performance in Web Applications",
      description:
        "Discover key strategies and techniques for optimizing the performance of your web applications, including lazy loading and code splitting.",
      author: "Frankie Monroe",
      date: "April 14, 2024",
      imageUrl:
        "https://pbwebdev.co.uk/wp-content/uploads/2018/12/blogs.jpg",
      slug: "optimizing-performance-in-web-applications",
    },
    {
      id: 7,
      title: "An Introduction to Serverless Architecture",
      description:
        "Explore the world of serverless computing and learn how to build scalable applications without managing servers.",
      author: "George Taylor",
      date: "March 19, 2024",
      imageUrl:
        "https://www.comecreareunblog.net/wp-content/uploads/2018/10/come-aprire-un-blog-1024x529.jpg",
      slug: "an-introduction-to-serverless-architecture",
    },
    {
      id: 8,
      title: "Why TypeScript is the Future of JavaScript",
      description:
        "Understand why TypeScript is becoming the standard for large-scale JavaScript applications and how it improves developer productivity.",
      author: "Hannah Smith",
      date: "February 27, 2024",
      imageUrl:
        "https://st2.depositphotos.com/6672578/10459/i/450/depositphotos_104599856-stock-photo-office-workspace-with-wooden-table.jpg",
      slug: "why-typescript-is-the-future-of-javascript",
    },
    {
      id: 9,
      title: "Building Progressive Web Apps (PWAs) with React",
      description:
        "Learn how to create fast, reliable, and engaging progressive web apps (PWAs) using React and modern web technologies.",
      author: "Ian Roberts",
      date: "January 12, 2024",
      imageUrl:
        "https://thumbs.dreamstime.com/b/did-you-know-thoughtful-male-person-looking-to-digital-tablet-screen-laptop-screen-silhouette-filter-sun-79703601.jpg",
      slug: "building-progressive-web-apps-with-react",
    },
  ];
  
  export default Sampleblogs;