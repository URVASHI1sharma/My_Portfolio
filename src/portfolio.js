/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/Intro.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Urvashi Sharma",
  title: "Hi there, I'm Urvashi 👩‍💻",
  subTitle: emoji(
    "A curious and driven explorer in the world of Data Science and Cybersecurity 🧠🔐. I thrive on uncovering insights from data, building intelligent systems, and securing the digital world with analytical precision."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/URVASHI1sharma",
  linkedin: "https://www.linkedin.com/in/urvashi-sharma-b07a92163",
  gmail: "urvashi010498@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE LEARNER IN DATA SCIENCE & CYBERSECURITY EXPLORING SMART AND SECURE SOLUTIONS 🔍🔐",
  skills: [
    emoji("📊 Analyze and visualize complex datasets to uncover actionable insights"),
    emoji("🤖 Build machine learning models for prediction, classification, and anomaly detection"),
    emoji("🔐 Design secure systems and perform risk analysis & vulnerability assessments"),
    emoji("🐍 Work with Python, SQL, scikit-learn, pandas, Power BI, and Jupyter Notebook"),
    emoji("🧠 Enthusiastic about ethical hacking, threat modeling, and incident response")
  ],

softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "R",
    fontAwesomeClassname: "fab fa-r-project"
  },
  {
    skillName: "Tableau",
    fontAwesomeClassname: "fas fa-chart-pie"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Power BI",
    fontAwesomeClassname: "fas fa-chart-bar"
  },
  {
    skillName: "Jupyter Notebook",
    fontAwesomeClassname: "fas fa-book"
  },
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "JSS Science and Technological University",
      logo: require("./assets/images/JSS.png"),
      subHeader: "Master of Technology",
      duration: "Feb 2023 - Mar 2025",
      desc: "Specialized in Data Science, Machine Learning, and Cybersecurity.",
      descBullets: [
        "Published IEEE paper: *'Implementation and Analysis of Energy Efficient LEACH-C Algorithm for Network of UAVs'*",
        "Completed major project using MATLAB for energy-efficient UAV networking",
        "Started shifting toward AI, data analytics, and cybersecurity"
      ]
    },
    {
      schoolName: "VidyVardhaka College of Engineering",
      logo: require("./assets/images/VVCE.png"),
      subHeader: "Bachelor of Engineering",
      duration: "Aug 2016 - Jul 2020",
      desc: "Specialized and Electronics and Communication Engineering",
      descBullets: ["Created a Final Year project in VLSI.",
        "Core memeber of Litertaure Club and Organized Literature Events",
        "Led the university dance troupe — organized & choreographed multiple performances"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Trainee Engineer",
      company: "Nokia",
      companylogo: require("./assets/images/logo-nokia.png"),
      date: "Oct 2023 - Jul 2024",
      desc: "Contributed to validation and QA testing of Test Scripts, automating repetitive tasks and improving system reliability across multiple release cycles.",
      descBullets: [
        "Automated regression testing tasks like power cycling and register dump extraction, reducing manual effort and time",
        "Diagnosed and resolved SSH connectivity issues under thermal stress, enhancing device stability",
        "Maintained detailed QA documentation and collaborated with developers for faster issue resolution"
      ]
    },
    {
      role: "Quality Analyst",
      company: "Glowtronics Pvt Ltd",
      companylogo: require("./assets/images/Glowtronics.png"),
      date: "Jan 2021 - Feb 2023",
      desc: "Led QA operations across six departments, ensuring ISO compliance, improving testing efficiency, and driving interdepartmental coordination for smoother audit readiness.",
      descBullets: [
        "Directed quality workflows across departments to ensure adherence to ISO standards and QA protocols",
        "Improved efficiency by enhancing testing and raw material validation processes",
        "Compiled quality audit reports and streamlined communication between QA and cross-functional teams"
      ]
    }
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "REAL-WORLD PROBLEMS SOLVED WITH CODE, INSIGHTS, AND SECURITY",
  projects: [
    {
      image: require("./assets/images/Fraud.png"),
      projectName: "Fraud Detection in Banking Transactions",
      style: { width: "100%", height: "auto", objectFit: "contain", maxHeight: "250px"},
      projectDesc: "Developed a machine learning model to detect fraudulent financial transactions using Logistic Regression, Random Forest, and XGBoost with a focus on precision-recall optimization.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/URVASHI1sharma/Fraud-Detection"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Sentiment.png"),
      projectName: "Sentiment Analysis on Product Reviews",
      projectDesc: "Built a sentiment classifier using NLP techniques on Amazon Food Reviews dataset. Applied text preprocessing, vectorization, and LSTM to classify user sentiment.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/URVASHI1sharma/Sentiment_analysis-Amazon_review"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications, Conferences, and Recognitions that highlight my learning journey in Data Science, Cybersecurity, and more.",

  achievementsCards: [
    {
      title: "IEEE Conference Paper Presentation and Publication",
      subtitle:
        "Presented a research paper on 'Energy Efficient LEACH-C Algorithm for UAV Networks' at the 2025 IEEE International Conference on Communication Systems and Network Technologies (CSNT).",
      image: require("./assets/images/IEEE.png"),
      imageAlt: "IEEE Conference",
      footerLink: [
        
        {
          name: "Read Paper",
          url: "https://ieeexplore.ieee.org/document/10967739"
        }
      ]
    },
    {
      title: "Google Data Analytics Certification",
      subtitle:
        "Completed the Google Data Analytics Professional Certificate, covering data cleaning, analysis, and visualization using tools like R and Tableau.",
      image: require("./assets/images/Google_DA_cert.png"),
      imageAlt: "Google Data Analytics",
      footerLink: [
        {
          name: "Certificate",
          url: ""
        }
      ]
    },

    {
      title: "Data Visualization: Empowering Business with Effective Insights",
      subtitle: "Created impactful data visualizations and client-ready insights for executive decision-making in a TCS simulation project.",
      image: require("./assets/images/Forage.png"),
      imageAlt: "Forage",
    },

    {
      title: "Introduction to Cybersecurity - Simplilearn",
      subtitle: "Learned the fundamentals of cybersecurity, including threats, risk assessment, policies, and response mechanisms.",
      image: require("./assets/images/simplilearn.png"),
      imageAlt: "Cybersecurity Certificate",
    },

    {
      title: "Cyber Security Analyst - Identity and Access Management",
      subtitle: "Completed a TCS Cybersecurity simulation focused on IAM, delivering documentation and presentations aligned with cybersecurity strategy and best practices.",
      image: require("./assets/images/Forage.png"),
      imageAlt: "Forage",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resumeLink: "",
  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Got a project, opportunity, or just want to connect? I'm just a message away.",
  email_address: "urvashi010498@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  //blogSection,
  //talkSection,
  //podcastSection,
  contactInfo,
  //twitterDetails,
  isHireable,
  //resumeSection
};
