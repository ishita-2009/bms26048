# IIS Academic Archive

A personal academic archive for Ishita Chopra for **Introduction to Information Systems — IIM Sirmaur**.

The website is intentionally built without a complicated build system. You can update the content by editing one simple file and adding files to clearly named folders.

## Folder guide

```text
iis-academic-archive/
├── index.html          # Homepage
├── project.html        # Reusable project page
├── data.js             # EDIT THIS for your personal details + projects
├── script.js            # Website interactions — normally don't edit
├── project.js           # Project page logic — normally don't edit
├── style.css            # Website design — normally don't edit
├── projects/
│   └── project-01/      # Put Project 01 files here
├── cv/
│   └── CV.pdf           # Replace this file when your CV changes
└── assets/              # Optional images/assets
```

## Add a new project

1. Open the `projects` folder.
2. Create a new folder, for example `project-02`.
3. Put the project's PDFs, presentations and images inside it.
4. Open `data.js`.
5. Copy the existing project object.
6. Paste it after the existing project.
7. Change the number, title, date, description, contribution, learnings and file paths.
8. Save.

Example:

```js
{
  number: "02",
  title: "YOUR PROJECT TITLE",
  date: "OCTOBER 2026",
  category: "IIS",
  description: "What the project was about.",
  contribution: "What you personally did.",
  learnings: [
    "Learning one.",
    "Learning two."
  ],
  files: [
    { label: "VIEW REPORT", path: "projects/project-02/report.pdf" }
  ],
  images: []
}
```

The project card, project page, previous/next buttons and timeline update automatically.

## Add a PDF

Put the PDF in the project's folder.

For example:

```text
projects/project-02/report.pdf
```

Then use this path in `data.js`:

```js
{ label: "VIEW REPORT", path: "projects/project-02/report.pdf" }
```

## Update your CV

Replace:

```text
cv/CV.pdf
```

with your newest CV.

Keep the filename exactly `CV.pdf`.

No website code needs to change.

## Update your name, BMS ID or email

At the top of `data.js`, replace:

```js
name: "[MY NAME]",
bmsId: "[MY BMS ID]",
email: "[MY SCHOOL EMAIL]"
```

## Publishing with GitHub + Netlify

This project is a normal static website, so Netlify can publish it directly.

### First upload

Create a GitHub repository and upload the contents of this folder.

The repository should contain `index.html` directly at its top level.

Then connect that repository to Netlify and choose the repository as the site source.

Because this is a static site, there is no build command and no publish/build folder to configure.

### Future updates

Whenever you change `data.js` or add a project file:

1. Upload/save the changes to GitHub.
2. Netlify detects the GitHub change.
3. Netlify publishes the updated website automatically.

## Important

Do not rename these files unless you also change the references in the code:

- `index.html`
- `project.html`
- `data.js`
- `script.js`
- `project.js`
- `style.css`
- `cv/CV.pdf`

You can safely add as many `project-02`, `project-03`, `project-04`, etc. folders as needed.
