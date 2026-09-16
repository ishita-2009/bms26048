const list = document.getElementById("project-list");
const timeline = document.getElementById("timeline");

const accentMap = {
  blue: "#63aaff",
  violet: "#9a7cff",
  cyan: "#54d7e8",
  pink: "#ef8bc7"
};

document.querySelector(".hero h1 span").textContent = site.name;
document.querySelector(".hero-meta span:first-child").textContent = `BMS — ${site.bmsId}`;
document.querySelector("footer span:last-child").textContent = site.email;
document.querySelector(".cv-right .mono").textContent = `UPDATED · ${site.cvUpdated}`;

projects.forEach((project, index) => {
  const accent = accentMap[project.accent] || accentMap.blue;

  const card = document.createElement("a");
  card.className = "project-card reveal";
  card.href = `project.html?id=${index}`;
  card.style.setProperty("--accent", accent);

  card.innerHTML = `
    <div class="card-top">
      <span class="mono">WORK / ${project.number}</span>
      <span class="mono">${project.category}</span>
    </div>
    <div class="card-middle">
      <h3>${project.title}</h3>
      <span class="card-arrow">↗</span>
    </div>
    <div class="card-bottom">
      <span class="mono">${project.category} · ${project.date}</span>
      <span class="view-label">OPEN PROJECT →</span>
    </div>
    <div class="reflection"></div>
  `;

  list.appendChild(card);

  const point = document.createElement("a");
  point.className = "timeline-point";
  point.href = `#project-${index}`;
  point.dataset.index = index;
  point.style.setProperty("--accent", accent);
  point.innerHTML = `<span class="dot"></span><span>PROJECT ${project.number}</span>`;
  timeline.appendChild(point);
  card.id = `project-${index}`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const cards = [...document.querySelectorAll(".project-card")];
const points = [...document.querySelectorAll(".timeline-point")];

function updateTimeline() {
  if (!cards.length) return;
  const middle = window.innerHeight * 0.42;
  let active = 0;
  cards.forEach((card, i) => {
    if (card.getBoundingClientRect().top < middle) active = i;
  });
  points.forEach((point, i) => {
    point.classList.toggle("active", i === active);
    point.classList.toggle("passed", i < active);
  });
}

window.addEventListener("scroll", updateTimeline, { passive: true });
window.addEventListener("resize", updateTimeline);
updateTimeline();

cards.forEach(card => {
  card.addEventListener("pointermove", e => {
    if (window.innerWidth < 800) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `perspective(1000px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg) translateY(-5px)`;
    card.style.setProperty("--mx", `${(x + .5) * 100}%`);
    card.style.setProperty("--my", `${(y + .5) * 100}%`);
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});
