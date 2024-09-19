<!-- src/views/About.vue -->
<template>
    <div class="about-page">
      <h1>About Our Team</h1>
      
      <section class="team-intro">
        <p>Meet Bar Pesso and Mor Barzilay, two passionate students who are making waves in the world of development. Together, they bring a unique combination of skills, creativity, and drive to every project they touch.</p>
      </section>
      
      <section class="team-members">
        <div class="member">
          <h2>Bar Pesso</h2>
          <p>Bar is a dedicated developer with a keen eye for detail. Whether it's designing seamless user experiences or solving complex technical challenges, Bar's ability to think outside the box is what sets him apart in every project.</p>
        </div>
        
        <div class="member">
          <h2>Mor Barzilay</h2>
          <p>Mor is an innovative developer with a passion for front-end development. He specializes in creating beautiful, responsive designs that bring ideas to life. Mor’s focus on user-centric development ensures that every project is intuitive and enjoyable to use.</p>
        </div>
      </section>
      
      <section class="marketing-brief">
        <h2>Development Team Marketing Brief</h2>
        <p>The development team is a dynamic duo known for their ability to turn complex ideas into functional, user-friendly solutions. With a commitment to high-quality code and a strong foundation in modern web technologies, Bar and Mor are consistently delivering projects that not only meet but exceed client expectations.</p>
      </section>
      
      <section class="project-links">
        <h2>Previous Projects</h2>
        <ul>
            <b-button href="https://wed-2023.github.io/assignment1-313322380/" target="_blank">Mor's Project</b-button>
            <b-button href="https://wed-2023.github.io/assignment1-315175554/" target="_blank">Bar's Project</b-button>

        </ul>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutPage"
  };
  </script>
  
  <style scoped>
  .about-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h1, h2 {
    color: #2c3e50;
  }
  
  .team-intro p {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  
  .team-members {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  
  .member {
    width: 45%;
  }
  
  .member h2 {
    color: #3498db;
  }
  
  .marketing-brief p {
    font-size: 1.1em;
  }
  
  .project-links ul {
    list-style-type: none;
    padding: 0;
  }
  
  .project-links li {
    margin: 10px 0;
  }
  
  .project-links a {
    text-decoration: none;
    color: #e74c3c;
  }
  
  .project-links a:hover {
    text-decoration: underline;
  }
  </style>
  