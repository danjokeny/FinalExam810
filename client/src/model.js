var ValidTodo = ['high', 'medium', 'low'];
var ToDoSchema = new ToDoSchema({
  ToDo: {type: String},
  Priority: { type: String, enum: ValidTodo },
});

module.exports = Mongoose.model('ToDo', ToDoSchema);