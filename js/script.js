// import palavras from "../anagrams1/anagrams.js";

const button = document.getElementById("findButton");
button.onclick = function () {
  let nome = document
    .getElementById("input")
    .value.toLowerCase()
    .trim()
    .replace(" ", "");

  let resultado = [];
  let input = qtdLetras(nome).sort().join("");
  let possivel;

  for (let i = 0; i < palavras.length; i++) {
    possivel = qtdLetras(palavras[i]).sort().join("");
    for (let a = 0; a <= possivel.length; a += 2) {
      if (
        input.indexOf(possivel[a]) >= 0 &&
        possivel[a + 1] <= input[input.indexOf(possivel[a]) + 1]
      ) {
        if (a + 2 === possivel.length) {
          resultado.push(palavras[i]);
        }
      } else {
        break;
      }
    }
  }

  juntar_palavras5(resultado);
  console.log(resultado);
  function juntar_palavras5(palavras_a_juntar) {
    let cinco_palavras = [];
    let tres_palavras = [];
    let duas_palavras = [];
    let comparar_duas, comparar_tres, comparar_cinco;

    for (let a = 0; a < palavras_a_juntar.length; a++) {
      for (let b = 0; b < palavras_a_juntar.length; b++) {
        if (a === b) break;

        comparar_duas = palavras_a_juntar[a] + palavras_a_juntar[b];

        if (comparar_duas.length === nome.length) {
          if (
            comparar_duas.split("").sort().join("") ===
            nome.split("").sort().join("")
          ) {
            duas_palavras.push([palavras_a_juntar[a], palavras_a_juntar[b]]);
          }
        }

        for (let c = 0; c < palavras_a_juntar.length; c++) {
          if (a === c || b === c) break;

          comparar_tres =
            palavras_a_juntar[a] + palavras_a_juntar[b] + palavras_a_juntar[c];
          if (comparar_tres.length === nome.length) {
            if (
              comparar_tres.split("").sort().join("") ===
              nome.split("").sort().join("")
            ) {
              tres_palavras.push([
                palavras_a_juntar[a],
                palavras_a_juntar[b],
                palavras_a_juntar[c],
              ]);
            }
          }

          for (let d = 0; d < palavras_a_juntar.length; d++) {
            if (a === d || b === d || c === d) break;

            for (let e = 0; e < palavras_a_juntar.length; e++) {
              if (a === e || b === e || c === e || d === e) break;
              comparar_cinco =
                palavras_a_juntar[a] +
                palavras_a_juntar[b] +
                palavras_a_juntar[c] +
                palavras_a_juntar[d] +
                palavras_a_juntar[e];
              if (comparar_cinco.length === nome.length) {
                if (
                  comparar_cinco.split("").sort().join("") ===
                  nome.split("").sort().join("")
                ) {
                  cinco_palavras.push([
                    palavras_a_juntar[a],
                    palavras_a_juntar[b],
                    palavras_a_juntar[c],
                    palavras_a_juntar[d],
                    palavras_a_juntar[e],
                  ]);
                }
              }
            }
          }
        }
      }
    }

    for (let f = 0; f < cinco_palavras.length; f++) {
      cinco_palavras[f] = cinco_palavras[f].sort();
    }
    cinco_palavras = cinco_palavras.sort();

    let final = remove_iguais(cinco_palavras);
    document.getElementById("res_cinco").innerHTML = "";
    document.getElementById("res_cinco").innerHTML +=
      "<div class='topo'>Foi encontrado " +
      final.length +
      " anagramas<br /> de cinco palavras: <br></b>";

    for (let i = 0; i < final.length; i++) {
      document.getElementById("res_cinco").innerHTML +=
        i % 2 === 0
          ? "<div class='par'>" + final[i] + "</div>"
          : "<div class='impar'>" + final[i] + "</div>";
    }
    //////////////////////
    for (let g = 0; g < tres_palavras.length; g++) {
      tres_palavras[g] = tres_palavras[g].sort();
    }
    tres_palavras = tres_palavras.sort();

    let final_tres = remove_iguais(tres_palavras);
    document.getElementById("res_tres").innerHTML = "";
    document.getElementById("res_tres").innerHTML +=
      "<div class='topo'>Foi encontrado " +
      final_tres.length +
      " anagramas<br /> de três palavras: <br>";

    for (let i = 0; i < final_tres.length; i++) {
      document.getElementById("res_tres").innerHTML +=
        i % 2 === 0
          ? "<div class='par'>" + final_tres[i] + "</div>"
          : "<div class='impar'>" + final_tres[i] + "</div>";
    }
    ///////////////////
    for (let h = 0; h < duas_palavras.length; h++) {
      tres_palavras[h] = tres_palavras[h].sort();
    }

    document.getElementById("res_duas").innerHTML = "";
    document.getElementById("res_duas").innerHTML +=
      "<div class='topo'>Foi encontrado " +
      duas_palavras.length +
      " anagramas<br /> de duas palavras: </div>";

    for (let i = 0; i < duas_palavras.length; i++) {
      document.getElementById("res_duas").innerHTML +=
        i % 2 === 0
          ? "<div class='par'>" + duas_palavras[i] + "</div>"
          : "<div class='impar'>" + duas_palavras[i] + "</div>";
    }
  }

  function remove_iguais(arr) {
    return Array.from(new Set(arr.map((subarr) => subarr.join(" "))));
  }

  function qtdLetras(nome) {
    let busca = [];
    for (let i = 0; i < nome.length; i++) {
      busca.push(nome[i].concat(nome.split(nome[i]).length - 1));
    }

    let totalLetras = busca.filter(function (item) {
      return busca.hasOwnProperty(item) ? false : (busca[item] = true);
    });

    return totalLetras;
  }
};
