function fazerLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }
    alert("Login realizado com sucesso!");
}
