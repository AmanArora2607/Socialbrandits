const currencyEl_one=document.getElementById('currency-one');
const currencyEl_two=document.getElementById('currency-two');
const rate=document.getElementById('rate');
const amountEl_one=document.getElementById('amount-one');
const amountEl_two=document.getElementById('amount-two');
const swap1=document.getElementById('swap');



function calculate(){
    const currency_one=currencyEl_one.value;
    const currency_two=currencyEl_two.value;
fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
.then(res=> (res.json()))
.then(data=>{
    console.log(data)

    const rate1=data.rates[currency_two];             
    console.log(rate1)
    amountEl_two.value=rate1*amountEl_one.value;
})

}

currencyEl_one.addEventListener('change',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
amountEl_two.addEventListener('input',calculate);
swap1.addEventListener('click', swap);


function swap(){

    const temp=currencyEl_one.value;
    currencyEl_one.value=currencyEl_two.value;
    currencyEl_two.value=temp;
    calculate();
}





calculate();