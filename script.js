var bis = document.getElementsByClassName('T-S__btn');
var dis = document.getElementsByClassName('T-S__list__item-price');


function MyFunc() {
    alert('skype: helper\ntelegram: @randomguy228\ntel:8(800)555-35-35')
}


function onEnter() {
    a.style.backgroundColor = "green";
    a.style.padding = "20px";
    a.style.borderRadius = "20px";

    b.style.color = "blue";
    b.style.fontSize = "30px"
    console.log('123')
}


var modal = document.getElementById("mymodal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

function star(k) {
    k = k - 1
    var asd = ["star_f_1", "star_f_2", "star_f_3", "star_f_4", "star_f_5"];
    b = asd[k]
    a = document.getElementById(b);
    //если зведза с фоном
    if (a.src.indexOf("/img/star_2.png") > -1) {
        //ставим звёзды без фона
        for (let i = 0; i <= k; i++) {
            b = asd[i]
            a = document.getElementById(b);
            a.src = "./img/star_1.png"
        }
    } else {
        for (let i = 0; i < asd.length; i++)
            if (i > k) {
                b = asd[i]
                a = document.getElementById(b);
                a.src = "./img/star_2.png"
            }
    }
}


function mshow() {
    document.getElementById("giffty").style.opacity = 1
}

setTimeout(mshow, 15000)

function check() {

    let name = document.getElementById("name").value
    let lname = document.getElementById("last-name").value
    let mail = document.getElementById("email").value
    let tephone = document.getElementById("tel").value
    if (name == " " || name == "") {
        document.getElementById("error").innerHTML = "Введите имя"
    }
    if (lname == " " || lname == "") {
        document.getElementById("error").innerHTML = "Введите фамилию"
    }
    if (mail == " " || mail == "") {
        document.getElementById("error").innerHTML = "Введите почту"
    }
    if (tephone == " " || tephone == "") {
        document.getElementById("error").innerHTML = "Введите номер телефона"
    }
    if (mail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        document.getElementById("error").innerHTML = "введите корректный адрес"
    }
}

function changePicture(direction) {
    //           -1              0           1                  2               3
    let futbolkas = ['./img/fubol.jpg', './img/photo.png', './img/sss.jpg', './img/photo2.png'];
    let articles = ['yhnmsdf', '8ugbnrv', 'ghvwg2y', 'dghgjwe'];
    let prices = [322, 133445, 554324, 590];
    let names = ["Снежок", "Черныш", "Серый", "Голубь"]

    let left = document.getElementById('pict-left');
    let right = document.getElementById('pict-right');
    let btnLeft = document.getElementById('sw1');
    let btnRight = document.getElementById('sw2');
    let jsbut = document.getElementById('jsbut');
    let jsbut1 = document.getElementById('jsbut1');
    let justname = document.getElementById("justname")
    let jastname = document.getElementById("jastname")

    if (direction === 0) {
        let slicedLeft = left.src.slice(left.src.lastIndexOf('/img/'), left.src.length);
        slicedLeft = '.' + slicedLeft;

        let idF = futbolkas.indexOf(slicedLeft);
        idF++;
        if (idF === futbolkas.length) {
            idF = 0;
        }
        let idR = idF + 1;
        if (idR === futbolkas.length) {
            idR = 0;
        }
        left.src = futbolkas[idF];
        right.src = futbolkas[idR];
        btnLeft.dataset['article'] = articles[idF];
        btnRight.dataset['article'] = articles[idR];
        jsbut.innerText = `${prices[idF]} P`;
        jsbut1.innerText = `${prices[idR]} P`;
        justname.innerText = `${names[idF]}`;
        jastname.innerText = `${names[idR]}`;
    } else {
        let slicedRight = right.src.slice(right.src.lastIndexOf('/img/'), right.src.length);
        slicedRight = '.' + slicedRight;

        let idF = futbolkas.indexOf(slicedRight);
        idF--;
        if (idF === -1) {
            idF = futbolkas.length - 1;
        }
        let idR = idF - 1;
        if (idR === -1) {
            idR = futbolkas.length - 1;
        }
        left.src = futbolkas[idR];
        right.src = futbolkas[idF];
        btnLeft.dataset['article'] = articles[idR];
        btnRight.dataset['article'] = articles[idF];
        jsbut.innerText = `${prices[idR]} P`;
        jsbut1.innerText = `${prices[idF]} P`;
        justname.innerText = `${names[idR]}`;
        jastname.innerText = `${names[idF]}`;
    }

}

var counter = 0;
showSlides(0);

function switchSlides(n) {
    counter += n;
    showSlides(counter);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');
    counter = n;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = "dot";
    }

    if (counter == slides.length) {
        counter = 0;
    } else if (counter < 0) {
        counter = slides.length - 1;
    }
    slides[counter].style.display = "flex";
    dots[counter].classList.add('dot-active');
}

