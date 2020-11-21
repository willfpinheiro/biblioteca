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

  function getPessoasFisicasCPF() {
    const cpf = parseInt(document.querySelector('#carregarCPF').value);
    axios
  .get(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/pessoaFisicas/${cpf}`)
  .then(function (response) {
    const pessoa = response.data
    // document.querySelector('.text').innerHTML = `${JSON.stringify(response.data)}`
    document.querySelector('#cpf').value = pessoa.cpf
    document.querySelector('#dataEmissaoRg').value = pessoa.dataEmissaoRg
    document.querySelector('#dataNascimento').value = pessoa.dataNascimento
    document.querySelector('#email').value = pessoa.email
    document.querySelector('#estadoCivil').value = pessoa.estadoCivil
    document.querySelector('#genero').value = pessoa.genero
    document.querySelector('#nome').value = pessoa.nome
    document.querySelector('#orgaoEmissor').value = pessoa.orgaoEmissor
    document.querySelector('#rg').value = pessoa.rg
    document.querySelector('#update').value = pessoa.id
  })
  .catch(function (error) {
    const { data, status } = error.response;
    console.warn(`Status ${status}`);
    console.warn(`Dados ${JSON.stringify(data.errors)}`);
});
  }


  function limpaCampos() {
    document.querySelector('#cpf').value = ''
    document.querySelector('#dataEmissaoRg').value = ''
    document.querySelector('#dataNascimento').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#estadoCivil').value = ''
    document.querySelector('#genero').value = ''
    document.querySelector('#nome').value = ''
    document.querySelector('#orgaoEmissor').value = ''
    document.querySelector('#rg').value = ''
    document.querySelector('#update').value = ''
    document.querySelector('#carregarCPF').value = ''
  }

  function postPessoasFisicas() {
    const cpf = document.querySelector('#cpf').value
    const dataEmissaoRg = document.querySelector('#dataEmissaoRg').value
    const dataNascimento = document.querySelector('#dataNascimento').value
    const email = document.querySelector('#email').value
    const estadoCivil = document.querySelector('#estadoCivil').value
    const genero = document.querySelector('#genero').value
    const nome = document.querySelector('#nome').value
    const orgaoEmissor = document.querySelector('#orgaoEmissor').value
    const rg = document.querySelector('#rg').value
    const pessoa = {
      "cpf": `${cpf}`,
      "dataEmissaoRg": `${dataEmissaoRg}`,
      "dataNascimento": `${dataNascimento}`,
      "email": `${email}`, 
      "estadoCivil": `${estadoCivil}`,
      "genero": `${genero}`,
      "nome": `${nome}`,
      "orgaoEmissor": `${orgaoEmissor}`,
      "rg": `${rg}`
    };
    axios
    .post('https://cadastro-pessoas-cassio.herokuapp.com/api/v1/pessoaFisicas', pessoa)
    .then(getPessoasFisicas())
    .catch(function (error) {
      const { data, status } = error.response;
      console.warn(`Status ${status}`);
      console.warn(`Dados ${JSON.stringify(data.errors)}`);
  });
  limpaCampos();
  getPessoasFisicas();
  };

  function putPessoasFisicas(){
    const id = document.querySelector('#update').value
    const cpf = document.querySelector('#cpf').value
    const dataEmissaoRg = document.querySelector('#dataEmissaoRg').value
    const dataNascimento = document.querySelector('#dataNascimento').value
    const email = document.querySelector('#email').value
    const estadoCivil = document.querySelector('#estadoCivil').value
    const genero = document.querySelector('#genero').value
    const nome = document.querySelector('#nome').value
    const orgaoEmissor = document.querySelector('#orgaoEmissor').value
    const rg = document.querySelector('#rg').value
    const pessoa = {
      "id": `${id}`,
      "cpf": `${cpf}`,
      "dataEmissaoRg": `${dataEmissaoRg}`,
      "dataNascimento": `${dataNascimento}`,
      "email": `${email}`, 
      "estadoCivil": `${estadoCivil}`,
      "genero": `${genero}`,
      "nome": `${nome}`,
      "orgaoEmissor": `${orgaoEmissor}`,
      "rg": `${rg}`
    };
    axios.put(`https://cadastro-pessoas-cassio.herokuapp.com/api/v1/pessoaFisicas`, pessoa)
    .then(getPessoasFisicas())
.catch(function (error) {
  const { data, status } = error.response;
  console.warn(`Status ${status}`);
  console.warn(`Dados ${JSON.stringify(data.errors)}`);
})
limpaCampos();
getPessoasFisicas();
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
  getPessoasFisicas()
  };