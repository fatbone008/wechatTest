const Sequelize = require('sequelize');
const databaseStr = require('./DBConfig');
var markdown = require( "markdown" ).markdown;

const User = require('./UserModel');
const Book = require('./Book');
const Chapter = require('./Chapter');
const Audio = require('./Audio');

console.log("数据库配置：", databaseStr);
// Or you can simply use a connection uri
const sequelize = new Sequelize(databaseStr);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const u = User(sequelize)
// u.sync();
const book = Book(sequelize);
const chapter = Chapter(sequelize);
const audio = Audio(sequelize);

// chapter.belongsTo(book);
audio.belongsTo(book)
audio.belongsTo(chapter);

sequelize.sync();

// u.create({firstName: 'Chan', lastName: 'YiHui'})
// .then(() => u.findOne({where:{firstName: 'Chan'}, raw:true}))
// .then(res => console.log(res));

// book.bulkCreate(
//     [
//       {
//         img: 'https://anniesreading.oss-cn-beijing.aliyuncs.com/bookpage.png',
//         englighAuthor: 'alipapa',
//         englishTitle: 'The old man and sea',
//         chineseAuthor: '阿里巴巴',
//         chineseTitle: '老人与海',
//         level: '中'
//       },
//       {
//         img: 'https://anniesreading.oss-cn-beijing.aliyuncs.com/bookpage.png',
//         englighAuthor: 'alipapa',
//         englishTitle: 'The old man and sea',
//         chineseAuthor: '阿里巴巴',
//         chineseTitle: '老人与海',
//         level: '中'
//       },
//       {
//         img: 'https://anniesreading.oss-cn-beijing.aliyuncs.com/bookpage.png',
//         englighAuthor: 'alipapa',
//         englishTitle: 'The old man and sea',
//         chineseAuthor: '阿里巴巴',
//         chineseTitle: '老人与海',
//         level: '中'
//       }
//     ]
// );

// let a = [];
// for(let i = 0; i< 21; i++) {
//     a.push({
//         index: i+1,
//         chapterName: "chapter " + (i + 1),
//         bookId: 1
//     });
// }
// chapter.bulkCreate(a);

