// Data for the application
const subjects = [
  {
    id: 1,
    code: "CS102",
    name: "Computer Programming 1 (Java)",
    description: "An introductory course on programming fundamentals using Java. Covers basic syntax, variables, data types, operators, control structures (loops and conditionals), functions, and object-oriented programming (OOP) concepts such as classes and methods. Emphasizes problem-solving, debugging, and writing efficient code.",
    units: 3,
    department: ["CS", "IS", "EMC", 'EN'],
    type: "major",
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 1,
        name: "Aldrion Quizar",
        schedule: "Mon 1:30 PM - 4:00 PM, Mon 6:30 PM - 9:00 PM",
        rating: 3.7,
        room: "Room 601",
        slots: 30,
        enrolled: 9,
        specialization: "Software Development with Java",
        bio: "Aldrion Quizar is a passionate educator and software engineer specializing in Java development, holding a Master's in Computer Science with a focus on object-oriented programming, algorithms, and software engineering principles. With industry experience in full-stack Java applications (Spring, Hibernate, REST APIs) and a dedication to project-based learning, he empowers students to bridge theory and practice by guiding them in building scalable, real-world applications. As an advocate for clean code, agile methodologies, and collaborative development, Aldrion fosters a hands-on learning environment that prepares the next generation of developers for industry challenges and emerging technologies.",
        courses: ["CS101", "CS201", "CS301"],
        completionRate: "82%",
        experience: 4,
        status: "Part-time",
        passFailRatio: "78/22"
      },
      {
        id: 2,
        name: "Bianca Reyes",
        schedule: "Tue 11:00 AM - 1:30 PM, Tue 11:00 AM - 1:30 PM",
        rating: 4.5,
        room: "Room 501",
        slots: 30,
        enrolled: 17,
        specialization: "Software Development with Java",
        bio: "Bianca Reyes is a seasoned Software Engineer and educator specializing in Java-based full-stack development, with expertise in Spring Boot, microservices, and cloud-native applications (AWS/Azure). A certified Scrum Master (PSM/CSPO) and advocate for Agile methodologies, she bridges industry and academia by integrating real-world practices—such as CI/CD, TDD, and DevOps—into her courses (IS211: Software Engineering, GE022: OOP). Passionate about developer innovation, she contributes to open-source projects, speaks at tech conferences on Java ecosystem trends, and researches AI-augmented software engineering, while mentoring students to become job-ready professionals through industry-aligned curricula and hands-on projects.",
        courses: ["CS101", "CS401"],
        completionRate: 91,
        experience: 6,
        status: "Full-time",
        passFailRatio: "85/15"
      }
    ]
  },
  {
    id: 2,
    code: 'IS131',
    name: 'Fundamentals of Information System',
    description: 'Explores the role of information systems in organizations, including data management, system development, and the impact of IT on business processes.',
    units: 3,
    department: 'IS',
    type: 'major',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 3,
        name: "Denver I. Sandoval",
        schedule: "Fri 8:30 AM - 11:00 AM",
        rating: 5.0,
        room: "Room 601",
        slots: 30,
        enrolled: 10,
        specialization: "Information Systems and Project Management",
        bio: "An accomplished professional with extensive expertise in information systems and project management. Mr. Sandoval has over a decade of experience in teaching and consulting, focusing on the strategic role of information systems in optimizing business processes. With a passion for empowering students to harness the power of technology, he has guided numerous organizations in implementing effective IT solutions and has mentored students to excel in the field of information systems. His teaching philosophy emphasizes practical, real-world applications to prepare students for successful careers in IT and business.",
        courses: ["IS131", "IS321"],
        completionRate: 98,
        experience: 10,
        status: "Part-time",
        passFailRatio: "99/1"
      }
    ]
  },
  {
    id: 3,
    code: 'CS101',
    name: 'Introduction to Computing',
    description: 'Provides an overview of the computing industry and computing profession, including research and applications in different fields; an appreciation of history of computing; knowledge of computer hardware and software.  It would also enhance their office productivity and skills.  By the end of the course, the students will create, design, and upload their Personal Website using HTML and CSS.',
    units: 3,
    department: ["CS", "IS", "EMC"],
    type: 'major',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 4,
        name: "Carmen D. Amores",
        schedule: "Sat 11:00 AM - 1:30 PM, Sat 1:30 PM - 4:00 PM",
        rating: 4.5,
        room: "Room 503 Mac Lab",
        slots: 25,
        enrolled: 10,
        specialization: "Computer-Science Education and Web Dev.",
        bio: "With over 10 years of experience in teaching computing fundamentals and web development, Ms. Amores helps students master hardware, software, and dynamic web design using HTML and CSS. Known for her strong curriculum development skills, she has guided many students toward successful careers in tech.",
        courses: ["CS101", "CS104", "CS105", "MEG005"],
        completionRate: 91,
        experience: 10,
        status: "Part-time",
        passFailRatio: "85/15"
      },
      {
        id: 5,
        name: "Siegfried Rexford",
        schedule: "Wed 11:00 AM - 1:30 PM, Wed 11:00 AM - 1:30 PM, Wed 1:30 PM - 4:00 PM",
        rating: 4.6,
        room: "Room 503 Mac Lab",
        slots: 25,
        enrolled: 10,
        specialization: "Web Development",
        bio: "A dedicated educator and software developer with over a decade of experience in computer science and web development. Prof. Rexford specializes in creating engaging, practical learning experiences, helping students master HTML, CSS, and problem-solving skills to bridge the gap between theory and real-world application.",
        courses: ["CS101", "CS105", "MEG005"],
        completionRate: 87,
        experience: 10,
        status: "Part-time",
        passFailRatio: "82/18"
      }
    ]
  },
  {
    id: 4,
    code: 'IR001',
    name: 'Self Development and Goal Settings',
    description: 'Self-Development and Goal Setting is an introductory course in personal improvement, self-awareness, self-esteem, attitude awareness, creative thinking and self-confidence of students. The course primarily focuses on the strong foundation of personality which enables one to cope with any challenges in life.',
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 6,
        name: "Dr. Manuel Dela Cruz",
        schedule: "Mon 1:30 PM - 4:00 PM, Mon 6:30 PM - 9:00 PM",
        rating: 4.8,
        room: "Room 601",
        slots: 30,
        enrolled: 25,
        specialization: "Personal Development",
        bio: "Dr. Manuel Dela Cruz is an expert in self-improvement, personality development, and goal setting, with over 15 years of experience in education.",
        courses: ["IR001"],
        completionRate: 95,
        experience: 8,
        status: "Full-time",
        passFailRatio: "88/12"
      },
      {
        id: 7,
        name: "Prof. Maria Luisa Santos",
        schedule: "Tue 11:00 AM - 1:30 PM, Tue 11:00 AM - 1:30 PM",
        rating: 4.3,
        room: "Room 401",
        slots: 30,
        enrolled: 10,
        specialization: "Personal Development",
        bio: "Prof. Maria Luisa Santos specializes in leadership training and self-awareness, with a focus on empowering students for success.",
        courses: ["IR001"],
        completionRate: 87,
        experience: 5,
        status: "Part-time",
        passFailRatio: "82/18"
      },
      {
        id: 8,
        name: "Dr. Ramon Villanueva",
        schedule: "Wed 11:00 AM - 1:30 PM, Wed 1:30 PM - 4:00 PM",
        rating: 4.5,
        room: "Room 501",
        slots: 30,
        enrolled: 17,
        specialization: "Motivational Psychology",
        bio: "Dr. Ramon Villanueva has extensive experience in motivational psychology, guiding students toward self-confidence and goal achievement.",
        courses: ["IR001"],
        completionRate: 91,
        experience: 6,
        status: "Full-time",
        passFailRatio: "85/15"
      }
    ]
  },
  {
    id: 5,
    code: 'MAT610',
    name: 'Business Mathematics',
    description: 'Business Mathematics is a course that will provide understanding of the basic concepts of mathematics as applied in business. It includes a review fundamental mathematical operations using decimals, fractions, percentage, ratio, and proportion; mathematics concepts and skills in buying and selling, computing gross and net earnings, overtime, and business data presentation, analysis and interpretation.',
    units: 3,
    department: ['IS', 'EN'],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 9,
        name: "Kristen Agavon LPT",
        schedule: "Tue 11:00 AM - 1:30 PM, Wed 11:00 AM - 1:30 PM",
        rating: 4.8,
        room: "Room 606",
        slots: 30,
        enrolled: 29,
        specialization: "Applied Mathematics",
        bio: "A licensed professional teacher with a passion for applying mathematical concepts to real-world business problems. Prof. Agavon has over 8 years of experience teaching business mathematics and analytics, helping students develop strong quantitative skills for decision-making in finance and management.",
        courses: ["MAT610"],
        completionRate: 95,
        experience: 8,
        status: "Full-time",
        passFailRatio: "88/12"
      },
      {
        id: 10,
        name: "Roberto Sandoval",
        schedule: "Mon 6:30 PM - 9:00 PM, Tue 6:30 PM - 9:00 PM",
        rating: 4.3,
        room: "Room 606",
        slots: 30,
        enrolled: 15,
        specialization: "Applied Mathematics",
        bio: "Roberto Sandoval has been teaching business mathematics for over a decade, specializing in financial computations and data analysis. His expertise includes investment analysis, business forecasting, and statistical methods for business applications.",
        courses: ["MAT610"],
        completionRate: 88,
        experience: 10,
        status: "Full-time",
        passFailRatio: "83/17"
      }
    ]
  },
  {
    id: 6,
    code: 'GE002',
    name: 'Mathematics in the Modern World',
    description: 'Mathematics in the Modern World is an introduction to the nature of mathematics as an exploration of patterns, and as an application of inductive and deductive reasoning. This course deals with the practical applications of mathematical tools in daily life. By the end of the course, students are expected to demonstrate knowledge of topics such as language of mathematics, problem solving and reasoning, mathematical logic, data management, correlation and regression, geometric designs, and mathematics of finance.',
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 11,
        name: "Engr. Jairo B. Baliwag",
        schedule: "Tue 4:00 PM - 6:30 PM, Tue 6:30 PM - 9:00 PM",
        rating: 4.5,
        room: "Room 602 Lab",
        slots: 30,
        enrolled: 25,
        specialization: "Mathematical Modeling and Engineering Applications",
        bio: "Engr. Baliwag is an experienced educator specializing in mathematical modeling and its applications in engineering. With a decade of teaching experience, he integrates real-world problem-solving techniques to enhance students’ analytical skills.",
        courses: ["GE002"],
        completionRate: 93,
        experience: 10,
        status: "Full-time",
        passFailRatio: "88/12"
      },
      {
        id: 12,
        name: "Engr. Luningning R. Castillo",
        schedule: "Mon 6:30 PM - 9:00 PM, Tue 1:30 PM - 4:00 PM",
        rating: 3.7,
        room: "Room 602 Lab",
        slots: 30,
        enrolled: 13,
        specialization: "Mathematical Logic",
        bio: "Engr. Castillo has been teaching mathematics for over 4 years, specializing in logic, problem-solving, and data analysis. She is dedicated to helping students appreciate the role of mathematics in everyday decision-making and critical thinking.",
        courses: ["GE002"],
        completionRate: 82,
        experience: 4,
        status: "Part-time",
        passFailRatio: "78/22"
      }
    ]
  },
  {
    id: 7,
    code: 'NTP001',
    name: 'Civic Welfare 1',
    description: 'As the first of two NSTP courses, NTP001 introduces the National Service Training Program or NSTP as a mandated government program aimed at enhancing civic consciousness and defense preparedness in the Filipino youth, as well as the CIIT NSTP, the CIIT’s customized learning design, delivery, and implementation of NSTP under the Form to Transform development framework and WeaVING civic formation curriculum of the Community Development Office of CIIT.',
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 13,
        name: "Anna Reyes",
        schedule: "Wed 8:30 AM - 11:00 AM, Wed 11:00 AM - 1:30 PM",
        rating: 4.5,
        room: "Room 401",
        slots: 30,
        enrolled: 25,
        specialization: "Community Development",
        bio: "Anna Reyes specializes in volunteer training and social impact projects, mentoring students in civic engagement initiatives.",
        courses: ["NTP001", "NTP002"],
        completionRate: 92,
        experience: 7,
        status: "Full-time",
        passFailRatio: "86/14"
      },
      {
        id: 14,
        name: "Joe B. Ang",
        schedule: "Wed 1:30 PM - 4:00 PM, Wed 4:00 PM - 6:30 PM",
        rating: 4.7,
        room: "Room 401",
        slots: 30,
        enrolled: 26,
        specialization: "Community Development",
        bio: "Mr. Ang is a dedicated community development specialist with over 10 years of experience designing and implementing impactful community service programs, with a strong focus on social responsibility, grassroots empowerment, and youth engagement. Passionate about fostering sustainable change, he combines hands-on fieldwork with strategic planning to drive initiatives that address education gaps, civic participation, and inclusive development. Skilled in stakeholder collaboration, program management, and participatory approaches, Mr. Ang has successfully mobilized local communities, NGOs, and government partners to create opportunities for marginalized groups. As an educator, he integrates real-world case studies and service-learning methodologies to inspire students to become proactive agents of social transformation.",
        courses: ["NTP001", "NTP002"],
        completionRate: 97,
        experience: 10,
        status: "Full-time",
        passFailRatio: "92/8"

      },
      {
        id: 15,
        name: "Nathan Villanueva",
        schedule: "Fri 1:30 PM - 4:00 PM, Fri 4:00 PM - 6:30 PM",
        rating: 3.9,
        room: "Room 401",
        slots: 30,
        enrolled: 20,
        specialization: "Community Development",
        bio: "Nathan Villanueva is passionate about grassroots advocacy and has led various service-learning projects across communities.",
        courses: ["NTP001", "NTP002"],
        completionRate: 93,
        experience: 9,
        status: "Full-time",
        passFailRatio: "88/12"
      }
    ]
  },
  {
    id: 8,
    code: 'FIN001',
    name: 'Financial Management',
    description: 'This course is an introductory course in Financial Management that introduces entrepreneurship students to the fundamental principles, concepts, and theories of Financial Management. These fundamental theories encompass discussion of the finance function, operating environment of finance, key concepts of time value of money, risk and return, tools of financial analysis and planning, and short-term acquisitions and utilization of funds. These theories are geared towards the business/firm’s action in achieving their ultimate financial goal of maximizing the shareholder’s wealth. Moreover, this course seeks to provide students with proficiency in both technical and analytical skills in Financial Management that are used to formulate decisions on different cases and situations of the firm.',
    units: 3,
    department: ['IS', 'EN'],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 16,
        name: "Frank Quisumbing",
        schedule: "Fri 11:00 AM - 1:30 PM",
        rating: 4.7,
        room: "Room 604",
        slots: 30,
        enrolled: 16,
        specialization: "Financial Management",
        bio: "Mr. Quisumbing is a seasoned finance professional with 8+ years of expertise in investment analysis, corporate financial planning, and strategic risk assessment. Specializing in data-driven financial decision-making, he has a proven track record of optimizing portfolios, mitigating risks, and enhancing profitability for businesses across industries. Passionate about bridging theory and practice, he equips students with real-world financial modeling, valuation techniques, and market trend analysis—preparing them for dynamic careers in investment banking, corporate finance, and financial consulting. His industry insights, combined with a commitment to ethical financial leadership, make him a valuable mentor for the next generation of finance professionals.",
        courses: ["FIN001"],
        completionRate: 95,
        experience: 8,
        status: "Full-time",
        passFailRatio: "88/12"
      },
      {
        id: 17,
        name: "Lucas Fernandez",
        schedule: "Mon 11:00 AM - 1:30 PM",
        rating: 4.1,
        room: "Room 604",
        slots: 30,
        enrolled: 3,
        specialization: "Financial Management",
        bio: "Lucas Fernandez is a seasoned financial consultant with expertise in corporate finance, investment strategies, and financial planning. He has worked with various businesses to optimize financial performance and risk management.",
        courses: ["FIN001"],
        completionRate: 94,
        experience: 9,
        status: "Full-time",
        passFailRatio: "87/13"
      }
    ]
  },
  {
    id: 9,
    code: 'CS105',
    name: 'Information Management',
    description: 'Information Management provides students with a foundation of knowledge needed to work with Information management and to create applications utilizing current development strategies. Students will learn to design, create, populate, and query a database using MySQL, learn database privileges, concurrency and security.',
    units: 3,
    department: ['CS', 'IS', 'EMC'],
    type: 'major',
    prerequisites: ['CS101'],
    price: 4428,
    instructors: [
      {
        id: 5,
        name: "Siegfried Rexford",
        schedule: "Sat 1:30 PM - 4:00 PM",
        rating: 4.6,
        room: "Room 503 Mac Lab",
        slots: 25,
        enrolled: 10,
        specialization: "Web Development", // Updated to align with the subject
        bio: "A dedicated educator and software developer with over a decade of experience in computer science and web development. Prof. Rexford specializes in creating engaging, practical learning experiences, helping students master HTML, CSS, and problem-solving skills to bridge the gap between theory and real-world application.",
        courses: ["CS101", "CS105", "MEG005"],
        completionRate: 87,
        experience: 10,
        status: "Part-time",
        passFailRatio: "82/18"
      },
      {
        id: 4,
        name: "Carmen D. Amores",
        schedule: "Sat 11:00 AM - 1:30 PM, Sat 1:30 PM - 4:00 PM",
        rating: 4.5,
        room: "Room 503 Mac Lab",
        slots: 25,
        enrolled: 10,
        specialization: "Com-Sci Education and Web Development", // Updated to align with the subject
        bio: "With over 10 years of experience in teaching computing fundamentals and web development, Ms. Amores helps students master hardware, software, and dynamic web design using HTML and CSS. Known for her strong curriculum development skills, she has guided many students toward successful careers in tech.",
        courses: ["CS101", "CS104", "CS105", "MEG005"],
        completionRate: 91,
        experience: 10,
        status: "Part-time",
        passFailRatio: "85/15"
      }
    ]
  },
  {
    id: 10,
    code: 'GE025',
    name: 'Accounting for IT',
    description: 'Accounting for IT is an introductory course in understanding the basic components of an accounting database. This focuses on the overview of accounting information, transaction cycles and business practices and information systems frameworks.',
    units: 3,
    department: ['CS', 'IS', 'EN'],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 18,
        name: "Lynette Velas",
        schedule: "Thu 11:00 AM - 01:30 PM",
        rating: 4.8,
        room: "Room 401",
        slots: 30,
        enrolled: 28,
        specialization: "Accounting",
        bio: "Lynette Velas is a seasoned accounting professional and educator with 10+ years of experience in both academia and industry, specializing in financial accounting, managerial accounting, and IT-integrated finance. Passionate about modernizing accounting education, she leverages data analytics, ERP systems, and automation tools to equip students with cutting-edge skills for today’s digital finance landscape. Her expertise spans financial reporting, forensic accounting, and strategic cost management, with a strong emphasis on real-world applications through case studies and industry software. Committed to shaping future-ready accountants, Lynette blends technical rigor with ethical financial practices, preparing students for careers in audit, corporate finance, and fintech innovation.",
        courses: ["GE025"],
        completionRate: 99,
        experience: 12,
        status: "Full-time",
        passFailRatio: "95/5"
      }
    ]
  },
  {
    id: 11,
    code: 'CS103',
    name: 'Computer Programming 2 (Java)',
    description: 'This course is a continuation of Computer Programming 1. The emphasis is to train students to design, implement, test and debug programs intended to solve computing problems using standard libraries.',
    units: 3,
    department: ['CS', 'IS', 'EMC'],
    type: 'major',
    prerequisites: ['CS102'],
    price: 4428,
    instructors: [
      {
        id: 19,
        name: "Fernando Perrin",
        schedule: "Mon 8:30 AM - 11:00 AM, Mon 11:00 AM - 01:30 PM",
        rating: 4.3,
        room: "Room 501 Pentab",
        slots: 30,
        enrolled: 15,
        specialization: "Software Development with Java",
        bio: "Fernando Perrin is an expert in Java-based software development, with over 8 years of experience in programming and teaching. He specializes in object-oriented programming, data structures, and software engineering best practices.",
        courses: ["CS103"],
        completionRate: 92,
        experience: 8,
        status: "Full-time",
        passFailRatio: "86/14"
      }
    ]
  },
  {
    id: 12,
    code: 'NTP002',
    name: 'Civic Welfare 2',
    description: 'This course, NTP002, builds on the learnings gained by students in NTP001 in the previous quarter of the current school year. Its track is Literacy Training Service (LTS), with the primary advocacy of “Digital Inclusion”. Digital Inclusion requires a certain level of literacy and numeracy, and hence, our LTS projects aim to facilitate and produce outputs that will directly help address low literacy and numeracy. At the end of the course, students will have gained substantial knowledge about education in the Philippines, particularly in the areas of literacy and numeracy, and will have been given a chance to participate in an LTS project in partnership with the Quezon City Public Library (QCPL).',
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: ['NTP001'],
    price: 4428,
    instructors: [
      {
        id: 13,
        name: "Anna Reyes",
        schedule: "Wed 8:30 AM - 11:00 AM, Wed 11:00 AM - 1:30 PM",
        rating: 4.5,
        room: "Room 401",
        slots: 30,
        enrolled: 25,
        specialization: "Community Development",
        bio: "Anna Reyes specializes in volunteer training and social impact projects, mentoring students in civic engagement initiatives.",
        courses: ["NTP001", "NTP002"],
        completionRate: 92,
        experience: 7,
        status: "Full-time",
        passFailRatio: "86/14"
      },
      {
        id: 14,
        name: "Joe B. Ang",
        schedule: "Wed 1:30 PM - 4:00 PM, Wed 4:00 PM - 6:30 PM",
        rating: 4.7,
        room: "Room 401",
        slots: 30,
        enrolled: 26,
        specialization: "Community Development",
        bio: "Mr. Ang is a dedicated community development specialist with over 10 years of experience designing and implementing impactful community service programs, with a strong focus on social responsibility, grassroots empowerment, and youth engagement. Passionate about fostering sustainable change, he combines hands-on fieldwork with strategic planning to drive initiatives that address education gaps, civic participation, and inclusive development. Skilled in stakeholder collaboration, program management, and participatory approaches, Mr. Ang has successfully mobilized local communities, NGOs, and government partners to create opportunities for marginalized groups. As an educator, he integrates real-world case studies and service-learning methodologies to inspire students to become proactive agents of social transformation.",
        courses: ["NTP001", "NTP002"],
        completionRate: 97,
        experience: 10,
        status: "Full-time",
        passFailRatio: "92/8"
      },
      {
        id: 15,
        name: "Nathan Villanueva",
        schedule: "Fri 1:30 PM - 4:00 PM, Fri 4:00 PM - 6:30 PM",
        rating: 3.9,
        room: "Room 401",
        slots: 30,
        enrolled: 20,
        specialization: "Community Development",
        bio: "Nathan Villanueva is passionate about grassroots advocacy and has led various service-learning projects across communities.",
        courses: ["NTP001", "NTP002"],
        completionRate: 93,
        experience: 9,
        status: "Full-time",
        passFailRatio: "88/12"
      }
    ]
  },
  {
    id: 13,
    code: 'PED001',
    name: 'Physical Education 1',
    description: 'This course provides an introduction to physical fitness, health, and wellness. It includes various physical activities that promote motor skills, coordination, and overall well-being.',
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 20,
        name: "John Denver Cruz",
        schedule: "Tue 8:30 AM - 11:00 AM, Wed 11:00 AM - 1:30 PM",
        rating: 4.5,
        room: "Left Wing",
        slots: 30,
        enrolled: 25,
        specialization: "Physical Fitness",
        bio: "John Denver Cruz is a certified physical education instructor with expertise in fitness training and sports management. He has been teaching for over 5 years and focuses on promoting an active lifestyle.",
        courses: ["PED001", "PED002", "PED003", "PED004"],
        completionRate: 93,
        experience: 5,
        status: "Full-time",
        passFailRatio: "88/12"
      },
      {
        id: 21,
        name: "Maria Santos",
        schedule: "Tue 11:00 AM - 1:30 PM, Wed 11:00 AM - 1:30 PM",
        rating: 4.4,
        room: "Right Wing",
        slots: 30,
        enrolled: 20,
        specialization: "Physical Fitness",
        bio: "Maria Santos is an experienced PE instructor with a background in dance, aerobics, and movement therapy. She specializes in group exercise instruction and recreational sports.",
        courses: ["PED001", "PED002", "PED003", "PED004"],
        completionRate: 99,
        experience: 12,
        status: "Full-time",
        passFailRatio: "95/5"
      }
    ]
  },
  {
    id: 14,
    code: 'GE001',
    name: 'Understanding the Self',
    description: 'Understanding the Self is intended to facilitate the exploration of the issues and concerns regarding self and identity to arrive at a better understanding of one’s self. It strives to meet its goal by stressing the integration of the personal with the academic – contextualizing matters discussed in the classroom and in the everyday experiences of students – making for better learning, generating a new appreciation for the learning process, and developing a more critical and reflective attitude while enabling them to manage and improve themselves to attain a better quality of life.',
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 22,
        name: "Monique Bern Jones RPm",
        schedule: "Tue 8:30 AM - 11:00 AM, Wed 11:00 AM - 1:30 PM",
        rating: 4.2,
        room: "Room 503",
        slots: 30,
        enrolled: 25,
        specialization: "Psychology & Personal Development",
        bio: "Monique Bern Jones is a registered psychometrician with expertise in personal development and self-awareness training. She focuses on helping students understand the psychological, emotional, and social aspects of self-identity.",
        courses: ["GE001"],
        completionRate: 84,
        experience: 5,
        status: "Part-time",
        passFailRatio: "78/22"
      },
      {
        id: 23,
        name: "Dr. Adrian Flores",
        schedule: "Tue 11:00 AM - 1:30 PM, Wed 11:00 AM - 1:30 PM",
        rating: 4.4,
        room: "Room 503",
        slots: 30,
        enrolled: 20,
        specialization: "Behavioral Science & Human Development",
        bio: "Dr. Adrian Flores is a behavioral science expert specializing in self-awareness and human development. With over a decade of teaching experience, he provides students with insights into personality, cognition, and emotional intelligence.",
        courses: ["GE001"],
        completionRate: 92,
        experience: 8,
        status: "Full-time",
        passFailRatio: "89/11"
      }
    ]
  },
  {
    id: 15,
    code: 'IS211',
    name: 'Business Process Management',
    description: 'Business Process Management is a course that will gear students to analyze and understand the crossroad of multiple and different viewpoints of business processes and the stakeholders involved, with the aim to optimize the operations, define responsibilities, and boost business growth.',
    units: 3,
    department: ["IS"],
    type: 'major',
    prerequisites: ['FIN001', 'IS131'],
    price: 4428,
    instructors: [
      {
        id: 24,
        name: "John Paul Lastimoso",
        schedule: "Fri 1:30 PM - 4:00 PM",
        rating: 4.8,
        room: "Room 402",
        slots: 30,
        enrolled: 25,
        specialization: "Business Process Management & Operations Optimization",
        bio: "Mr. Lastimoso is an accomplished business analyst and process consultant with over 5 years of experience in driving operational excellence for organizations across diverse industries. Specializing in Business Process Management (BPM) and Operations Optimization, he excels in streamlining workflows, reducing inefficiencies, and implementing scalable automation solutions. His expertise spans process mapping, Lean Six Sigma methodologies, ERP system integration (such as SAP, Oracle, and Microsoft Dynamics), and digital transformation strategies.",
        courses: ["IS211", "GE022"],
        completionRate: 98,
        experience: 5,
        status: "Full-time",
        passFailRatio: "94/6"
      },
    ]
  },
  {
    id: 16,
    code: 'CS104',
    name: 'Data Structures and Algorithms',
    description: 'CS 104 covers the design, analysis, and implementation of data structures and engages learners to use data structures as tool to algorithmically design efficient computer programs and recognize which data structure is the most appropriate for solving a particular problem. The course focuses on basic and essential topics in data structures, including recursion, array, structure, pointer, queue, stack, searching and sorting algorithms, and file handling.',
    units: 3,
    department: ["CS", "IS", "EMC"],
    type: 'major',
    prerequisites: ['CS103'],
    price: 4428,
    instructors: [
      {
        id: 4,
        name: "Carmen D. Amores",
        schedule: "Sat 8:30 AM - 11:00 AM, Sat 11:00 AM - 1:30 PM, Sat 1:30 PM - 4:00 PM",
        rating: 4.5,
        room: "Room 601",
        slots: 25,
        enrolled: 10,
        specialization: "Com-Sci Education and Web Development",
        bio: "With over 10 years of experience in teaching computing fundamentals and web development, Ms. Amores helps students master hardware, software, and dynamic web design using HTML and CSS. Known for her strong curriculum development skills, she has guided many students toward successful careers in tech.",
        courses: ["CS101", "CS104", "CS105", "MEG005"],
        completionRate: 91,
        experience: 10,
        status: "Part-time",
        passFailRatio: "85/15"
      },
    ]
  },
  {
    id: 17,
    code: 'IS333',
    name: 'Business Analytics',
    description: 'Business analytics is a course that covers managerial tools in descriptive analytics and predictive analytics. The course would also provide students with the fundamental concepts and tools needed to understand the emerging role of business analytics in organizations and shows students how to apply basic business analytics tools in a spreadsheet environment, and how to communicate with analytics professionals to effectively use and interpret analytical models and results for making better business decisions. Emphasis is placed on applications, concepts, and interpretation of results, rather than theory and calculations.',
    units: 3,
    department: ["IS", "EN"],
    type: 'major',
    prerequisites: ['CS105'],
    price: 4428,
    instructors: [
      {
        id: 25,
        name: "Carlo Mendes",
        schedule: "Wed 6:30 PM - 9:00 PM",
        rating: 5.0,
        room: "Room 501",
        slots: 30,
        enrolled: 25,
        specialization: "Business Analytics & Data Science",
        bio: "Carlo Mendes is a business intelligence expert with extensive experience in data analytics, predictive modeling, and decision science. He has worked with various organizations to implement data-driven strategies for business growth.",
        courses: ["IS333", "STAT003", "CS321", "STAT004"],
        completionRate: 100,
        experience: 8,
        status: "Part-time",
        passFailRatio: "99/1"
      },
    ]
  },
  {
    id: 18,
    code: 'STAT001',
    name: 'Applied Statistics',
    description: 'Applied Statistics is a course designed to equip students with fundamental statistical methods and techniques used in data analysis. The course covers descriptive statistics, probability distributions, hypothesis testing, regression analysis, and statistical inference. Students will learn to apply statistical tools using real-world datasets and software applications to solve business and research-related problems. The course emphasizes both theoretical foundations and hands-on practice to ensure proficiency in data interpretation and decision-making.',
    units: 3,
    department: ["IS"],
    type: 'major',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 25,
        name: "Daniel Masaya",
        schedule: "Tue 8:30 AM - 11:00 AM, Sat 1:30 PM - 4:00 AM",
        rating: 4.8,
        room: "Room 604",
        slots: 30,
        enrolled: 9,
        specialization: "Applied Statistics",
        bio: "Daniel Masaya is a statistics professor with expertise in quantitative research, probability theory, and statistical computing. He has a strong background in both academia and industry, focusing on data-driven problem-solving.",
        courses: ["STAT001", "IS231"],
        completionRate: 91,
        experience: 6,
        status: "Part-time",
        passFailRatio: "95/5"
      },
    ]
  },
  {
    id: 19,
    code: 'GE009',
    name: 'Art Appreciation',
    description: 'Art Appreciation provides an overview of art using discussions/debates surrounding its appreciation, evaluation, and critique. The relevance of art in different aspects of life will be discussed, explored, and contextualized using different approaches (formalistic, function, historical, stylistic, and thematic). This will provide students with a more holistic view of the artist, the art, and the contexts that made it possible. This course will aid the learner to develop confidence in engaging with different art forms and artworks with an open mind while using appropriate vocabulary and guided by critical thinking.',
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: ['MAT610', 'GE002'],
    price: 4428,
    instructors: [
      {
        id: 25,
        name: "Althea Galinardo",
        schedule: "Mon 8:30 AM - 11:00 AM, Tue 1:30 PM - 4:00 PM",
        rating: 4.6,
        room: "Room 606",
        slots: 30,
        enrolled: 25,
        specialization: "Art Theory & Criticism",
        bio: "Althea Galinardo is an art historian and critic specializing in visual arts, art theory, and contemporary art movements. With years of experience in both academia and curation, she encourages students to explore artistic expression with critical thinking and cultural awareness.",
        courses: ["GE009"],
        completionRate: 97,
        experience: 11,
        status: "Full-time",
        passFailRatio: "92/8"
      },
    ]
  },
  {
    id: 20,
    code: 'PED002',
    name: 'Physical Education 2',
    description: 'Physical Education 2 builds upon the foundation of physical fitness and movement skills introduced in Physical Education 1. This course focuses on rhythmic activities, recreational sports, and fitness programs that promote overall well-being. Students will engage in various physical exercises and sports-related activities that enhance coordination, flexibility, and endurance while fostering teamwork and discipline.',
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: ['PED001'],
    price: 4428,
    instructors: [
      {
        id: 20,
        name: "John Denver Cruz",
        schedule: "Tue 8:30 AM - 11:00 AM, Wed 11:00 AM - 1:30 PM",
        rating: 4.5,
        room: "Left Wing",
        slots: 30,
        enrolled: 25,
        specialization: "Physical Fitness",
        bio: "John Denver Cruz is a certified physical education instructor with expertise in fitness training and sports management. He has been teaching for over 5 years and focuses on promoting an active lifestyle.",
        courses: ["PED001", "PED002", "PED003", "PED004"],
        completionRate: 93,
        experience: 5,
        status: "Full-time",
        passFailRatio: "88/12"
      },
      {
        id: 21,
        name: "Maria Santos",
        schedule: "Tue 11:00 AM - 1:30 PM, Wed 11:00 AM - 1:30 PM",
        rating: 4.4,
        room: "Right Wing",
        slots: 30,
        enrolled: 20,
        specialization: "Physical Fitness",
        bio: "Maria Santos is an experienced PE instructor with a background in dance, aerobics, and movement therapy. She specializes in group exercise instruction and recreational sports.",
        courses: ["PED001", "PED002", "PED003", "PED004"],
        completionRate: 99,
        experience: 12,
        status: "Full-time",
        passFailRatio: "95/5"
      },
    ]
  },
  {
    id: 21,
    code: 'GE004',
    name: 'Contemporary World',
    description: 'This course discusses the various aspects of the contemporary world focusing on globalization. This course will cover thorough analyses about different social, political, economic, technological, and other vital transformations and innovations that are vital in the Contemporary World. By the end of the course, the students are expected to demonstrate a developed sense of global citizenship and ethical responsibility.',
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 26,
        name: "Angeline Santos",
        schedule: "Thu 1:30 PM - 4:00 PM",
        rating: 4.5,
        room: "Room 401",
        slots: 30,
        enrolled: 2,
        specialization: "Global Studies & International Relations",
        bio: "Angeline Santos is a professor specializing in Global Studies and International Relations. With a background in political science and international affairs, she guides students in analyzing globalization, socio-economic trends, and the ethical implications of global citizenship.",
        courses: ["GE004", "GE023", "GE007"],
        completionRate: 86,
        experience: 6,
        status: "Full-time",
        passFailRatio: "81/19"
      },
    ]
  },
  {
    id: 22,
    code: 'IS343',
    name: 'Professional Issues in Information Systems',
    description: 'This course explores the professional, ethical, and moral challenges associated with computing and information systems. It covers best practices and recommended approaches for addressing these issues. Students will be expected to apply ethical reasoning and critical thinking skills to analyze and resolve various computing problems.',
    units: 3,
    department: ["IS"],
    type: 'major',
    prerequisites: ['IS131'],
    price: 4428,
    instructors: [
      {
        id: 27,
        name: "Jon O. Brian",
        schedule: "Wed 08:30 AM - 11:00 AM",
        rating: 4.8,
        room: "Room 402",
        slots: 30,
        enrolled: 25,
        specialization: "Web Development, Programming, Data Science",
        bio: "Jon O. Brian is a seasoned professional in web development, programming, and data science. With years of experience in software engineering and ethical computing, he provides students with real-world insights into professional challenges in Information Systems.",
        courses: ["IS343", "EMC006", "CS321", "IS313", "MEG005"],
        completionRate: 97,
        experience: 11,
        status: "Full-time",
        passFailRatio: "92/8"
      },
    ]
  },
  {
    id: 23,
    code: 'CS214',
    name: 'Human Computer Interaction',
    description: 'In this course, students are introduced to the fundamental theories and concepts of human-computer interaction (HCI), HCI is an interdisciplinary field that integrates theories and methodologies across many domains including cognitive psychology, neurocognitive engineering, computer science, human factors, and engineering design. Students will gain theoretical knowledge and practical experience in the fundamental aspects of Human perception, cognition, and learning related to the design, implementation, and evaluation of multimodal interfaces (touch, vision, natural language, and audio), virtual reality, and spatial displays. In addition to lectures, students will work on individual and team assignments to design, implement, and evaluate various interactive systems and user interfaces based on knowledge culled from class material and additional research. ',
    units: 3,
    department: ["CS", "IS", "EN", "EMC"],
    type: 'major',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 28,
        name: "Ethan Macalintal",
        schedule: "Thu 11:00 AM - 1:30 PM",
        rating: 4.8,
        room: "Room 601",
        slots: 30,
        enrolled: 20,
        specialization: "Human-Computer Interaction (HCI), UX/UI Design, Cognitive Computing",
        bio: "Ethan Macalintal is a specialist in Human-Computer Interaction, with expertise in UX/UI design and cognitive computing. With experience in designing interactive systems and virtual reality applications, he helps students understand the relationship between human perception and digital interfaces.",
        courses: ["CS214"],
        completionRate: 99,
        experience: 12,
        status: "Part-time",
        passFailRatio: "95/5"
      },
    ]
  },
  {
    id: 24,
    code: 'IS311',
    name: 'Systems Analysis and Design',
    description: 'IS311 provides students with an in-depth understanding of the concepts, techniques, and tools used in the analysis and design of information systems. It covers the systems development life cycle (SDLC), requirements analysis, system modeling, design methodologies, and the use of CASE tools. Students will engage in hands-on projects to apply their knowledge and skills in real-world scenarios.',
    units: 3,
    department: ["IS"],
    type: 'major',
    prerequisites: ['IS211'],
    price: 4428,
    instructors: [
      {
        id: 29,
        name: "Johnny Goodman",
        schedule: "Sat 6:30 PM - 9:00 PM",
        rating: 4.8,
        room: "Room 503",
        slots: 30,
        enrolled: 25,
        specialization: "Systems Development, Software Engineering, Business Process Modeling, Databases",
        bio: "Johnny Goodman is an expert in Systems Development and Software Engineering, specializing in SDLC methodologies, business process modeling, and databases. He has extensive experience in database management systems (DBMS), SQL optimization, and enterprise database solutions. His guidance helps students bridge the gap between system analysis and practical database implementation.",
        courses: ["IS311", "EMC001", "IS313"],
        completionRate: 99,
        experience: 12,
        status: "Part-time",
        passFailRatio: "95/5"
      },
    ]
  },
  {
    id: 25,
    code: 'GE026',
    name: 'IT Infrastructure and Network Technologies',
    description: 'IT Infrastructure and Network technologies is an elective course designed to provide students with a learning experience that encourages participation, the building of ideas regarding current issues in business data networks, telecommunications and infrastructure. This is also topics in network access, network design, switching and routing, and special topics such as cloud computing, and internet of things. By the end of the course, the students are able to evaluate how IT infrastructure components are organized into infrastructure solutions in different organizational environments.',
    units: 3,
    department: ["CS", "IS", "EMC"],
    type: 'gened',
    prerequisites: ['CS104'],
    price: 4428,
    instructors: [
      {
        id: 30,
        name: "Ian Guzman",
        schedule: "Thu 4:00 PM - 6:30 PM",
        rating: 3.5,
        room: "Room 602",
        slots: 30,
        enrolled: 25,
        specialization: "Networking, Cloud Computing, IT Security",
        bio: "Ian Guzman is an IT professional specializing in networking, cloud computing, and IT security. With years of experience in designing and managing enterprise network infrastructures, he provides students with hands-on knowledge of network technologies, security protocols, and cloud-based solutions. His expertise helps students understand modern IT environments and their challenges.",
        courses: ["GE026"],
        completionRate: 81,
        experience: 4,
        status: "Part-time",
        passFailRatio: "77/23"
      },
    ]
  },
  {
    id: 26,
    code: 'STAT002',
    name: 'Descriptive Analytics',
    description: 'This course provides students with a comprehensive understanding of descriptive analytics and its application in business. It covers the fundamental concepts, techniques, and tools used to analyze and visualize historical data. Students will learn how to summarize and interpret data to generate actionable insights that inform decision-making processes. ',
    units: 3,
    department: ["IS"],
    type: 'major',
    prerequisites: ['STAT001'],
    price: 4428,
    instructors: [
      {
        id: 31,
        name: "Felix Guevara",
        schedule: "Fri 6:30 PM - 9:00 PM",
        rating: 4.7,
        room: "401",
        slots: 30,
        enrolled: 25,
        specialization: "Data Analytics & Business Intelligence",
        bio: "Felix Guevara is a seasoned data analyst with expertise in descriptive analytics, business intelligence, and statistical modeling. With over 8 years of experience in the industry, he has worked with various organizations to leverage data for strategic decision-making. His teaching approach emphasizes hands-on experience with data visualization tools and real-world applications of analytics.",
        courses: ["STAT002", "IS218"],
        completionRate: 99,
        experience: 8,
        status: "Full-time",
        passFailRatio: "95/5"
      },
    ]
  },
  {
    id: 27,
    code: 'PED003',
    name: 'Physical Education 3',
    description: 'Physical Education 3 focuses on advanced physical fitness and movement skills, emphasizing team sports, recreational activities, and personal fitness planning. Students will engage in structured physical training sessions aimed at improving coordination, endurance, and overall well-being. The course also covers the rules, strategies, and benefits of various sports, promoting teamwork and lifelong fitness habits.',
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: ['PED002'],
    price: 4428,
    instructors: [
      {
        id: 20,
        name: "John Denver Cruz",
        schedule: "Tue 8:30 AM - 11:00 AM, Wed 11:00 AM - 1:30 PM",
        rating: 4.5,
        room: "Left Wing",
        slots: 30,
        enrolled: 25,
        specialization: "Physical Fitness",
        bio: "John Denver Cruz is a certified physical education instructor with expertise in fitness training and sports management. He has been teaching for over 5 years and focuses on promoting an active lifestyle.",
        courses: ["PED001", "PED002", "PED003", "PED004"],
        completionRate: 93,
        experience: 5,
        status: "Full-time",
        passFailRatio: "88/12"
      },
      {
        id: 21,
        name: "Maria Santos",
        schedule: "Tue 11:00 AM - 1:30 PM, Wed 11:00 AM - 1:30 PM",
        rating: 4.4,
        room: "Right Wing",
        slots: 30,
        enrolled: 20,
        specialization: "Physical Fitness",
        bio: "Maria Santos is an experienced PE instructor with a background in dance, aerobics, and movement therapy. She specializes in group exercise instruction and recreational sports.",
        courses: ["PED001", "PED002", "PED003", "PED004"],
        completionRate: 99,
        experience: 12,
        status: "Full-time",
        passFailRatio: "95/5"
      },
    ]
  },
  {
    id: 28,
    code: 'GE006',
    name: 'Readings in Philippine History',
    description: 'Readings in Philippine History aims to expose students to different facets of Philippine history through critical reading and analysis of selected readings using varied primary resources. Students are expected to continuously critique, understand, and appreciate the events and notable proponents throughout the course of our history.',
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 32,
        name: "Shaina Villanueva",
        schedule: "Sat 11:00 AM - 1:30 PM",
        rating: 4.8,
        room: "Room 504",
        slots: 30,
        enrolled: 25,
        specialization: "Philippine History and Cultural Studies",
        bio: "Shaina Villanueva is a historian specializing in Philippine history, cultural heritage, and socio-political studies. She has extensive experience in historical research, archival studies, and teaching history with a critical perspective.",
        courses: ["GE006", "FIL003"],
        completionRate: 89,
        experience: 7,
        status: "Full-time",
        passFailRatio: "84/16"
      },
    ]
  },
  {
    id: 29,
    code: 'IS321',
    name: 'IS Project Management ',
    description: 'This course focuses on the methodologies, tools, and techniques necessary for planning, executing, and managing information systems projects. The course covers project lifecycle, project integration, scope management, time and cost management, quality management, human resource management, communication, risk management, and procurement management.',
    units: 3,
    department: ['IS'],
    type: 'major',
    prerequisites: ['IS311'],
    price: 4428,
    instructors: [
      {
        id: 3,
        name: "Denver I. Sandoval",
        schedule: "Sat 6:30 PM - 9:00 PM",
        rating: 5.0,
        room: "Room 602",
        slots: 30,
        enrolled: 25,
        specialization: "Information Systems and Project Management",
        bio: "An accomplished professional with extensive expertise in information systems and project management. Mr. Sandoval has over a decade of experience in teaching and consulting, focusing on the strategic role of information systems in optimizing business processes. With a passion for empowering students to harness the power of technology, he has guided numerous organizations in implementing effective IT solutions and has mentored students to excel in the field of information systems. His teaching philosophy emphasizes practical, real-world applications to prepare students for successful careers in IT and business.",
        courses: ["IS131", "IS321"],
        completionRate: 98,
        experience: 10,
        status: "Part-time",
        passFailRatio: "99/1"
      },
    ]
  },
  {
    id: 30,
    code: 'EMC001',
    name: 'Enterprise Data Management (EMC Elective 1)',
    description: 'EMC001 offers a practical approach to managing enterprise databases using open-source systems like MySQL or PostgreSQL, as well as commercial options like Oracle Database. Students will learn the relational model, database theory, and normalization, along with advanced SQL. The course also covers database administration, including stored procedures, functions, triggers, and metadata. Key topics include server management, performance tuning, security, and database design. The course ends with a project where students create a DBMS solution that integrates data, manages warehousing, and applies business intelligence to solve real-world enterprise challenges.',
    units: 3,
    department: ["CS", "IS", "EMC"],
    type: 'major',
    prerequisites: ['CS105'],
    price: 4428,
    instructors: [
      {
        id: 29,
        name: "Johnny Goodman",
        schedule: "Sat 1:30 PM - 4:00 PM, Sat 4:00 PM - 6:30 PM",
        rating: 4.8,
        room: "Room 601",
        slots: 30,
        enrolled: 16,
        specialization: "Systems Development, Software Engineering, Database Management",
        bio: "Johnny Goodman is an expert in Systems Development and Software Engineering, specializing in SDLC methodologies, business process modeling, and databases. He has extensive experience in database management systems (DBMS), SQL optimization, and enterprise database solutions. His guidance helps students bridge the gap between system analysis and practical database implementation.",
        courses: ["IS311", "EMC001", "IS313"],
        completionRate: 99,
        experience: 12,
        status: "Part-time",
        passFailRatio: "95/5"
      },
    ]
  },
  {
    id: 31,
    code: 'GE022',
    name: 'Technopreneurship',
    description: 'Technopreneurship covers the basics of spotting an opportunity, ideation, writing business plans, and building a viable business model. It also introduces key project management and leadership skills (project coordination, time, and resource management, fostering creative collaboration, monitoring progress, and evaluation) involved in business ventures.',
    units: 3,
    department: ["CS", "IS", "EMC"],
    type: 'gened',
    prerequisites: ["IS131"],
    price: 4428,
    instructors: [
      {
        id: 24,
        name: "John Paul Lastimoso",
        schedule: "Fri 1:30 PM - 4:00 PM",
        rating: 4.8,
        room: "Room 604",
        slots: 30,
        enrolled: 25,
        specialization: "Business Process Management & Operations Optimization",
        bio: "Mr. Lastimoso is an accomplished business analyst and process consultant with over 5 years of experience in driving operational excellence for organizations across diverse industries. Specializing in Business Process Management (BPM) and Operations Optimization, he excels in streamlining workflows, reducing inefficiencies, and implementing scalable automation solutions. His expertise spans process mapping, Lean Six Sigma methodologies, ERP system integration (such as SAP, Oracle, and Microsoft Dynamics), and digital transformation strategies.",
        courses: ["IS211", "GE022"],
        completionRate: 98,
        experience: 5,
        status: "Full-time",
        passFailRatio: "94/6"
      },
      {
        id: 33,
        name: "Jomari Win Domingo",
        schedule: "Sat 1:30 PM - 4:00 PM",
        rating: 4.4,
        room: "Room 501",
        slots: 30,
        enrolled: 10,
        specialization: "Business Process Management & Operations Optimization",
        bio: "Jomari Win Domingo is an experienced professional specializing in Business Process Management & Operations Optimization. With a strong background in streamlining workflows and enhancing efficiency, Jomari has helped organizations improve their operational strategies. Passionate about teaching, Jomari is dedicated to mentoring students in the principles of business processes, equipping them with practical skills for real-world applications.",
        courses: ["GE022", "ISELEC2"],
        completionRate: 83,
        experience: 5,
        status: "Part-time",
        passFailRatio: "79/21"
      },
    ]
  },
  {
    id: 32,
    code: 'STAT003',
    name: 'Predictive Analytics',
    description: 'This course provides students with a comprehensive understanding of predictive analytics and its application in business. It covers the fundamental concepts, techniques, and tools used to analyze historical data and make predictions about future events. Students will learn how to build predictive models, validate them, and apply them to real-world scenarios for better decision-making.',
    units: 3,
    department: ["IS"],
    type: '',
    prerequisites: ['STAT002'],
    price: 4428,
    instructors: [
      {
        id: 25,
        name: "Carlo Mendes",
        schedule: "Wed 6:30 PM - 9:00 PM",
        rating: 5.0,
        room: "Room 501",
        slots: 30,
        enrolled: 25,
        specialization: "Business Analytics & Data Science",
        bio: "Carlo Mendes is a business intelligence expert with extensive experience in data analytics, predictive modeling, and decision science. He has worked with various organizations to implement data-driven strategies for business growth.",
        courses: ["IS333", "STAT003", "CS321", "STAT004"],
        completionRate: 100,
        experience: 8,
        status: "Part-time",
        passFailRatio: "99/1"
      },
    ]
  },
  {
    id: 33,
    code: 'PED004',
    name: 'Physical Education 4',
    description: 'dvanced physical fitness training focusing on cardiovascular endurance, strength conditioning, and team sports. Includes personalized fitness assessments and wellness planning.',
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: ['PED003'],
    price: 4428,
    instructors: [
      {
        id: 20,
        name: "John Denver Cruz",
        schedule: "Tue 8:30 AM - 11:00 AM, Wed 11:00 AM - 1:30 PM",
        rating: 4.5,
        room: "Left Wing",
        slots: 30,
        enrolled: 25,
        specialization: "Physical Fitness",
        bio: "John Denver Cruz is a certified physical education instructor with expertise in fitness training and sports management. He has been teaching for over 5 years and focuses on promoting an active lifestyle.",
        courses: ["PED001", "PED002", "PED003", "PED004"],
        completionRate: 93,
        experience: 5,
        status: "Full-time",
        passFailRatio: "88/12"
      },
      {
        id: 21,
        name: "Maria Santos",
        schedule: "Tue 11:00 AM - 1:30 PM, Wed 11:00 AM - 1:30 PM",
        rating: 4.4,
        room: "Right Wing",
        slots: 30,
        enrolled: 20,
        specialization: "Physical Fitness",
        bio: "Maria Santos is an experienced PE instructor with a background in dance, aerobics, and movement therapy. She specializes in group exercise instruction and recreational sports.",
        courses: ["PED001", "PED002", "PED003", "PED004"],
        completionRate: 99,
        experience: 12,
        status: "Full-time",
        passFailRatio: "95/5"
      },
    ]
  },
  {
    id: 34,
    code: 'GE007',
    name: 'Life and Works of Rizal',
    description: 'Life and Works of Rizal (GE007) is a 3-unit general education course that explores the life, writings, and contributions of Dr. José Rizal, the national hero of the Philippines. This course examines his historical significance, major works such as Noli Me Tangere and El Filibusterismo, and their impact on Philippine society and nationalism.',
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 26,
        name: "Angeline Santos",
        schedule: "Thu 1:30 PM - 4:00 PM",
        rating: 4.5,
        room: "Room 401",
        slots: 30,
        enrolled: 2,
        specialization: "Global Studies & International Relations",
        bio: "Angeline Santos is a professor specializing in Global Studies and International Relations. With a background in political science and international affairs, she guides students in analyzing globalization, socio-economic trends, and the ethical implications of global citizenship.",
        courses: ["GE004", "GE023", "GE007"],
        completionRate: 86,
        experience: 6,
        status: "Full-time",
        passFailRatio: "81/19"
      },
      {
        id: 34,
        name: "Chito P. Leachon",
        schedule: "Thu 1:30 PM - 4:00 PM",
        rating: 4.4,
        room: "Room 601",
        slots: 30,
        enrolled: 20,
        specialization: "Global Studies & International Relations",
        bio: "Mr. Leachon is a dedicated educator and scholar specializing in Global Studies, International Relations, and Panitikan (Philippine Literature). With 10 years of experience, he brings a deep understanding of historical, political, and literary influences that shape both local and global perspectives. As an instructor for GE007: Life and Works of Rizal, he emphasizes Rizal's literary contributions and their role in shaping Philippine nationalism. His expertise in Philippine literature allows him to integrate cultural and historical narratives, helping students explore the power of literature in social movements, identity formation, and national consciousness. Chito fosters an engaging and interdisciplinary learning environment, encouraging students to think critically about historical texts and literary masterpieces in a modern context.",
        courses: ["GE007", "FIL003"],
        completionRate: 97,
        experience: 10,
        status: "Full-time",
        passFailRatio: "92/8"
      },
    ]
  },
  {
    id: 35,
    code: 'GE003',
    name: 'Science, Technology and Society',
    description: "Science, Technology, and Society is an introductory social science course in developing the scientific and design thinking skills of students. The course will tackle the relationship between science, technology, and society using historical, sociological, philosophical, and political frameworks in analyzing and dissecting the various issues borne out of science and technology's interaction with society.",
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 35,
        name: "Sam Ejercito Young  PhD",
        schedule: "Thu 1:30 PM - 4:00 PM",
        rating: 4.3,
        room: "Room 401",
        slots: 30,
        enrolled: 2,
        specialization: "History and Social Sciences",
        bio: "Sam Ejercito Young is a full-time instructor with 6 years of teaching experience. With a student completion rate of 85% and a pass-fail ratio of 80/20, Sam is known for effectively guiding students toward academic success. Currently teaching GE003, Sam is dedicated to delivering engaging and insightful lessons.",
        courses: ["GE003"],
        completionRate: 85,
        experience: 6,
        status: "Full-time",
        passFailRatio: "80/20"
      },
    ]
  },
  {
    id: 36,
    code: 'CS106',
    name: 'Applications Development and Emerging Technologies',
    description: "This 3-unit major course explores modern approaches to application development and the latest emerging technologies in computing. Students will gain hands-on experience with cutting-edge programming frameworks, cloud computing, AI-driven applications, and blockchain technology, preparing them for real-world software development challenges.",
    units: 3,
    department: ["CS", "IS", "EMC"],
    type: 'major',
    prerequisites: ['CS103'],
    price: 4428,
    instructors: [
      {
        id: 36,
        name: "Engr. Andres Bon E. Fazzio",
        schedule: "Thu 8:30 AM - 11:00 AM, Thu 11:00 AM - 1:30 PM, Thu 1:30 PM - 4:00 PM",
        rating: 4.9,
        room: "Room 504",
        slots: 30,
        enrolled: 25,
        specialization: "Software Engineering & Emerging Technologies",
        bio: "Engr. Andres Bon Fazzio is a seasoned software engineer and educator with 15 years of experience in software development, cloud computing, and AI-driven technologies. Known for his innovative teaching methods, he equips students with practical skills to excel in the fast-evolving tech industry. His expertise spans full-stack development, blockchain technology, and cybersecurity, making him a sought-after mentor in application development.",
        courses: ["CS106"],
        completionRate: 97,
        experience: 15,
        status: "Full-time",
        passFailRatio: "92/8"
      },
      {
        id: 37,
        name: "Engr. Riley Jordan Co",
        schedule: "Mon 8:30 AM - 11:00 AM, Mon 1:30 PM - 4:00 PM, Mon 4:00 PM - 6:30 PM",
        rating: 4.6,
        room: "Room 601",
        slots: 30,
        enrolled: 15,
        specialization: "Mobile & Web Application Development",
        bio: "Engr. Riley Jordan Co is a dedicated software developer and instructor with 9 years of experience in mobile and web application development. Passionate about integrating emerging technologies into real-world solutions, he focuses on progressive web apps (PWAs), cross-platform mobile development, and IoT applications. With a student-centered approach, he fosters creativity and problem-solving skills among aspiring developers.",
        courses: ["CS106"],
        completionRate: 94,
        experience: 9,
        status: "Full-time",
        passFailRatio: "88/12"
      },
      {
        id: 38,
        name: "Engr. Edilberto Rizal",
        schedule: "Sat 11:00 AM - 1:30 PM, Sat 1:30 PM - 4:00 PM, Sat 4:00 PM - 6:30 PM",
        rating: 4.0,
        room: "Room 601",
        slots: 30,
        enrolled: 6,
        specialization: "Software Development & Emerging Technologies",
        bio: "Engr. Edilberto Rizal is a passionate educator and software developer with 2 years of experience in application development and emerging technologies. As a part-time instructor, he brings hands-on industry knowledge to his students, focusing on modern software development practices, cloud-based solutions, and UI/UX design. Despite being early in his teaching career, he is committed to equipping students with practical programming skills and fostering innovation in technology.",
        courses: ["CS106", "IS313"],
        completionRate: 75,
        experience: 2,
        status: "Part-time",
        passFailRatio: "71/29"
      },
    ]
  },
  {
    id: 37,
    code: 'IS216',
    name: 'Data Visualization',
    description: "This 3-unit major course provides students with the skills and techniques necessary to analyze, interpret, and present data effectively. Covering data storytelling, visual analytics, dashboard design, and interactive visualizations, this course equips students with the ability to transform complex datasets into insightful and compelling visual representations. Industry-standard tools such as Tableau, Power BI, and Python visualization libraries (Matplotlib, Seaborn, Plotly) will be introduced.",
    units: 3,
    department: ["IS", "EMC"],
    type: 'major',
    prerequisites: ['EMC001'],
    price: 4428,
    instructors: [
      {
        id: 39,
        name: "Bongbong Encarnacion",
        schedule: "Thu 8:30 AM - 11:00 AM, Thu 11:00 AM - 1:30 PM, Thu 1:30 PM - 4:00 PM",
        rating: 4.3,
        room: "Room 503",
        slots: 30,
        enrolled: 10,
        specialization: "Data Analytics & Business Intelligence",
        bio: "Bongbong Encarnacion is a data analyst and instructor with 9 years of experience in data visualization, business intelligence, and statistical analysis. With expertise in Tableau, Power BI, and Python-based visualization tools, he helps students master the art of translating raw data into meaningful insights. His interactive teaching approach ensures that students gain hands-on experience in designing effective and impactful visualizations for real-world applications.",
        courses: ["IS216"],
        completionRate: 94,
        experience: 9,
        status: "Full-time",
        passFailRatio: "88/12"
      },
      {
        id: 40,
        name: "Drigo Villafuerte",
        schedule: "Wed 8:30 AM - 11:00 AM, Thu 11:00 AM - 1:30 PM, Fri 1:30 PM - 4:00 PM",
        rating: 4.3,
        room: "Room 501",
        slots: 30,
        enrolled: 10,
        specialization: "Data Science & Machine Learning",
        bio: "Drigo Villafuerte is an expert in data science, visualization, and machine learning with 10 years of experience in both academia and industry. His work focuses on interactive and AI-driven visualizations, enabling students to create data-driven narratives for decision-making. Passionate about bridging data science and storytelling, he ensures that students develop strong analytical and presentation skills, using tools like D3.js, Tableau, and Python-based visualization frameworks.",
        courses: ["IS216", "CS321"],
        completionRate: 97,
        experience: 10,
        status: "Full-time",
        passFailRatio: "92/8"
      },
    ]
  },
  {
    id: 38,
    code: 'CS321',
    name: 'Data Science Programming',
    description: "This Data Science Programming course offers a comprehensive introduction to the field, blending theoretical coding skills and practical business applications. Participants will explore the foundations of data analysis, including data types, cleaning, and preprocessing, coupled with an emphasis on statistical methods. Key programming languages like Python form a significant part of the curriculum, enabling students to manipulate, analyze, and visualize data. The course delves into machine learning, covering both supervised and unsupervised algorithms.",
    units: 3,
    department: ["CS", "IS", "EMC"],
    type: 'major',
    prerequisites: ['CS103'],
    price: 4428,
    instructors: [
      {
        id: 27,
        name: "Jon O. Brian",
        schedule: "Wed 08:30 AM - 11:00 AM, Wed 11:00 AM - 1:30 PM, Wed 1:30 PM - 4:00 PM",
        rating: 4.8,
        room: "Room 502",
        slots: 30,
        enrolled: 25,
        specialization: "Web Development, Programming, Data Science",
        bio: "Jon O. Brian is a seasoned professional in web development, programming, and data science. With years of experience in software engineering and ethical computing, he provides students with real-world insights into professional challenges in Information Systems.",
        courses: ["IS343", "EMC006", "CS321", "IS313", "MEG005"],
        completionRate: 97,
        experience: 11,
        status: "Full-time",
        passFailRatio: "92/8"
      },
      {
        id: 40,
        name: "Drigo Villafuerte",
        schedule: "Mon 11:00 AM - 1:30 PM, Mon 1:30 PM - 4:00 PM",
        rating: 4.3,
        room: "Room 501",
        slots: 30,
        enrolled: 10,
        specialization: "Data Science & Machine Learning",
        bio: "Drigo Villafuerte is an expert in data science, visualization, and machine learning with 10 years of experience in both academia and industry. His work focuses on interactive and AI-driven visualizations, enabling students to create data-driven narratives for decision-making. Passionate about bridging data science and storytelling, he ensures that students develop strong analytical and presentation skills, using tools like D3.js, Tableau, and Python-based visualization frameworks.",
        courses: ["IS216", "CS321"],
        completionRate: 97,
        experience: 10,
        status: "Full-time",
        passFailRatio: "92/8"
      },
      {
        id: 25,
        name: "Carlo Mendes",
        schedule: "Wed 6:30 PM - 9:00 PM",
        rating: 5.0,
        room: "Room 501",
        slots: 30,
        enrolled: 25,
        specialization: "Business Analytics & Data Science",
        bio: "Carlo Mendes is a business intelligence expert with extensive experience in data analytics, predictive modeling, and decision science. He has worked with various organizations to implement data-driven strategies for business growth.",
        courses: ["IS333", "STAT003", "CS321", "STAT004"],
        completionRate: 100,
        experience: 8,
        status: "Part-time",
        passFailRatio: "99/1"
      },
    ]
  },
  {
    id: 39,
    code: 'FIL003',
    name: 'Panitikan',
    description: "Panitikan is a 3-unit general education course that explores the rich literary heritage of the Philippines, analyzing its development from pre-colonial oral traditions to contemporary literature. This course examines various literary forms—including epics, poetry, short stories, novels, and drama—while highlighting their historical, social, and cultural significance. Students will engage in critical analysis, creative interpretation, and comparative discussions, fostering a deeper appreciation of Philippine identity, nationalism, and artistic expression. The course also integrates multidisciplinary perspectives, connecting literature to history, politics, and society to provide a holistic understanding of Filipino narratives and worldviews.",
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 32,
        name: "Shaina Villanueva",
        schedule: "Sat 11:00 AM - 1:30 PM, Sat 1:30 PM - 4:00 PM, Sat 4:00 PM - 6:30 PM, Sat 6:30 PM - 9:00 PM",
        rating: 4.8,
        room: "Room 504",
        slots: 30,
        enrolled: 25,
        specialization: "Philippine History and Cultural Studies",
        bio: "Shaina Villanueva is a historian specializing in Philippine history, cultural heritage, and socio-political studies. She has extensive experience in historical research, archival studies, and teaching history with a critical perspective.",
        courses: ["GE006", "FIL003"],
        completionRate: 89,
        experience: 7,
        status: "Full-time",
        passFailRatio: "84/16"
      },
      {
        id: 34,
        name: "Chito P. Leachon",
        schedule: "Thu 8:30 AM - 11:00 AM, Thu 11:00 AM - 1:30 PM, Thu 1:30 PM - 4:00 PM",
        rating: 4.4,
        room: "Room 601",
        slots: 30,
        enrolled: 20,
        specialization: "Global Studies & International Relations",
        bio: "Mr. Leachon is a dedicated educator and scholar specializing in Global Studies, International Relations, and Panitikan (Philippine Literature). With 10 years of experience, he brings a deep understanding of historical, political, and literary influences that shape both local and global perspectives. As an instructor for GE007: Life and Works of Rizal, he emphasizes Rizal's literary contributions and their role in shaping Philippine nationalism. His expertise in Philippine literature allows him to integrate cultural and historical narratives, helping students explore the power of literature in social movements, identity formation, and national consciousness. Chito fosters an engaging and interdisciplinary learning environment, encouraging students to think critically about historical texts and literary masterpieces in a modern context.",
        courses: ["GE007", "FIL003"],
        completionRate: 97,
        experience: 10,
        status: "Full-time",
        passFailRatio: "92/8"
      },
    ]
  },
  {
    id: 40,
    code: 'ISELEC2',
    name: 'IS ELECTIVE (Technopreneurship 2)',
    description: "Technopreneurship 2 is a 3-unit elective course designed for Information Systems (IS) students to deepen their knowledge of technology-driven entrepreneurship. This course builds on the foundations of Technopreneurship 1, focusing on the execution and scaling of innovative business ideas through technology, digital platforms, and startup methodologies.",
    units: 3,
    department: ["IS"],
    type: 'gened',
    prerequisites: ['GE022'],
    price: 4428,
    instructors: [
      {
        id: 24,
        name: "John Paul Lastimoso",
        schedule: "Fri 1:30 PM - 4:00 PM, Fri 4:00 PM - 6:30 PM, Fri 6:30 PM - 9:00 PM",
        rating: 4.8,
        room: "Room 502",
        slots: 30,
        enrolled: 25,
        specialization: "Business Process Management & Operations Optimization",
        bio: "Mr. Lastimoso is an accomplished business analyst and process consultant with over 5 years of experience in driving operational excellence for organizations across diverse industries. Specializing in Business Process Management (BPM) and Operations Optimization, he excels in streamlining workflows, reducing inefficiencies, and implementing scalable automation solutions. His expertise spans process mapping, Lean Six Sigma methodologies, ERP system integration (such as SAP, Oracle, and Microsoft Dynamics), and digital transformation strategies.",
        courses: ["IS211", "GE022"],
        completionRate: 98,
        experience: 5,
        status: "Full-time",
        passFailRatio: "94/6"
      },
      {
        id: 33,
        name: "Jomari Win Domingo",
        schedule: "Fri 1:30 PM - 4:00 PM, Sat 1:30 PM - 4:00 PM, Sat 4:00 PM - 6:30 PM",
        rating: 4.4,
        room: "Room 501",
        slots: 30,
        enrolled: 10,
        specialization: "Business Process Management & Operations Optimization",
        bio: "Jomari Win Domingo is an experienced professional specializing in Business Process Management & Operations Optimization. With a strong background in streamlining workflows and enhancing efficiency, Jomari has helped organizations improve their operational strategies. Passionate about teaching, Jomari is dedicated to mentoring students in the principles of business processes, equipping them with practical skills for real-world applications.",
        courses: ["GE022", "ISELEC2"],
        completionRate: 83,
        experience: 5,
        status: "Part-time",
        passFailRatio: "79/21"
      },
    ]
  },
  {
    id: 41,
    code: 'GE005',
    name: 'Purposive Communication',
    description: "Purposive Communication is a 3-unit general education course designed to develop students' effective communication skills in academic, professional, and socio-cultural contexts. The course emphasizes written, oral, and visual communication, preparing students to express ideas clearly, persuasively, and appropriately across different audiences and platforms.",
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 41,
        name: "Nx. Damien Marcellan Montegrae",
        schedule: "Tue 8:30 AM - 11:00 AM, Wed 8:30 AM - 11:00 AM, Thu 8:30 AM - 11:00 AM",
        rating: 5.0,
        room: "Room 401",
        slots: 30,
        enrolled: 27,
        specialization: "Purposive Communication & Technical Communication",
        bio: 'Nx. Damien Marcellan Montegrae is a master of precision and linguistic discipline, shaping students into eloquent, structured, and highly adaptive communicators. A formidable force in Purposive and Technical Communication, he emphasizes logical coherence, linguistic accuracy, and clarity in expression. In GE005 (Purposive Communication), Montegrae trains students to wield language as a precise and powerful tool, equipping them with skills in argumentative writing, public speaking, and cross-cultural discourse. Meanwhile, in GE008 (Technical Communication), he focuses on data-driven, structured writing, ensuring students are adept at crafting professional reports, documentation, and analytical presentations. Often regarded as the calculated strategist to Prof. Aurelio "Leo" Vergara’s persuasive tactician, Montegrae operates with an unwavering commitment to discipline, logic, and efficiency in communication. His students leave not just as competent speakers and writers, but as sharp-witted communicators, capable of commanding any audience with precision and intellect.',
        courses: ["GE005", "GE008"],
        completionRate: 98,
        experience: 10,
        status: "Part-time",
        passFailRatio: "90/10"
      },
      {
        id: 42,
        name: 'Prof. Aurelio "Leo" S. Vergara',
        schedule: "Mon 8:30 AM - 11:00 AM, Fri 8:30 AM - 11:00 AM, Sat 8:30 AM - 11:00 AM",
        rating: 4.7,
        room: "Room 601",
        slots: 30,
        enrolled: 20,
        specialization: "Rhetoric & Strategic Communication",
        bio: 'Prof. Aurelio "Leo" S. Vergara is a formidable counterpart to Nx. Damien Marcellan Montegrae, specializing in Rhetoric, Persuasion, and Strategic Communication. A master of articulate discourse and compelling speech, he challenges students to think critically, write persuasively, and communicate with impact. With a strong academic foundation in linguistics and communication theory, Prof. Vergara takes a debate-driven, analytical approach to GE005 (Purposive Communication), ensuring students not only develop fluency in written and verbal expression but also master the art of argumentation and audience engagement. A respected scholar and rival in intellectual sparring, he offers a distinct yet equally powerful teaching style compared to Montegrae—where one refines clarity, the other hones conviction. Students who learn under Vergara emerge as critical thinkers and commanding communicators, prepared for academic, professional, and even diplomatic arenas.',
        courses: ["GE005", "GE008"],
        completionRate: 97,
        experience: 12,
        status: "Full-time",
        passFailRatio: "89/11"
      },
    ]
  },
  {
    id: 42,
    code: 'IS313',
    name: 'Software Quality Engineering',
    description: "Software Quality Engineering is a 3-unit major course that provides an in-depth understanding of software quality assurance (SQA), testing methodologies, and process improvement. This course equips students with the skills to ensure the reliability, maintainability, and efficiency of software products through systematic quality control techniques.",
    units: 3,
    department: ["CS", "IS"],
    type: 'major',
    prerequisites: ["CS106", "CS321"],
    price: 4428,
    instructors: [
      {
        id: 27,
        name: "Jon O. Brian",
        schedule: "Wed 08:30 AM - 11:00 AM, Wed 11:00 AM - 1:30 PM, Wed 1:30 PM - 4:00 PM",
        rating: 4.8,
        room: "Room 502",
        slots: 30,
        enrolled: 25,
        specialization: "Web Development, Programming, Data Science",
        bio: "Jon O. Brian is a seasoned professional in web development, programming, and data science. With years of experience in software engineering and ethical computing, he provides students with real-world insights into professional challenges in Information Systems.",
        courses: ["IS343", "EMC006", "CS321", "IS313", "MEG005"],
        completionRate: 97,
        experience: 11,
        status: "Full-time",
        passFailRatio: "92/8"
      },
      {
        id: 38,
        name: "Engr. Edilberto Rizal",
        schedule: "Sat 11:00 AM - 1:30 PM, Sat 1:30 PM - 4:00 PM, Sat 4:00 PM - 6:30 PM",
        rating: 4.0,
        room: "Room 601",
        slots: 30,
        enrolled: 6,
        specialization: "Software Development & Emerging Technologies",
        bio: "Engr. Edilberto Rizal is a passionate educator and software developer with 2 years of experience in application development and emerging technologies. As a part-time instructor, he brings hands-on industry knowledge to his students, focusing on modern software development practices, cloud-based solutions, and UI/UX design. Despite being early in his teaching career, he is committed to equipping students with practical programming skills and fostering innovation in technology.",
        courses: ["CS106", "IS313"],
        completionRate: 75,
        experience: 2,
        status: "Part-time",
        passFailRatio: "71/29"
      },
      {
        id: 29,
        name: "Johnny Goodman",
        schedule: "Sat 6:30 PM - 9:00 PM",
        rating: 4.8,
        room: "Room 503",
        slots: 30,
        enrolled: 25,
        specialization: "Systems Development, Software Engineering, Business Process Modeling, Databases",
        bio: "Johnny Goodman is an expert in Systems Development and Software Engineering, specializing in SDLC methodologies, business process modeling, and databases. He has extensive experience in database management systems (DBMS), SQL optimization, and enterprise database solutions. His guidance helps students bridge the gap between system analysis and practical database implementation.",
        courses: ["IS311", "EMC001", "IS313"],
        completionRate: 99,
        experience: 12,
        status: "Part-time",
        passFailRatio: "95/5"
      },
    ]
  },
  {
    id: 43,
    code: 'ISELEC4',
    name: 'IS ELECTIVE (Supply Chain Management)',
    description: "Supply Chain Management (SCM) is a 3-unit elective course designed to provide students with a comprehensive understanding of modern supply chain processes, logistics, and operations management. This course focuses on the strategic, technological, and analytical aspects of managing the flow of goods, services, and information from suppliers to consumers.",
    units: 3,
    department: ["IS"],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 43,
        name: "Jenny Crisologo",
        schedule: "Sat 1:30 PM - 4:00 PM",
        rating: 4.7,
        room: "Room 504",
        slots: 30,
        enrolled: 16,
        specialization: "Supply Chain Management & Logistics Optimization",
        bio: "Jenny Crisologo is a dedicated expert in Supply Chain Management (SCM) and Logistics Optimization, with six years of industry and academic experience. She specializes in streamlining procurement, distribution, and inventory control to enhance business efficiency.  With a strong background in enterprise resource planning (ERP), demand forecasting, and risk mitigation, Prof. Crisologo provides students with practical insights into modern supply chain challenges. Her hands-on approach and real-world case studies help bridge the gap between theory and industry application, preparing students for roles in logistics, operations, and global trade management.",
        courses: ["ISELEC4"],
        completionRate: 88,
        experience: 6,
        status: "Part-time",
        passFailRatio: "83/17"
      },
    ]
  },
  {
    id: 44,
    code: 'IS341',
    name: 'Enterprise Architecture',
    description: "IS341 explores the principles and practices of enterprise architecture (EA) in the context of information systems. It covers the strategic alignment of IT with business goals, architectural frameworks, modeling techniques, and the role of EA in supporting organizational transformation.",
    units: 3,
    department: ["IS"],
    type: 'major',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 44,
        name: "Edgardo Jun Dizon",
        schedule: "Mon 1:30 PM - 4:00 PM",
        rating: 4.3,
        room: "Room 401",
        slots: 30,
        enrolled: 9,
        specialization: "Business Analytics & Performance Evaluation",
        bio: "Edgardo Jun Dizon is a seasoned professional with 9 years of experience in business analytics, financial evaluation, and corporate strategy. His expertise lies in evaluating business performance, optimizing decision-making processes, and integrating data-driven methodologies to improve organizational efficiency. Engr. Dizon is also known for his structured and analytical teaching approach, ensuring students develop both theoretical and practical knowledge in business intelligence.",
        courses: ["IS341", "IS222"],
        completionRate: 94,
        experience: 9,
        status: "Part-time",
        passFailRatio: "88/12"
      },
    ]
  },
  {
    id: 45,
    code: 'MEG005',
    name: 'Web Programming',
    description: "Web Programming is a 3-unit major course that provides students with the fundamental and advanced concepts of web development, front-end and back-end programming, and web application deployment. The course covers modern web technologies, programming languages, and frameworks used in developing dynamic, responsive, and secure websites and applications.",
    units: 3,
    department: ["CS", "IS"],
    type: 'major',
    prerequisites: ["CS106"],
    price: 4428,
    instructors: [
      {
        id: 4,
        name: "Carmen D. Amores",
        schedule: "Sat 11:00 AM - 1:30 PM, Sat 1:30 PM - 4:00 PM",
        rating: 4.5,
        room: "Room 503 Mac Lab",
        slots: 25,
        enrolled: 10,
        specialization: "Com-Sci Education and Web Development",
        bio: "With over 10 years of experience in teaching computing fundamentals and web development, Ms. Amores helps students master hardware, software, and dynamic web design using HTML and CSS. Known for her strong curriculum development skills, she has guided many students toward successful careers in tech.",
        courses: ["CS101", "CS104", "CS105", "MEG005"],
        completionRate: 91,
        experience: 10,
        status: "Part-time",
        passFailRatio: "85/15"
      },
      {
        id: 5,
        name: "Siegfried Rexford",
        schedule: "Wed 11:00 AM - 1:30 PM, Wed 11:00 AM - 1:30 PM, Wed 1:30 PM - 4:00 PM",
        rating: 4.6,
        room: "Room 503 Mac Lab",
        slots: 25,
        enrolled: 10,
        specialization: "Web Development",
        bio: "A dedicated educator and software developer with over a decade of experience in computer science and web development. Prof. Rexford specializes in creating engaging, practical learning experiences, helping students master HTML, CSS, and problem-solving skills to bridge the gap between theory and real-world application.",
        courses: ["CS101", "CS105", "MEG005"],
        completionRate: 87,
        experience: 10,
        status: "Part-time",
        passFailRatio: "82/18"
      },
      {
        id: 27,
        name: "Jon O. Brian",
        schedule: "Wed 08:30 AM - 11:00 AM, Wed 11:00 AM - 1:30 PM, Wed 1:30 PM - 4:00 PM",
        rating: 4.8,
        room: "Room 502",
        slots: 30,
        enrolled: 25,
        specialization: "Web Development, Programming, Data Science",
        bio: "Jon O. Brian is a seasoned professional in web development, programming, and data science. With years of experience in software engineering and ethical computing, he provides students with real-world insights into professional challenges in Information Systems.",
        courses: ["IS343", "EMC006", "CS321", "IS313", "MEG005"],
        completionRate: 97,
        experience: 11,
        status: "Full-time",
        passFailRatio: "92/8"
      },
    ]
  },
  {
    id: 46,
    code: 'IS218',
    name: 'Business Intelligence',
    description: "Business Intelligence (BI) is a 3-unit major course that focuses on the strategies, technologies, and tools used to transform raw data into meaningful insights for business decision-making. This course covers the fundamentals of data analytics, reporting, and predictive modeling, equipping students with skills to enhance business performance, optimize operations, and support strategic planning.",
    units: 3,
    department: ["CS", "IS"],
    type: 'major',
    prerequisites: ['IS216'],
    price: 4428,
    instructors: []
  },
  {
    id: 47,
    code: 'STAT004',
    name: 'Regression Analysis',
    description: "Regression Analysis is a 3-unit major course that provides an in-depth exploration of statistical modeling techniques used for analyzing relationships between variables. This course covers both theoretical and applied aspects of regression methods, equipping students with data-driven problem-solving skills for various fields, including business, economics, social sciences, and machine learning.",
    units: 3,
    department: ["IS"],
    type: 'major',
    prerequisites: ['STAT003'],
    price: 4428,
    instructors: []
  },
  {
    id: 48,
    code: 'GE008',
    name: 'Technical Communication',
    description: "Technical Communication is an introductory course designed to develop students' critical thinking and communication skills in the context of professional environments. This course provides a comprehensive overview of the principles, techniques, and strategies necessary for effective oral and written communication in various technical fields. Students will explore the intersection of communication, technology, and industry-specific knowledge to enhance their ability to communicate complex information clearly and concisely. By the end of the course, students are expected to demonstrate effective writing and oral communication skills required in their academic discipline and the workplace. They will be equipped with the knowledge, skills, and values necessary to succeed as effective communicators in technical fields.",
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 41,
        name: "Nx. Damien Marcellan Montegrae",
        schedule: "Fri 1:30 PM - 4:00 PM, Sat 8:30 AM - 11:00 AM, Thu 4:00 PM - 6:30 PM",
        rating: 5.0,
        room: "Room 402",
        slots: 30,
        enrolled: 19,
        specialization: "Purposive Communication & Technical Communication",
        bio: 'Nx. Damien Marcellan Montegrae is a master of precision and linguistic discipline, shaping students into eloquent, structured, and highly adaptive communicators. A formidable force in Purposive and Technical Communication, he emphasizes logical coherence, linguistic accuracy, and clarity in expression. In GE005 (Purposive Communication), Montegrae trains students to wield language as a precise and powerful tool, equipping them with skills in argumentative writing, public speaking, and cross-cultural discourse. Meanwhile, in GE008 (Technical Communication), he focuses on data-driven, structured writing, ensuring students are adept at crafting professional reports, documentation, and analytical presentations. Often regarded as the calculated strategist to Prof. Aurelio "Leo" Vergara’s persuasive tactician, Montegrae operates with an unwavering commitment to discipline, logic, and efficiency in communication. His students leave not just as competent speakers and writers, but as sharp-witted communicators, capable of commanding any audience with precision and intellect.',
        courses: ["GE005", "GE008"],
        completionRate: 98,
        experience: 10,
        status: "Part-time",
        passFailRatio: "90/10"
      },
      {
        id: 42,
        name: 'Prof. Aurelio "Leo" S. Vergara',
        schedule: "Tue 8:30 AM - 11:00 AM, Wed 8:30 AM - 11:00 AM, Thu 8:30 AM - 11:00 AM",
        rating: 4.7,
        room: "Room 401",
        slots: 30,
        enrolled: 13,
        specialization: "Rhetoric & Strategic Communication",
        bio: 'Prof. Aurelio "Leo" S. Vergara is a formidable counterpart to Nx. Damien Marcellan Montegrae, specializing in Rhetoric, Persuasion, and Strategic Communication. A master of articulate discourse and compelling speech, he challenges students to think critically, write persuasively, and communicate with impact. With a strong academic foundation in linguistics and communication theory, Prof. Vergara takes a debate-driven, analytical approach to GE005 (Purposive Communication), ensuring students not only develop fluency in written and verbal expression but also master the art of argumentation and audience engagement. A respected scholar and rival in intellectual sparring, he offers a distinct yet equally powerful teaching style compared to Montegrae—where one refines clarity, the other hones conviction. Students who learn under Vergara emerge as critical thinkers and commanding communicators, prepared for academic, professional, and even diplomatic arenas.',
        courses: ["GE005", "GE008"],
        completionRate: 97,
        experience: 12,
        status: "Full-time",
        passFailRatio: "89/11"
      },
    ]
  },
  {
    id: 49,
    code: 'IS231',
    name: 'Quantitative Methods',
    description: "This course is designed to provide students with a comprehensive understanding of quantitative techniques used in decision-making processes. The course covers various topics including probability, statistical inference, regression analysis, and optimization. By the end of the course, students will be equipped with the skills to apply quantitative methods to solve real-world business problems.",
    units: 3,
    department: ["IS"],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 25,
        name: "Daniel Masaya",
        schedule: "Wed 8:30 AM - 11:00 AM, Thu 1:30 PM - 4:00 AM",
        rating: 4.8,
        room: "Room 604",
        slots: 30,
        enrolled: 9,
        specialization: "Applied Statistics",
        bio: "Daniel Masaya is a statistics professor with expertise in quantitative research, probability theory, and statistical computing. He has a strong background in both academia and industry, focusing on data-driven problem-solving.",
        courses: ["STAT001", "IS231"],
        completionRate: 91,
        experience: 6,
        status: "Part-time",
        passFailRatio: "95/5"
      },
      {
        id: 45,
        name: "Bill Reed",
        schedule: "Wed 8:30 AM - 11:00 AM, Sat 1:30 PM - 4:00 AM",
        rating: 4.8,
        room: "Room 602",
        slots: 30,
        enrolled: 9,
        specialization: "Statistical Modeling & Quantitative Methods",
        bio: "Bill Reed is a highly experienced statistician and data analyst specializing in quantitative methods, statistical modeling, and data analytics. With nine years of teaching and industry experience, he has worked extensively in data-driven decision-making, business intelligence, and applied mathematics.",
        courses: ["IS231"],
        completionRate: 95,
        experience: 9,
        status: "Part-time",
        passFailRatio: "90/10"
      },
    ]
  },
  {
    id: 50,
    code: 'IS121',
    name: 'Organization and Management Concepts',
    description: "Organization and Management Concepts is a 3-unit major course that provides a comprehensive understanding of organizational structures, management principles, and business operations. This course introduces students to fundamental management functions, including planning, organizing, leading, and controlling, with a focus on decision-making, team dynamics, leadership, and strategic management.",
    units: 3,
    department: ["IS"],
    type: 'major',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 26,
        name: "Amado Salangsang",
        schedule: "Thu 1:30 PM - 4:00 PM",
        rating: 4.3,
        room: "Room 501",
        slots: 30,
        enrolled: 4,
        specialization: "Organizational Behavior & Strategic Management",
        bio: "Amado Salangsang is a dynamic business strategist and educator specializing in organizational development, leadership principles, and corporate governance. With six years of experience in both the academic and business sectors, he has worked with emerging startups, multinational corporations, and government institutions in business operations and strategic planning.",
        courses: ["IS121", "IS222"],
        completionRate: 88,
        experience: 6,
        status: "Part-time",
        passFailRatio: "83/17"
      },
    ]
  },
  {
    id: 51,
    code: 'EMC005',
    name: 'Data Mining (EMC Elective 5)',
    description: "Data Mining is a 3-unit major course that introduces students to advanced techniques in extracting patterns, trends, and valuable insights from large datasets. This course covers fundamental and advanced data mining methodologies, including classification, clustering, association rule mining, anomaly detection, and predictive analytics. Students will explore machine learning algorithms, statistical modeling, and big data processing techniques, with hands-on applications using Python, R, SQL, and specialized data mining tools. Emphasis is placed on real-world applications in business intelligence, cybersecurity, healthcare, finance, and digital marketing.",
    units: 3,
    department: ["CS", "IS", "EMC"],
    type: 'major',
    prerequisites: ['IS216'],
    price: 4428,
    instructors: []
  },
  {
    id: 52,
    code: 'ISELEC1',
    name: 'IS ELECTIVE (Customer Relationship Management)',
    description: "Customer Relationship Management (CRM) is a 3-unit elective course designed to equip students with strategies, technologies, and methodologies for managing a company’s interactions with current and potential customers. This course covers CRM frameworks, customer lifecycle management, data-driven marketing, customer analytics, and retention strategies. Students will explore CRM platforms such as Salesforce, HubSpot, and Zoho CRM, gaining hands-on experience in customer segmentation, personalized marketing, and automation tools. The course also emphasizes ethical considerations in data management and privacy compliance.",
    units: 3,
    department: ["IS"],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 26,
        name: "Gregorio Alvarado",
        schedule: "Thu 1:30 PM - 4:00 PM, Fri 1:30 PM - 4:00 PM",
        rating: 4.3,
        room: "Room 503",
        slots: 30,
        enrolled: 15,
        specialization: "Customer Relationship Management & Digital Marketing",
        bio: "Gregorio Alvarado is a seasoned business strategist and CRM specialist with expertise in customer engagement, digital marketing, and business process automation. With six years of experience in corporate consulting and academia, he has worked with various industries, including retail, telecommunications, and e-commerce, helping businesses enhance customer loyalty and sales conversion strategies.",
        courses: ["ISELEC1", "IS324"],
        completionRate: 88,
        experience: 6,
        status: "Part-time",
        passFailRatio: "90/10"
      },
    ]
  },
  {
    id: 53,
    code: 'IS331',
    name: 'IS Strategy, Management and Acquisitions',
    description: "IS331 is a 3-unit major course that explores the strategic role of Information Systems (IS) in business management, IT governance, and technology acquisitions. The course covers enterprise IT strategy, digital transformation, risk management, and decision-making processes in IS investments. Students will analyze case studies of successful and failed IS implementations, focusing on aligning IT strategies with business objectives, evaluating emerging technologies, vendor selection, and contract negotiations. Topics include IT project management, cloud computing adoption, cybersecurity strategies, and data-driven decision-making. By the end of the course, students will be equipped with critical thinking, leadership, and analytical skills to manage enterprise-level IS investments and digital business strategies in various industries.",
    units: 3,
    department: ["IS"],
    type: 'major',
    prerequisites: ["IS341"],
    price: 4428,
    instructors: []
  },
  {
    id: 54,
    code: 'GE023',
    name: 'Ethics',
    description: "Ethics is a course that teaches students to make moral decisions by using dominant moral frameworks and by applying moral reasoning to analyze and solve moral dilemmas. This course will cover the theories and principles of ethical behavior in modern society at the level of individual, society, and in interaction with the environment and other shared resources. By the end of the course, the students are expected to be able to explain ethical theories and concepts; evaluate moral dilemmas found in the real world; and apply moral reasoning in analyzing and solving moral issues on the individual and societal level.",
    units: 3,
    department: ['ALL'],
    type: 'gened',
    prerequisites: [],
    price: 4428,
    instructors: [
      {
        id: 26,
        name: "Angeline Santos",
        schedule: "Tue 11:00 AM - 1:30 PM, Wed 1:30 PM - 4:00 PM, Thu 11:00 AM - 1:30 PM",
        rating: 4.5,
        room: "Room 402",
        slots: 30,
        enrolled: 2,
        specialization: "Global Studies & International Relations",
        bio: "Angeline Santos is a professor specializing in Global Studies and International Relations. With a background in political science and international affairs, she guides students in analyzing globalization, socio-economic trends, and the ethical implications of global citizenship.",
        courses: ["GE004", "GE023", "GE007"],
        completionRate: 86,
        experience: 6,
        status: "Full-time",
        passFailRatio: "81/19"
      },
    ]
  },
  {
    id: 55,
    code: 'IS324',
    name: 'Digital Marketing',
    description: "IS324 is a 3-unit major course that explores the principles, strategies, and tools of digital marketing in today's fast-paced digital landscape. The course covers search engine optimization (SEO), search engine marketing (SEM), social media marketing, email marketing, content marketing, and paid advertising strategies. Students will learn how to analyze digital consumer behavior, optimize marketing campaigns, leverage data-driven decision-making, and implement automation tools. Practical training in Google Ads, Facebook Ads, Google Analytics, and marketing automation software will be included.",
    units: 3,
    department: ["CS", "IS", "EN"],
    type: 'major',
    prerequisites: ["IS121"],
    price: 4428,
    instructors: []
  },
  {
    id: 56,
    code: 'EMC004',
    name: 'Fundamentals of Software Testing (EMC Elective 4)',
    description: "EMC004 is a 3-unit elective course that introduces students to the principles, methodologies, and best practices of software testing. The course covers manual and automated testing techniques, test case design, debugging strategies, and quality assurance (QA) processes. Students will learn about various testing levels, including unit testing, integration testing, system testing, and acceptance testing. The course also explores software development life cycle (SDLC) models, test automation tools, defect tracking systems, and industry standards such as ISTQB guidelines.",
    units: 3,
    department: ["CS", "IS", "EMC"],
    type: 'major',
    prerequisites: ['IS313'],
    price: 4428,
    instructors: []
  },
  {
    id: 57,
    code: 'IS305',
    name: 'Data Warehousing',
    description: "",
    units: 3,
    department: ["IS"],
    type: 'major',
    prerequisites: ['IS331'],
    price: 4428,
    instructors: []
  },
  {
    id: 58,
    code: 'IS342',
    name: 'Capstone Project 1',
    description: "IS342 is a 3-unit major course that serves as the first phase of a two-part capstone project, where students apply their knowledge and skills to develop a real-world information system or digital solution. This course focuses on problem identification, project proposal, feasibility study, system requirements gathering, and initial system design. Students will work in teams to research industry challenges, define project objectives, and create a structured project plan. Key topics include project management methodologies, software development life cycle (SDLC), user experience (UX) design, and ethical considerations in technology development. By the end of the course, students will have completed a formal project proposal, feasibility study, and initial system prototype, preparing them for Capstone Project 2,",
    units: 3,
    department: ["ANI", "GD", "VFP", "IS", "EN", "EMC", "ARC"],
    type: 'major',
    prerequisites: ['IS331'],
    price: 4428,
    instructors: []
  },
  {
    id: 59,
    code: 'IS411',
    name: 'Capstone Project 2',
    description: "IS411 is a 3-unit major course that serves as the final phase of the capstone project, where students complete the design, development, testing, and deployment of their proposed information system or digital solution. Building on Capstone Project 1, students will focus on system implementation, debugging, user testing, documentation, and final presentation. The course covers software engineering best practices, project management strategies, system integration, and performance optimization. By the end of the course, students will deliver a fully functional system, comprehensive project documentation, and a formal defense presentation to faculty and industry evaluators. This course prepares students for real-world IT development, entrepreneurship, and professional careers in software and system implementation.",
    units: 3,
    department: ["ANI", "GD", "VFP", "IS", "EN", "EMC", "ARC"],
    type: 'major',
    prerequisites: ['IS342'],
    price: 4428,
    instructors: []
  },
  {
    id: 60,
    code: 'IR002',
    name: 'Job Skills and Career Preparation',
    description: "IR002 is a 3-unit major course designed to equip students with essential job readiness skills and prepare them for successful career entry in various industries. The course focuses on resume writing, interview techniques, workplace professionalism, networking strategies, and career planning. Students will engage in mock interviews, career simulations, personal branding workshops, and professional portfolio development. Additional topics include job market trends, employer expectations, workplace ethics, and strategies for career advancement. By the end of the course, students will have a polished resume, a strong professional profile, and the confidence to navigate the job market effectively, preparing them for internships and full-time employment opportunities.",
    units: 3,
    department: ['ALL'],
    type: 'major',
    prerequisites: ['IS342', 'IR001'],
    price: 4428,
    instructors: []
  },
  {
    id: 61,
    code: 'IS309',
    name: 'Marketing Analytics: Data Tools and Techniques',
    description: "IS309 is a 3-unit major course that introduces students to data-driven decision-making in marketing using analytical tools and techniques. The course covers data collection, cleaning, visualization, statistical analysis, and predictive modeling to optimize marketing strategies. Students will explore customer segmentation, campaign performance analysis, sentiment analysis, and A/B testing using industry-standard software such as Excel, SQL, Python, R, and business intelligence platforms.",
    units: 3,
    department: ["IS"],
    type: 'major',
    prerequisites: ['IS324'],
    price: 4428,
    instructors: []
  },
  {
    id: 62,
    code: 'CS209',
    name: 'Software Engineering 1',
    description: "CS209 is a 3-unit major course that introduces students to the principles, methodologies, and best practices of software engineering. The course covers software development life cycle (SDLC), requirements engineering, system design, coding standards, version control, and testing methodologies. Students will learn about agile development, waterfall models, object-oriented design, and project management techniques. The course also emphasizes collaborative software development, documentation, and quality assurance practices.",
    units: 3,
    department: ["CS", "IS", "EMC"],
    type: 'major',
    prerequisites: ["IS313", "EMC004"],
    price: 4428,
    instructors: []
  },
  {
    id: 63,
    code: 'IS222',
    name: 'Evaluation of Business Performance',
    description: "IS222 is a 3-unit major course that focuses on the assessment and analysis of business performance using key financial and operational metrics. Students will learn performance measurement frameworks, financial statement analysis, key performance indicators (KPIs), benchmarking, and business intelligence tools to evaluate organizational effectiveness. The course covers topics such as profitability analysis, cost efficiency, risk assessment, and strategic decision-making. Students will work with real-world case studies and business simulation tools to apply quantitative and qualitative evaluation techniques.",
    units: 3,
    department: ["IS"],
    type: 'major',
    prerequisites: [],
    price: 4428,
    instructors: []
  },
  {
    id: 64,
    code: 'IS421',
    name: 'Practicum 1',
    description: "IS421 is a 3-unit major course designed to provide students with practical, hands-on experience in a professional work environment. Students will apply their theoretical knowledge and technical skills in real-world business, technology, or creative industry settings.",
    units: 3,
    department: ['ALL'],
    type: 'major',
    prerequisites: ['IS411', 'IR002'],
    price: 4428,
    instructors: []
  },
  {
    id: 65,
    code: 'IS431',
    name: 'Practicum 2',
    description: "IS431 is a continuation of Practicum 1, allowing students to further deepen their industry experience and refine their skills.",
    units: 3,
    department: ['ALL'],
    type: 'major',
    prerequisites: ["IS421"],
    price: 4428,
    instructors: []
  },
];

