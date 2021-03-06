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

function getNomeEstado() {
  axios
.get(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/estados`)
.then(function (response) {
  const estados = response.data
  console.log(estados);
  function estadosListados() {
    listaEstado = ''
    estados.map(estado => {
      listaEstado = listaEstado+`<option value=${estado.sigla}> ${estado.nome} </option>`
    }
    )
    return listaEstado
  }
  document.querySelector('#idEstado').innerHTML = `
    ${estadosListados()}
`
})
.catch(function (error) {
  const { data, status } = error.response;
  console.warn(`Status ${status}`);
  console.warn(`Dados ${JSON.stringify(data.errors)}`);
});
}
getNomeEstado();

function getNomeCidade() {
  const sigla = document.querySelector('#idEstado').value
  axios
.get(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/cidades/${sigla}`)
.then(function (response) {
  const cidade = response.data
  console.log(cidade);
  function cidadeListados() {
    listaCidade = ''
    cidade.map(cidade => {
      listaCidade = listaCidade+`<option value=${cidade.id}> ${cidade.nome} </option>`
    }
    )
    return listaCidade
  }
  document.querySelector('#idCidade').innerHTML = `
    ${cidadeListados()}
`
})
.catch(function (error) {
  const { data, status } = error.response;
  console.warn(`Status ${status}`);
  console.warn(`Dados ${JSON.stringify(data.errors)}`);
});
}

function getEndereco() {
    const idPessoa = document.querySelector('#pessoaFisica').value
    axios
  .get(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/enderecos/${idPessoa}`)
  .then(function (response) {
    const enderecoPessoa = JSON.stringify(response.data);
    console.log(enderecoPessoa);
    document.querySelector('#retorno').innerHTML = `
    <h1>Endereços</h1>
    <ul>
      ${enderecoPessoa}
    </ul>
`
  })
  .catch(function (error) {
    const { data, status } = error.response;
    console.warn(`Status ${status}`);
    console.warn(`Dados ${JSON.stringify(data.errors)}`);
});
  }

  function deleteEndereco() {
    const idEndereco = document.querySelector('#enderecoPessoa').value
    axios
  .delete(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/enderecos/${idEndereco}`)
  .catch(function (error) {
    const { data, status } = error.response;
    console.warn(`Status ${status}`);
    console.warn(`Dados ${JSON.stringify(data.errors)}`);
});
document.querySelector('#enderecoPessoa').value = '';
getEndereco();
  }

  function postEndereco() {
    const endereco = {
        "idPessoa": parseInt(document.querySelector('#pessoaFisica').value),
        "bairro": document.querySelector('#bairro').value,
        "idCidade": parseInt(document.querySelector('#idCidade').value),
        "cep": document.querySelector('#cep').value,
        "logradouro": document.querySelector('#logradouro').value
    }
    console.log(endereco)
    axios
    .post('https://cadastro-pessoas-cassio.herokuapp.com/api/v1/enderecos', endereco)
    .then(response => {
      getEndereco();
    })
    .catch(function (error) {
      const { data, status } = error.response;
      console.warn(`Status ${status}`);
      console.warn(`Dados ${JSON.stringify(data.errors)}`);
  });
  }


  function putEndereco() {
    const endereco = {
      "id": parseInt(document.querySelector('#enderecoPessoa').value),
      "bairro": document.querySelector('#bairro').value,
      "idCidade": parseInt(document.querySelector('#idCidade').value),
      "cep": document.querySelector('#cep').value,
      "logradouro": document.querySelector('#logradouro').value
  }
    axios
    .put('https://cadastro-pessoas-cassio.herokuapp.com/api/v1/enderecos', endereco)
    .then(response => {
      getEndereco();
    })
    .catch(function (error) {
      const { data, status } = error.response;
      console.warn(`Status ${status}`);
      console.warn(`Dados ${JSON.stringify(data.errors)}`);
  });
  }