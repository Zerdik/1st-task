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

// function sss() {
//     a = parseFloat(prompt('Число 1 '));
//     b = parseFloat(prompt('Число 2 '));
//     el = document.getElementById('text1');
//     if (window.getComputedStyle(el).color == "rgb(255, 0, 0)") {
//         el.style.backgroundColor = "green";
//     } else
//         el.style.backgroundColor = "red";


//     if (a > b) {
//         alert("А я говорил что оно будет больше")
//     } else
//         alert("А я говорил что оно будет меньше ")

// }
// console.log('123')

// sss()


// function asd() {
//     for (let i = 0; i < 3; i++) {
//         alert(i);
//     }
// }

// asd()

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