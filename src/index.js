import throttle from 'lodash.throttle';

const STORAGE_KEY = 'massage';

const formRef = document.querySelector('.js-form');
const textareaRef = document.querySelector('.js-form textarea');

formRef.addEventListener('submit', onFormSubmit);
textareaRef.addEventListener('input', throttle(onTextareaInput, 300));

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(e) {
  const value = e.target.value;
  localStorage.setItem(STORAGE_KEY, value);
}

function populateTextarea() {
  const saveMassage = localStorage.getItem(STORAGE_KEY);

  if (saveMassage) {
    textareaRef.value = saveMassage;
  }
}

{
  function XO(str) {
    const strLowerCase = str.toLowerCase();
    let x = 0;
    let o = 0;

    for (let i = 0; i < strLowerCase.length; i += 1) {
      if (strLowerCase[i] === 'x') {
        x += 1;
      } else if (strLowerCase[i] === 'o') {
        o += 1;
      }
    }

    return x === o;
  }

  // console.log(XO('xxooXok'));
}

{
  function findShort(s) {
    const sArr = s.split(' ');
    let minNum = Infinity;
    sArr.map(el => {
      if (el.length < minNum) {
        minNum = el.length;
      }
    });
    return minNum;
  }

  // console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
}

{
  function stray(numbers) {
    let same;
    for (let i = 0; i < numbers.length; i += 1) {
      for (let j = i + 1; j < numbers.length; j += 1) {
        if (numbers[i] === numbers[j]) {
          same = numbers[i];
        }
      }
      if (same !== numbers[i]) {
        return numbers[i];
      }
    }
  }

  // console.log(stray([17, 17, 17, 3, 17, 17, 17, 17]));
}

{
  function updateLight(current) {
    if (current === 'green') {
      return 'yellow';
    } else if (current === 'yellow') {
      return 'red';
    }

    return 'green';
  }

  // console.log(updateLight('green'));
}

{
  function grow(x) {
    let product = 1;
    for (let i = 0; i < x.length; i += 1) {
      product *= x[i];
    }
    return product;
  }

  // console.log(grow([2, 4, 6]));
}

{
  function barista(coffees) {
    const sortOrders = [...coffees].sort((x, y) => x - y);
    let newElem = -2;

    return sortOrders
      .map(a => (newElem += a + 2))
      .reduce((b, c) => {
        return b + c;
      }, 0);
  }

  // console.log(barista([2, 10, 5, 3, 9])); // 85
  // console.log(barista([4, 3, 2])); // 22
  // console.log(barista([20, 5])); // 32
}

{
  function arrayDiff(a, b) {
    return a.filter(e => e !== b[b.indexOf(e)]);
  }

  // console.log(arrayDiff([3, 1, 2, 2, 3, 1, 5, 4], [2, 1, 4])); // [3, 3, 5]
}

{
  function arrayDiff(a, b) {
    let res = [];
    for (let i = 0; i < a.length; i += 1) {
      if (!b.includes(a[i])) {
        res.push(a[i]);
      }
    }
    return res;
  }

  // console.log(arrayDiff([3, 1, 2, 2, 3, 1, 5, 4], [2, 1, 4])); // [3, 3, 5]
}

{
  /* ---- ПРОМИСЫ ---- */

  // console.log('before promise');

  const promise = new Promise((resolve, reject) => {
    resolve('Good');
    reject('Error');
  });

  // console.log(promise);

  /*

  promise.then(
    result => {
      console.log(result);
    },
    error => {
      console.log(error);
    }
  );

  */

  promise
    .then(result => {
      result; // ✅ выполняется, если всё хорошо (нет ошибок)
      return '100';
    })
    .then(x => {
      x; // ✅ выполняется, если всё хорошо (нет ошибок)
      return 200;
    })
    .then(y => {
      y; // ✅ выполняется, если всё хорошо (нет ошибок)
    })
    .catch(err => {
      err; // ⚠️ выполняется только в случае ошибки
    })
    .finally(() => {
      'will be done anyway'; // ⏩ выполняется в любом случае
    });

  // console.log('after promise');

  const makeOrder = dish => {
    return Promise.resolve(`All good. Here is your ${dish}`); // применяется там где не бывает ошибок
  };

  makeOrder('bread').then(result => result);

  // console.log('end');
}

{
  function squareSum(numbers) {
    let sum = 0;
    numbers.map(e => Math.pow(e, 2)).map(e => (sum += e));

    return sum;
  }

  // console.log(squareSum([1, 2]));
  // console.log(squareSum([0, 3, 4, 5]));
  // console.log(squareSum([]));
}

