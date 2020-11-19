
var app = new Vue({
  el: "#app",
  data : {
    todo : ["Andare a correre"],
    newTodo : [],
  },
  methods : {
    add : function(){
      if (this.newTodo === "") {
        alert("Inserisci un attività")
      }
      else if (this.newTodo.includes(this.todo)) {
        alert("Attività già inserita")
      }
      else{
        this.todo.push(this.newTodo);
      }
      this.newTodo = "";
    },
    remove : function(index){
      this.todo.splice(index, 1);
    }
  }
})
