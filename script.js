// الحلقات المتاحة
const episodes = [
  "Episode 1",
  "Episode 2",
  "Episode 3"
];

// دالة لعرض الاقتراحات بناءً على النص المدخل في مربع البحث
function showSuggestions() {
  const input = document.getElementById('search-input').value;
  const suggestionsContainer = document.getElementById('suggestions-container');
  suggestionsContainer.innerHTML = ""; // مسح الاقتراحات السابقة

  if (input) {
    // تصفية الحلقات التي تحتوي على النص المدخل
    const filteredEpisodes = episodes.filter(episode => episode.toLowerCase().includes(input.toLowerCase()));

    filteredEpisodes.forEach(episode => {
      const suggestionItem = document.createElement('div');
      suggestionItem.classList.add('suggestion-item');
      suggestionItem.textContent = episode;
      suggestionItem.onclick = function () {
        document.getElementById('search-input').value = episode; // ملء حقل البحث بالقيمة المختارة
        suggestionsContainer.innerHTML = ""; // مسح الاقتراحات بعد الاختيار
        playEpisode(episode.toLowerCase().replace(" ", "") + ".mp4"); // تشغيل الحلقة
      };
      suggestionsContainer.appendChild(suggestionItem);
    });
  }
}

// دالة لتشغيل الحلقة
function playEpisode(episodePath) {
  const videoPlayer = document.getElementById("video-player");
  videoPlayer.src = episodePath;
  videoPlayer.play();
}

// دالة لتبديل وضع الشاشة الكاملة
function toggleFullScreen() {
  const videoPlayer = document.getElementById("video-player");
  if (videoPlayer.requestFullscreen) {
    videoPlayer.requestFullscreen();
  } else if (videoPlayer.mozRequestFullScreen) { // Firefox
    videoPlayer.mozRequestFullScreen();
  } else if (videoPlayer.webkitRequestFullscreen) { // Chrome and Safari
    videoPlayer.webkitRequestFullscreen();
  } else if (videoPlayer.msRequestFullscreen) { // IE/Edge
    videoPlayer.msRequestFullscreen();
  }
}
