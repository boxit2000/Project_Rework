
function check1() {
    if (document.getElementById("firstImg").src == document.getElementById("thumb1").src) {
        let inner = "";
        let inHTML = document.getElementById('anh1');
        inHTML.innerHTML = "";
        inner += `
        <img src="Img_Chi_Tiết_SP/1.webp" alt="" id="thumb1" onclick="click1()" 
        style="border: 1px solid black;">        `
        inHTML.innerHTML = inner;
    } else if (document.getElementById("firstImg").src != document.getElementById("thumb1").src) {
        let inner = "";
        let inHTML = document.getElementById('anh1');
        inHTML.innerHTML = "";
        inner += `
        <img src="Img_Chi_Tiết_SP/1.webp" alt="" id="thumb1" onclick="click1()">
        `
        inHTML.innerHTML += inner;
    }
}

function check2() {
    if (document.getElementById("firstImg").src == document.getElementById("thumb2").src) {
        let inner = "";
        let inHTML = document.getElementById('anh2');
        inHTML.innerHTML = "";
        inner += `
        <img src="Img_Chi_Tiết_SP/2.webp" alt="" id="thumb2" onclick="click2()" 
        style="border: 1px solid black; opacity: 1;">       `
        inHTML.innerHTML = inner;
    } else if (document.getElementById("firstImg").src != document.getElementById("thumb2").src) {
        let inner = "";
        let inHTML = document.getElementById('anh2');
        inHTML.innerHTML = "";
        inner += `
        <img src="Img_Chi_Tiết_SP/2.webp" alt="" id="thumb2" onclick="click2()">
        `
        inHTML.innerHTML += inner;
    }
}

function check3() {
    if (document.getElementById("firstImg").src == document.getElementById("thumb3").src) {
        let inner = "";
        let inHTML = document.getElementById('anh3');
        inHTML.innerHTML = "";
        inner += `
        <img src="Img_Chi_Tiết_SP/3.webp" alt="" id="thumb3" onclick="click3()" 
        style="border: 1px solid black; opacity: 1;">      `
        inHTML.innerHTML = inner;
    } else if (document.getElementById("firstImg").src != document.getElementById("thumb3").src) {
        let inner = "";
        let inHTML = document.getElementById('anh3');
        inHTML.innerHTML = "";
        inner += `
        <img src="Img_Chi_Tiết_SP/3.webp" alt="" id="thumb3" onclick="click3()">
        `
        inHTML.innerHTML += inner;
    }
}

function check4() {
    if (document.getElementById("firstImg").src == document.getElementById("thumb4").src) {
        let inner = "";
        let inHTML = document.getElementById('anh4');
        inHTML.innerHTML = "";
        inner += `
        <img src="Img_Chi_Tiết_SP/4.webp" alt="" id="thumb4" onclick="click4()" 
        style="border: 1px solid black; opacity: 1;">       `
        inHTML.innerHTML = inner;
    } else if (document.getElementById("firstImg").src != document.getElementById("thumb4").src) {
        let inner = "";
        let inHTML = document.getElementById('anh4');
        inHTML.innerHTML = "";
        inner += `
        <img src="Img_Chi_Tiết_SP/4.webp" alt="" id="thumb4" onclick="click4()">
        `
        inHTML.innerHTML += inner;
    }
}




function click1() {
    document.getElementById("firstImg").src = document.getElementById("thumb1").src;
    check1();
    check2();
    check3();
    check4();
}
function click2() {
    document.getElementById("firstImg").src = document.getElementById("thumb2").src;
    check1();
    check2();
    check3();
    check4();
}
function click3() {

    document.getElementById("firstImg").src = document.getElementById("thumb3").src;
    check1();
    check3();
    check2();
    check4();
}
function click4() {
    document.getElementById("firstImg").src = document.getElementById("thumb4").src;
    check1();
    check3();
    check2();
    check4();
}

let count = 0;
let sum = document.getElementById("sum");
function cong() {
    let sum = document.getElementById("sum");
    if (sum.value > 999) {
        sum.value = 1;
    } else if (sum.value <= 999) {
        count++;
        sum.value = count;
    }
}
function tru() {
    let sum = document.getElementById("sum");
    if (sum.value < 2) {
        sum.value = 1;
    } else {
        count--;
        sum.value = count;
    }
}


function vote1() {
    let vote = document.getElementById("star");
    let stringHTML = `
    <div id="star1">
        <i class="fas fa-star"></i>
    </div>
    <div id="star2">
        <i class="far fa-star"></i>
    </div>
    <div id="star3">
        <i class="far fa-star"></i>
    </div>
    <div id="star4">
         <i class="far fa-star"></i>
    </div>
    <div id="star5">
        <i class="far fa-star"></i>
    </div>      
    `;
    vote.innerHTML = stringHTML;
    let voteStar = 1;
    console.log(voteStar);
}
function vote2() {
    let vote = document.getElementById("star");
    let stringHTML = `
    <div id="star1">
        <i class="fas fa-star"></i>
    </div>
    <div id="star2">
        <i class="fas fa-star"></i>
    </div>
    <div id="star3">
        <i class="far fa-star"></i>
    </div>
    <div id="star4">
         <i class="far fa-star"></i>
    </div>
    <div id="star5">
        <i class="far fa-star"></i>
    </div>      
    `;
    vote.innerHTML = stringHTML;
    let voteStar = 2;
    console.log(voteStar);
}
function vote3() {
    let vote = document.getElementById("star");
    let stringHTML = `
    <div id="star1">
        <i class="fas fa-star"></i>
    </div>
    <div id="star2">
        <i class="fas fa-star"></i>
    </div>
    <div id="star3">
        <i class="fas fa-star"></i>
    </div>
    <div id="star4">
         <i class="far fa-star"></i>
    </div>
    <div id="star5">
        <i class="far fa-star"></i>
    </div>      
    `;
    vote.innerHTML = stringHTML;
    let voteStar = 3;
    console.log(voteStar);
}
function vote4() {
    let vote = document.getElementById("star");
    let stringHTML = `
    <div id="star1">
        <i class="fas fa-star"></i>
    </div>
    <div id="star2">
        <i class="fas fa-star"></i>
    </div>
    <div id="star3">
        <i class="fas fa-star"></i>
    </div>
    <div id="star4">
        <i class="fas fa-star"></i>
    </div>
    <div id="star5">
        <i class="far fa-star"></i>
    </div>      
    `;
    vote.innerHTML = stringHTML;
    let voteStar = 4;
    console.log(voteStar);
}
function vote5() {
    let vote = document.getElementById("star");
    let stringHTML = `
    <div id="star1">
        <i class="fas fa-star"></i>
    </div>
    <div id="star2">
        <i class="fas fa-star"></i>
    </div>
    <div id="star3">
        <i class="fas fa-star"></i>
    </div>
    <div id="star4">
        <i class="fas fa-star"></i>
    </div>
    <div id="star5">
        <i class="fas fa-star"></i>
    </div>      
    `;
    vote.innerHTML = stringHTML;
    let voteStar = 5;
    console.log(voteStar);
}
