var fs = require('fs');

let contents=fs.readFileSync('./challenge1/info.txt', 'utf-8')
console.log(contents)
let names = fs.readFileSync('./challenge2/info.txt', 'utf-8')
names = names + '\nAndrew'
fs.writeFileSync('./challenge2/info.txt', names)
// let apple='/challenge3/info.txt'
// let square='/challenge3/binfo.txt'
// square=apple;

fs.rename('./challenge3/binfo.txt', '/challenge3/info.txt', function (err) {
    if (err) throw err;
    console.log('renamed complete');
  });

fs.mkdir('./challenge4/copyfolder', function (err) {
    if (err) console.error(err)
   // else console.log('dir created')
})
fs.copyFile('./challenge4/info.txt', './challenge4/copyfolder/', (err) => {
    if (err) throw err;
    //console.log('source.txt was copied to destination.txt');
});

var result = './challenge5/info.txt'.replace('-', ' ');

fs.readFile('./challenge5/info.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace('-', ' ');

    fs.writeFile('./challenge5/info.txt', result, 'utf8', function (err) {
        if (err) return console.log(err);
        //console.log('challenge 5')
    });
});

fs.readdir('./challenge6', function(err, items) {
    if (err) return console.log(err);
    // console.log(items);
    // console.log('challenge 6')

    for (var i=0; i<items.length; i++) {
        if(items[i].includes('.txt')){
            console.log(items[i]);
        }
    }
});




