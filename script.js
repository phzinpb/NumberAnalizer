let a = [];

function adicionar() {
    let num = document.getElementById('txtn').value;
    let list = document.getElementById('list');
    let option = document.createElement('option');

    if (num <= 100 && num > 0) {
        if (a.indexOf(Number(num)) == -1) {
            a.push(Number(num));
            option.text = `Valor ${num} Adicionado`;
            option.value = `v${num}`;

            list.appendChild(option);
        } else {
            alert('Você ja digitou esse numero');
        }
    }
    else {
        window.alert('Digite um numero valido');
    }
    res.innerHTML = "";
}

function fim() {
    if (a.length == 0) {
        alert('Digite algum numero')
    } else {
        let res = document.getElementById('res');
        let soma = 0;

        res.innerHTML += `<br>`;
        res.innerHTML += `<p> Ao todo, temos ${a.length} numero(s) cadastrados </p>`;
        res.innerHTML += `<p> O maior valor informado foi ${Math.max(...a)} </p>`;
        res.innerHTML += `<p> O menor valor informado foi ${Math.min(...a)} </p>`;
        for (let i = 0; i < a.length; i++) {
            soma += Number(a[i]);
        }
        res.innerHTML += `<p> Somando todos os numeros temos ${soma} </p>`
        res.innerHTML += `<p> A media dos valores digitados é ${soma / a.length}`
    }
}