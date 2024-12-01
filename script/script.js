const outputDiv = document.querySelector('.output');
const jsBtn = document.querySelectorAll('.js-btn');
const jsEqual = document.querySelector('.js-equal');
const clearBtn = document.querySelector('.clear-btn')


let number = '';
jsBtn.forEach((data) => {
  // console.log(data.value)
  data.addEventListener('click', () =>{
    // let stringValue = '';
    stringValue = data.value ;
    number += stringValue;
    outputDiv.innerText = number;
  })
  
})

jsEqual.addEventListener('click', () =>{
  try{
    const calculation = eval(number);
    number = calculation;
    outputDiv.innerText = calculation;
    // number = '';
  }catch(e){
    outputDiv.innerText = 'Error';
    number = '';

  }
  
  
})

clearBtn.addEventListener('click', () =>{
  number = '';
  outputDiv.innerText = '0';
})
