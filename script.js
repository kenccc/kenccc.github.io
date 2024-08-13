const projectDiv = document.getElementById('projectdiv');

function createProject(name, description, link, webapp) {
  if (webapp == true){
    str = link.replace("https://github.com/kenccc/","");
    url="https://kenccc.github.io/"+str;
    projectDiv.innerHTML += `

      <div class=project>
        <div class="project-description">
          <h2>${name}</h2>
          <p>${description}</p>
          <button><a href="${link}" target="_blank">View on GitHub</a></button>
          <button><a href="${url}" target="_blank">Visit page</a></button>
       </div>
      </div>
    `;
  }
  else{
    projectDiv.innerHTML += `

      <div class=project>
        <div class="project-description">
          <h2>${name}</h2>
          <p>${description}</p>
          <button><a href="${link}" target="_blank">View on GitHub</a></button>
       </div>
      </div>
    `;
  }
}

createProject('Aim Trainer', 'This game helps you improve your aim in shooter games. It is very simple but also effective. In this game, you click on various circles that add a point to your score.', 'https://github.com/kenccc/aim-trainer',false);
createProject('Spotify downloader prefix removal', 'I created this project in order to be able to enjoy music offline, but spotify-downloader.com downloaded my music with a prefix which was shown as the title, so I created this tool to remove it, instead of manually renaming each song', 'https://github.com/kenccc/spotifyDLprefix_removal',false);
createProject('To Do List', 'Simple todo list in html,js,css', 'https://github.com/kenccc/todolist',true);
createProject('Typing exercisor', 'Simple game to practice writing with all 10 fingers', 'https://github.com/kenccc/typing_exercisor',true);
createProject('Weather webapp', "A web application which takes the user's IP adress and shows him the weather based on the user's location", 'https://github.com/kenccc/Weather-webapp',true);