// Application state
let cart = [];
let selectedInstructor = null;
let currentSubject = null;
let completedSubjects = [
  { code: 'CS101', grade: '3.75' }, { code: 'CS105', grade: '4.0' },
  { code: 'CS103', grade: '3.5' }, { code: 'FIN001', grade: '3.75' },
  { code: 'CS102', grade: '3.75' }, { code: 'GE001', grade: '4.0' },
  { code: 'IS131', grade: '3.75' }, { code: 'IS211', grade: '4.0' },
  { code: 'IR001', grade: '3.25' }, { code: 'IS333', grade: '3.75' },
  { code: 'MAT610', grade: '3.5' }, { code: 'CS321', grade: '3.75' },
  { code: 'NTP001', grade: '3.25' },
  { code: 'GE002', grade: '4.0' },
  { code: 'PED001', grade: '3.75' },
  { code: 'PED002', grade: '3.0' },
  { code: 'PED003', grade: '3.25' },
  { code: 'NTP001', grade: '3.5' },
  { code: 'CS104', grade: '3.75' },
  { code: 'STAT001', grade: '4.0' },
  { code: 'STAT002', grade: '3.75' },
  { code: 'GE025', grade: '3.5' },


];
let currentlyTakingSubjects = [];
const MAX_UNITS = 21;
let hasCompletedPayment = false;

