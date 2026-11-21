# Ishita Chopra — IIS Portfolio (BMS26048)

This folder is the whole website. Nothing to install, nothing to build.

```
index.html      the page (name, roll number, projects, CV)
styles.css      colours, fonts, layout
app.js          draws the project cards and the project pages
projects.js     ← your projects live here (the only file you normally edit)
cv/             ← your CV PDF lives here
```

---

## 1. Put it on GitHub

No commands needed — do it in the browser.

1. Go to github.com, sign in, click **New repository**.
2. Name it something like `iis-portfolio`, keep it **Public**, click **Create repository**.
3. On the empty repo page click **uploading an existing file**.
4. Unzip this folder on your computer, then drag **everything inside it** into the upload box —
   `index.html`, `styles.css`, `app.js`, `projects.js`, `README.md`, and the `cv` folder.
   (Drag the folder itself, not the zip.)
5. Click **Commit changes**.

Everything must sit at the top level of the repo, next to `index.html` — not inside an extra folder.

## 2. Turn the website on (GitHub Pages, free)

1. In the repo, open **Settings → Pages**.
2. Under *Build and deployment* → *Source*, choose **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)**. Click **Save**.
4. Wait a minute, refresh — your link appears, like
   `https://your-username.github.io/iis-portfolio/`

Every time you change a file on GitHub, the live site updates by itself in about a minute.

---

## 3. Adding your CV

The site looks for one file, exactly here:

```
cv/Ishita-Chopra-CV.pdf
```

To put in your real CV:

1. On GitHub, open the `cv` folder.
2. Click **Add file → Upload files** and upload your CV **renamed to** `Ishita-Chopra-CV.pdf`
   (all caps and dashes exactly like that, ending in `.pdf`).
3. Commit. Your CV replaces the placeholder and both *View CV* buttons now open it.

If you'd rather keep your own file name, rename your PDF to match, or edit the three links in
`index.html` that point to `cv/Ishita-Chopra-CV.pdf`.

---

## 4. Editing the projects

Open **`projects.js`**. There are five project slots inside it. Each one looks like this:

```js
  {
    slug: "project-1",
    title: "Project 1",
    category: "IIS Group Project",
    date: "",
    link: "",
    summary: "",
    teamDid: "",
    myRole: "",
    members: [],
    tools: [],
    colors: ["#1e50e5", "#6f8cf5"]
  },
```

Type your text **between the quotes**. Leave a field as `""` and the site shows a soft
"(to be given)" instead — so you can fill things in gradually.

| field | what it is |
|---|---|
| `slug` | the short name used in the web address. Must be different for every project. `project-1` … `project-5` |
| `title` | the project name shown on the card and page |
| `category` | small label above it, e.g. `"Systems Analysis"` |
| `date` | anything readable, e.g. `"October 2026"` |
| `link` | your project / Drive / doc link. Leave empty and the button is hidden |
| `summary` | one line on the card |
| `teamDid` | a short paragraph on what the team did together |
| `myRole` | a short paragraph on what **you** did |
| `members` | `[{ name: "Aarav Mehta", role: "Data" }, { name: "Priya Shah", role: "Design" }]` |
| `tools` | `["Excel", "Power BI", "Figma"]` — leave `[]` for none |
| `colors` | the two colours of the card cover. Keep the quotes and the comma |

A filled-in example:

```js
  {
    slug: "project-2",
    title: "Library Book Tracking System",
    category: "Systems Analysis",
    date: "September 2026",
    link: "https://drive.google.com/your-file",
    summary: "A plan to replace paper registers with a small tracking system.",
    teamDid: "We mapped how books are issued today, interviewed two librarians and drew the process.",
    myRole: "I built the process diagram and wrote the requirements section.",
    members: [
      { name: "Ishita Chopra", role: "Process & requirements" },
      { name: "Aarav Mehta", role: "Interviews" },
      { name: "Priya Shah", role: "Slides" }
    ],
    tools: ["Excel", "Draw.io"],
    colors: ["#ff6a3d", "#ffc200"]
  },
```

### Adding a sixth project

Copy one whole block — from its `{` to its `},` — and paste it after the last one.
Give it a new `slug` (e.g. `"project-6"`), fill in the text, and the new card appears on its own.
To remove a project, delete its whole block. Keep the commas between blocks.

If the page ever goes blank after an edit, something in `projects.js` was broken — a missing
quote or comma. Undo that one change on GitHub and it comes back.

---

## 5. Checking changes on your own computer

Unzip the folder and double-click `index.html`. It opens in your browser and works exactly like
the live site. Edit `projects.js` in any text editor (Notepad, TextEdit, VS Code), save, refresh.

The fonts come from Google Fonts, so they need an internet connection.
