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
  document.querySelector('#estado').innerHTML = `
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
  const sigla = document.querySelector('#estado').value
  axios
.get(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/cidades/${sigla}`)
.then(function (response) {
  const cidade = response.data
  console.log(cidade);
  function cidadeListados() {
    listaCidade = ''
    cidade.map(cidade => {
      listaCidade = listaCidade+`<option value=${cidade.siglaEstado}> ${cidade.nome} </option>`
    }
    )
    return listaCidade
  }
  document.querySelector('#cidade').innerHTML = `
    ${cidadeListados()}
`
})
.catch(function (error) {
  const { data, status } = error.response;
  console.warn(`Status ${status}`);
  console.warn(`Dados ${JSON.stringify(data.errors)}`);
});
}


// Fiz ate aqui
function getContatos() {
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
        "idPessoa": parseInt(document.querySelector('#pessoaFisica').value),
        "telefone": document.querySelector('#contato').value,
        "tipoContato": document.querySelector('#tipoContato').value
    }
    console.log(contato)
    axios
    .post('https://cadastro-pessoas-cassio.herokuapp.com/api/v1/contatos', contato)
    .then(response => {
      getContatos();
    })
    .catch(function (error) {
      const { data, status } = error.response;
      console.warn(`Status ${status}`);
      console.warn(`Dados ${JSON.stringify(data.errors)}`);
  });
  }


  function putContatos() {
    const contato = {
        "id": parseInt(document.querySelector('#contatoPessoa').value),
        "telefone": document.querySelector('#contato').value,
        "tipoContato": document.querySelector('#tipoContato').value
    }
    console.log(contato)
    axios
    .put(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/contatos`, contato)
    .then(response => {
      getContatos();
    })
    .catch(function (error) {
      const { data, status } = error.response;
      console.warn(`Status ${status}`);
      console.warn(`Dados ${JSON.stringify(data.errors)}`);
  });
  }