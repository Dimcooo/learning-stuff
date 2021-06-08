{
    // Строки, числа, логические значения передаются в функцию по значению
    console.log('Передача по значению:');
    let a = 42
    let b = a
    b++
    console.log('a', a)
    console.log('b', b)
    console.log('');
}

{
    // Объекты и массивы передаются по ссылке
    console.log('Передача по ссылке:');
    let a = [1, 2, 3]
    let b = a
    b.push(4)

    let c = [1, 2, 3, 4]

    console.log('a', a)
    console.log('b', b)

    console.log(a === b)
    console.log(a === c)
}
