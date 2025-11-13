document.addEventListener("DOMContentLoaded", function () {
  alert("Bem-vindo(a) à página informativa sobre LIBRAS!");

  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); 

      links.forEach(l => l.classList.remove("ativo"));

      this.classList.add("ativo");

      if (this.textContent.includes("Cadastre-se")) {
        alert("Em breve você poderá se cadastrar!");
      } else if (this.textContent.includes("Login")) {
        alert("Área de login em desenvolvimento!");
      } else if (this.textContent.includes("Início")) {
        alert("Você já está na página inicial!");
      }
    });
  });
});
