  function getCidades() {
    const siglaCIdade = document.querySelector('#siglaCidade').value.toUpperCase();
    axios
  .get(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/cidades/${siglaCIdade}`)
  .then(function (response) {
    const cidades = response.data
    console.log(cidades);
    function cidadesListadas() {
      listaDeCidade = ''
      cidades.map(cidade => {
        listaDeCidade = listaDeCidade+`<li key=${cidade.id}> ${cidade.nome} </li>`
      }
      )
      return listaDeCidade
    }
    document.querySelector('.text').innerHTML = `
    <h1>Cidades</h1>
    <ul>
      ${cidadesListadas()}
    </ul>
`
  })
  .catch(function (error) {
    const { data, status } = error.response;
    console.warn(`Status ${status}`);
    console.warn(`Dados ${JSON.stringify(data.errors)}`);
});
  }