function calculateAdditionalFees() {
  const additionalFees = [
    988.00, 100.00, 1300.00, 600.00, 609.00, 489.00, 184.00, 1427.00, 1588.00,
    245.00, 814.00, 122.00, 692.00, 2073.00, 588.00, 2862.00, 1283.00, 27.00, 82.00, 76.00
  ];

  const totalAdditionalFees = additionalFees.reduce((total, fee) => total + fee, 0);
  const totalAmount = cart.reduce((total, item) => total + item.subject.price, 0);
  const grandTotal = totalAmount + totalAdditionalFees;

  // Update the DOM
  document.getElementById('total-additional-fees').textContent = totalAdditionalFees.toLocaleString();
  document.getElementById('grand-total').textContent = grandTotal.toLocaleString();
}


// DOM Elements
const tabs = document.querySelectorAll('nav a');
const tabContents = document.querySelectorAll('.tab-content');
const subjectSearch = document.getElementById('subject-search');
const departmentFilter = document.getElementById('filter-department');
const subjectTypeFilter = document.getElementById('filter-type');
const prerequisiteSearch = document.getElementById('prerequisite-search');
const instructorSearch = document.getElementById('instructor-search');
const specializationFilter = document.getElementById('filter-specialization');
const subjectsContainer = document.querySelector('.subjects-container');
const prerequisitesContainer = document.querySelector('.prerequisites-list');
const instructorsDashboard = document.querySelector('.instructors-dashboard');
const modal = document.getElementById('subject-modal');
const instructorModal = document.getElementById('instructor-modal');
const closeModal = document.querySelector('.close');
const closeInstructorModal = document.querySelector('.instructor-close');
const modalTitle = document.getElementById('modal-subject-title');
const modalDescription = document.getElementById('modal-subject-description');
const prerequisitesList = document.getElementById('prerequisites-list');
const instructorsList = document.getElementById('modal-instructors').querySelector('.instructors-list');
const enrollButton = document.getElementById('enroll-button');
const cartItems = document.querySelector('.cart-items');
const totalUnits = document.getElementById('total-units');
const headerTotalUnits = document.getElementById('header-total-units');
const unitsProgressBar = document.getElementById('units-progress-bar');
const totalAmount = document.getElementById('total-amount');
const checkoutButton = document.getElementById('checkout-button');
const dashboardCheckout = document.getElementById('dashboard-checkout');
const paymentModal = document.getElementById('payment-modal');
const paymentClose = document.querySelector('.payment-close');
const paymentSubjects = document.getElementById('payment-subjects');
const paymentUnits = document.getElementById('payment-units');
const paymentAmount = document.getElementById('payment-amount');
const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
const paymentDetails = document.querySelectorAll('.payment-details');
const completePayment = document.getElementById('complete-payment');
const successModal = document.getElementById('success-modal');
const referenceNumber = document.getElementById('reference-number');
const closeSuccess = document.getElementById('close-success');
const completedSubjectsContainer = document.getElementById('completed-subjects');
const enrollmentTableBody = document.getElementById('enrollment-table-body');
const noEnrollmentMessage = document.getElementById('no-enrollment-message');
const enrolledCount = document.getElementById('enrolled-count');
const completedCount = document.getElementById('completed-count');
const summaryUnits = document.getElementById('summary-units');
const summarySubjects = document.getElementById('summary-subjects');
const summaryAmount = document.getElementById('summary-amount');
const yearFilter = document.getElementById('filter-year');
const termFilter = document.getElementById('filter-term');
const gradeFilter = document.getElementById('filter-grade');

