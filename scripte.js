let textForExecuting = "";

function pageCloning(){
  const PAGE_NUMBER = document.getElementById("page").value;
  const PAGE_QUANTITY = +document.getElementById("quantity").value;

  for(let i = 0; i  < PAGE_QUANTITY; i++){
    if(textForExecuting != ""){
      textForExecuting +="," + PAGE_NUMBER;
    } else{
      textForExecuting = PAGE_NUMBER;
    }

    
  }

  document.getElementById("result").value = textForExecuting;
}
