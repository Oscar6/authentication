// Create and store password

// Take user password

// Generate a salt(string of random characters)

// Combine salt and user entered password

// Hash the combined string with the same crypto algorithm used

// 

var pbkdf2 = require('pbkdf2');
var crypto = require('crypto');

var salt = crypto.randomBytes(20).toString('hex');

console.log(salt);

var password = 'some-password';

// combining

var key = pbkdf2.pbkdf2Sync(password, salt, 36000, 256, 'sha256');

console.log(key);

// changing key to a hex

var hash = key.toString('hex');
console.log(hash);

// stored in database
var stored_pass = `pbkdf2_sha256$36000$${salt}$${hash}`;

// checking password
// retrieving password from database
var pass_parts = stored_pass.split('$');

var enteredPassword = 'some-password';

var key = pbkdf2.pbkdf2Sync(
    enteredPassword,
    pass_parts[2],
    parseInt(pass_parts[1]),
    256,
    'sha256'
);

var hash = key.toString('hex');
console.log(hash);

if(hash === pass_parts[3]){
    console.log('Passwords matched')
}
else{
    console.log('authorities are being alerted of your hacking attempt')
}