const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

Todo.findOneAndRemove('5ac3fe014c9ba83187e61ea6').then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5ac3fe014c9ba83187e61ea6').then((todo) => {
    console.log(todo);
});