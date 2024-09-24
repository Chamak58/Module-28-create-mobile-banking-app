//console.log('add money added')
//-----add event handler------
document.getElementById('btn-add-money').addEventListener('click', function(event){

    event.preventDefault();
    //console.log('event handler added')

//-----added add money id with add money btn----
const addMoney = document.getElementById('input-add-money').value;
const addMoneyNumber = parseFloat(addMoney);
console.log(addMoneyNumber);
console.log(addMoney);

//----added pin number id with add money btn----
const addPin = document.getElementById('input-pin-number').value;
console.log(addPin);

//----verify pin(wrong way)------ 
if(addPin === '1234'){
    const balance = document.getElementById('account-balance').innerText;

//----convert balance(typeof string) to balanceNumber(typeof number)-------
    const balanceNumber = parseFloat(balance);
    console.log(balanceNumber);

    //console.log(balance);
 
//----get newBalance(add addMoneyNumber with balanceNumber) by adding (use number data type)------
    const newBalance = balanceNumber + addMoneyNumber;
    console.log(newBalance);

//-----add newBalance as a account balance----
    document.getElementById('account-balance').innerText = newBalance;
}
else{
    alert('Failed to add money!')
}



})