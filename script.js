const video = document.getElementById("video");

function startVideo() {
  navigator.getUserMedia(
    { video: true },
    (stream) => (video.srcObject = stream),
    (error) => console.error(error)
  );
}

startVideo();
