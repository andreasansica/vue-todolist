
var app = new Vue({
  el: "#app",
  data : {
    todo : ["Andare a correre"],
    newTodo : ""
  },
  methods : {
    add : function(){
      this.todo.push(this.newTodo)
    },
    remove : function(index){
      this.todo.splice(index, 1);
    }
  }
})
