

document.addEventListener('DOMContentLoaded', function() {

  function displayModal(){
    let modal1 = document.querySelector('.modal');
    modal1.style.display = 'block';
  }

  let buttonSignin = document.querySelector('.signin');
  buttonSignin.addEventListener('click',displayModal);


  function closeModal(){
    let modal1 = document.querySelector('.modal');
    modal1.style.display = 'none';
  }

  let button1 = document.querySelector('button.close');
  button1.addEventListener('click',closeModal);




   let submitButton = document.querySelector('button.submit')
   submitButton.addEventListener ('click', functionError);
   function functionError(){
     let inputItem = document.querySelectorAll('input#user');
      for (var i = 0; i < inputItem.length; i++) {
        inputItem.className = 'error';
         console.log(inputItem[i]);
         inputItem[i].addEventListener('click',remError);
      }
  }

   function remError(){

     console.log("Input is OK");
     var inputs = document.querySelectorAll('input');

     for (var i = 0; i < inputs.length; i++) {
       inputs[i].classList.remove('error');
     }
   }


  //
});





//
//   var submit = document.querySelector('.submit')
//   submit.addEventListener('click', errorToInput)
//   function errorToInput(){
//     var inputs = document.querySelectorAll('input')
//     for (i=0; i<inputs.length; i++){
//       inputs[i].className = "error"
//       console.log(inputs[i]);
//       inputs[i].addEventListener('click', removeError)
//     }
//   }
//
//   function removeError(){
//     console.log('its ok');
//     var inputs = document.querySelectorAll('input');
//     for (i=0; i<inputs.length; i++){
//       inputs[i].classList.remove("error")
//     }
//   }


// function remError(){
//    console.log('ok');
//    var inputItem = document.querySelectorAll('input');
//    for (i=0; i<inputItem.length; i++){
//      inputItem[i].classList.remove("error")
//    }
//  }


//

//
// });
