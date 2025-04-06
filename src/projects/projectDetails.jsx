import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const projects = [
  {
    title: "Project One: 📝 Portfolio Website",
    description: [
      "Created a responsive portfolio that will showcase my projects, artwork ",
      "Used ReactJS for dynamic rendering and enhanced user experience across devices.",
      "Placed in GitHub for easy public accessibility and updates."
      
    ],
    image: "/images/project1.gif",
  },
  {
    title: "Project Two: 🔍 Web Scraping using Python",
    description: [
      "Built a web scraping tool to extract job listings from websites based on user-input skills.",
      "Automated job data collection using libraries like BeautifulSoup and requests.",
      "Designed the logic to filter and present relevant job roles dynamically for personalized results."
    ],
    image: process.env.PUBLIC_URL + "/webscraping_projects.jpg",
  },
  {
    title: "Project Three: 🪐 Exoplanet Detection using Machine Learning",
    description: [
      "Developed a classification system using data from the Kepler satellite to detect exoplanets.",
      "Implemented Logistic Regression and Naïve Bayes models for prediction and evaluation.",
      "Achieved strong accuracy and precision metrics, showcasing effective model performance."
    ],
    image: process.env.PUBLIC_URL + "/exoplanet_projects.jpg",
  },
];

const containerStyles = {
  background: "linear-gradient(to bottom, #f5f5dc, #fffaf0, #ffffff)",
  padding: "80px 60px",
  fontFamily: "'Playfair Display', serif",
};

const sectionStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "80px 0",
  padding: "60px",
  borderRadius: "28px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  backgroundColor: "rgba(255, 255, 255, 0.88)",
};

const textStyle = {
  flex: "1",
  padding: "40px",
  fontSize: "22px",
  color: "#333",
};

const imageStyle = {
  flex: "1",
  maxWidth: "600px",
  height: "auto",
  borderRadius: "16px",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
};

const titleStyle = {
  fontSize: "34px",
  color: "#3e2c1a",
  textAlign: "center",
  marginBottom: "30px",
};

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={containerStyles}>
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={index}>
            <h2 style={titleStyle}>{project.title}</h2>
            <div
              data-aos={isEven ? "fade-right" : "fade-left"}
              style={{
                ...sectionStyle,
                flexDirection: isEven ? "row" : "row-reverse",
              }}
            >
              <img src={project.image} alt={project.title} style={imageStyle} />
              <div style={textStyle}>
                <ul>
                  {project.description.map((point, i) => (
                    <li key={i} style={{ marginBottom: "12px" }}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