{
  // ==== вариант 1

  // function alphabetPosition(str) {
  //   const strSplit = str.toLowerCase().split('');
  //   const resArr = [];

  //   for (let i = 0; i < strSplit.length; i += 1) {
  //     if (strSplit[i].charCodeAt() >= 97 && strSplit[i].charCodeAt() <= 122) {
  //       resArr.push(strSplit[i].charCodeAt() - 96);
  //     }
  //   }

  //   return resArr.join(' ');
  // }

  // ==== вариант 2

  // function alphabetPosition(str) {
  //   const strSplit = str.toLowerCase();
  //   const resArr = [];

  //   for (let i = 0; i < strSplit.length; i += 1) {
  //     if (strSplit[i].charCodeAt() >= 97 && strSplit[i].charCodeAt() <= 122) {
  //       resArr.push(strSplit[i].charCodeAt() - 96);
  //     }
  //   }

  //   return resArr.join(' ');
  // }

  // ==== вариант 3

  function alphabetPosition(str) {
    const strSplit = str.toLowerCase();
    let resStr = '';

    for (let i = 0; i < strSplit.length; i += 1) {
      if (strSplit[i].charCodeAt() >= 97 && strSplit[i].charCodeAt() <= 122) {
        resStr = resStr + (strSplit[i].charCodeAt() - 96) + ' ';
      }
    }

    return resStr.trim();
  }

  // console.log(alphabetPosition("The sunset sets at twelve o' clock 1."));
}

{
  function isIsogram(str) {
    const strLowerCase = str.toLowerCase();
    let repeat = '';

    for (let i = 0; i < strLowerCase.length; i++) {
      for (let y = i + 1; y < strLowerCase.length; y++) {
        if (strLowerCase[i] === strLowerCase[y]) {
          repeat = repeat + strLowerCase[i];
        }
      }
    }

    if (repeat !== '') {
      return false;
    }

    return true;
  }

  // console.log(isIsogram('Dermatoglyphics'));
  // console.log(isIsogram('aba'));
  // console.log(isIsogram('moOse'));
}

{
  function bouncingBall(h, bounce, window) {
    let result = 1;
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
      return -1;
    }

    setParametersOfBouncingBall(h, bounce, window);

    function setParametersOfBouncingBall(h, bounce, window) {
      calculatesTheHeightOfTheBallBounce(h, bounce, window);

      function calculatesTheHeightOfTheBallBounce(h, bounce, window) {
        const ballBounceHeight = h * bounce;

        if (ballBounceHeight > window) {
          result += 2;
        } else {
          return;
        }

        setParametersOfBouncingBall(ballBounceHeight, bounce, window);
      }

      return;
    }

    return result;
  }

  // console.log(bouncingBall(3, 0.66, 1.5));
  // console.log(bouncingBall(3, 1, 1.5));
  // console.log(bouncingBall(30, 0.66, 1.5));
  // console.log(bouncingBall(4, 0.25, 1));
}

{
  function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
      return -1;
    }

    const newHeight = h * bounce;
    return bouncingBall(newHeight, bounce, window) + 2;
  }

  // console.log(bouncingBall(3, 0.66, 1.5));
  // console.log(bouncingBall(3, 1, 1.5));
  // console.log(bouncingBall(30, 0.66, 1.5));
  // console.log(bouncingBall(4, 0.25, 1));
}

{
  function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
  }

  // console.log(sumTwoSmallestNumbers([8, 2, 3, 5, 9, 4, 7]));
  // console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
}

{
  function friend(friends) {
    return friends.filter(e => e.length === 4);
  }

  // console.log(friend(['Ryan', 'Kieran', 'Jason', 'Yous']));
}

{
  // function longest(s1, s2) {
  //   const c = [...s1, ...s2];
  //   const d = [];
  //   for (let i = 0; i < c.length; i++) {
  //     if (d.some(e => e === c[i])) {
  //       continue;
  //     }
  //     d.push(c[i]);
  //   }

  //   return d.sort().join('');
  // }

  function longest(s1, s2) {
    return [...new Set(s1 + s2)].sort().join('');
  }

  // console.log(longest('ahsdbdhsbddgrdcvd', 'jggejkgfndfujvhdxvdrkp'));
}

{
  function findEvenIndex(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let index = -1;

    for (let i = 0; i < arr.length; i += 1) {
      for (let j = i + 1; j < arr.length; j += 1) {
        rightSum = rightSum + arr[j];
      }

      if (leftSum === rightSum) {
        return (index = i);
      } else {
        rightSum = 0;
      }

      leftSum = leftSum + arr[i];
    }

    return index;
  }

  // console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
  // console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
  // console.log(findEvenIndex([10, -80, 10, 10, 10, 15, 35])); // 0
  // console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
}

