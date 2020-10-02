/* Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file? */

let fs = require("fs");

fs.readFile("p022_names.txt", "utf-8", (err, data) => {
  let nomes = data.split(",").sort();
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let totalSum = 0;
  let maiorScore = 0;
  let nomeMaiorScore = '';
  for (let i = 0; i < nomes.length; i++) {
    let soma = 0;

    for (let j = 0; j < nomes[i].length; j++) {
      //console.log(nomes[i][j]);
      let value = alphabet.indexOf(nomes[i][j]);
      if (value !== -1) {
        soma += value + 1;
      }
    }
    //console.log(nomes[i], soma);
    let score = soma * (i + 1); // sum time position in the list
    totalSum += score;
    //Verifies the biggest individual score and the name who has it
    if(score > maiorScore) {
      maiorScore = score;
      nomeMaiorScore = nomes[i];
    }
  }
  console.log(nomeMaiorScore, maiorScore);
  console.log(totalSum);
});
