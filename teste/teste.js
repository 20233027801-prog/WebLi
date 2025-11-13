document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("botaoCadastrar");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  const confirmar = document.getElementById("confirmar");

  botao.addEventListener("click", function () {
    if (!nome.value || !email.value || !senha.value || !confirmar.value) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
      alert("Digite um e-mail válido.");
      return;
    }

    if (senha.value !== confirmar.value) {
      alert("As senhas não coincidem!");
      return;
    }

    alert("✅ Cadastro realizado com sucesso!");
    
    nome.value = "";
    email.value = "";
    senha.value = "";
    confirmar.value = "";
  });
});
