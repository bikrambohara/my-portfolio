
import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";
import cert4 from "../assets/cert4.jpg";
import mlbiggner from "../assets/mlbiggner.jpg";
import ing from "../assets/ing.png";
import python from "../assets/python.jpg";


const portfolio = {

    

    personal: {
        name: "Bikram Bohara",
        role: "Frontend Developer",
        email: "yourmail@gmail.com",
        phone: "+977 98XXXXXXXX",
        location: "Kathmandu, Nepal",

        cv: "/Bikram_Bohara_CV.pdf",

        github: "https://github.com/username",
        linkedin: "https://linkedin.com/in/username"
    },


about: {
  description:
    "I am a BCSIT student with practical experience in web development, UI/UX design, and basic data analysis. I can build clean,   responsive, and user-friendly websites using technologies like  React, Node.js, and MySQL. I also have experience working with Power BI and machine learning projects. I enjoy solving problems and creating useful applications.",

  moreDescription:
     "I have worked on projects like a travel booking system, sales dashboard, and house price prediction, which helped me understand real-world development and data use. I am a quick learner, a good team player, and always ready to learn new things. I am looking for an opportunity where I can use my skills, improve myself, and contribute to real projects. If you are interested, please reach out to me."
},



education: [
  {
    id: 1,
    title: "Bachelor of Computer Systems and Information Technology (BCSIT)",
    place: "Apex College, Pokhara University",
    year: "2023 - Present",
    icon: "graduation",
    color: "#22d3ee",
    status: "In Progress",
    details:
      "Currently pursuing my bachelor's degree in Computer Systems and Information Technology, focusing on programming, software development, data science and emerging technologies."
  },
  {
    id: 2,
    title: "Higher Secondary Certificate",
    place: "Radiant Secondary School",
    year: "2021 - 2023",
    icon: "book",
    color: "#a78bfa",
    status: "Completed",
    details:
      "Completed higher secondary education in the Science stream, building a foundation in science, mathematics and analytical thinking."
  },
  {
    id: 3,
    title: "Secondary School Certificate",
    place: "Bhumiraj Secondary School",
    year: "2008 - 2021",
    icon: "school",
    color: "#34d399",
    status: "Completed",
    details:
      "Completed secondary education and developed a foundation for further academic learning."
  }
],



experience: [
  {
    id: 1,
    title: "UI/UX Designer and Frontend Developer",
    place: "AfnoBazar",
    year: "Mar 2025 - Aug 2025",
    icon: "briefcase",
    color: "#22d3ee",
    status: "Completed",

    highlights: [
      "Designed clean and user-friendly interfaces using Figma and Canva.",
      "Developed responsive web pages with HTML, CSS, JavaScript and React.",
      "Worked closely with the team to improve the overall user experience and design quality."
    ],

    tags: [
      "Figma",
      "Canva",
      "HTML",
      "CSS",
      "JavaScript",
      "React"
    ]
  }
],



skills: [
  // Data & ML
  {
    name: "Machine Learning / AI",
    category: "Data & ML",
    color: "#22d3ee",
    icon: "brain",
    desc: "Building and training models that learn from data",
    tags: ["ML", "AI"],
    more: "I train and test models for prediction and classification, and work through the full workflow: preparing data, choosing a model, evaluating results and improving them."
  },
  {
    name: "Data Science",
    category: "Data & ML",
    color: "#a78bfa",
    icon: "robot",
    desc: "From raw data to insights and predictions",
    tags: ["Modeling", "Insights"],
    more: "I combine statistics, programming and visualization to turn raw data into clear findings that help people make decisions."
  },
  {
    name: "Data Analysis",
    category: "Data & ML",
    color: "#34d399",
    icon: "database",
    desc: "Cleaning, exploring and understanding datasets",
    tags: ["EDA", "Cleaning"],
    more: "I clean messy data, explore patterns and summarize the results so the numbers are easy to understand and act on."
  },
  {
    name: "Pandas",
    category: "Data & ML",
    color: "#e70488",
    icon: "pandas",
    desc: "Data wrangling and analysis with DataFrames",
    tags: ["Python", "Data"],
    more: "I use Pandas to load, filter, merge and reshape data quickly, and to prepare datasets for analysis and modeling."
  },
  {
    name: "NumPy",
    category: "Data & ML",
    color: "#4dabcf",
    icon: "numpy",
    desc: "Fast numerical computing and array operations",
    tags: ["Python", "Math"],
    more: "I use NumPy for fast array math. It is the base of most data science and machine learning libraries."
  },
  {
    name: "Scikit-learn",
    category: "Data & ML",
    color: "#f89939",
    icon: "scikit-learn",
    desc: "Classic ML models, pipelines and evaluation",
    tags: ["ML", "Python"],
    more: "I use Scikit-learn to build and compare models such as regression, classification and clustering, and to evaluate them with proper metrics."
  },
  {
    name: "Matplotlib",
    category: "Data & ML",
    color: "#5aa9e6",
    icon: "chart-line",
    desc: "Custom charts and data visualizations",
    tags: ["Charts", "Python"],
    more: "I create line, bar and scatter charts with full control over labels, colors and layout so results are shown clearly."
  },
  {
    name: "Seaborn",
    category: "Data & ML",
    color: "#6fc3d6",
    icon: "chart-pie",
    desc: "Clean statistical plots with very little code",
    tags: ["Stats", "Python"],
    more: "I use Seaborn for statistical plots such as heatmaps, distributions and pair plots that reveal patterns in data."
  },

  // Programming
  {
    name: "Python",
    category: "Programming",
    color: "#4B8BBE",
    icon: "python",
    desc: "Python for Web & ML",
    tags: ["Web", "ML", "Automation"],
    more: "Python is my main language. I use it to build web backends, analyze data, train machine learning models and automate repetitive tasks."
  },
  {
    name: "DSA",
    category: "Programming",
    color: "#f59e0b",
    icon: "project-diagram",
    desc: "Problem solving with efficient algorithms",
    tags: ["Algorithms", "Logic"],
    more: "I practice data structures and algorithms to write code that is correct and efficient, and to solve problems step by step."
  },
  {
    name: "C / Java",
    category: "Programming",
    color: "#f97316",
    icon: "code",
    desc: "Core programming and object-oriented design",
    tags: ["OOP", "Fundamentals"],
    more: "I use C and Java to understand how programs work under the hood and to apply object-oriented design."
  },

  // Web
  {
    name: "JavaScript",
    category: "Web",
    color: "#F7DF1E",
    icon: "javascript",
    desc: "Interactive websites and web apps",
    tags: ["Frontend", "Web"],
    more: "I use JavaScript to add interactivity to websites, from form handling to dynamic pages and API calls."
  },
  {
    name: "React.js",
    category: "Web",
    color: "#61DAFB",
    icon: "react",
    desc: "Fast, component-based user interfaces",
    tags: ["UI", "Frontend"],
    more: "I build reusable components with React to create responsive and easy-to-maintain interfaces."
  },
  {
    name: "Node.js",
    category: "Web",
    color: "#68A063",
    icon: "nodejs",
    desc: "Backend APIs and server-side apps",
    tags: ["Backend", "API"],
    more: "I use Node.js to build REST APIs and to connect front-end apps to databases and other services."
  },
  {
    name: "PHP",
    category: "Web",
    color: "#8892BF",
    icon: "php",
    desc: "Server-side web development",
    tags: ["Backend", "Web"],
    more: "I use PHP for server-side pages, form handling and database-driven websites."
  },

  // Soft Skills
  {
    name: "Project Management",
    category: "Soft Skills",
    color: "#a78bfa",
    icon: "tasks",
    desc: "Planning, organizing and delivering projects",
    tags: ["Planning", "Teamwork"],
    more: "I plan tasks, set priorities and keep everyone on track so projects are delivered on time."
  },
  {
    name: "Communication (English)",
    category: "Soft Skills",
    color: "#34d399",
    icon: "messages",
    desc: "Clear communication with teams and clients",
    tags: ["English", "Teamwork"],
    more: "I explain technical ideas clearly in English, both in writing and in conversation, to teammates and clients."
  },
],




  // CERTIFICATIONS
  certifications: [
    {
      id: 1,
      issuer: "",
      image: cert1,
      color: "#22d3ee",
      top: false,
      contain: true
    },
    {
      id: 2,
      issuer: "",
      image: cert2,
      color: "#a78bfa",
      top: false
    },
    {
      id: 3,
      issuer: "",
      image: cert3,
      color: "#34d399",
      top: false
    },
    {
      id: 4,
      issuer: "",
      image: cert4,
      color: "#f472b6",
      top: false
    },
    {
      id: 5,
      issuer: "",
      image: mlbiggner,
      color: "#f89939",
      top: true
    },
    {
      id: 6,
      issuer: "",
      image: ing,
      color: "#f89939",
      top: true
    },
    {
      id: 7,
      issuer: "",
      image: python,
      color: "#f89939",
      top: true
    },
  ],



projects: [
  // Full Stack
  {
    id: 1,
    title: "Task Manager App",
    category: "Full Stack",
    problem: "Teams lose track of who is doing what. This app lets users sign in, create tasks, assign them and mark them done.",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/your-username/task-manager",
    liveDemo: ""
  },
  {
    id: 2,
    title: "Student Management System",
    category: "Full Stack",
    problem: "Schools still keep student records on paper. This system stores students, marks and attendance in one database.",
    tags: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/your-username/student-management",
    liveDemo: ""
  },

  // Frontend
  {
    id: 3,
    title: "Personal Portfolio Website",
    category: "Frontend",
    problem: "Recruiters need a quick way to see my skills and projects. This responsive site presents both in one place.",
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/bikrambohara/my-portfolio.git",
    liveDemo: ""
  },
  {
    id: 4,
    title: "Weather Dashboard",
    category: "Frontend",
    problem: "Checking the weather across many sites is slow. This dashboard shows the forecast for any city from a public API.",
    tags: ["JavaScript", "API", "CSS"],
    github: "https://github.com/your-username/weather-dashboard",
    liveDemo: ""
  },

  // Data Science
  {
    id: 5,
    title: "House Price Prediction",
    category: "Data Science",
    problem: "Buyers and sellers cannot easily tell a fair price. This model predicts house prices from size, location and rooms.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    github: "https://github.com/your-username/house-price-prediction",
    liveDemo: ""
  },
  {
    id: 6,
    title: "Customer Churn Prediction",
    category: "Data Science",
    problem: "Companies lose customers without warning. This model finds customers likely to leave so the company can act early.",
    tags: ["Python", "Scikit-learn", "Modeling"],
    github: "https://github.com/your-username/customer-churn",
    liveDemo: ""
  },

  // AI / ML
  {
    id: 7,
    title: "Spam Message Classifier",
    category: "AI / ML",
    problem: "Spam messages waste time and can be scams. This classifier learns from text to mark a message as spam or not spam.",
    tags: ["Python", "NLP", "ML"],
    github: "https://github.com/your-username/spam-classifier",
    liveDemo: ""
  },
  {
    id: 8,
    title: "Movie Recommendation System",
    category: "AI / ML",
    problem: "Finding a good movie takes too long. This system suggests movies similar to the ones a user already likes.",
    tags: ["Python", "Pandas", "ML"],
    github: "https://github.com/your-username/movie-recommender",
    liveDemo: ""
  },

  // Data Analysis
  {
    id: 9,
    title: "Sales Data Analysis",
    category: "Data Analysis",
    problem: "Shop owners do not know which products earn the most. This analysis shows sales trends by product and month.",
    tags: ["Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/your-username/sales-analysis",
    liveDemo: ""
  },
  {
    id: 10,
    title: "Student Performance Analysis",
    category: "Data Analysis",
    problem: "Schools want to know why some students score lower. This analysis compares marks with study time and attendance.",
    tags: ["Pandas", "NumPy", "Seaborn"],
    github: "https://github.com/your-username/student-performance",
    liveDemo: ""
  },

  // Other
  {
    id: 11,
    title: "File Organizer Script",
    category: "Other",
    problem: "Download folders get messy fast. This script sorts files into folders by type automatically.",
    tags: ["Python", "Automation"],
    github: "https://github.com/your-username/file-organizer",
    liveDemo: ""
  },
  {
    id: 12,
    title: "DSA Practice Solutions",
    category: "Other",
    problem: "Practicing algorithms needs a place to keep and review solutions. This repo holds my solved problems with notes.",
    tags: ["C", "Java", "DSA"],
    github: "https://github.com/your-username/dsa-practice",
    liveDemo: ""
  }
],



    // projects:[
    //     {
    //         title:"Portfolio Website",
    //         description:"Personal portfolio built with React",
    //         github:"https://github.com/project",
    //         demo:"https://demo.com"
    //     },

    //     {
    //         title:"Ecommerce Website",
    //         description:"Online shopping platform",
    //         github:"https://github.com/project2",
    //         demo:"https://demo2.com"
    //     }
    // ],


    // experience:[
    //     {
    //         company:"Company Name",
    //         role:"Frontend Developer",
    //         duration:"2025 - Present"
    //     }
    // ]

}


export default portfolio;