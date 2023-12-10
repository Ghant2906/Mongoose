// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://toanf2103:kutoan1346@cluster0.r3hd9ab.mongodb.net/tkb')
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Lỗi kết nối đến MongoDB:'));
db.once('open', function () {
  console.log('Đã kết nối đến MongoDB thành công');
});

module.exports = mongoose