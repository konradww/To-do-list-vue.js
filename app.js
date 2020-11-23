const app = new Vue({
	el:'#app',
	data:{
		title: 'List Tasks',
		newTodo: '',
		timestamp: '',
		todos: []
		
	},
	methods:{
		addTodo(){
			this.todos.push({
				title: this.newTodo,
				done: false,
				timestamp: new Date().toISOString()
		
			});
			this.newTodo = '';
			
		},
		removeTodo(todo){
			const todoIndex = this.todos.indexOf(todo);
			this.todos.splice(todoIndex,1)
		}
	}
	
	
});