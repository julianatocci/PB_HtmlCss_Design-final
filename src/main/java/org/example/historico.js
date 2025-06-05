const HIRE_URL = "http://localhost:8080/hires";

fetch(HIRE_URL)
    .then(response => response.json())
    .then((responseJson => {
        responseJson.forEach(hire => {
            let tabela = document.querySelector("table");
            let tr  = document.createElement("tr");

            let tdId = document.createElement("td");
            tdId.innerHTML = hire.id;
            tr.appendChild(tdId);

            let tdBikeId = document.createElement("td");
            tdBikeId.innerHTML = hire.bike.id + " "  + hire.bike.model;
            tr.appendChild(tdBikeId);

            let tdCustomerId = document.createElement("td");
            tdCustomerId.innerHTML = hire.customer.id;
            tr.appendChild(tdCustomerId);

            let tdInicio = document.createElement("td");
            tdInicio.innerHTML = hire.startDate;
            tr.appendChild(tdInicio);

            let tdFinal = document.createElement("td");
            tdFinal.innerHTML = hire.finalDate;
            tr.appendChild(tdFinal);

            let tdPreco = document.createElement("td");
            tdPreco.innerHTML = hire.finalPrice;
            tr.appendChild(tdPreco);

            tabela.appendChild(tr);
        })
    }))