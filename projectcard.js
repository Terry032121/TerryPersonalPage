class ProjectCard extends HTMLElement {
    constructor() {
      super();
      // Attach a shadow DOM
      this.attachShadow({ mode: 'open' });

      // Create a container
      const wrapper = document.createElement('div');
      wrapper.classList.add('card-wrapper');

      // Create style
      const style = document.createElement('style');
      style.textContent = `
        :host {
          display: block;
        }
        .card-wrapper {
          background-color: var(--card-bg);
          color: var(--card-color);
          border: 1px solid var(--card-border);
          border-radius: 8px;
          padding: 16px;
          max-width: 300px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        h2 {
          color: var(--card-heading-color);
          margin-top: 0;
          font-size: 1.25rem;
        }
        picture img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 5px;
        }
        p {
          margin: 0.75rem 0;
          line-height: 1.4;
        }
        a {
          color: var(--card-heading-color);
          text-decoration: none;
          font-weight: bold;
        }
        a:hover {
          text-decoration: underline;
        }
      `;

      // Internal HTML structure
      wrapper.innerHTML = `
        <h2 id="cardTitle"></h2>
        <picture>
          <img id="cardImage" alt="project image">
        </picture>
        <p id="cardDescription"></p>
        <a id="cardLink" href="#">Learn More</a>
      `;

      this.shadowRoot.append(style, wrapper);
    }

    set data(data) {
      this.shadowRoot.querySelector('#cardTitle').textContent = data.title;
      this.shadowRoot.querySelector('#cardImage').src = data.imageSrc;
      this.shadowRoot.querySelector('#cardImage').alt = data.altText;
      this.shadowRoot.querySelector('#cardDescription').textContent = data.description;
      this.shadowRoot.querySelector('#cardLink').href = data.link;
    }
  }

  customElements.define('project-card', ProjectCard);

  const sampleProjects = [
    {
      title: "Snowboard",
      imageSrc: "src/image/Snowboarding.JPG",
      altText: "Terry Snowboarding",
      description: "All about my adventures in Mammoth and beyond.",
      link: "about/snowboarding.html"  
    },
    {
      title: "Boxing",
      imageSrc: "src/image/Boxing.jpg",
      altText: "Terry Boxing",
      description: "Exploring the art of boxing and BigBang Zhang's style.",
      link: "about/boxing.html"       
    },
    {
        title: "Fishing",
        imageSrc: "src/image/Fishing.jpg",
        altText: "Terry Fishing",
        description: "Fishing with my dad and friends.",
        link: "about/fishing.html"
    }
  ];

  localStorage.setItem('myProjects', JSON.stringify(sampleProjects));


  const loadLocalBtn = document.getElementById('loadLocal');
  const projectCardsContainer = document.getElementById('projectCards');

  loadLocalBtn.addEventListener('click', () => {

    projectCardsContainer.innerHTML = '';

    // Retrieve data from localStorage
    const localData = JSON.parse(localStorage.getItem('myProjects'));
    if (!localData) {
      alert('No local data found!');
      return;
    }

    // Create cards from local data
    localData.forEach(project => {
      const card = document.createElement('project-card');
      card.data = project;
      projectCardsContainer.appendChild(card);
    });
  });


  const loadRemoteBtn = document.getElementById('loadRemote');
  loadRemoteBtn.addEventListener('click', () => {
    alert("Load Remote not implemented yet.");
  });