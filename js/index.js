const questions = document.querySelectorAll(".question");

for (var i = 0; i < questions.length; i++) {
    const element = questions[i];
    const btn = questions[i].querySelector(".question-btn");
    btn.onclick = function (e) {
        console.log(e)
        handleCollapse(element);
    }

}

function handleCollapse(element) {
    for (var i = 0; i < questions.length; i++) {

        if (element !== questions[i]) {
            questions[i].classList.remove("show-text");
        }
    }
    element.classList.toggle("show-text");

}

function domId(id) {
    return document.getElementById(id);
}

function areValidNumbers(...nums) {
    return nums.every(function (num) {
        return !isNaN(Number(num)) && num !== "";
    });
}


document.querySelectorAll('.minus-icon').forEach(function (icon) {
    icon.onclick = function () {
        for (let i = 1; i <= 5; i++) {
            if (document.querySelector(`#result${i}`) != null)
                document.querySelector(`#result${i}`).innerHTML = '';
        }
    }
})

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 1
domId('btn-1').onclick = function () {
    var tong = 0, count = 0;
    for (; tong < 10000;) {
        count++;
        tong += count;
    }
    domId('result1').innerHTML = `Kết quả: ${count}`

}
//* End lesson 1

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 2
domId('btn-2').onclick = function(){
    var x = domId('nhapX').value 
    var n = domId('nhapN1').value
    var tong = 0;
    if(!areValidNumbers(x,n) || n <= 0 || !Number.isInteger(+n)){
        domId('result2').innerHTML = "Giá trị nhập vào chưa hợp lệ"
        return;
    }else{
        x = +x
        n = +n
        for(var i = 1; i <= n;i++){
            tong += Math.pow(x, i);
        }

    }
    domId('result2').innerHTML = `Kết quả: ${tong}`

}
//* End lesson 2

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 3
function tinhGiaiThua(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let giaiThua = 1;
        for (let i = 2; i <= n; i++) {
            giaiThua *= i;
        }
        return giaiThua;
    }
}



domId('btn-3').onclick = function(){
    var n = domId('nhapN2').value
    if(!areValidNumbers(n) || n < 0 || !Number.isInteger(+n)){
        domId('result3').innerHTML = "Giá trị nhập vào chưa hợp lệ"
        return;    
    }else{
        var giaiThua = tinhGiaiThua(+n)
    }

    domId('result3').innerHTML = `Kết quả: ${giaiThua}`
}

//* End lesson 3

////////////////////////////////////////////////////////////////////////////////////////////////////////?

//* Start lesson 4
const totalDiv = 10;
domId('btn-4').onclick = function(){
    var result = ''
    for (var i = 1; i <= totalDiv; i++) {
        if(i % 2 == 0){
            result += `<div style="width: 300px;height: 20px; background-color: red; margin: 10px 0;">Div${i}</div>`
        }else{
            result += `<div style="width: 300px;height: 20px; background-color: blue; margin: 10px 0;">Div${i}</div>`
        }
    }
    domId('result4').innerHTML = result
}
//* End lesson 4

////////////////////////////////////////////////////////////////////////////////////////////////////////?


//* Start lesson 5
function laSoNguyenTo(so) {
    for (let i = 2; i <= Math.sqrt(so); i++) {
        if (so % i === 0) {
            return false;
        }
    }
    return true;
}

domId('btn-5').onclick = function(){
    var n = domId('nhapN3').value;
    var listNguyenTo = []
    if(!areValidNumbers(n) || n < 2 || !Number.isInteger(+n)){
        domId('result5').innerHTML = "Giá trị nhập vào chưa hợp lệ"
        return;       
    }else{
        for (let i = 2; i <= n; i++) {
            if (laSoNguyenTo(i)) {
                listNguyenTo.push(i)
            }
        }
    }

    domId('result5').innerHTML = `Kết quả: ${listNguyenTo}`
}

//* End lesson 5