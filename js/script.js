const resp1 = document.querySelector(".outResp1");
const resp2 = document.querySelector(".outResp2");
const resp3 = document.querySelector(".outResp3");
const resp4 = document.querySelector(".outResp4");

const btnModal1 = document.querySelector("#btnM1");
const btnModal2 = document.querySelector("#btnM2");
const btnModal3 = document.querySelector("#btnM3");
const btnModal4 = document.querySelector("#btnM4");

const input1 = document.querySelector("#inModal1");
const input2 = document.querySelector("#inModal2");
const input3 = document.querySelector("#inModal3");
const input4 = document.querySelector("#inModal4");
const input5 = document.querySelector("#inModal5");

// 1. Contar as ocorrências de cada palavra em uma string:
// - Função: countWordOccurrences(str)
// - Esta função deve retornar um vetor que mapeia cada palavra única na string para o número de vezes que ela aparece.
// - Exemplo de uso: countWordOccurrences("Lorem ipsum dolor sit amet ipsum") deve retornar [["Lorem", 1], ["ipsum", 2], ["dolor", 1], ["sit", 1], ["amet", 1 ]].

function countWordOccurrences(str) {
  const palavras = str.split(" ");
  const contagem = {};

  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];
    if (contagem[palavra]) {
      contagem[palavra] += 1;
    } else {
      contagem[palavra] = 1;
    }
  }

  const resultado = [];

  for (let palavra in contagem) {
    resultado.push([palavra, contagem[palavra]]);
  }

  resp1.innerText = resultado;
}

btnModal1.addEventListener("click", () => {
  const valor = input1.value;
  countWordOccurrences(valor); //mudar para o console.log para mostrar ao professor que deu certo!
});

// 2. Inverter a capitalização das letras em uma string:
//    - Função: invertCapitalization(str)
//    - Esta função deve inverter a capitalização de todas as letras na string, ou seja, letras maiúsculas se tornam minúsculas e vice-versa.
//    - Exemplo de uso: invertCapitalization("HeLLo WoRLD") deve retornar "hEllO wOrld".

function invertCapitalization(str) {
  let resultado = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      resultado += str[i].toLowerCase();
    } else {
      resultado += str[i].toUpperCase();
    }
  }
  resp2.innerText = resultado;
}

btnModal2.addEventListener("click", () => {
  const valor = input2.value;
  invertCapitalization(valor);
});

// 3- Gerar um acrônimo a partir de uma frase:
//    - Função: `generateAcronym(str)`
//    - Esta função deve gerar um acrônimo a partir das palavras na frase, pegando a primeira letra de cada palavra e convertendo em maiúscula.
//    - Exemplo de uso: `generateAcronym("World Wide Web")` deve retornar "WWW".

function generateAcronym(str) {
  let array = str.split(" ");
  let iniciais = "";
  array.forEach((item) => {
    iniciais += item[0];
  });
  resp3.innerText = `Saida: ${iniciais.toUpperCase()}`;
}

btnModal3.addEventListener("click", () => {
  const valor = input3.value;
  generateAcronym(valor);
});

// 4. Verificar se uma string é uma anagrama de outra:
//    - Função: areAnagrams(str1, str2)
//    - Esta função deve verificar se as duas strings são anagramas, ou seja, se contêm as mesmas letras em ordem diferente.
//    - Exemplo de uso: areAnagrams("listen", "silent") deve retornar true.

function areAnagrams(str1, str2) {
  let texto1 = str1.toLowerCase().split(" ").join("");
  let texto2 = str2.toLowerCase().split(" ").join("");
  let lista1 = texto1.split("");
  let lista2 = texto2.split("");
  let arruma1 = lista1.sort();
  let arruma2 = lista2.sort();
  let listaFinal1 = arruma1.join("");
  let listaFinal2 = arruma2.join("");
  if (listaFinal1 === listaFinal2) {
    resp4.innerText = true;
  } else {
    resp4.innerText = false;
  }
}

btnModal4.addEventListener("click", () => {
  const valor1 = input4.value;
  const valor2 = input5.value;
  areAnagrams(valor1, valor2);
});