const goods = {
    "yhnmsdf": {
        "name": "Футболка",
        "image": "./img/fubol.jpg",
        "price": 322,
        "count": 0
    },
    "8ugbnrv": {
        "name": "Футболка",
        "image": "./img/photo.png",
        "price": 133445,
        "count": 0
    },
    "ghvwg2y": {
        "name": "Футболка",
        "image": "./img/sss.jpg",
        "price": 554324,
        "count": 0
    },
    "dghgjwe": {
        "name": "Футболка",
        "image": "./img/photo2.png",
        "price": 590,
        "count": 0
    }
};

var chart = {};

document.addEventListener("click", event => {
    let article = event.target.dataset['article'];
    if (article !== undefined) {
        if (event.target.classList.contains('minus')) {
            subFromChart(article);
        } else if (event.target.classList.contains('rampage')) {
            deleteFromChart(article);
        } else {
            if (!chart[article]) {
                chart[article] = goods[article];
                addToChart(article);
            } else {
                addToChart(article);
            }
        }
        drawChart();
    }

});

function addToChart(article) {
    chart[article]["count"]++;
}

function subFromChart(article) {
    chart[article]["count"]--;
    if (chart[article]["count"] == 0) {
        deleteFromChart(article);
    }
}

function deleteFromChart(article) {
    chart[article]['count'] = 0;
    delete chart[article];
}


function drawChart() {
    if (Object.keys(chart).length === 0) {
        document.getElementById("chart").innerHTML = "<h4 class=\"cart__global__g\">Корзина пуста</h4>";
        document.getElementById("cart__is").style.display = "block";
    } else {
        let sum = 0
        let result = `<div class="chart-pos">
        <div class="chart-pos-block">
        </div>
        <div class="chart-pos-block">
        </div>
        <div class="chart-pos-block">
            <h4>НАИМЕНОВАНИЕ ТОВАРА</h4>
        </div>
        <div class="chart-pos-block">
            <h4>ЦЕНА ЗА ШТ.</h4>
        </div>
        <div class="chart-pos-block">
            <h4>КОЛИЧЕСТВО</h4>
        </div>
        <div class="chart-pos-block">
            <h4>ИТОГО</h4>
        </div>
        </div>`;
        let finalprice = 0
        for (let key in chart) {
            let sum = chart[key]['count'] * chart[key]['price']

            result += `<div class="chart-pos">
                        <div class="chart-1ine-block plus32">
                            <button class="rampage" data-article="${key}">&times</button>
                        </div>`;
            result += `<div class="chart-1ine-block img32">
                        <a href="${chart[key]['image']}" class='lightzoom'>
                                <img src="${chart[key]['image']}"/>
                            </a>
                        </div>`;
            result += `<div class="chart-1ine-block name32">
                            <h4>${chart[key]['name']}</h4>
                        </div>`;
            result += `<div class="chart-1ine-block pos32">
                            <div class="priceas">${chart[key]["price"]}</div>
                        </div>`;
            result += `<div class="chart-1ine-block kol32">
                            <button class='minus' data-article="${key}">-</button>
                            <input type="text" value = "${chart[key]['count']}">
                            <button class ='plus' data-article = "${key}">+</button>
                        </div>`
            result += `<div class="chart-1ine-block ol32">
                            <div class="spell">${sum} </div>
                        </div>
                        </div>`

            finalprice += sum
        }

        console.log(finalprice);

        result += `<div class="finalprice"> В   аша итоговая сумма = ${finalprice}</div>`
        document.getElementById("chart").innerHTML = result;
        document.getElementById("cart__is").style.display = "none";
    }

}