


//

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation-project-card-link-slide"); // Add animation class
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}, { threshold: 0.2, rootMargin: "50px 0px" }); // Slight margin for smoother triggering


const projects = [
  {
    imgSrc: "assets/images/project-synapse.png",
    imgTitle: "project synapse",
    imgAlt: "project synapse",
    title: "Synapse - Mobile automation platform",
    description: "I work as a Fullstack Developer on the Synapse project, responsible for both backend and frontend to deliver a real-time bus ticketing solution. On the backend, I design and implement a GraphQL API using NestJS, integrate Prisma ORM with PostgreSQL, and organize functionality into clear modules with resolvers and services. On the frontend, I build the user interface with Next.js App Router, TailwindCSS, and ShadCN/UI, integrate Apollo Client for data fetching, and optimize SSR/ISR as well as dark mode support. The entire development workflow is automated through GitHub Actions, ensuring seamless linting, building, testing, and deployment.",
    skills: ["span-svg-next", "span-svg-shadcn", "span-svg-tailwind", "span-svg-ts", "span-svg-redux", "span-svg-nestjs", "span-svg-postgresql"],
    codeLink: "https://github.com/BaNgoQuang",
    liveLink: "https://synapseauto.tech"
  },
  {
    imgSrc: "assets/images/project-tatuboo.png",
    imgTitle: "project-relu-consultancy-assignment",
    imgAlt: "project-relu-consultancy-assignment",
    title: "Relu Consultancy - Assignment",
    description: `I work as a Fullstack Developer on the Tatuboo project. This is a platform that connects people who need to learn online with experts who need to teach as tutors.`,
    skills: ["span-svg-react", "span-svg-js", "span-svg-ant-design"],
    codeLink: "https://github.com/BaNgoQuang/tatuboo",
    liveLink: "https://github.com/BaNgoQuang/tatuboo"
  },
];

// Get the parent element where project cards will be appended
const parentElement = document.getElementById("project-section");

projects.forEach(project => {
  // Create main project card container
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  // Image container
  const imgBox = document.createElement("div");
  imgBox.classList.add("project-card-img-box");

  const img = document.createElement("img");
  img.src = project.imgSrc;
  img.title = project.imgTitle;
  img.alt = project.imgAlt;
  img.classList.add("project-card-img");
  imgBox.appendChild(img);

  // Body container
  const body = document.createElement("div");
  body.classList.add("project-card-body");

  const title = document.createElement("h3");
  title.classList.add("text-primary", 'project-name');
  title.textContent = project.title;
  title.title = project.title;

  const description = document.createElement("p");
  description.classList.add("text-secondary", 'project-desc');
  description.title = project.description
  description.textContent = project.description;

  body.appendChild(title);
  body.appendChild(description);

  // Footer container
  const footer = document.createElement("div");
  footer.classList.add("project-card-footer");

  // Skills container
  const skillsContainer = document.createElement("div");
  skillsContainer.classList.add("project-skills");

  project.skills.forEach(skillClass => {
    const skillIcon = document.createElement("div");
    skillIcon.classList.add("skill-icon");

    const span = document.createElement("span");
    span.classList.add(skillClass);
    span.style.display = "flex";
    span.style.alignItems = "center";
    span.style.aspectRatio = "1";

    skillIcon.appendChild(span);
    skillsContainer.appendChild(skillIcon);
  });

  // Action container
  const actionContainer = document.createElement("div");
  actionContainer.classList.add("project-card-action");

  const codeLink = document.createElement("a");
  codeLink.href = project.codeLink;
  codeLink.target = "_blank";
  codeLink.classList.add("project-redirect-link", "project-redirect-link-left", "text-primary");
  codeLink.innerHTML = `<span class="span-svg-code stroke-primary project-redirect-link-icon"></span>
                          <span>Code</span>`;

  const liveLink = document.createElement("a");
  liveLink.href = project.liveLink;
  liveLink.target = "_blank";
  liveLink.classList.add("project-redirect-link", "project-redirect-link-right", "text-primary");
  liveLink.innerHTML = `<span>Live</span>
                          <span class="span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>`;

  // observe
  observer.observe(actionContainer);
  observer.observe(skillsContainer);

  //
  actionContainer.appendChild(codeLink);
  actionContainer.appendChild(liveLink);

  // Append all sections
  footer.appendChild(skillsContainer);
  footer.appendChild(actionContainer);

  projectCard.appendChild(imgBox);
  projectCard.appendChild(body);
  projectCard.appendChild(footer);

  // Append project card to parent element
  parentElement.appendChild(projectCard);
});

/* 
  
               <!--
        <div class="project-card animate-company-container">
          <div class="project-card-img-box">

            <img src="assets/images/project-fylehq-homepage-clone.png"
                 title="project fylehq homepage clone"
                 alt="project fylehq homepage clone"
                 class="project-card-img" />
          </div>

          <div class="project-card-body">
            <h3 class="text-primary project-name"
                title="fylehq clone">fylehq clone</h3>
            <p class="text-secondary project-desc"
               title="This project is a front-end replication of the popular expense management platform, Fyle HQ, 
           designed to provide a sleek and responsive user experience. The clone was built using Ant Design 
           (ng-zorro), a powerful Angular UI library, to ensure modern and consistent styling throughout the application.">
              This project is a front-end replication
              of the popular expense management
              platform,
              Fyle
              HQ, designed to provide a sleek and responsive user experience. The clone was built using Ant Design
              (ng-zorro),
              a powerful Angular UI library, to ensure modern and consistent styling throughout the application.
            </p>
          </div>
          <div class="project-card-footer">
            <div class="project-skills animation-project-card-link-slide">
              <div class="skill-icon">
                <span style="display: flex; align-items: center; aspect-ratio:1;"
                      class="span-svg-angular"> </span>
              </div>
              <div class="skill-icon">
                <span style="display: flex; align-items: center; aspect-ratio:1;"
                      class="span-svg-ant-design"> </span>
              </div>
              <div class="skill-icon">
                <span style="display: flex; align-items: center; aspect-ratio:1;"
                      class="span-svg-netlify"> </span>
              </div>
            </div>
            <div class="project-card-action animation-project-card-link-slide">
              <a href="https://github.com/BaNgoQuang/fylehq-clone"
                 target="_blank"
                 class="project-redirect-link project-redirect-link-left text-primary">

                <span class="span-svg-code stroke-primary project-redirect-link-icon"></span>
                <span>
                  Code
                </span>
              </a>
              <a href="https://fylehq-clone-by-pritam.netlify.app"
                 target="_blank"
                 class="project-redirect-link project-redirect-link-right text-primary">
                <span>
                  Live
                </span>
                <span class="span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>

              </a>
            </div>
          </div>
        </div>
      -->
*/