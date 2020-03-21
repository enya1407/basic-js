class VigenereCipheringMachine {
  constructor(isReverse) {
    if (isReverse === undefined) {
      this.isReverse = true;
    } else {
      this.isReverse = isReverse;
    }
  }
  encrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error[RangeError]();

    let alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let result1 = [];
    let key1 = [];

    encryptedMessage.split("").forEach(el => {
      let i = alphabet.indexOf(el.toLowerCase());
      alphabet.includes(el.toLowerCase()) ? result1.push(i) : result1.push(el);
    });

    key.split("").forEach(el => {
      let i = alphabet.indexOf(el.toLowerCase());
      key1.push(i);
    });

    let counter = key1.length;

    for (let i = 0; i < result1.length; i++) {
      let indexKey = key1.length - counter;
      if (typeof result1[i] === "number") {
        result1[i] = key1[indexKey] + result1[i];
        counter -= 1;
        if (counter < 1) {
          counter = key1.length;
        }
      }
    }

    let result = [];

    result1.forEach((el, i) => {
      el >= 26 ? (el -= 26) : el;
      let j = alphabet[el];
      alphabet.includes(j) && el !== encryptedMessage[i] ?
        result.push(j) :
        result.push(el);
    });
    return this.isReverse ?
      result.join("").toUpperCase() :
      result
      .reverse()
      .join("")
      .toUpperCase();
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error[RangeError]();
    let alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let result1 = [];
    let key1 = [];

    encryptedMessage.split("").forEach(el => {
      let i = alphabet.indexOf(el.toLowerCase());
      alphabet.includes(el.toLowerCase()) ? result1.push(i) : result1.push(el);
    });

    key.split("").forEach(el => {
      let i = alphabet.indexOf(el.toLowerCase());
      key1.push(i);
    });

    let counter = key1.length;

    for (let i = 0; i < result1.length; i++) {
      let indexKey = key1.length - counter;
      if (typeof result1[i] === "number") {
        result1[i] = result1[i] - key1[indexKey];
        counter -= 1;
        if (counter < 1) {
          counter = key1.length;
        }
      }
    }

    let result = [];

    result1.forEach((el, i) => {
      el < 0 ? (el += 26) : el;
      let j = alphabet[el];
      alphabet.includes(j) && el !== encryptedMessage[i] ?
        result.push(j) :
        result.push(el);
    });

    return this.isReverse ?
      result.join("").toUpperCase() :
      result
      .reverse()
      .join("")
      .toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;