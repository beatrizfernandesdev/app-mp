const redirectTo = (url) => {
     window.location.href = url;
};

const btnVoltar = document.getElementById('backToIndexPage');

btnVoltar.addEventListener("click", () => {
     redirectTo("../index.html");
});

const audio = document.getElementById("bg-music");

audio.volume = 0.3;

// remove mute ao clicar na tela
document.addEventListener("click", () => {

     audio.muted = false;
     audio.play();

}, { once: true });

// repetir após 3 segundos
audio.addEventListener("ended", () => {

     setTimeout(() => {

          audio.currentTime = 0;
          audio.play();

     }, 10000);

});