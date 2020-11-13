  function getCidades() {
    const siglaCIdade = document.querySelector('#siglaCidade').value
    axios
  .get(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/cidades/${siglaCIdade}`)
  .then(function (response) {
    const cidades = response.data.nome
    console.log(cidades);
    document.querySelector('.text').innerHTML = `
    <h1>Cidades</h1>
    <ul>
      <li> ${cidades} </li>
    </ul>
`
  })
  .catch(function (error) {
    const { data, status } = error.response;
    console.warn(`Status ${status}`);
    console.warn(`Dados ${JSON.stringify(data.errors)}`);
});
  }