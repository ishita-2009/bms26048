const params = new URLSearchParams(window.location.search);
const index = Number(params.get("id"));
const project = projects[index];

const page = document.getElementById("project-page");

if (!project) {
  page.innerHTML = `<section class="missing"><p>PROJECT NOT FOUND</p><a href="index.html">← BACK TO ARCHIVE</a></section>`;
} else {
  const previous = projects[index - 1];
  const next = projects[index + 1];

  document.title = `${project.title} — IIS Academic Archive`;

  page.innerHTML = `
    <section class="project-hero">
      <a class="back-link" href="index.html#projects">← BACK TO ARCHIVE</a>
      <div class="project-index mono">PROJECT / ${project.number}</div>
      <h1>${project.title}</h1>
      <div class="project-meta">
        <span>${project.category}</span>
        <span>·</span>
        <span>${project.date}</span>
      </div>
    </section>

    <section class="project-content">
      <article class="content-block">
        <div class="eyebrow">ABOUT THE PROJECT</div>
        <p>${project.description}</p>
      </article>

      <article class="content-block">
        <div class="eyebrow">MY WORK</div>
        <p>${project.contribution}</p>
      </article>

      <article class="content-block">
        <div class="eyebrow">KEY LEARNINGS</div>
        <ul>${project.learnings.map(item => `<li>${item}</li>`).join("")}</ul>
      </article>

      <article class="content-block files-block">
        <div class="eyebrow">FILES</div>
        <div class="file-list">
          ${project.files.map(file => `<a href="${file.path}" target="_blank" rel="noopener"><span>${file.label}</span><span>↗</span></a>`).join("")}
        </div>
      </article>
    </section>

    <section class="project-nav">
      ${previous ? `<a href="project.html?id=${index - 1}"><span class="mono">PREVIOUS PROJECT</span><strong>← ${previous.title}</strong></a>` : `<span></span>`}
      ${next ? `<a class="next" href="project.html?id=${index + 1}"><span class="mono">NEXT PROJECT</span><strong>${next.title} →</strong></a>` : `<span></span>`}
    </section>

    <footer>
      <span class="footer-number">6</span>
      <span>${site.email}</span>
    </footer>
  `;
}