// Initialize the application
function init() {
  renderSubjects();
  renderPrerequisites();
  renderCompletedSubjects();
  renderInstructors();
  updateDashboard();
  addEventListeners();

  const userEmail = localStorage.getItem('userEmail');
  if (userEmail) {
    const userEmailElement = document.getElementById('user-email');
    userEmailElement.textContent = `Welcome back! ${userEmail}`;
  }
}

function renderSubjects(searchTerm = '', department = '', type = '') {
  subjectsContainer.innerHTML = '';

  if (hasCompletedPayment) {
    subjectsContainer.innerHTML = '<div class="empty-message">Enrollment period has ended. You have successfully enrolled in your selected subjects.</div>';
    return;
  }

  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = department === '' || subject.department.includes(department);
    const matchesType = type === '' || subject.type === type;
    const isAvailable = checkPrerequisites(subject.prerequisites);
    const isNotCompleted = !completedSubjects.some(completed => completed.code === subject.code);
    const isNotCurrentlyTaking = !currentlyTakingSubjects.includes(subject.code);

    return matchesSearch && matchesDepartment && matchesType && isAvailable && isNotCompleted && isNotCurrentlyTaking;
  });

  if (filteredSubjects.length === 0) {
    subjectsContainer.innerHTML = '<div class="empty-message">No available subjects found matching your criteria.</div>';
    return;
  }

  filteredSubjects.forEach(subject => {
    const subjectCard = document.createElement('div');
    subjectCard.className = 'subject-card';
    subjectCard.dataset.id = subject.id;

    const isInCart = cart.some(item => item.subject.id === subject.id);

    subjectCard.innerHTML = `
      <h3>${subject.name}</h3>
      <div class="subject-code">${subject.code}</div>
      <p>${subject.description.substring(0, 100)}...</p>
      <div class="subject-details">
        <span class="units">${subject.units} Units</span>
        <span class="department">${getDepartmentName(subject.department)}</span>
        <span class="type">${subject.type === 'major' ? 'Major' : 'Gen Ed'}</span>
      </div>
    `;

    if (!isInCart) {
      subjectCard.addEventListener('click', () => openSubjectModal(subject));
    } else {
      subjectCard.classList.add('in-cart');
      subjectCard.innerHTML += '<div class="in-cart-badge">Enrolling</div>';
    }

    subjectsContainer.appendChild(subjectCard);
  });
}

