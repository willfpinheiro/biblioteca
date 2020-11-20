function getPessoasPorNome() {
  axios
.get(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/pessoaFisicas`)
.then(function (response) {
  const pessoasFisicas = response.data
  console.log(pessoasFisicas);
  function pessoasListadas() {
    listaPessoa = ''
    pessoasFisicas.map(pessoa => {
      listaPessoa = listaPessoa+`<option value=${pessoa.id}> ${pessoa.nome} </option>`
    }
    )
    return listaPessoa
  }
  document.querySelector('#pessoaFisica').innerHTML = `
    ${pessoasListadas()}
`
})
.catch(function (error) {
  const { data, status } = error.response;
  console.warn(`Status ${status}`);
  console.warn(`Dados ${JSON.stringify(data.errors)}`);
});
}
getPessoasPorNome();

function getEnderecos() {
    const idPessoa = document.querySelector('#pessoaFisica').value
    axios
  .get(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/contatos/${idPessoa}`)
  .then(function (response) {
    const contatosPessoa = JSON.stringify(response.data);
    console.log(contatosPessoa);
    document.querySelector('#retorno').innerHTML = `
    <h1>Contatos</h1>
    <ul>
      ${contatosPessoa}
    </ul>
`
  })
  .catch(function (error) {
    const { data, status } = error.response;
    console.warn(`Status ${status}`);
    console.warn(`Dados ${JSON.stringify(data.errors)}`);
});
  }

  function deleteContatos() {
    const idPessoa = document.querySelector('#pessoaFisica').value
    axios
  .delete(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/contatos/${idPessoa}`)
  .catch(function (error) {
    const { data, status } = error.response;
    console.warn(`Status ${status}`);
    console.warn(`Dados ${JSON.stringify(data.errors)}`);
});
  }

  function postContato() {
    const contato = {
        "idPessoa": document.querySelector('#pessoaFisica').value,
        "telefone": document.querySelector('#contato').value,
        "tipoContato": document.querySelector('#tipoContato').value
    }
    console.log(contato)
    axios
    .post(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/contatos/${contato}`)
    .then(response => {
      getContatos();
    })
    .catch(function (error) {
      const { data, status } = error.response;
      console.warn(`Status ${status}`);
      console.warn(`Dados ${JSON.stringify(data.errors)}`);
  });
  }


  function putContato() {
    const contato = {
        "idPessoa": document.querySelector('#pessoaFisica').value,
        "telefone": document.querySelector('#contato').value,
        "tipoContato": document.querySelector('#tipoContato').value
    }
    console.log(contato)
    axios
    .post(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/contatos/${contato}`)
    .then(response => {
      getContatos();
    })
    .catch(function (error) {
      const { data, status } = error.response;
      console.warn(`Status ${status}`);
      console.warn(`Dados ${JSON.stringify(data.errors)}`);
  });
  }