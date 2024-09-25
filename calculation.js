

// const blog = document.getElementById("blog");
// blog.addEventListener("click", function () {
//   window.location.href = "../html/blog.html";
// });
document.getElementById('show-home-button').addEventListener('click',function(){
  showSectionById('home-section')
})


// TODO Global
document.getElementById('modalClose').addEventListener('click' , function(){
    document.getElementById('modal').classList.add('hidden')
})

// function valueGet(id) {
//   const value = document.getElementById(id).value;
//   const numValue = parseFloat(value);
//   return numValue;
// }
// function valueFloat(id) {
//   const valuecall = document.getElementById(id).innerText;
//   const numfloat = parseFloat(valuecall);
//   return numfloat;
// }
//

//! cart-1

const cart1 = document.getElementById("donatenow1");
cart1.addEventListener("click", function () {
  const mainBalance = valueFloat("mianBalace");
  const cart1Balance = valueFloat("cart1-Balance");
  const inputValue1 = valueGet("donateAmount1");

  const title1 = document.getElementById('title1').innerText;
  const currentDateTime = new Date();
  const time = 'Date:'+ currentDateTime.toString();

  if (mainBalance > inputValue1 || inputValue1 === Number || inputValue1 > 0) {
    const newBalance1 = cart1Balance + inputValue1;
    document.getElementById("cart1-Balance").innerText = newBalance1;

    const newMainBanalce = mainBalance - inputValue1;
    document.getElementById("mianBalace").innerText = newMainBanalce;
    document.getElementById("donateAmount1").value = "";

    document.getElementById('modal').classList.remove('hidden')

    alert("Invalide Donated Amount");
  }
});

//*...............

//! cart-2

const cart2 = document.getElementById("donatenow2");
cart2.addEventListener("click", function () {
  const mainBalance = parseFloat(
    document.getElementById("mianBalace").innerText);
  const cart1Balance = parseFloat(
    document.getElementById("cart2-Balance").innerText);
  const inputValue2 = parseFloat(
    document.getElementById("donateAmount2").value);


  if (mainBalance > inputValue2 || inputValue2 === Number || inputValue2 > 0) {
    const newBalance2 = cart1Balance + inputValue2;
    document.getElementById("cart2-Balance").innerText = newBalance2;

    const newMainBanalce = mainBalance - inputValue2;
    document.getElementById("mianBalace").innerText = newMainBanalce;
    document.getElementById("donateAmount2").value = "";

    document.getElementById('modal').classList.remove('hidden')

  }
  
  else {
    alert("Invalide Donated Amount");
  }
});

//*...............

//! cart-3

const cart3 = document.getElementById("donatenow3");
cart3.addEventListener("click", function () {
  const mainBalance = parseFloat(
    document.getElementById("mianBalace").innerText
  );
  const cart1Balance = parseFloat(
    document.getElementById("cart3-Balance").innerText
  );
  const inputValue3 = parseFloat(
    document.getElementById("donateAmount3").value
  );

//
  if (mainBalance > inputValue3 || inputValue3 === Number || inputValue3 > 0) {
    const newBalance3 = cart1Balance + inputValue3;
    document.getElementById("cart3-Balance").innerText = newBalance3;

    const newMainBanalce = mainBalance - inputValue3;
    document.getElementById("mianBalace").innerText = newMainBanalce;
    document.getElementById("donateAmount3").value = "";

    document.getElementById('modal').classList.remove('hidden')
.insertBefore(div, historySection.firstChild);

  } else {
    alert("Invalide Donated Amount");
  }
});

