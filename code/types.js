// ключевое слово typeof возвращает информацию о типе переменной/значения

console.log('Базовые типы данных:');
console.log(typeof 0)
console.log(typeof true)
console.log(typeof 'Javascript') // "", '', ``
console.log(typeof undefined)
console.log(typeof Math)
console.log(typeof Symbol('JS'))
console.log(typeof null)
console.log(typeof function() {})
console.log(typeof NaN)
console.log('');

/**
 Приведение типов. Оператор if должен получить значение типа boolean, но в примере ниже мы передаем строку,
 но node может автоматически преобразовать строку в boolean значение
 */
console.log('Приведение типов:');
let language = 'JavaScript'
if (language) {
  console.log('The best language is: ', language)
}
console.log('');

// '', 0, null, undefined, NaN, false - false values (значения, которые могут преобразовываться в false)
console.log('false values:');
console.log(Boolean(''))
console.log(Boolean('Hello'))
console.log(Boolean(' '))
console.log(Boolean('0'))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean([]))
console.log(Boolean({}))
console.log(Boolean(function(){}))
console.log('');

// Различные приколы с приведением типов:
console.log('Приколы с типами:');
console.log(1 + '2') // string 12
console.log('' + 1 + 0)
console.log('' - 1 + 0)
console.log('3' * '8') // number
console.log(4 + 10 + 'px')
console.log('px' + 5 + 10) // string
console.log('42' - 40)
console.log('42px' - 2)
console.log(null + 2)
console.log(undefined + 42)
console.log('');

// Разница между == и === - == сравнивает без учета приведения типов, в отличие от ===. Обычно == почти не используется
console.log('== vs ===');
console.log(2 == '2')
console.log(2 === '2')
console.log(undefined == null)
console.log(undefined === null)
console.log('0' == false)
console.log('0' == 0)
console.log(0 == 0)
console.log('');
