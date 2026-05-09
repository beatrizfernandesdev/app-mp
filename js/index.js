const redirectTo = (url) => {
     window.location.href = url;
};

const btnComecar = document.getElementById('btn-comecar');

btnComecar.addEventListener("click", () => {
     redirectTo("./pages/pageprincipal.html");
});