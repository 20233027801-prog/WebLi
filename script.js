document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // impede o comportamento padrão do link

      // Remove a classe "ativo" de todos os links
      links.forEach(l => l.classList.remove("ativo"));

      // Adiciona a classe "ativo" ao link clicado
      this.classList.add("ativo");

      // Chama a função para mudar de página
      mudarDePagina(this.textContent);
    });
  });
});

// Função que muda de página conforme o nome do link
function mudarDePagina(nomeLink) {
  if (nomeLink.includes("Início")) {
    window.location.href = "index.html";
  } else if (nomeLink.includes("Cadastre-se")) {
    window.location.href = "cadastro.html";
  } else if (nomeLink.includes("Login")) {
    window.location.href = "login.html";
  } else if (nomeLink.includes("Sobre")) {
    window.location.href = "sobre.html";
  } else {
    alert("Página ainda não disponível!");
  }
}