function renderInstructors(searchTerm = '', specialization = '') {
  instructorsDashboard.innerHTML = '';

  const allInstructors = [];
  const instructorIds = new Set();

  subjects.forEach(subject => {
    subject.instructors.forEach(instructor => {
      if (!instructorIds.has(instructor.id)) {
        instructorIds.add(instructor.id);
        allInstructors.push({
          ...instructor,
          subjects: [subject]
        });
      } else {
        const existingInstructor = allInstructors.find(i => i.id === instructor.id);
        if (existingInstructor && !existingInstructor.subjects.some(s => s.id === subject.id)) {
          existingInstructor.subjects.push(subject);
        }
      }
    });
  });

  const filteredInstructors = allInstructors.filter(instructor => {
    const matchesSearch = searchTerm === '' ||
      instructor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = specialization === '' ||
      instructor.specialization === specialization;

    return matchesSearch && matchesSpecialization;
  });

  if (filteredInstructors.length === 0) {
    instructorsDashboard.innerHTML = '<div class="empty-message">No instructors found matching your criteria.</div>';
    return;
  }

  filteredInstructors.forEach(instructor => {
    const instructorCard = document.createElement('div');
    instructorCard.className = 'instructor-dashboard-card';
    instructorCard.dataset.id = instructor.id;

    const stars = generateStarRating(instructor.rating);

    const courseCodes = instructor.courses || [];

    instructorCard.innerHTML = `
      <h3>${instructor.name}</h3>
      <div class="instructor-specialization">${instructor.specialization || 'General'}</div>
      <div class="instructor-rating">
        <div class="stars">${stars}</div>
        <span class="rating-value">${instructor.rating.toFixed(1)}</span>
      </div>
      <div>${instructor.schedule}</div>
      <div class="instructor-room">${instructor.room}</div>
      <div class="instructor-courses">
        <h4>Courses:</h4>
        <div class="course-tags">
          ${courseCodes.map(code => `<span class="course-tag">${code}</span>`).join('')}
        </div>
      </div>
    `;

    instructorCard.addEventListener('click', () => openInstructorModal(instructor));

    instructorsDashboard.appendChild(instructorCard);
  });
}

