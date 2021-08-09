const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let exprArray = []
  for (let i = 0; i < expr.length; i += 10) {
    exprArray.push(expr.slice(i, i + 10))
  }
  
  return exprArray.map(letter => letter[0] == '*' ? ' ' :
    MORSE_TABLE[toMorse(letter)]).join('')
}

function toMorse(letter) {
  if (letter[0] == '*') return letter

  let decodeLetter = []
  let i = 0
  while(letter) {
    decodeLetter.push(letter % 10 ? '-' : '.')
    i++ 
    letter = Math.trunc(letter / 100)
  }

  return decodeLetter.reverse().join('')
}

module.exports = {
  decode
}