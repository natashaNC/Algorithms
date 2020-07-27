// Strings: Quick Brown Fox
// Given a multidimensional array of words (there can be any number of inner arrays and the arrays can be of any length)

// const words = [
// ["quick", "lazy"],
// ["brown", "red", "grey"],
// ["fox", "dog"]
// ];

// return an array of all combinations of the words combined

// combinations = [
// "quick brown fox",
// "quick brown dog",
// "quick red fox",
// "quick red dog",
// "quick grey fox",
// "quick grey dog",
// "lazy brown fox",
// "lazy brown dog",
// "lazy red fox",
// "lazy red dog",
// "lazy grey fox",
// "lazy grey dog"
// ]

//Recursive Option
const words = [
  ["quick", "lazy"],
  ["brown", "red", "grey"],
  ["fox", "dog"]
];

function allCombs(words) {

  const results = [];

  function helper(current, level) {
    if (level === words.length) {
      results.push(current);
    } else {
      for (let i = 0; i < words[level].length; i++) {
        helper(current + words[level][i] + " ", level + 1);
      }
    }
  }

  helper("", 0);
  return results;
}

console.log(allCombs(words));

//first output is words [0][0],[1][0],[2][0]
//then [0][0],[1][0],[2][1]
//then [0][0],[1][0],[2][2]
// so it gets to the end and then fills out possibilities



  // const words = [
  // ["quick", "lazy"], //0
  // ["brown", "red", "grey"], //1
  // ["fox", "dog"], //2
  // ];



  // return an array of all combinations of the words combined

  // combinations = [
  // "quick brown fox",
  // "quick brown dog",
  // "quick red fox",
  // "quick red dog",
  // "quick grey fox",
  // "quick grey dog",
  // "lazy brown fox",
  // "lazy brown dog",
  // "lazy red fox",
  // "lazy red dog",
  // "lazy grey fox",
  // "lazy grey dog"
  // ]
