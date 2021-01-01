// Data

var data = {
  projects: [
    {
      title: "GRUKARYA",
      technology: "React-Redux-Firebase-Material UI",
      img_src: "./assets/GRUKARYA.png",
      img_alt: "GRUKARYA APP",
      github_link: "https://github.com/ShubhamCanMakeCommit",
      app_link: "https://grukarya-40757.web.app/",
    },
    {
      title: "Path Finding Algorithm",
      technology: "Written Purely in Vanilla JS",
      img_src: "./assets/pathfinderlogo.png",
      img_alt: "path finder logo",
      github_link: "https://github.com/ShubhamCanMakeCommit/pathFinder.git",
      app_link: "https://shubhamcanmakecommit.github.io/pathfinder",
    },
    {
      title: "IPL Data Explorer",
      technology: "GatsbyJS-Storybook",
      img_src: "./assets/ipl.png",
      img_alt: "Ipl logo",
      github_link: "https://github.com/ShubhamCanMakeCommit/ipl2020.git",
      app_link: "https://youthful-panini-bd7f0f.netlify.app/",
    },
  ],
};

// Data
var source = document.getElementById("project-template").innerHTML;
var template = Handlebars.compile(source);
var projects = template(data);
document.getElementById("projects").innerHTML += projects;