let a = [{"origin":"TYING A LONG ROPE TO THE HALTER, HE WALKED ME OUT of the stable.","time":"0:00"},{"origin":"I went with him because Zoey was out there looking back over her shoulder at me and I was always happy to go anywhere and with anyone as long as she was with me.","time":"0:08"},{"origin":"All the while I noticed that Albert’s father was speaking in a hushed voice(低声说话) and looking around him like a thief (小偷).","time":"0:18"},{"origin":"He must have known that I would follow old Zoey because he roped me up to her saddle and led us both quietly out of the yard down the path and over the bridge.","time":"0:27"},{"origin":"Once in the road, he mounted Zoey swiftly and we trotted(小跑) up the hill and into the village. He never spoke a word to either of us.","time":"0:38"},{"origin":"I knew the road well enough, of course, for I had been there often enough with Albert, and indeed I loved going there because there were always other horses to meet and people to see.","time":"0:47"},{"origin":"It was in the village only a short time before that I had met my first motorcar(汽车) outside the post office and had stiffened(吓得僵住) with fear as it rattled past(突突地驶过), but I had stood steady, and I remember that Albert had made a big fuss(大惊小怪，这里指大夸特夸) over me after that.","time":"0:59"},{"origin":"But now, as we neared the village, I could see that several motorcars were parked around the green(绿地), and there was a greater gathering of men and horses than I had ever seen.","time":"1:16"},{"origin":"Excited as I was, I remember that a sense of deep **apprehension**(不安) came over me as we trotted up into the village.","time":"1:27"},{"origin":"There were men in khaki(军队服装) uniforms everywhere, and then, as Albert’s father **dismounted**(下马) and led us up past the church toward the green, a military band struck up(开始演奏) a rousing, pounding march.","time":"1:35"},{"origin":"The pulse of the great bass-drum beat out through the village, and there were children everywhere, some marching up and down with broomsticks over their shoulders and some leaning out of windows waving flags.","time":"1:50"},{"origin":"As we approached the flagpole(旗杆) in the center of the green where the _Union Jack_ hung limp in the sun against the white pole, an officer pushed through the crowd toward us.","time":"2:04"},{"origin":"He was tall and elegant in his jodhpurs(骑马裤) and military belt, with a silver sword at his side. He shook Albert’s father by the hand.","time":"2:16"},{"origin":"“I told you I’d come, Captain Nicholls(尼克尔斯上尉), sir,” said Albert’s father. “It’s because I need the money, you understand. Wouldn’t part with(卖掉) a horse like this ’less I had to.”","time":"2:26"},{"origin":"“Well, Farmer,” said the officer, nodding his **appreciation**(欣赏)as he looked me over. “I’d thought you’d be **exaggerating**(夸张)when we talked in The George last evening. ‘Finest horse in the parish,’ you said, but then everyone says that. But this one is different—I can see that.”","time":"2:38"},{"origin":"And he smoothed my neck gently and scratched me behind my ears. Both his hand and his voice were kind, and I did not shrink away from him.","time":"2:57"},{"origin":"“You’re right, Farmer. He’d make a fine mount(坐骑) for my regiment(军队里的团) and we’d be proud to have him—I wouldn’t mind using him myself. No, I wouldn’t mind at all.","time":"3:08"},{"origin":"If he turns out to be all he looks, then he’d suit me well enough. Fine-looking animal, _no question about it._”","time":"3:19"},{"origin":"“Forty pounds you’ll pay me, Captain Nicholls, like you promised yesterday?” Albert’s father said in a voice that was unnaturally low, almost as if he did not want to be heard by anyone else. “I can’t let him go for a penny less. A man’s got to live.”","time":"3:26"},{"origin":"“That’s what I promised you last evening, Farmer,” Captain Nicholls said, opening my mouth and examining my teeth.","time":"3:45"},{"origin":"“He’s a fine young horse—strong neck, sloping shoulder, straight fetlocks(马的球节). Done much work has he? Have you taken him hunting?”","time":"3:52"},{"origin":"“My son rides him every day,” said Albert’s father. “He tells me that he goes like a racer and jumps like a hunter.”","time":"4:02"},{"origin":"“Well,” said the officer, “as long as our **vet**(兽医) passes him as fit and sound in wind and limb(四肢), you’ll have your forty pounds, as we agreed.”","time":"4:11"},{"origin":"“I can’t be long, sir,” Albert’s father said, glancing back over his shoulder. “I have to get back. I have my work to see to.”","time":"4:21"},{"origin":"“Well, we’re busy recruiting(征兵) in the village as well as buying,” said the officer.","time":"4:30"},{"origin":"“But we’ll be as quick as we can for you. True, there’s a lot more good men volunteers than there are good horses in these parts, and the vet doesn’t have to examine the men, does he? You wait here, I’ll only be a few minutes.”","time":"4:36"},{"origin":"Captain Nicholls led me away through the **archway**(拱门) opposite the pub and into a large yard where there were men in white coats and a uniformed **clerk**(书记员) sitting down at a table taking notes.","time":"4:51"},{"origin":"I thought I heard old Zoey calling after me, so I shouted back to reassure her for I felt no fear at this moment. I was too interested in what was going on around me.","time":"5:04"},{"origin":"The officer talked to me gently as we walked away, so I went along almost eagerly. The vet, a small, bustling man with a bushy black moustache (胡子), prodded me all over, lifted each of my feet to **examine**(检查) them—which I objected to—and then peered into my eyes and my mouth, sniffing at my breath.","time":"5:16"},{"origin":"Then I was trotted around and around the yard before he pronounced me a perfect specimen(样品，指最好的良马).","time":"5:37"},{"origin":"“Sound as a bell. Fit for anything, cavalry(骑兵) or artillery(炮兵),” were the words he used. “No splints(骨裂), not lame(跛脚), good feet and teeth(牙口很好). Buy him, Captain,” he said. “He’s a good one.”","time":"5:44"},{"origin":"I was led back to Albert’s father who took the offered money from Captain Nicholls, stuffing it quickly into his trouser pocket.","time":"5:59"},{"origin":"“You’ll look after him, sir?” he said. “You’ll see he comes to no harm(危害)? My son’s very fond of him, you see.” He reached out and brushed my nose with his hand. There were tears filling his eyes. At that moment he became almost a **likable**(可爱的)man to me.","time":"6:07"},{"origin":"“You’ll be all right, old son,” he whispered to me. “You won’t understand and neither will Albert, but unless I sell you, I can’t keep up with the mortgage and we’ll lose the farm. I’ve treated(对) you bad—I’ve treated everyone bad. I know it and I’m sorry for it.”","time":"6:27"},{"origin":"And he walked away from me, leading Zoey behind him. His head was lowered, and he looked suddenly like a shrunken man.","time":"6:49"},{"origin":"It was then that I fully realized I was being **abandoned**(被抛弃的), and I began to neigh(嘶鸣), a high-pitched cry of pain and anxiety (焦急) that shrieked(尖叫) out through the village.","time":"6:58"},{"origin":"Even old Zoey, **obedient**(顺从的)and placid(温和的)as she always was, stopped and would not be moved on no matter how hard Albert’s father pulled her.","time":"7:12"},{"origin":"She turned, tossed up her head, and shouted her farewell. But her cries became weaker and she was finally dragged away and out of my sight. Kind hands tried to contain me and to **console**(安慰) me, but I was inconsolable.","time":"7:22"},{"origin":"I had just about given up(放弃) all hope, when I saw my Albert running toward me through the crowd, his face red with **exertion**(费力).","time":"7:39"},{"origin":"The band had stopped playing, and the entire(整个) village looked on as he came up to me and put his arms around my neck.","time":"7:49"},{"origin":"“He’s sold him, hasn’t he?” he said quietly, looking up at Captain Nicholls who was holding me. “Joey is my horse. He’s my horse and he always will be, no matter who buys him. I can’t stop my father from selling him, but if Joey goes with you, I go. I want to join up and stay with him.”","time":"7:57"},{"origin":"“You’ve got the right spirit for a soldier, young man,” said the officer, taking off his peaked cap(高帽) and wiping his brow(额头) with the back of his hand.","time":"8:20"},{"origin":"He had black curly hair and a kind, open look on his face. “You’ve got the spirit, but you haven’t got the years. You’re too young and you know it. Seventeen’s the youngest age we take. Come back in a year or so and then we’ll see.”","time":"8:28"},{"origin":"“I look seventeen,” Albert said, almost pleading. “I’m bigger than most seventeen-year-olds.” But even as he spoke, he could see he was getting nowhere.","time":"8:46"},{"origin":"“You won’t take me then, sir? Not even as a stable boy? I’ll do anything—anything.”","time":"8:58"},{"origin":"“What’s your name, young man?” Captain Nicholls asked.","time":"9:05"},{"origin":"“Narracott, sir, Albert Narracott.”","time":"9:09"},{"origin":"“Well, Mr. Narracott. I’m sorry I can’t help you.” The officer shook his head and replaced his cap.","time":"9:12"},{"origin":"“I’m sorry, young man, regulations. But don’t you worry about your Joey. I shall take good care of him until you’re ready to join us.","time":"9:20"},{"origin":"You’ve done a fine job with him. You should be proud of him—he’s a fine, fine horse, but your father needed the money for the farm, and a farm won’t run without money. You must know that.","time":"9:30"},{"origin":"I like your spirit, so when you’re old enough, you must come and join the cavalry(参军). We need men like you, and it will be a long war I fear, longer than people think. **Mention**(提到) my name. I’m Captain Nicholls, and I’d be proud to have you with us.”","time":"9:43"},{"origin":"“There’s no way, then?” Albert asked. “There’s nothing I can do?”","time":"10:02"},{"origin":"“Nothing,” said Captain Nicholls. “Your horse belongs to the army now, and you’re too young to join up. Don’t you worry—we’ll look after him. I’ll take personal care of him, and that’s a promise.”","time":"10:07"},{"origin":"Albert rubbed my nose for me as he often did and stroked my ears. He was trying to smile but could not.","time":"10:21"},{"origin":"“I’ll find you again, you old silly,” he said quietly. “Wherever you are, I’ll find you, Joey. Take good care of him, please, sir, till I find him again. There’s not another horse like him, not in the whole world—you’ll find that out. Say you promise?”","time":"10:29"},{"origin":"“I promise,” said Captain Nicholls. “I’ll do everything I can.”","time":"10:48"},{"origin":"And Albert turned and went away through the crowd until I could see him no more.","time":"10:53"}]
let b = a.map(o => {
    o.text = markdown.toHTML(o.origin)
    o.bookId = 1;
    o.chapterId = 4;
    return o;
});
audio.bulkCreate(b).then(res => {
    console.log("上传成功", res);
})