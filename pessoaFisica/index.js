  function getPessoasFisicas() {
    axios
  .get('https://cadastro-pessoas-cassio.herokuapp.com/api/v1/pessoaFisicas')
  .then(function (response) {
    console.log(response);
    document.querySelector('.text').innerHTML = `
    <h1>Informações</h1>
    <pre>
    ${JSON.stringify(response.data,null,'\t')}
    </pre>
`
  })
  .catch(function (error) {
    const { data, status } = error.response;
    console.warn(`Status ${status}`);
    console.warn(`Dados ${JSON.stringify(data.errors)}`);
});
  }

  function postPessoasFisicas() {
    const pessoa = {
      "cpf": '97539449268',
      "dataEmissaoRg": "2005-05-12",
      "dataNascimento": "1998-05-12",
      "email": "emanilgeral@gmail.com",
      "estadoCivil": "Casada",
      "genero": "Feminino",
      "nome": "Jorgin",
      "orgaoEmissor": "DETRAN",
      "rg": '4523488'
    };
    axios
    .post('https://cadastro-pessoas-cassio.herokuapp.com/api/v1/pessoaFisicas', pessoa)
    .then(getPessoasFisicas())
    .catch(function (error) {
      const { data, status } = error.response;
      console.warn(`Status ${status}`);
      console.warn(`Dados ${JSON.stringify(data.errors)}`);
  });
  };

  function putPessoasFisicas(){
    const id = document.querySelector('#update').value
    const pessoa = {
      "id": `${id}`,
      "cpf": '97539449268',
      "dataEmissaoRg": "2005-05-12",
      "dataNascimento": "1998-05-12",
      "email": "emailnovo@gmail.com", 
      "estadoCivil": "Casada",
      "genero": "Feminino",
      "nome": "Jorgin",
      "orgaoEmissor": "DETRAN",
      "rg": '4523488'
    };
    axios.put(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/pessoaFisicas`, pessoa)
    .then(getPessoasFisicas())
.catch(function (error) {
  const { data, status } = error.response;
  console.warn(`Status ${status}`);
  console.warn(`Dados ${JSON.stringify(data.errors)}`);
})
  };

  function deletePessoasFisicas() {
    const id = document.querySelector('#delete')
    axios
  .delete(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/pessoaFisicas/${id.value}`)
  .then(getPessoasFisicas)
  .catch(function (error) {
    const { data, status } = error.response;
    console.warn(`Status ${status}`);
    console.warn(`Dados ${JSON.stringify(data.errors)}`);
})
  id.value = ''
  };