document.addEventListener('DOMContentLoaded', function(){  //Событие происходит когда весь HTML был полностью загружен

    var logo = document.getElementById('yarets-logo');

    //функция изменение цвета
    function changeBackground(color) {
        logo.style.backgroundColor = color;
    }

    //функция для получения рандомных цветов
    function getRandomColor () {
        var r=Math.floor(Math.random() * (256));
        var g=Math.floor(Math.random() * (256));
        var b=Math.floor(Math.random() * (256));
        return '#' + r.toString(16) + g.toString(16) + b.toString(16);
    }

    logo.addEventListener('mouseenter', function() {
        logo.classList.remove('logotip');
        changeBackground(getRandomColor());
        setTimeout(function(){logo.classList.add('logotip');},100);
    });


    //меняем цвет по таймеру
    setInterval(function(){
        changeBackground(getRandomColor());
    }, 1000)

});