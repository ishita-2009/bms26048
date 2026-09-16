# IIS Academic Archive

A personal academic archive for Ishita Chopra for **Introduction to Information Systems — IIM Sirmaur**.

The website is intentionally built without a complicated build system. You can update the content by editing one simple file and adding files to clearly named folders.

## What is already set up

- 4 ready-to-edit project slots
- Automatic vertical project timeline
- Different subtle accent colours across the project cards
- Reusable project pages
- CV section ready for `cv/CV.pdf`
- GitHub + Netlify friendly — no build command needed

## Folder guide

```text
iis-academic-archive/
├── index.html
├── project.html
├── data.js             # EDIT THIS for project content
├── script.js           # Website interactions — normally don't edit
├── project.js          # Project page logic — normally don't edit
├── style.css           # Website design — normally don't edit
├── projects/
│   ├── project-01/     # Put Project 01 files here
│   ├── project-02/     # Put Project 02 files here
│   ├── project-03/     # Put Project 03 files here
│   └── project-04/     # Put Project 04 files here
├── cv/
│   └── CV.pdf          # Replace this file when your CV changes
└── assets/
```

## Edit a project

Open `data.js`. There are 4 project objects already there.

For example, change:

```js
title: "PROJECT 01 — ADD TITLE",
date: "TBD",
```

to something like:

```js
title: "INFORMATION SYSTEMS CASE STUDY",
date: "OCTOBER 2026",
```

Then update the description, your contribution, learnings and files in the same project object.

You do **not** need to edit the HTML, JavaScript or CSS when adding normal coursework.

## Add project files

Put files inside the matching project folder.

Example:

```text
projects/project-01/report.pdf
projects/project-01/presentation.pdf
projects/project-01/image.jpg
```

Then add the file to that project's `files` list in `data.js`:

```js
files: [
  { label: "VIEW REPORT", path: "projects/project-01/report.pdf" },
  { label: "VIEW PRESENTATION", path: "projects/project-01/presentation.pdf" }
]
```

The project card, project page, previous/next buttons and timeline update automatically from the project list.

## Update your CV

Replace:

```text
cv/CV.pdf
```

with your newest CV.

Keep the filename exactly `CV.pdf`.

No website code needs to change.

## Publishing with GitHub + Netlify

This is a normal static website. The repository should contain `index.html` directly at its top level.

Because there is no build system:

- Build command: leave blank
- Publish directory: use the repository root/default

After connecting the GitHub repository to Netlify, future changes pushed to GitHub can trigger a new deployment automatically.
