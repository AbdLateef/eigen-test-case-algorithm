// soal 1 reverse alphabet

function reverseAlphabets(str) {
    const chars = str.split('');
    const reversedChars = [];
    for (let i = chars.length-1; i >= 0; i--) {
      if (/[a-zA-Z]/.test(chars[i])) {
        reversedChars.push(chars[i]);
      }
    }
    reversedChars.push(chars[chars.length-1]);
    const reversedStr = reversedChars.join('');
    return reversedStr;
}
const originalStr = "NEGIE1";
const reversedStr = reverseAlphabets(originalStr);
console.log('Soal 1:', reversedStr); 


//soal 2 cari kata terpanjang dari kalimat
function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWordLength = 0;
    let longestWord = '';
    for (const word of words) {
      const wordLength = word.length;
      if (wordLength > longestWordLength) {
        longestWordLength = wordLength;
        longestWord = word;
      }
    }
    return longestWord;
}
  
const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longestWord = findLongestWord(sentence);
console.log('Soal 2:', longestWord)

//soal 3 mencari value array yang ada di kedua array
function countWordOccurrences(input, query) {
    const counts = [];
    for (const queryWord of query) {
        let count = 0;  
        for (const inputWord of input) {
            if (queryWord === inputWord) {
                count++;
            }
        }
        counts.push(count);
    } 
    return counts;
}
const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];
const counts = countWordOccurrences(input, query);
console.log('Soal 3:', counts);

// soal 4 pengurangan dari jumlah diagonal sebuah matrik
function calculateDiagonalDifference(matrix) {
    const n = matrix.length;
  
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
  
    for (let i = 0; i < n; i++) {
      primaryDiagonalSum += matrix[i][i];
      secondaryDiagonalSum += matrix[n - i - 1][i];
    }
  
    const difference = primaryDiagonalSum - secondaryDiagonalSum;
    return difference;
}  
const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
];  
const difference = calculateDiagonalDifference(matrix);
console.log('Soal 4:', difference);