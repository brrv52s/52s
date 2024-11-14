const episodes = [
  "Episode 1",
  "Episode 2",
  "Episode 3"
];

function showSuggestions() {
  const input = document.getElementById('search-input').value;
  const suggestionsContainer = document.getElementById('suggestions-container');
  suggestionsContainer.innerHTML = "";

  if (input) {
    const filteredEpisodes = episodes.filter(episode => episode.toLowerCase().includes(input.toLowerCase()));

    filteredEpisodes.forEach(episode => {
      const suggestionItem = document.createElement('div');
      suggestionItem.classList.add('suggestion-item');
      suggestionItem.textContent = episode;
      suggestionItem.onclick = function () {
        document.getElementById('search-input').value = episode;
        suggestionsContainer.innerHTML = "";
        playEpisode(episode.toLowerCase().replace(" ", "") + ".mp4");
      };
      suggestionsContainer.appendChild(suggestionItem);
    });
  }
}

function playEpisode(episodePath) {
  const videoPlayer = document.getElementById("video-player");
  videoPlayer.src = episodePath;
  videoPlayer.play();
}

function toggleFullScreen() {
  const videoPlayer = document.getElementById("video-player");
  if (videoPlayer.requestFullscreen) {
    videoPlayer.requestFullscreen();
  } else if (videoPlayer.mozRequestFullScreen) {
    videoPlayer.mozRequestFullScreen();
  } else if (videoPlayer.webkitRequestFullscreen) {
    videoPlayer.webkitRequestFullscreen();
  } else if (videoPlayer.msRequestFullscreen) {
    videoPlayer.msRequestFullscreen();
  }
}
