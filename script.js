var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var listItem = document.querySelector("#app ul li");
/* Utilização dos seletores para as variáveis dentro de minha aplicação */

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
/* O JSON.parse converte o JSON (JavasCript Object Notation), que armazena os 
dados em forma de uma strig, novamente em um array para se possa iniciar a 
aplicação com os dados armazenados na local storage.
Observa-se o operador ou (||) seguido de um array vazio, dessa forma, caso não 
haja nenhum dado no arquivo JSON, a aplicação é iniciada com um array vazio.*/


function renderTodos() {
  listElement.innerHTML = "";

  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);
    linkElement.setAttribute('href' , '#');

    var pos = todos.indexOf(todo);
    /* Quando um array é iterado por um for, ele apresenta um índice que 
    incrementa a medida em que ele é percorrido, da mesma forma que um i++ 
    no C#, dessa forma a variável pos recebe o índice do elemento onde o for
    está realizando as operações */
    linkElement.setAttribute('onclick' , 'deleteTodo(' + pos + ')');



    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  /* A função push adiciona um elemento em um array, dessa forma o valor da 
  variável todoText é incluido no array */
  inputElement.value = ""; // Limpando os valores do imput
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo; 
//Ao se clicar no botão, chama-se a função addTodo

function deleteTodo(pos) {
  todos.splice(pos, 1);
  /* Splice é uma função que remove um determinado elemento de um array
  ele irá eliminar o elemento de índice pos */
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  
  localStorage.setItem('list_todos', JSON.stringify(todos));
  /* localStorage como o próprio nome já diz, é um tipo de armazenamento local
  dos dados incluídos no JS, na sintaxe, será armazenado na forma de JSON
   (em um arquivo chamado list_todos) os dados do vetor todos.
   O JSON.stringfy converte o array em uma string (visto que o 
    JavaScript Object Notation, JSON, armazena os dados em forma de string.*/

}
