

let btn = document.querySelector('.btn');
btn.addEventListener('click', pesquisar);

function pesquisar() {

  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  let resultados = "";

  //Para cada item de dados escreva
  for (let dado of dados) {

    if(campoPesquisa.length === 0 ){
      resultados = ''; 
      section.innerHTML = `Nenhum resultado foi encontrado, digite no campo de pesquisa!`;
      return;
    };

    if(dado.titulo.toLowerCase().includes(campoPesquisa)|| dado.descricao.toLowerCase().includes(campoPesquisa)){

      resultados += `
        <div class="item-resultado">
                <h2>
                    <a href="#"> ${dado.titulo} </a>
                </h2>
                <p class="descricao-meta">
                    ${dado.descricao}
                </p>
                <a href=" ${dado.link}" target="_blank"> Mais informações</a>
       </div>`
    };

    

  };

  if(!resultados){
    section.innerHTML = `Nenhum resultado foi encontrado , verifique se as palavras foram digitadas corretamente!`;
    return;
  }

  section.innerHTML = resultados;


}