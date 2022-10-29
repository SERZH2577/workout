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
