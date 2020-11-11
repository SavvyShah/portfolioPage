// Data

var data = {
  projects: [
    {
      title: 'GRUKARYA',
      technology: 'React-Redux-Firebase-Material UI',
      img_src: './assets/GRUKARYA.png',
      img_alt: 'GRUKARYA APP',
      github_link: 'https://github.com/ShubhamCanMakeCommit',
      app_link: 'https://grukarya-40757.web.app/',
    },
    {
      title: 'Path Finding Algorithm',
      technology: 'Written Purely in Vanilla JS',
      img_src: './assets/pathfinderlogo.png',
      img_alt: 'path finder logo',
      github_link: 'https://github.com/ShubhamCanMakeCommit/pathFinder.git',
      app_link: 'https://shubhamcanmakecommit.github.io/pathfinder',
    },
  ],
}

// Data
var source = document.getElementById('project-template').innerHTML
var template = Handlebars.compile(source)
var projects = template(data)
document.getElementById('projects').innerHTML += projects
