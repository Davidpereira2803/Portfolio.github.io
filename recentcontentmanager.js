document.addEventListener('DOMContentLoaded', () => {
  fetch('projects-content/recentcontent.json')
    .then(response => response.json())
    .then(data => {
      updateProjects(data.projects);
    })
    .catch(error => console.error('Error fetching data:', error));
});

function updateProjects(projects) {
  const projectsContainer = document.getElementById('projects-container');

    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.innerHTML = `
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <p>Technologies: ${project.technologies.join(', ')}</p>
          <a href="${project.url}" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-github" style="font-size:48px;color:black"></i>
          </a>
          <section id="content">
          <img id="mid-logo" src="${project.image}" alt="${project.name} Image">
          <img id="mid-logo" src="${project.image2}" alt="${project.name} Image">
          </section>
        `;
      projectsContainer.appendChild(projectElement);
    });
  
}


