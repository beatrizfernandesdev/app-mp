const redirectTo = (url) => {
     window.location.href = url;
};

const btnVoltar = document.getElementById('backToIndexPage');

btnVoltar.addEventListener("click", () => {
     redirectTo("../index.html");
});