function openInstructorModal(instructor) {
  const modal = document.getElementById("instructor-modal");
  modal.innerHTML = `
      <div class="modal-content">
          <span class="instructor-close">&times;</span>
          <div class="instructor-profile">
              <div class="instructor-header">
                  <div class="instructor-avatar">
                      <div class="avatar-placeholder"></div>
                  </div>
                  <div class="instructor-info">
                      <h2 id="modal-instructor-name">${instructor.name}</h2>
                      <div class="instructor-rating">⭐ ${instructor.rating} / 5</div>
                      <p class="instructor-specialization">${instructor.specialization}</p>
                      <div class="instructor-courses">
                  <ul id="instructor-courses-list">
                      ${instructor.courses.map(course => `<li>${course}</li>`).join('')}
                  </ul>
              </div>
                  </div>
              </div>
              <div class="instructor-bio" style="text-align: justify;">
                  <h3>About</h3>
                  <p>${instructor.bio}</p>
              </div>
              <div class="instructor-extra-stats">
                  <h3>Additional Information</h3>
                  <div class="stats-grid">
                      <div class="stat-item"><strong>Completion Rate:</strong> ${instructor.completionRate}%</div>
                      <div class="stat-item"><strong>Years of Experience:</strong> ${instructor.experience}</div>
                      <div class="stat-item"><strong>Employment Status:</strong> ${instructor.status}</div>
                      <div class="stat-item"><strong>Pass/Fail Ratio:</strong> ${instructor.passFailRatio}</div>
                  </div>
              </div>
          </div>
      </div>
  `;

  modal.style.display = "block";

  document.querySelector(".instructor-close").addEventListener("click", () => {
    modal.style.display = "none";
  });
}

