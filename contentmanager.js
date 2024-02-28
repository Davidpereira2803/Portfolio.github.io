document.addEventListener('DOMContentLoaded', () => {
  fetch('projects-content/privatecontent.json')
    .then(response => response.json())
    .then(data => {
      updateProjects(data.projects);
    })
    .catch(error => console.error('Error fetching data:', error));
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('projects-content/unicontent.json')
    .then(response => response.json())
    .then(data => {
      updateUniProjects(data.projects);
    })
    .catch(error => console.error('Error fetching data:', error));
});

function updateProjects(projects) {
  const projectsContainer = document.getElementById('projects-container');

  if (projects.length < 2) { // error I am looking projects length but should be checking the project length instead -> how many elements in one project
    projects.forEach(project => {


      if (project.length == 5) {
        const projectElement = document.createElement('div');
        projectElement.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p>Technologies: ${project.technologies.join(', ')}</p>
        <a id="links" href="${project.url}" target="_blank">Visit Project</a>
        <section id="content">
        <img id="mid-logo" src="${project.image}" alt="${project.name} Image">
        </section>
      `;
      }
      projectsContainer.appendChild(projectElement);
    });
  } else {
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
}

function updateUniProjects(projects) {
  const projectsContainer = document.getElementById('uni-projects-container');

  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.innerHTML = `<p>${project.content}</p>`;

    projectsContainer.appendChild(projectElement);
  });
}

