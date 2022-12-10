// On hover, shows the background of the certificate.

function certificateHover(element) {
  element.setAttribute('src', 'images/Programming Fundamentals with Python - September 2022 - CURRICULUM.png');
}

// When mouse not on hover, shows the certificate

function certificateUnhover(element) {
  element.setAttribute('src', 'images/Programming Fundamentals with Python - September 2022 - Certificate.png');
}

// On hover, shows the repo card of this webpage.

function streakStatsHover(element) {
  element.setAttribute('src', 'https://github-readme-stats.vercel.app/api/pin/?username=MitkoVtori&theme=codeSTACKr&repo=MitkoVtori.github.io')
}

// When mouse not on hover, shows GitHub Streak Stats.

function streakStatsUnhover(element) {
  element.setAttribute('src', 'https://streak-stats.demolab.com?user=MitkoVtori&theme=highcontrast')
}