const curriculum = {
  '1st Year': {
    '1st Semester': ['CS101', 'CS102', 'IS131', 'IR001', 'MAT610', 'GE002', 'NTP001'],
    '2nd Semester': ['CS103', 'CS105', 'FIN001', 'PED001', 'GE001', 'GE025', 'NTP002'],
    '3rd Semester': ['IS211', 'GE004', 'CS104', 'PED002', 'STAT001', 'IS333', 'GE009']
  },
  '2nd Year': {
    '1st Semester': ['GE026', 'PED003', 'GE006', 'IS311', 'STAT002', 'IS343', 'CS214'],
    '2nd Semester': ['GE007', 'GE022', 'IS321', 'GE003', 'STAT003', 'PED004', 'EMC001'],
    '3rd Semester': ['GE005', 'CS106', 'IS216', 'FIL003', 'ISELEC2', 'CS321']
  },
  '3rd Year': {
    '1st Semester': ['STAT004', 'ISELEC4', 'MEG005', 'IS218', 'IS341', 'IS313'],
    '2nd Semester': ['IS121', 'IS331', 'GE008', 'EMC005', 'ISELEC1', 'IS231'],
    '3rd Semester': ['GE023', 'IS324', 'IS342', 'EMC004', 'IS305']
  },
  '4th Year': {
    '1st Semester': ['IS411', 'CS209', 'IS222', 'IR002', 'IS309'],
    '2nd Semester': ['IS421'],
    '3rd Semester': ['IS431']
  }
};


function renderCompletedSubjects(yearFilter = '', termFilter = '', gradeFilter = '') {
  completedSubjectsContainer.innerHTML = '';

  let hasAnySubjects = false;

  Object.entries(curriculum).forEach(([year, terms]) => {
    if (yearFilter && year !== yearFilter) return;

    let yearHasSubjects = false;
    const yearSection = document.createElement('div');
    yearSection.className = 'term-section';
    yearSection.innerHTML = `<h3>${year}</h3>`;

    Object.entries(terms).forEach(([term, subjectCodes]) => {
      if (termFilter && term !== termFilter) return;

      let termHasSubjects = false;
      const termSection = document.createElement('div');
      termSection.className = 'term-subsection';
      termSection.innerHTML = `<h4>${term}</h4>`;

      const termSubjectsContainer = document.createElement('div');
      termSubjectsContainer.className = 'term-subjects-container';

      subjectCodes.forEach(subjectCode => {
        const subject = subjects.find(s => s.code === subjectCode);
        if (!subject) return;

        const completedSubject = completedSubjects.find(completed => completed.code === subjectCode);
        const isCompleted = completedSubject !== undefined;
        const isCurrentlyTaking = currentlyTakingSubjects.includes(subjectCode);

        if (gradeFilter && isCompleted && completedSubject.grade !== gradeFilter) {
          return;
        }

        if (gradeFilter && !isCompleted) {
          return;
        }

        const subjectCard = document.createElement('div');
        subjectCard.className = 'subject-card';

        if (isCompleted) {
          subjectCard.classList.add('completed');
        } else if (isCurrentlyTaking) {
          subjectCard.classList.add('currently-taking');
        } else {
          subjectCard.classList.add('not-completed');
        }

        const grade = isCompleted ? completedSubject.grade : 'N/A';
        const gradeClass = isCompleted ? getGradeClass(grade) : '';

        subjectCard.innerHTML = `
          <h3>${subject.name}</h3>
          <div class="subject-code">${subject.code}</div>
          <div class="subject-details">
            <span class="units">${subject.units} Units</span>
            <span class="department">${getDepartmentName(subject.department)}</span>
            <span class="type">${subject.type === 'major' ? 'Major' : 'Gen Ed'}</span>
          </div>
          ${isCompleted ? `
            <div class="completed-badge ${gradeClass}">
              <span class="completed-text"></span> 
              <span class="grade">${grade}</span>
            </div>
          ` : ''}
          ${isCurrentlyTaking ? `
            <div class="currently-taking-badge">Currently Taking</div>
          ` : ''}
        `;

        termSubjectsContainer.appendChild(subjectCard);
        termHasSubjects = true;
        yearHasSubjects = true;
        hasAnySubjects = true;
      });

      if (termHasSubjects) {
        termSection.appendChild(termSubjectsContainer);
        yearSection.appendChild(termSection);
      }
    });

    if (yearHasSubjects) {
      completedSubjectsContainer.appendChild(yearSection);
    }
  });

  if (!hasAnySubjects) {
    completedSubjectsContainer.innerHTML = '<div class="empty-message">No subjects found matching your criteria.</div>';
  }
}

function renderPrerequisites(searchTerm = '') {
  prerequisitesContainer.innerHTML = '';

  const subjectMap = {};
  subjects.forEach(subject => {
    subjectMap[subject.code] = subject;
  });

  if (searchTerm) {
    const matchingSubjects = subjects.filter(subject =>
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matchingSubjects.length === 0) {
      prerequisitesContainer.innerHTML = '<div class="empty-message">No subjects found matching your search.</div>';
      return;
    }

    matchingSubjects.forEach(subject => {
      const treeContainer = document.createElement('div');
      treeContainer.className = 'prerequisite-tree';

      buildPrerequisiteTree(treeContainer, subject, subjectMap, 0);

      prerequisitesContainer.appendChild(treeContainer);
    });
  } else {
    const rootSubjects = subjects.filter(subject => subject.prerequisites.length === 0);

    if (rootSubjects.length === 0) {
      prerequisitesContainer.innerHTML = '<div class="empty-message">No subjects found.</div>';
      return;
    }

    rootSubjects.forEach(subject => {
      const treeContainer = document.createElement('div');
      treeContainer.className = 'prerequisite-tree';

      buildPrerequisiteTree(treeContainer, subject, subjectMap, 0);

      prerequisitesContainer.appendChild(treeContainer);
    });
  }
}

function buildPrerequisiteTree(container, subject, subjectMap, level) {
  const completedSubject = completedSubjects.find(completed => completed.code === subject.code);
  const isCompleted = completedSubject !== undefined;
  const isCurrentlyTaking = currentlyTakingSubjects.includes(subject.code);
  const isAvailable = !isCompleted && !isCurrentlyTaking && checkPrerequisites(subject.prerequisites);
  const hasChildren = findChildSubjects(subject.code, subjectMap).length > 0;

  const nodeContainer = document.createElement('div');
  nodeContainer.className = `tree-node level-${level} ${isCompleted ? 'completed' : isCurrentlyTaking ? 'currently-taking' : isAvailable ? 'available' : ''}`;
  const nodeContent = document.createElement('div');
  nodeContent.className = 'tree-node-content';
  const grade = isCompleted ? completedSubject.grade : '';
  const gradeClass = isCompleted ? getGradeClass(grade) : '';
  const departments = getDepartmentName(subject.department);
  const departmentBadges = departments.map(dept => `
    <span class="department-badge" style="background-color: ${dept.color}">
      ${dept.name}
    </span>
  `).join('');

  nodeContent.innerHTML = `
    <div class="node-header">
      <span class="node-code">${subject.code}</span>
      <span class="node-name">${subject.name}</span>
      ${isCompleted ? `<span class="node-status completed grade ${gradeClass}">${grade}</span>` :
      isCurrentlyTaking ? '<span class="node-status currently-taking">⟳ Currently Taking</span>' :
        isAvailable ? '<span class="node-status available">✓ Available</span>' : ''}
    </div>
    <div class="node-details">
      <span class="node-units">${subject.units} Units</span>
      <div class="department-badges">${departmentBadges}</div>
    </div>
  `;

  nodeContainer.appendChild(nodeContent);

  const childSubjects = findChildSubjects(subject.code, subjectMap);

  if (childSubjects.length > 0) {
    const childrenContainer = document.createElement('div');
    childrenContainer.className = 'tree-children';

    childSubjects.forEach(childSubject => {
      buildPrerequisiteTree(childrenContainer, childSubject, subjectMap, level + 1);
    });

    nodeContainer.appendChild(childrenContainer);
  }

  container.appendChild(nodeContainer);
}

function findChildSubjects(subjectCode, subjectMap) {
  return subjects.filter(subject =>
    subject.prerequisites.includes(subjectCode)
  );
}

