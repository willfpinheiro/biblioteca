  function getEstado() {
    const siglaEstado = document.querySelector('#siglaEstado').value.toUpperCase()
    axios
  .get(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/estados/${siglaEstado}`)
  .then(function (response) {
    const estados = response.data.nome
    console.log(estados);
    document.querySelector('.text').innerHTML = `
    <h1>Estado</h1>
    <ul>
      ${estados}
    </ul>
`
  })
  .catch(function (error) {
    const { data, status } = error.response;
    console.warn(`Status ${status}`);
    console.warn(`Dados ${JSON.stringify(data.errors)}`);
});
document.querySelector('#siglaEstado').value = ''
  }

  function getTodosEstados() {
    axios
  .get(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/estados`)
  .then(function (response) {
    const estados = response.data
    console.log(estados);
    function estadoListadas() {
      listaEstado = ''
      estados.map(cidade => {
        listaEstado = listaEstado+`<li key=${cidade.id}> ${cidade.nome} </li>`
      }
      )
      return listaEstado
    }
    document.querySelector('.text').innerHTML = `
    <h1>Estado</h1>
    <ul>
      ${estadoListadas()}
    </ul>
`
  })
  .catch(function (error) {
    const { data, status } = error.response;
    console.warn(`Status ${status}`);
    console.warn(`Dados ${JSON.stringify(data.errors)}`);
});
  }