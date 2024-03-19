
// Валидация формы(функция возвращает true || false )
function validation(form){

  function removeError(input){
    const parentInput = input.parentElement;
    if(parentInput.classList.contains("_error")){
      parentInput.querySelector("._error-label").remove(); // удаляем див с ошибкой
      parentInput.classList.remove('_error');  // удаляем класс ошибки
    }
  }

  // динамически создаем поле с ошибкой
function createError(input, text){
  const parentInput = input.parentElement;
  parentInput.classList.add('_error');
  let errorLabel = document.createElement('div');
  errorLabel.textContent = text;
  errorLabel.classList.add('_error-label');
  parentInput.append(errorLabel);
}

let result = true;
form.querySelectorAll("input").forEach((input)=>{

  removeError(input); // очистка от ошибки

  if(input.dataset.minLength){
    
    if(input.value.length < Number(input.dataset.minLength)){
      removeError(input); // очищаем предыдущую ошибку
      console.log("errorinput");
      createError(input, `Поле не может быть менее ${input.dataset.minLength} символов`);
      result = false;
    }
  }

  if(input.dataset.required == 'true'){
    
      if(input.value == ""){
    removeError(input); // очищаем предыдущую ошибку
    console.log("errorinput");
    createError(input, "Поле не заполнено");
    result = false;
  } 
  }

 
})

return result
}

const myForm = document.getElementById('popupForm');
myForm.addEventListener("submit", function(event){
  if(validation(this) == false) event.preventDefault();
   

  if(validation(this) == true){
    // если валидация успешна, то сюда любой код

    // thanksModal.classList.add('open'); // показываем окно с благодарностью
    popup.classList.remove('open'); // закрываем попап с формой
    document.body.classList.remove('_lock');
  }
  
})

// Для оболочки инпута CSS добавляем класс + position:relative
// &._error{
//   border-bottom: 2px solid red;
// }

// Для поля с ошибкой в CSS добавляем класс
//  ._error-label{
// 	position:absolute;
// 	top:calc(100% + 8px);
// 	z-index: 5;
// 	right:0;
// 	display: block;
// 	color:#fff;
// 	border-radius: 8px;
// 	background-color: #FF004C;
// 	padding:12px;
// 	@media(max-width:$md3){
// 		font-size: 16px;
// 		padding:8px;
// 	}
// 	&:before{
// 		content:'';
// 		position:absolute;		
// 		top:-8px;
// 		right:20px;
// 		width:12px;
// 		height: 8px;
// 		border-left: 6px solid transparent;
// 		border-right: 6px solid transparent;
// 		border-bottom: 8px solid #FF004C;
// 	}
// }