var exceltojson = require("xlsx-to-json-lc"); //或者xlsx-to-json-lc，取决于你的文件名。
var markdown = require('markdown').markdown;
// exceltojson({
//     input: "/Users/chenyihui/Documents/标注和部分切图/Batch 1/warhorse/bookandtime/1.xlsx", // 要转换的excel文件，如"/Users/chenyihui/文件/matt/1_2.xlsx"
//     output: "./yeah.json", // 输出的json文件，可以不写。如"./yeap.json"
//     // sheet: "sheetname",  // 如果有多个表单的话，制定一个表单（excel下面那些标签），可以忽略
//     // lowerCaseHeaders:true //所有英文表头转成大写，可以忽略
// }, function(err, result) {
//     if(err) {
//         console.error(err);
//     } else {
//         console.log(result);
//         //result will contain the overted json data
//     }
// });
let a = []
var convert =  function (fileName) {
    return  new Promise((resolve, reject) => {
        exceltojson({
            input:`/Users/chenyihui/Documents/标注和部分切图/Batch 1/warhorse/bookandtime/${fileName}.xlsx`,
            output:'/yeah.json'
        }, function (err, result) {
            if(err) {
                console.error(err);
                reject(err);
            }else {
                // console.log(result);
                let c = result.map(o => {
                    o.text = markdown.toHTML(o.origin)
                    o.bookId = 1;
                    o.chapterId = fileName; //章节ID
                    return o;
                })
                a = a.concat(c);
                resolve(a);
            }
        })

    })
}

var execute = async function () {
    for(i = 1; i < 22; i++){
        await convert(i);
    }
    // console.log(a);
    return a;
}

module.exports = execute