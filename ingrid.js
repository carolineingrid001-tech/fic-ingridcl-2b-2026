let idade = parseInt(prompt("Digite sua idade: "));
if (idade >= 16) {
    alert("não pode votar!");
} else if (idade >= 18 || idade <= 70) {
    alert("voto opcional!");
}
else {
    alert("voto obrigatório!");
}