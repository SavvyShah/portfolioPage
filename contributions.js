// Data

var data = {
  projects: [
    {
      title: 'Freecodecamp',
      img_src: './assets/freecodecamp.png',
      github_link:
        'https://github.com/freeCodeCamp/freeCodeCamp/pulls?q=is%3Apr+shubhamcanmakecommit+is%3Aclosed+',
    },
    {
      title: 'Gitpay',
      img_src: './assets/Gitpay.png',
      github_link:
        'https://github.com/worknenjoy/gitpay/pulls?q=is%3Apr+shubhamcanmakecommit+is%3Aclosed+',
    },
    {
      title: 'Coderoad',
      img_src: './assets/coderoad.svg',
      github_link: 'https://github.com/coderoad/coderoad-vscode/pull/453',
    },
  ],
}

// Data
var source = document.getElementById('project-template').innerHTML
var template = Handlebars.compile(source)
var projects = template(data)
document.getElementById('contributions').innerHTML += projects