{
  function solution(str, ending) {
    return str.slice(str.length - ending.length, str.length) === ending;
  }

  // =========== лучший вариант с codewars

  // function solution(str, ending){
  //   return str.endsWith(ending);
  // }

  // console.log(solution('abc', 'bc')); // returns true
  // console.log(solution('abc', 'd')); // returns false
}

{
  function likes(names) {
    let massage = '';

    if (names.length === 0) {
      massage = `no one likes this`;
    } else if (names.length === 1) {
      massage = `${names[0]} likes this`;
    } else if (names.length === 2) {
      massage = `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
      massage = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (names.length > 3) {
      massage = `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
    }

    return massage;
  }

  // console.log(likes([])); //  "no one likes this"
  // console.log(likes(['Peter'])); //  "Peter likes this"
  // console.log(likes(['Jacob', 'Alex'])); //  "Jacob and Alex like this"
  // console.log(likes(['Max', 'John', 'Mark'])); //  "Max, John and Mark like this"
  // console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); //  "Alex, Jacob and 2 others like this"
}

{
  function validatePIN(pin) {
    return (pin.length === 4 || pin.length === 6) && /^[0-9]+$/.test(pin);
  }

  // console.log(validatePIN('1234')); // true
  // console.log(validatePIN('12345')); // false
  // console.log(validatePIN('a234')); // false
  // console.log(validatePIN('0000')); // true
  // console.log(validatePIN('-234')); // false
  // console.log(validatePIN('1.34')); // false
  // console.log(validatePIN('23.0')); // false
}

{
  function getDivisorsCnt(n) {
    let result = 0;

    for (let i = 1; i <= n; i += 1) {
      if (Number.isInteger(n / i)) {
        result += 1;
      }
    }

    return result;
  }

  // console.log(getDivisorsCnt(4));
}

{
  function isValidWalk(walk) {
    let n = 0;
    let s = 0;
    let w = 0;
    let e = 0;

    for (let i = 0; i < walk.length; i++) {
      if (walk[i] === 'n') {
        n += 1;
      } else if (walk[i] === 's') {
        s += 1;
      } else if (walk[i] === 'w') {
        w += 1;
      } else if (walk[i] === 'e') {
        e += 1;
      }
    }

    if (walk.length === 10 && n === s && w === e) {
      return true;
    }

    return false;
  }

  // console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
  // console.log(
  //   isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
  // );
}

{
  function duplicates(srt) {
    const arr = [];

    for (let i = 0; i < str.length; i += 1) {
      for (let j = i + 1; j < str.length; j += 1) {
        if (condition) {
        }
      }
    }
  }
  // console.log(duplicates('abcde')); // 0 # no characters repeats more than once
  // console.log(duplicates('aabbcde')); // 2 # 'a' and 'b'
  // console.log(duplicates('aabBcde')); // 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
  // console.log(duplicates('indivisibility')); // 1 # 'i' occurs six times
  // console.log(duplicates('Indivisibilities')); // 2 # 'i' occurs seven times and 's' occurs twice
  // console.log(duplicates('aA11')); // 2 # 'a' and '1'
  // console.log(duplicates('ABBA')); // 2 # 'A' and 'B' each occur twice
}

{
  const barcodeArr = [
    046100698500332072, 046100698500331891, 046100698500336728,
    046100698500420175, 046100698500419780, 046100698500340930,
    046100698500258808, 046100698500430730, 046100698500418936,
    046100698500424135, 046100698500423336, 046100698500421608,
    046100698500423633, 046100698500264052, 046100698500276635,
    046100698500427549, 046100698500368798, 046100698500379879,
    046100698500437968, 046100698500377783, 046100698500377509,
    046100698500327207, 046100698500409712, 046100698500403178,
    046100698500320222, 046100698500368590, 046100698500371323,
    046100698500426115, 046100698500416642,
  ];
  function checksForMatches(arr) {
    let amountOfNumbers = 0;
    for (let i = 0; i < arr.length; i += 1) {
      amountOfNumbers += 1;
      for (let j = i + 1; j < arr.length; j += 1) {
        if (arr[i] === arr[j]) {
          return `есть повтор ${arr[i]}`;
        }
      }
    }
    return `Повторов нет. Всего ${amountOfNumbers} уникальных номеров.`;
  }

  console.log(checksForMatches(barcodeArr));
}
