const CLIENTE_URL = "http://localhost:8080/customers";

fetch(CLIENTE_URL)
    .then(response => response.json())
    .then(responseJson => {
        responseJson.forEach(customer => {
            let tabela = document.querySelector("table");
            let tr = document.createElement("tr");

            let tdId = document.createElement("td");
            tdId.innerText = customer.id;
            tr.appendChild(tdId);

            let tdNome = document.createElement("td");
            tdNome.innerText = customer.name;
            tr.appendChild(tdNome);

            let tdCpf = document.createElement("td");
            tdCpf.innerText = customer.cpf;
            tr.appendChild(tdCpf);

            let tdPostCode = document.createElement("td");
            tdPostCode.innerText = customer.postcode;
            tr.appendChild(tdPostCode);

            let tdTelefone = document.createElement("td");
            tdTelefone.innerText = customer.phoneNumber;
            tr.appendChild(tdTelefone);

            let tdPontos = document.createElement("td");
            tdPontos.innerText = customer.loyaltyPoints;
            tr.appendChild(tdPontos);

            tabela.appendChild(tr)
        })
    })