function openSubjectModal(subject) {
  if (hasCompletedPayment) {
    alert('Enrollment period has ended. You cannot enroll in additional subjects.');
    modal.style.display = 'none';
    return;
  }

  currentSubject = subject;
  selectedInstructor = null;

  modalTitle.textContent = `${subject.code} - ${subject.name}`;
  modalDescription.textContent = subject.description;
  modalDescription.style.textAlign = 'justify';
  modalDescription.style.textJustify = 'inter-word';

  prerequisitesList.innerHTML = '';
  if (subject.prerequisites.length === 0) {
    prerequisitesList.innerHTML = '<li>No prerequisites required</li>';
  } else {
    subject.prerequisites.forEach(prereq => {
      const prereqSubject = subjects.find(s => s.code === prereq);
      if (prereqSubject) {
        const completedSubject = completedSubjects.find(completed => completed.code === prereq);
        const isMet = completedSubject !== undefined;
        const isCurrentlyTaking = currentlyTakingSubjects.includes(prereq);

        const li = document.createElement('li');
        if (isMet) {
          li.className = 'met';
        } else if (isCurrentlyTaking) {
          li.className = 'currently-taking';
        } else {
          li.className = 'not-met';
        }

        li.innerHTML = `
          ${prereqSubject.code} - ${prereqSubject.name}
          ${isMet ? `<span class="status-met">${completedSubject.grade}</span>` :
            isCurrentlyTaking ? '<span class="status-currently-taking">⟳</span>' :
              '<span class="status-not-met">✗</span>'}
        `;
        prerequisitesList.appendChild(li);
      }
    });
  }

  instructorsList.innerHTML = '';
  subject.instructors.forEach(instructor => {
    const instructorCard = document.createElement('div');
    instructorCard.className = 'instructor-card';
    instructorCard.dataset.id = instructor.id;

    const remainingSlots = instructor.slots - instructor.enrolled;
    const slotStatus = remainingSlots <= 5 ? 'low-slots' : (remainingSlots <= 10 ? 'medium-slots' : 'high-slots');

    const stars = generateStarRating(instructor.rating);

    const scheduleOptions = instructor.schedule.split(',').map(schedule => {
      return `<option value="${schedule.trim()}">${schedule.trim()}</option>`;
    }).join('');

    instructorCard.innerHTML = `
       <h4>${instructor.name}</h4>
       <div class="instructor-details">
                <select class="schedule-select">
           ${scheduleOptions}
         </select>

         <div class="instructor-room">${instructor.room}</div>
         <div class="rating">
           <span class="stars">${stars}</span>
           <span class="rating-value">${instructor.rating.toFixed(1)}</span>
         </div>
         <div class="slots ${slotStatus}">
           <span class="slots-icon">${remainingSlots > 0 ? '👥' : '🚫'}</span>
           <span class="slots-text">${remainingSlots > 0 ? `${remainingSlots} slots remaining` : 'Class Full'}</span>
         </div>

       </div>
     `;

    if (remainingSlots > 0) {
      instructorCard.addEventListener('click', () => {
        document.querySelectorAll('.instructor-card').forEach(card => card.classList.remove('selected'));
        instructorCard.classList.add('selected');
        selectedInstructor = instructor;
        updateEnrollButton();
      });
    } else {
      instructorCard.classList.add('full');
    }

    instructorsList.appendChild(instructorCard);
  });

  enrollButton.disabled = true;
  enrollButton.textContent = 'Select an Instructor';

  modal.style.display = 'block';
  updateEnrollButton();
}

function updateEnrollButton() {
  if (hasCompletedPayment) {
    enrollButton.disabled = true;
    enrollButton.textContent = 'Enrollment Period Ended';
    return;
  }

  if (!selectedInstructor) {
    enrollButton.disabled = true;
    enrollButton.textContent = 'Select an Instructor';
  } else {
    const remainingSlots = selectedInstructor.slots - selectedInstructor.enrolled;
    if (remainingSlots <= 0) {
      enrollButton.disabled = true;
      enrollButton.textContent = 'Class is Full';
    } else {
      const currentUnits = cart.reduce((total, item) => total + item.subject.units, 0);
      const newTotalUnits = currentUnits + currentSubject.units;

      if (newTotalUnits > MAX_UNITS) {
        enrollButton.disabled = true;
        enrollButton.textContent = `Exceeds Maximum Units (${MAX_UNITS})`;
      } else {
        enrollButton.disabled = false;
        enrollButton.textContent = 'Enroll in this Subject';
      }
    }
  }
}

function checkPrerequisites(prerequisites) {
  if (prerequisites.length === 0) return true;

  return prerequisites.every(prereq =>
    completedSubjects.some(completed => completed.code === prereq) ||
    currentlyTakingSubjects.includes(prereq)
  );
}

function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  let stars = '';
  for (let i = 0; i < fullStars; i++) {
    stars += '★';
  }
  if (halfStar) {
    stars += '½';
  }
  for (let i = 0; i < emptyStars; i++) {
    stars += '☆';
  }
  return stars;
}

function getGradeClass(grade) {
  const numericGrade = typeof grade === 'string' ? parseFloat(grade) : grade;

  if (numericGrade >= 4.0) return 'grade-a';
  if (numericGrade >= 3.75) return 'grade-a-minus';
  if (numericGrade >= 3.5) return 'grade-b-plus';
  if (numericGrade >= 3.25) return 'grade-b';
  if (numericGrade >= 3.0) return 'grade-b-minus';
  if (numericGrade >= 2.75) return 'grade-c-plus';
  if (numericGrade >= 2.5) return 'grade-c';
  if (numericGrade >= 2.25) return 'grade-c-minus';
  if (numericGrade >= 2.0) return 'grade-d-plus';
  if (numericGrade >= 1.75) return 'grade-d';
  if (numericGrade >= 1.5) return 'grade-d-minus';
  if (numericGrade >= 1.25) return 'grade-f-plus';
  return 'grade-f';
}

function addToCart() {
  if (hasCompletedPayment) {
    alert('Enrollment period has ended. You cannot enroll in additional subjects.');
    modal.style.display = 'none';
    return;
  }

  if (!selectedInstructor) return;

  const selectedSchedule = document.querySelector('.instructor-card.selected .schedule-select').value;

  if (cart.some(item => item.subject.id === currentSubject.id)) {
    alert('This subject has already been added to your selections.');
    modal.style.display = 'none';
    return;
  }

  const remainingSlots = selectedInstructor.slots - selectedInstructor.enrolled;
  if (remainingSlots <= 0) {
    alert('This class is already full.');
    return;
  }

  const currentUnits = cart.reduce((total, item) => total + item.subject.units, 0);
  const newTotalUnits = currentUnits + currentSubject.units;

  if (newTotalUnits > MAX_UNITS) {
    alert(`Adding this subject would exceed the maximum allowed units (${MAX_UNITS}).`);
    return;
  }

  cart.push({
    subject: currentSubject,
    instructor: selectedInstructor,
    schedule: selectedSchedule
  });

  updateCart();

  modal.style.display = 'none';

  renderSubjects(subjectSearch.value, departmentFilter.value, subjectTypeFilter.value);

  updateDashboard();
}

function updateCart() {
  cartItems.innerHTML = '';

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-cart">Your cart is empty. Add subjects to enroll.</div>';
    checkoutButton.disabled = true;
    dashboardCheckout.disabled = true;
  } else {
    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';

      cartItem.innerHTML = `
      <div class="cart-item-details">
        <h3>${item.subject.code} - ${item.subject.name}</h3>
        <div class="subject-code">
          ${getDepartmentName(item.subject.department).map(dept => dept.name).join(', ')} 
          (${item.subject.type === 'major' ? 'Major' : 'Gen Ed'})
        </div>
        <div class="instructor">
          Instructor: ${item.instructor.name} (${item.schedule}) 
          ${!hasCompletedPayment ? `<button class="change-instructor" data-subject-id="${item.subject.id}">Change</button>` : ''}
        </div>
        <div class="room">${item.instructor.room}</div>
      </div>
      <div class="cart-item-actions">
        <span class="cart-item-units">${item.subject.units} Units</span>
        ${!hasCompletedPayment ? `<button class="remove-button" data-index="${index}">✕</button>` : ''}
      </div>
    `;

      cartItems.appendChild(cartItem);
    });

    if (!hasCompletedPayment) {
      document.querySelectorAll('.remove-button').forEach(button => {
        button.addEventListener('click', (e) => {
          const index = parseInt(e.target.dataset.index);
          removeFromCart(index);
        });
      });

      document.querySelectorAll('.change-instructor').forEach(button => {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          const subjectId = parseInt(e.target.dataset.subjectId);
          const subject = subjects.find(s => s.id === subjectId);
          if (subject) {
            openSubjectModal(subject);

            const index = cart.findIndex(item => item.subject.id === subjectId);
            if (index !== -1) {
              cart.splice(index, 1);
              updateCart();
            }
          }
        });
      });
    }

    checkoutButton.disabled = hasCompletedPayment;
    dashboardCheckout.disabled = hasCompletedPayment;
  }

  const units = cart.reduce((total, item) => total + item.subject.units, 0);
  const amount = cart.reduce((total, item) => total + item.subject.price, 0);

  totalUnits.textContent = units;
  headerTotalUnits.textContent = units;
  totalAmount.textContent = amount.toLocaleString();

  const progressPercentage = Math.min((units / MAX_UNITS) * 100, 100);
  unitsProgressBar.style.width = `${progressPercentage}%`;

  if (units > MAX_UNITS * 0.8) {
    unitsProgressBar.className = 'progress-bar danger';
  } else if (units > MAX_UNITS * 0.6) {
    unitsProgressBar.className = 'progress-bar warning';
  } else {
    unitsProgressBar.className = 'progress-bar';
  }
}

function updateDashboard() {
  // Update stats
  enrolledCount.textContent = cart.length;
  completedCount.textContent = completedSubjects.length;

  enrollmentTableBody.innerHTML = '';

  if (cart.length === 0) {
    noEnrollmentMessage.style.display = 'block';
  } else {
    noEnrollmentMessage.style.display = 'none';

    cart.forEach(item => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>
          <div class="font-medium">${item.subject.code}</div>
          <div class="text-gray-500">${item.subject.name}</div>
        </td>
        <td>${item.instructor.name}</td>
        <td>${item.schedule}</td> <!-- Display selected schedule -->
        <td>${item.instructor.room}
        <td>${item.subject.units}</td>
      `;

      enrollmentTableBody.appendChild(row);
    });
  }

  const units = cart.reduce((total, item) => total + item.subject.units, 0);
  const amount = cart.reduce((total, item) => total + item.subject.price, 0);

  const additionalFees = [
    988.00, 100.00, 1300.00, 600.00, 609.00, 489.00, 184.00, 1427.00, 1588.00,
    245.00, 814.00, 122.00, 692.00, 2073.00, 588.00, 2862.00, 1283.00, 27.00, 82.00, 76.00
  ];

  const totalAdditionalFees = additionalFees.reduce((total, fee) => total + fee, 0);
  const grandTotal = amount + totalAdditionalFees;

  summaryUnits.textContent = units;
  summarySubjects.textContent = cart.length;

  if (hasCompletedPayment) {
    summaryAmount.textContent = `₱${grandTotal.toLocaleString()} (Paid)`;
  } else {
    summaryAmount.textContent = `₱0.00`;
  }
}

function removeFromCart(index) {
  if (hasCompletedPayment) {
    alert('Enrollment period has ended. You cannot modify your enrolled subjects.');
    return;
  }

  cart.splice(index, 1);
  updateCart();
  renderSubjects(subjectSearch.value, departmentFilter.value, subjectTypeFilter.value);
  updateDashboard();
}

function openPaymentModal() {
  if (hasCompletedPayment) {
    alert('You have already completed payment for your enrolled subjects.');
    return;
  }

  paymentSubjects.innerHTML = '';

  cart.forEach(item => {
    const paymentSubject = document.createElement('div');
    paymentSubject.className = 'payment-subject';

    paymentSubject.innerHTML = `
      <div class="payment-subject-name">${item.subject.code} - ${item.subject.name} (${item.subject.units} Units)</div>
      <div class="payment-subject-instructor">Instructor: ${item.instructor.name} | Schedule: ${item.schedule} | Room: ${item.instructor.room}</div>
      <div class="payment-subject-price">₱${item.subject.price.toLocaleString()}</div>
    `;

    paymentSubjects.appendChild(paymentSubject);
  });

  const units = cart.reduce((total, item) => total + item.subject.units, 0);
  const amount = cart.reduce((total, item) => total + item.subject.price, 0);

  paymentUnits.textContent = units;
  paymentAmount.textContent = amount.toLocaleString();

  calculateAdditionalFees();

  paymentModal.style.display = 'block';
}

function completePaymentProcess() {
  const refNumber = 'CIIT-' + Date.now().toString().substring(5);
  referenceNumber.textContent = refNumber;

  cart.forEach(item => {
    if (!completedSubjects.some(completed => completed.code === item.subject.code) &&
      !currentlyTakingSubjects.includes(item.subject.code)) {
      currentlyTakingSubjects.push(item.subject.code);
    }
  });

  hasCompletedPayment = true;

  paymentModal.style.display = 'none';
  successModal.style.display = 'block';

  updateCart();
  renderSubjects(subjectSearch.value, departmentFilter.value, subjectTypeFilter.value);
  renderCompletedSubjects();
  renderPrerequisites(prerequisiteSearch.value);
  updateDashboard();
}

const departmentColors = {
  'CS': '#3b82f6',
  'IS': '#10b981',
  'ANI': '#f43f5e',
  'VFP': '#8b5cf6',
  'EN': '#f97316',
  'GD': '#ec4899',
  'EMC': '#06b6d4',
  'ARC': '#64748b',
  'ALL': '#94a3b8',
};

function getDepartmentName(department) {
  const departments = {
    'ANI': 'BMMA-Animation',
    'VFP': 'BMMA-Video and Film Production',
    'GD': 'BMMA-Graphic Design',
    'CS': 'BSCS',
    'IS': 'BSIS',
    'EN': 'BSE',
    'EMC': 'BSEMC-Game Dev.',
    'ARC': 'BSA',
    'ALL': 'All Courses',
  };

  if (Array.isArray(department)) {
    return department.map(code => ({
      name: departments[code] || code,
      color: departmentColors[code] || '#6b7280'
    }));
  }

  return [{
    name: departments[department] || department,
    color: departmentColors[department] || '#6b7280'
  }];
}

function switchTab(tabId) {
  tabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.tab === tabId) {
      tab.classList.add('active');
    }
  });

  tabContents.forEach(content => {
    content.classList.remove('active');
    if (content.id === tabId) {
      content.classList.add('active');
    }
  });

  const cartSection = document.getElementById('cart');
  if (tabId === 'enrollment') {
    cartSection.style.display = 'block';
  } else {
    cartSection.style.display = 'none';
  }
}

function addEventListeners() {
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab(tab.dataset.tab);
    });
  });

  subjectSearch.addEventListener('input', () => {
    renderSubjects(subjectSearch.value, departmentFilter.value, subjectTypeFilter.value);
  });

  departmentFilter.addEventListener('change', () => {
    renderSubjects(subjectSearch.value, departmentFilter.value, subjectTypeFilter.value);
  });

  subjectTypeFilter.addEventListener('change', () => {
    renderSubjects(subjectSearch.value, departmentFilter.value, subjectTypeFilter.value);
  });

  prerequisiteSearch.addEventListener('input', () => {
    renderPrerequisites(prerequisiteSearch.value);
  });

  instructorSearch.addEventListener('input', () => {
    renderInstructors(instructorSearch.value, specializationFilter.value);
  });

  specializationFilter.addEventListener('change', () => {
    renderInstructors(instructorSearch.value, specializationFilter.value);
  });

  yearFilter.addEventListener('change', () => renderCompletedSubjects(yearFilter.value, termFilter.value, gradeFilter.value));
  termFilter.addEventListener('change', () => renderCompletedSubjects(yearFilter.value, termFilter.value, gradeFilter.value));
  gradeFilter.addEventListener('change', () => renderCompletedSubjects(yearFilter.value, termFilter.value, gradeFilter.value));

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  closeInstructorModal.addEventListener('click', () => {
    instructorModal.style.display = 'none';
  });

  paymentClose.addEventListener('click', () => {
    paymentModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
    if (e.target === instructorModal) {
      instructorModal.style.display = 'none';
    }
    if (e.target === paymentModal) {
      paymentModal.style.display = 'none';
    }
    if (e.target === successModal) {
      successModal.style.display = 'none';
    }
  });

  enrollButton.addEventListener('click', addToCart);

  checkoutButton.addEventListener('click', openPaymentModal);
  dashboardCheckout.addEventListener('click', openPaymentModal);

  paymentMethods.forEach(method => {
    method.addEventListener('change', () => {
      const selectedMethod = method.value;

      paymentDetails.forEach(detail => {
        detail.classList.remove('active');
        if (detail.id === `${selectedMethod}-payment`) {
          detail.classList.add('active');
        }
      });
    });
  });

  document.getElementById('logout-button').addEventListener('click', (e) => {
    e.preventDefault();

    localStorage.removeItem('userEmail');
    sessionStorage.removeItem('user');

    window.location.href = 'login.html';
  });

  completePayment.addEventListener('click', completePaymentProcess);

  closeSuccess.addEventListener('click', () => {
    successModal.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', init);
