const data = [
    {
        title: 'Квадрат №1'
    },
    {
        title: 'Квадрат №2'
    },
    {
        title: 'Квадрат №3'
    },
    {
        title: 'Квадрат №4'
    }
];

const container = document.querySelector('.container');

data.forEach(element => {
    const square = document.createElement('div'); //создание нового элемента div
    square.className = 'square'; //добавление нового класса
    square.innerText = element.title; //добавление текста внутрь элемента div
    container.append(square);

    // Добавление обработчика события клика для каждого квадрата
    // square.onClick = function() {
    //     square.classList.toggle('active'); // переключение класса active для квадрата
    // }
    square.addEventListener('click', function(){ 
        square.classList.toggle('active');
    })
});