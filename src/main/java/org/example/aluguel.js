
const BIKE_URL = "http://localhost:8080/bikes"
const CLIENTE_URL = "http://localhost:8080/customers"
const HIRES_URL = "http://localhost:8080/hires"
const HIRESCUST_URL = "http://localhost:8080/hires/custom"

fetch(CLIENTE_URL)
    .then(response => response.json())
    .then(responseJson => {
        responseJson.forEach(customer => {
            let selectNome = document.getElementById("cliente");
            let option = document.createElement("option")
            option.innerHTML = customer.name + "/" + customer.cpf;
            selectNome.appendChild(option)
        })
    })

fetch(BIKE_URL)
    .then(response => response.json())
    .then(responseJson => {
        responseJson.forEach(bike => {
            let selectNome = document.getElementById("bicicleta");
            let option = document.createElement("option")
            option.innerHTML = bike.model;
            selectNome.appendChild(option)
        })
    })

async function pegarDados() {
    let resposta = await fetch(BIKE_URL + "/2");
    let bike = await resposta.json();
    return bike;
}

function confirmar() {
    let selectCliente = document.getElementById("cliente").value;
    let selectBicicleta = document.getElementById("bicicleta").value;
    let selectDias = document.getElementById("dias").value;
    let clienteSplit = selectCliente.split('/')[1];

    let dados = {
        cpf: clienteSplit,
        model: selectBicicleta,
        numberOfDays: selectDias
    };

    fetch(HIRESCUST_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
        .then(response => {
            if(!response.ok) {
                throw new Error("Erro na requisicao");
            }
            return response.json();
        })
        .then(data => {
            console.log("resposta do servidor:", dados);
        })
        .catch(error => {
            console.log("Error:",error);
        })
}