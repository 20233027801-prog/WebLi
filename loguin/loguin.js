document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Pega os valores dos campos
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Verifica se estão vazios
    if (email === "" || senha === "") {
      alert("Preencha todos os campos!");
      return;
    }

    // Envia os dados para o PHP
    fetch("login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "email=" + encodeURIComponent(email) + "&senha=" + encodeURIComponent(senha)
    })
    .then(response => response.text())
    .then(data => {
      // O PHP deve retornar "ok" se o login estiver certo
      if (data.trim() === "ok") {
        alert("Login realizado com sucesso!");
        // Exemplo: redirecionar para outra página
        window.location.href = "inicio.html";
      } else {
        alert("Email ou senha incorretos!");
      }
    })
    .catch(error => {
      alert("Erro ao conectar ao servidor!");
      console.error("Erro:", error);
    });
  });
});
