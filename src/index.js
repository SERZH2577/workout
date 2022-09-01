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

  console.log('before promise');

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
      console.log(result); // ✅ выполняется, если всё хорошо (нет ошибок)
      return '100';
    })
    .then(x => {
      console.log(x); // ✅ выполняется, если всё хорошо (нет ошибок)
      return 200;
    })
    .then(y => {
      console.log(y); // ✅ выполняется, если всё хорошо (нет ошибок)
    })
    .catch(err => {
      console.log(err); // ⚠️ выполняется только в случае ошибки
    })
    .finally(() => {
      console.log('will be done anyway'); // ⏩ выполняется в любом случае
    });

  console.log('after promise');

  const makeOrder = dish => {
    return Promise.resolve(`All good. Here is your ${dish}`); // применяется там где не бывает ошибок
  };

  makeOrder('bread').then(result => console.log(result));

  console.log('end');
}
