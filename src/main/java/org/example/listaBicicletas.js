const BIKE_URL = "http://localhost:8080/bikes";

async function carregarDados() {
    try {
        const resposta = await fetch(BIKE_URL);
        const bikes = await resposta.json();

        let tabela = document.querySelector("table");

        bikes.forEach(bike => {
            let tr = document.createElement("tr");

            let tdId = document.createElement("td");
            tdId.innerText = bike.id;
            tr.appendChild(tdId);

            let tdModelo = document.createElement("td");
            tdModelo.innerText = bike.model;
            tr.appendChild(tdModelo);

            let tdPreco = document.createElement("td");
            tdPreco.innerText = `R$ ${bike.price},00`;
            tr.appendChild(tdPreco);

            let tdBotao = document.createElement("td");
            let botaoSit = document.createElement("button");
            botaoSit.setAttribute("type", "button");

            console.log(bike.available);


            botaoSit.addEventListener("click", () => {
                if (botaoSit.innerHTML === "Disponível") {
                    botaoSit.classList.add("alternar");
                    botaoSit.innerHTML = "Alugada";
                } else {
                    botaoSit.classList.remove("alternar");
                    botaoSit.innerHTML = "Disponível";
                }
            });
            tdBotao.appendChild(botaoSit);
            tr.appendChild(tdBotao);

            tabela.appendChild(tr);
        });

    } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
    }
}

carregarDados();