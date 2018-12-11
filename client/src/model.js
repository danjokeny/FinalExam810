var ValidTodo = ['high', 'medium', 'low'];
var ToDoSchema = new ToDoSchema({
  todo: {type: String},
  priotity: { type: String, enum: ValidTodo },
  done: {type: Boolean, default: false}
});

module.exports = Mongoose.model('ToDo', ToDoSchema);