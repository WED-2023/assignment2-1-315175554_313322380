<template>
  <div class="about-page">
    <h1>About Our Team</h1>
    
    <section class="team-intro">
      <p>Meet Bar Pesso and Mor Barzilay, two passionate students who are making waves in the world of development. Together, they bring a unique combination of skills, creativity, and drive to every project they touch.</p>
    </section>
    
    <section class="team-members">
      <div class="member-card">
        <h2>Bar Pesso</h2>
        <p>Bar is a dedicated developer with a keen eye for detail. Whether it's designing seamless user experiences or solving complex technical challenges, Bar's ability to think outside the box is what sets him apart in every project.</p>
      </div>
      
      <div class="member-card">
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
      <div class="buttons">
        <b-button href="https://wed-2023.github.io/assignment1-313322380/" target="_blank" variant="info" class="project-btn">Mor's Project</b-button>
        <b-button href="https://wed-2023.github.io/assignment1-315175554/" target="_blank" variant="success" class="project-btn">Bar's Project</b-button>
      </div>
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
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
}

h1 {
  font-size: 2.5em;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  color: #2980b9;
  margin-bottom: 15px;
}

.team-intro p {
  font-size: 1.2em;
  color: #7f8c8d;
  text-align: center;
  margin-bottom: 40px;
}

.team-members {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.member-card {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 48%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.member-card p {
  color: #7f8c8d;
  font-size: 1.1em;
}

.marketing-brief p {
  font-size: 1.2em;
  color: #34495e;
  margin-bottom: 40px;
}

.project-links h2 {
  text-align: center;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.project-btn {
  font-size: 1.1em;
  padding: 10px 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.project-btn:hover {
  background-color: #3498db;
  color: #ffffff;
}

@media (max-width: 768px) {
  .team-members {
    flex-direction: column;
  }

  .member-card {
    width: 100%;
    margin-bottom: 20px;
  }

  .buttons {
    flex-direction: column;
    gap: 15px;
  }

  .project-btn {
    width: 100%;
  }
}
</style>
