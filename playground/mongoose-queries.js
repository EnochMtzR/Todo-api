const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ab1632cefeee62a6c57c1f7a13';

// if (!ObjectID.isValid(id)) {
//     console.log('Id not Valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log('Id not Found.');
//     }
//     console.log('TodoById', todo);
// }).catch((e) => console.log(e));

var id = '5aaae65e181ae928c85170ce';

User.findById(id).then((user) => {
    if(!user){
        return console.log('Id not found.');
    }
    console.log('User gotten:', JSON.stringify(user, undefined, 2))
}).catch((e) => console.log(e));