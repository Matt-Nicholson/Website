




//square method

 const txt1 = document.getElementById('square');
    const btn1 = document.getElementById('btn1');
    const out1 = document.getElementById('output1');
	const out1txt = document.getElementById('output1txt');

    function fun1(){


	out1txt.innerHTML = ("The result of squaring" +" " +txt1.value +" "+"is");
        out1.innerHTML = squareNum(txt1.value);

    }
    function squareNum(num){
        var square= num*num;
        return square
    }

btn1.addEventListener('click', fun1);



    //fixStart method

    const txt2 = document.getElementById('word');
    const btn2 = document.getElementById('btn2');
    const out2 = document.getElementById('output2');



function fun2(){

    out2.innerHTML = fixStart(txt2.value);


}

function fixStart(inputString) {
  var firstChar = inputString.charAt(0);
  return firstChar + inputString.slice(1).replace(new RegExp(firstChar, 'g'), '*');

}



      btn2.addEventListener('click',fun2)


//notBad method

const txt3 = document.getElementById('sentence');
    const btn3 = document.getElementById('btn3');
    const out3 = document.getElementById('output3');


    function fun3() {


     out3.innerHTML = notBad(txt3.value)
    }
    function notBad(sentence) {
        var notIndex = sentence.indexOf('not');
        var badIndex = sentence.indexOf('bad');
        if (notIndex == -1 || badIndex == -1 || badIndex < notIndex) return sentence;
        return sentence.slice(0, notIndex) + 'good' + sentence.slice(badIndex + 3);
    }

  btn3.addEventListener('click',fun3)






