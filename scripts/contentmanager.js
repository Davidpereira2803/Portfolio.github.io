document.addEventListener('DOMContentLoaded', () => {
    // Fetch data when the DOM content is loaded
    fetch('projects-content/privatecontent.json')
      .then(response => response.json())
      .then(data => {
        // Use data to update your website content
        updateProjects(data.projects);
      })
      .catch(error => console.error('Error fetching data:', error));
  });

document.addEventListener('DOMContentLoaded', () => {
    // Fetch data when the DOM content is loaded
    fetch('projects-content/unicontent.json')
      .then(response => response.json())
      .then(data => {
        // Use data to update your website content
        updateUniProjects(data.projects);
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
        <a id="links" href="${project.url}" target="_blank">Visit Project</a>
        <img id="mid-logo" src="${project.image}" alt="${project.name} Image">
      `;
  
      projectsContainer.appendChild(projectElement);
    });
  }


function updateUniProjects(projects) {
    const projectsContainer = document.getElementById('uni-projects-container');
  
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.innerHTML = `<p>${project.description}</p>`;
  
      projectsContainer.appendChild(projectElement);
    });
  }

  