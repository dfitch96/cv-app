


export const contactObject = {
  name: 'Your Name',
  email: 'name@email.com',
  phone: '(123) 456-7891'
};


export const educationObject = {
  id: crypto.randomUUID(),
  school: 'Your School',
  degree: 'Bachelor of Science in Computer Science',
  gradDate: new Date().toISOString().split('T')[0],
  location: 'Buffalo, NY'
};


export const workExperienceObjects = [
  {
    id: crypto.randomUUID(),
    company: 'Microsoft',
    jobTitle: 'Product Development Lead',
    currentlyEmployed: true,
    location: 'Redmond, WA',
    startDate: new Date("2014-07-01").toISOString().split('T')[0],
    endDate: '',
    duties: [
      {id: crypto.randomUUID(), text: 'Led the development of Windows 10, which was originally intended to be called Windows 9, but the number was too shy'},
      {id: crypto.randomUUID(), text: 'Invented the concept of “updates” after realizing the only way to keep software fresh was to keep making it worse and then fixing it again'},
      {id: crypto.randomUUID(), text: 'Designed the first iteration of Microsoft Edge to be faster than Internet Explorer, but then realized it was just faster to uninstall IE'},
      {id: crypto.randomUUID(), text: 'Accidentally activated Windows Update on the entire office—productivity plummeted, but morale skyrocketed when I said “Oops!”'},
      {id: crypto.randomUUID(), text: 'Developed a feature that allowed Windows to “guess” your next action, but it mostly just suggested opening Solitaire'},
    ],
  },
  {
    id: crypto.randomUUID(),
    company: 'Oracle',
    jobTitle: 'Senior Software Engineer',
    currentlyEmployed: false,
    location: 'Redwood Shores, CA',
    startDate: new Date("2008-01-01").toISOString().split('T')[0],
    endDate: new Date("2014-06-30").toISOString().split('T')[0],
    duties: [
      {id: crypto.randomUUID(), text: 'Created an early version of Oracle Cloud while testing the limits of a floppy disk'},
      {id: crypto.randomUUID(), text: 'Rewrote SQL queries in binary for performance improvements; it didn\'t help, but it was a fun experiment'},
      {id: crypto.randomUUID(), text: 'Attempted to integrate Oracle database into a toaster—successfully crashed both the toaster and the database'},
      {id: crypto.randomUUID(), text: 'Fought a battle with a rogue semicolon that caused the entire cloud service to crash—victory was sweet'},
      {id: crypto.randomUUID(), text: 'Made Oracle Database talk to a Roomba to prove it could "work anywhere"—it didn’t, but it was an interesting presentation'},
    ],
  },
  {
    id: crypto.randomUUID(),
    company: 'Google',
    jobTitle: 'Senior Software Engineer',
    currentlyEmployed: false,
    location: 'Mountain View, CA',
    startDate: new Date("2001-01-01").toISOString().split('T')[0],
    endDate: new Date("2007-12-31").toISOString().split('T')[0],
    duties: [
      {id: crypto.randomUUID(), text: 'Designed the first version of Google Maps by walking around with a notepad and a really good sense of direction'},
      {id: crypto.randomUUID(), text: 'Proposed an early version of Google Assistant in 2007—at the time, it was just an intern named Kevin who responded to emails manually'},
      {id: crypto.randomUUID(), text: 'Attempted to replace the Google logo with a picture of my dog for April Fools; accidentally shut down the homepage for three hours'},
      {id: crypto.randomUUID(), text: 'Personally debugged the internet after someone tripped over a cable in 2001'},
      {id: crypto.randomUUID(), text: 'Accidentally invented Google Docs while trying to make a grocery list in Notepad'},
    ],
  }
];



export const skillsObjects = [
  {
    id: crypto.randomUUID(),
    category: 'Programming Languages',
    skillList: [
      {id: crypto.randomUUID(), text: 'C++'}, // Used at Microsoft for Windows development
      {id: crypto.randomUUID(), text: 'C'}, // Relevant for low-level OS and system programming at Microsoft
      {id: crypto.randomUUID(), text: 'Java'}, // Used at Oracle for enterprise applications and database solutions
      {id: crypto.randomUUID(), text: 'Go'}, // Likely used at Google for backend services and cloud applications
      {id: crypto.randomUUID(), text: 'Python'}, // Used across all three companies for scripting, automation, and AI-related tasks
      {id: crypto.randomUUID(), text: 'JavaScript'}, // Used at Microsoft and Google for front-end and full-stack development
      {id: crypto.randomUUID(), text: 'SQL'}, // Key skill for Oracle, relevant at Microsoft and Google as well
    ]
  },
  {
    id: crypto.randomUUID(),
    category: 'Frameworks & Libraries',
    skillList: [
      {id: crypto.randomUUID(), text: 'React'}, // Used at Microsoft and Google for web applications
      {id: crypto.randomUUID(), text: 'Spring'}, // Relevant for Java-based enterprise applications at Oracle
      {id: crypto.randomUUID(), text: 'Node.js'}, // Used at Microsoft and Google for backend development
      {id: crypto.randomUUID(), text: 'Express'}, // Complementary to Node.js for API development
      {id: crypto.randomUUID(), text: 'Django'}, // Used for backend applications, possibly at Google
      {id: crypto.randomUUID(), text: 'gRPC'}, // Used at Google for high-performance service-to-service communication
    ]
  },
  {
    id: crypto.randomUUID(),
    category: 'Developer Tools',
    skillList: [
      {id: crypto.randomUUID(), text: 'Linux'}, // Essential for all three companies, especially at Google
      {id: crypto.randomUUID(), text: 'GitHub'}, // Used at all three companies for version control
      {id: crypto.randomUUID(), text: 'MySQL'}, // Relevant at Oracle and Google for database management
      {id: crypto.randomUUID(), text: 'MongoDB'}, // Used at Microsoft and Google for NoSQL database solutions
      {id: crypto.randomUUID(), text: 'Docker'}, // Used at all three companies for containerization
      {id: crypto.randomUUID(), text: 'Kubernetes'}, // Likely used at Google and Microsoft for cloud deployments
      {id: crypto.randomUUID(), text: 'Azure DevOps'}, // Relevant for Microsoft’s cloud and CI/CD workflows
      {id: crypto.randomUUID(), text: 'BigQuery'}, // Used at Google for large-scale data processing
    ]
  },
  {
    id: crypto.randomUUID(),
    category: 'Cloud & Infrastructure',
    skillList: [
      {id: crypto.randomUUID(), text: 'Microsoft Azure'}, // Essential for Microsoft experience
      {id: crypto.randomUUID(), text: 'Google Cloud Platform (GCP)'}, // Relevant for Google experience
      {id: crypto.randomUUID(), text: 'AWS'}, // Used at Oracle and possibly Microsoft for cloud deployments
    ]
  },
  {
    id: crypto.randomUUID(),
    category: 'Certifications',
    skillList: [
      {id: crypto.randomUUID(), text: 'AWS Certified Solutions Architect'}, // Relevant for Oracle cloud experience
      {id: crypto.randomUUID(), text: 'Google Cloud Professional Architect'}, // Relevant for Google experience
      {id: crypto.randomUUID(), text: 'Microsoft Certified: Azure Solutions Architect Expert'}, // Relevant for Microsoft experience
    ]
  },
];
