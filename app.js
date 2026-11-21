/* Renders the project cards + project detail pages from projects.js */
(function () {
  "use strict";

  var PROJECTS = window.PROJECTS || [];
  var grid = document.getElementById("project-grid");
  var emptyNote = document.getElementById("projects-empty");
  var home = document.getElementById("top");
  var view = document.getElementById("project-view");
  var viewBody = document.getElementById("project-body");

  var TODO = '<span class="todo">(to be given)</span>';

  var pad = function (n) { return String(n).padStart(2, "0"); };

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* text, or "(to be given)" when the field is still empty */
  function val(value) {
    var text = String(value == null ? "" : value).trim();
    return text ? esc(text) : TODO;
  }

  /* ── project cards ── */
  function card(project, index) {
    var c = project.colors || ["#1e50e5", "#6f8cf5"];
    var summary = String(project.summary || "").trim();
    var date = String(project.date || "").trim();

    return (
      '<a class="project" href="#/project/' + encodeURIComponent(project.slug) + '" ' +
      'style="--c1:' + esc(c[0]) + ';--c2:' + esc(c[1]) + '">' +
        '<div class="project__cover">' +
          '<span class="project__index">' + pad(index + 1) + "</span>" +
          '<span class="project__chip">' + esc(project.category || "Group project") + "</span>" +
          '<span class="project__open">OPEN <span aria-hidden="true">↗</span></span>' +
          '<span class="project__coverTitle">' + esc(project.title) + "</span>" +
        "</div>" +
        '<div class="project__meta">' +
          '<h3 class="project__title">' + esc(project.title) + ' <span aria-hidden="true">↗</span></h3>' +
          '<p class="project__summary">' + (summary ? esc(summary) : TODO) + "</p>" +
          '<p class="project__date">' + esc(project.category || "Group project") + (date ? " · " + esc(date) : "") + "</p>" +
        "</div>" +
      "</a>"
    );
  }

  if (grid) {
    grid.innerHTML = PROJECTS.map(card).join("");
    if (emptyNote) emptyNote.hidden = PROJECTS.length > 0;
  }

  /* ── project detail page ── */
  function detail(project) {
    var members = (project.members || []).map(function (m) {
      return (
        '<li class="member">' +
          '<span class="member__name">' + esc(m.name) + "</span>" +
          '<span class="member__role">' + esc(m.role || "") + "</span>" +
        "</li>"
      );
    }).join("");

    var tools = (project.tools || []).map(function (t) {
      return '<li class="tag">' + esc(t) + "</li>";
    }).join("");

    var hasMembers = (project.members || []).length > 0;
    var hasTools = (project.tools || []).length > 0;

    return (
      '<a class="back" href="#projects">← All projects</a>' +
      '<p class="eyebrow">' + esc(project.category || "Group project") + " · " + val(project.date) + "</p>" +
      '<h1 class="detail__title">' + esc(project.title) + "</h1>" +
      '<p class="detail__lead">' + val(project.summary) + "</p>" +
      '<div class="detail__actions">' +
        (project.link
          ? '<a class="btn btn--blue" href="' + esc(project.link) + '" target="_blank" rel="noopener">Visit project <span aria-hidden="true">↗</span></a>'
          : '<span class="btn btn--ghost btn--off">Project link <span>(to be given)</span></span>') +
        '<a class="btn btn--ghost" href="#projects">Back to projects</a>' +
      "</div>" +

      '<dl class="detail__meta">' +
        "<div><dt>Date</dt><dd>" + val(project.date) + "</dd></div>" +
        "<div><dt>Course</dt><dd>IIS · IIM Sirmaur</dd></div>" +
        "<div><dt>Type</dt><dd>Group project</dd></div>" +
      "</dl>" +

      '<div class="detail__blocks">' +
        '<article class="detail__block">' +
          '<p class="detail__num">01 / THE TEAM</p>' +
          "<h2>What the team did</h2>" +
          "<p>" + val(project.teamDid) + "</p>" +
        "</article>" +
        '<article class="detail__block">' +
          '<p class="detail__num">02 / MY PART</p>' +
          "<h2>What I did</h2>" +
          "<p>" + val(project.myRole) + "</p>" +
        "</article>" +
      "</div>" +

      '<div class="detail__grid">' +
        '<div class="detail__panel">' +
          '<p class="detail__num">TEAM' + (hasMembers ? " · " + pad(project.members.length) + " MEMBERS" : "") + "</p>" +
          (hasMembers ? '<ul class="members">' + members + "</ul>" : "<p>" + TODO + "</p>") +
        "</div>" +
        '<div class="detail__panel">' +
          '<p class="detail__num">TOOLS USED</p>' +
          (hasTools ? '<ul class="tags">' + tools + "</ul>" : "<p>" + TODO + "</p>") +
          (project.link
            ? '<p class="detail__link"><a href="' + esc(project.link) + '" target="_blank" rel="noopener">' + esc(project.link) + " ↗</a></p>"
            : "") +
        "</div>" +
      "</div>" +

      '<div class="detail__foot">' +
        '<a class="btn btn--ghost" href="#projects">← All projects</a>' +
      "</div>"
    );
  }

  /* ── routing ── */
  function route() {
    var match = location.hash.match(/^#\/project\/(.+)$/);
    var project = null;

    if (match) {
      var slug = decodeURIComponent(match[1]);
      project = PROJECTS.find(function (p) { return p.slug === slug; });
    }

    if (project) {
      viewBody.innerHTML = detail(project);
      view.hidden = false;
      home.hidden = true;
      document.title = project.title + " · Ishita Chopra · BMS26048";
      window.scrollTo(0, 0);
    } else {
      view.hidden = true;
      home.hidden = false;
      document.title = "Ishita Chopra · BMS26048 · IIS Portfolio";
      if (match) {
        /* unknown slug: send them back to the list */
        location.replace("#projects");
      }
    }
  }

  window.addEventListener("hashchange", route);
  route();
})();
