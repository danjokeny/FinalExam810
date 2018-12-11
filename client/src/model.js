var ValidTodo = ['High', 'Meium', 'Low'];
var ToDoSchema = new ToDoSchema({
  todo: {type: String},
  priotity: { type: String, enum: ValidTodo },
  done: {type: Boolean, default: false}
});

module.exports = Mongoose.model('ToDo', ToDoSchema);