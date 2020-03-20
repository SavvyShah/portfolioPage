// Data

var data = {
  projects: [
    {
      title: "Atlassian trello clone",
      technology: "Redux, React, Redux-Persist, Material-UI",
      img_src: "./assets/trello.jpg",
      img_alt: "trello logo",
      github_link: "https://github.com/ShubhamCanMakeCommit/trelloClone.git",
      app_link: "https://atlassian-trello-clone.herokuapp.com"
    },
    {
      title: "Path Finding Algorithm",
      technology: "Written Purely in Vanilla JS",
      img_src: "./assets/pathfinderlogo.png",
      img_alt: "path finder logo",
      github_link: "https://github.com/ShubhamCanMakeCommit/pathFinder.git",
      app_link: "https://shubhamcanmakecommit.github.io/pathfinder"
    },
    {
      title: "10 second Tweet",
      technology: "React, Redux, NextJS(SSR), Typescript",
      img_src: "./assets/tweet.png",
      img_alt: "10 second tweet",
      github_link: "https://github.com/ShubhamCanMakeCommit/tenSecondTweet.git",
      app_link: "https://ten-trello-clone.herokuapp.com"
    }
  ]
} 

// Data
var source = document.getElementById('project-template').innerHTML;
var template = Handlebars.compile(source)
var projects = template(data)
document.getElementById('projects').innerHTML += projects