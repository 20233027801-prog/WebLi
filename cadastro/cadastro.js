function validarCadastro() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const confirmar = document.getElementById("confirmar").value.trim();
  const mensagem = document.getElementById("mensagem");

  mensagem.textContent = "";
  mensagem.className = "mensagem";

  if (nome === "" || email === "" || senha === "" || confirmar === "") {
    mensagem.textContent = "Por favor, preencha todos os campos.";
    mensagem.classList.add("erro");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    mensagem.textContent = "Digite um e-mail válido.";
    mensagem.classList.add("erro");
    return;
  }

  if (senha.length < 6) {
    mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
    mensagem.classList.add("erro");
    return;
  }

  if (senha !== confirmar) {
    mensagem.textContent = "As senhas não coincidem.";
    mensagem.classList.add("erro");
    return;
  }

  mensagem.textContent = "Cadastro realizado com sucesso!";
  mensagem.classList.add("sucesso");

  // limpa campos após sucesso
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
  document.getElementById("confirmar").value = "";
}
