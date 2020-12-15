const clientInformations = [
    {
        cpf: 18875539081,
        name: 'Jairo'
    },
    {
        cpf: 159849631155,
        name: 'Gustavo'
    },
    {
        cpf: 159849631155,
        name: 'Tiago'
    }
];

const tableBody = document.querySelector("[data-table-body]")

const showClient = (name, cpf) => {

    const row = document.createElement('tr');

    const rowContent = `<td>${name}</td>
                           <td>${cpf}</td>`

    row.innerHTML = rowContent
    
    return row;
}

clientInformations.forEach((item) => {
    tableBody.appendChild(showClient(item.name, item.cpf))
});
