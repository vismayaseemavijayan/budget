// var totalamount=0
// var amount=0
var amounts=0;
function income(){
  totAmt=totalamount.value


  if(totAmt==""||isNaN(totAmt))
  {
      alert("Please enter a valid number")
  }
  else{
      localStorage.setItem("AMOUNT",totAmt)
      alert("Add successfully");
      data=Number(localStorage.getItem("AMOUNT"))
      console.log(data);

      amounts+=data;
      amount.innerHTML=amounts



  }
}


expenses=0;
balance=0
function expense(){
  exp=useramount.value
  expDetail=producttitle.value
  if(exp==""||isNaN(exp)){
      alert("Please enter a valid number")
  }
  else{
      localStorage.setItem("EXPENSE",exp)
      alert("Add succesfully")
      data1=Number(localStorage.getItem("EXPENSE"))
      console.log(data1);

      expenses+=data1;
      expenditurevalue.innerHTML=expenses

      balance=amounts-expenses
      balanceamount.innerHTML=balance
      console.log(balance);


      htmlData=`
      ${expDetail}
      ${exp}
      `
      list.innerHTML+=htmlData
  }

}

function clearAll(){
//  list.innerHTML=""
 balanceamount.innerHTML='0'
 expenditurevalue.innerHTML = '0'
 amount.innerHTML='0'
 useramount.value=""
 producttitle.value=""
 totalamount.value=""
}
