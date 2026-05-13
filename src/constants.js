// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import beauty from './assets/tech_logo/beauty.jpg';
import excel from './assets/tech_logo/excel.jpg';
import seaborn from './assets/tech_logo/Seaborn.png';
import powerbi from './assets/tech_logo/powerbi.jpeg';
import pandas from './assets/tech_logo/pandas.png';
import numpy from './assets/tech_logo/NumPy.png';
import scikitlearn from './assets/tech_logo/Scikit.jpg';
import jupyter from './assets/tech_logo/jupyter.jpeg';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';



// Project Section Logo's
import zomato from './assets/work_logo/a.png';
import dashboard from './assets/work_logo/dashboard.png';
import scraping from './assets/work_logo/Scraping.png';
import dictionary from './assets/work_logo/dictionary.png';
import todo from './assets/work_logo/todo.png';
import resume from './assets/work_logo/resume.png';
import spam from './assets/work_logo/spam.png';
import doctor from './assets/work_logo/doctor.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Jupyter', logo: jupyter },
    ],
  },
  {
    title: 'Data Analytics',
    skills: [
      { name: 'Microsoft Excel', logo: excel },
      { name: 'Power BI', logo: powerbi },
      { name: 'Python', logo: pythonLogo },
      { name: 'BeautifulSoup', logo: beauty },
      { name: 'Seaborn', logo: seaborn },

    ],
  },

   {
    title: 'Machine Learning',
    skills: [
      { name: 'Pandas', logo: pandas},
      { name: 'Numpy', logo: numpy },
      { name: 'Python', logo: pythonLogo },
      { name: 'Scikit-Learn', logo: scikitlearn },

    ],
  },
];

  
  
  export const education = [
    
    {
      id: 0,
      school: "Shriram institute of management and technology",
      date: "Sept 2023 - Aug 2026",
      grade: "7.9 Cgpa",
      desc: "I completed my Bachelor's degree in Computer Science (BCA) from Shriram Institute of management and technology, uttarakhand. My time at  College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of computer application(BCA)",
    },
    {
      id: 1,
      school: "G.B Pant Inter College",
      date: "Apr 2022 - March 2023",
      grade: "87%",
      desc: "I completed my class 12 education from G.B Pant Inter College,Kashipur, under the Uttarakhand board, where I studied Physics, Chemistry, and Mathematics (PCM) .",
      degree: "UK Board(XII) - PCM",
    },
    {
      id:2,
      school: "Kavita Modern Public High School",
      date: "Apr 2020 - March 2021",
      grade: "91%",
      desc: "I completed my class 10 education from Kavita Modern Public High School, Kashipur , under the Uttarakhand board.",
      degree: "UK board(X)",
    },
  ];
  
  export const projects = [

     {
      id: 0,
      title: "AI Automated Resume Screening System",
      description:"Developed an AI-based Automated Resume Screening System as a group project to streamline candidate shortlisting, where my role focused on the NLP module including text preprocessing and applying TF-IDF with cosine similarity to match resumes with job descriptions and rank candidates, improving screening efficiency through accurate and automated selection.",    
      image:resume,
      tags: ["Python", "NLTK", "spaCy", "TF-IDF", "Cosine Similarity", "Pandas", "NumPy", "Scikit-learn", "Flask", "React.js"],
      github: "https://github.com/itz-anjali-27/AI_Automated_Resume_Screening_System.git",
      
    },
    {
      id: 1,
      title: "Doctor Appointment System",
      description:
        "Developed a Smart Doctor Appointment System that allows patients to easily book, manage, and track appointments with doctors. The system streamlines scheduling, reduces manual effort, and improves overall healthcare accessibility through a user-friendly and responsive interface.",
      image:doctor,
      tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS", "API","Node.js","Express.js","MongoDB","JWT Authentication"],
      github: "https://github.com/itz-anjali-27/Doctor_Appointment_System.git",
      
    },
    {
      id: 2,
      title: "SMS Spam Classifier",
      description:
        "Developed an Email Detection System that analyzes incoming emails to identify and classify spam or malicious content using machine learning techniques. The system enhances email security by filtering unwanted messages and improving overall user experience through accurate and efficient detection.",
      image:spam,
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLP", "Machine Learning"],
      github: "https://github.com/itz-anjali-27/SMS_Spam_Classifier.git",
 
    },
   
    {
      id: 3,
      title: "Zomato Data Analysis",
      description:
        "In this project, I performed end-to-end data analysis on the Zomato dataset using Python libraries like Pandas, NumPy, Matplotlib, and Seaborn.",
      image: zomato,
      tags: ["Numpy", "Pandas", "Seaborn", " Matplotlib"],
      github: "https://github.com/itz-anjali-27/Zomato_dataAnalysis_Project.git",
    },
    {
      id: 4,
      title: "Blinkit DataVitulization",
      description:"Developed an interactive Power BI dashboard to analyze Blinkit sales, customer behavior, and performance trends.",
      image:dashboard,
      tags: ["PowerBI","Dashboard","DataVisualization"],
      github: "https://github.com/itz-anjali-27/blinkit-datavitulization-dashboard.git",
    },
    {
      id: 5,
      title: "flipcart webscraping data",
      image:scraping,
      description:"Developed a web scraping solution using Python to extract product details like price, ratings, and titles from an e-commerce platform.",
      tags: ["Python","BeautifulSoup","WebScraping","DataExtraction"],
      github: "https://github.com/itz-anjali-27/Flipcart_web_scraping_project.git",
    },
    {
      id: 6,
      title:"Dictionary App",
      image:dictionary,
      description:"Developed a dictionary application using API integration to fetch real-time word meanings, synonyms, and pronunciations.",
      tags: ["HTML","CSS","JavaScript"],
      github: "https://github.com/itz-anjali-27/Dictionary-app.git",
    },
    {
      id: 7,
      title:"TO-Do App",
      image:todo,
      description:"Developed a To-Do List application to manage daily tasks with features like add, delete, and mark as completed.",
      tags: ["HTML","CSS","JavaScript"],
      github: "https://github.com/itz-anjali-27/To-do-list.git",
    },
    
    
    
  ];  