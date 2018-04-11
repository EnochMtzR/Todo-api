const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'abc123!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash)
//     })
// });

var hashedPassword = '$2a$10$1stTDP4plR8reTdsIebWVOKPmqtHDAWbm7aTNH6SADYwpnX.FdYWq';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
})