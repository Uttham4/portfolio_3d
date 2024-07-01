import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Embeded Engineer",
        company_name: "Plugzmart",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "February 2024 - April 2024",
        points: [
            "Developing graphics for electric vehicle chargers using LVGL library.",
            "Used STM boards like stm32f429igt6, stm32f407vgt6 and TFT display to design and display the graphics.",
            "Involved in documentation of displays in our EV charger.",
        ],
    },
    {
        title: "Python Developer",
        company_name: "Mallikarjuna infosys",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "August 2023 - October 2023",
        points: [
            "Learned from basics of C to datastructures and pointers in C.",
            "Leared from basic to advance level of python and used it to create various mini projects in machine learning.",
            "Also learned the basics of django and created student registration sytsem as a team.",
        ],
    },
    {
        title: "Machine Learning Developer",
        company_name: "Pantech",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "August 2023 - October2023",
        points: [
            "Learned a lot about machine learning using python.",
            "Implemented that knowledge to create some projects like breast cancer detection, plant disease detection, face recognition, student attendance system using face recognition, etc.",
            "Learned many algorithms in machine learning and also had a hands-on experience.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Uttham4',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/uttham-sing-k-a8b06024b/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Live Weather Application',
        description: 'Developed a web application that takes input from DHT11 sensor and using xampp server updates it to MySql database and used Spring boot as backend.',
        link: 'https://github.com/Uttham4/LiveSensorUpdate_To_SpringBoot_ESP32_XAMPP',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Ecommerce React Application',
        description: 'Created a full-stack react ecommerce web application and used expressjs for backend and mongodb for database.',
        link: 'https://github.com/Uttham4/Ecommerce_App_React',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Animation for EV Charger',
        description: 'Used Stm32f429igt6 board, TFT display and LVGL graphics library to create some basic level animations for EV charger. Also updated their default 7.8 and 9.1 versions of lvgl for unlocking 24 byte graphics.',
        link: 'https://github.com/Uttham4/Stm32f429igt6_LTDC_LVGL_V7.4',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Candy Crush Clone',
        description: 'Built a complete clone of candy crush but as a web application. I used html, css and javascript alone to create this candy crush clone.',
        link: 'https://github.com/Uttham4/Candy_Crush_Using_JavaScript',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Find my train appllication',
        description: 'Designed the frontend part and created multiple interactions for find my train mobile application using Figma.',
        link: 'https://www.figma.com/design/j4mA3A4aNIQEp7Ic8v6DDR/Train-booking-app?node-id=0-1&t=63zdyz3tNeKOSveR-1',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Autonomous Face Recognition Attendance System',
        description: 'Used python programming to create a fully functioning autonomous face recognition attendance system in which many libraries including opencv, yagmail, csv, os are used. You can download the attendance as csv also it mails their attendance details automaticaly to the respective mails.',
        link: 'https://github.com/Uttham4/Student-Attendance-Management-System-Using-FaceRecognization-Project-In-Python',
    }
];