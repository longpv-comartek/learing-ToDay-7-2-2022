//Day01
//Floating point
function myFuc() {
    const a = 0.1
    const b = 0.2
    const c = 0.3
    const d = a + b
    const e = d.toFixed(2)
    return e === c
}
console.log("fix floating point", myFuc(), );
//So sánh null và undefined
// null khác undefined
//Undefined có nghĩa là không xác định.Trong javascript, khi bạn khai báo một biến nhưng chưa gán giá trị cho nó,
//giá trị của biến đó sẽ là undefined.
// Null có nghĩa là giá trị rỗng hoặc giá trị không tồn tại, nó có thể
// được sử dụng để gán cho một biến như là một đại diện không có giá trị.
//null === undefined // false
//null == undefined // true

// So sánh == và ===
// Phép so sánh === ( !== ) Trên thực tế, phép toán so sánh === tuân theo quy luật dưới đây:
//     Nếu x và y khác kiểu nhau, false
// Nếu như cả 2 vế đều là null hoặc undefined(null === null), true(tuy nhiên điều này không đúng với NaN đâu nhé)
// Nếu cả 2 vế đều là kiểu Number, 1 trong 2 vế, hoặc cả 2 vế là NaN, false.Còn không thì so sánh giá trị
// Nếu cả 2 vế đều là kiểu String, nội dung giống nhau: true, còn lại false
// Nếu cả 2 vế đều là kiểu Boolean, giống nhau thì là true, khác nhau là false
// Nếu cả 2 vế đều là kiểu Object tham chiếu, nếu cùng tham chiếu tới 1 object: true, còn lại là false
// Phép so sánh == ( != )
// Nếu cả 2 vế đều là null, hoặc undefined, true
// Nếu một vế là giá trị kiểu Number, vế còn lại là giá trị kiểu String, String sẽ được convert sang kiểu Number và so sánh giá
//trị
// Nếu một vế là kiểu Boolean, một vế là kiểu Number, Boolean sẽ được chuyển sang kiểu Number và so sánh giá trị
// Nếu một vế là kiểu Boolean, một vế là kiểu String, cả 2 vế sẽ được chuyển về kiểu Number và so sánh giá trị
// Nếu một vế là kiểu Number, một vế là kiểu Object tham chiếu, vế Object tham chiếu sẽ được chuyển sang Number và so sánh giá trị
// Nếu một vế là kiểu String, một vế là kiểu Object tham chiếu, vế Object tham chiếu sẽ được chuyển sang kiểu String và so sánh
//nội dung
// Ngoài những trường hợp trên, tất cả đều là false Vậy nếu so sánh với toán tử == thì null và undefined bằng nhau nhưng với toán
//tử === thì chúng không bằng nhau.Javascript đã tự động ép kiểu trong phép so sánh null == undefined, để loại bỏ rủi ro có thể
// xảy ra này, chúng ta nên sử dụng === thay cho == và !== thay cho != trong các phép so sánh.
//So sánh các phương thức làm tròn số Math
// So sánh các phương thức làm tròn số
// -ceil: luôn làm tròn lên *
//     -floor: luôn làm tròn xuống *
//     -round: làm tròn dựa trên 0.5 *
//     -trunc: bỏ phần thập phân *
//     /
console.log(Math.ceil(0.1)); //1
console.log(Math.ceil(0.8)); //1
console.log(Math.ceil(-0.1)); //-0
console.log(Math.ceil(-0.8)); //-0
console.log(Math.floor(0.1)); //0
console.log(Math.floor(0.8)); //0
console.log(Math.floor(-0.1)); //-1
console.log(Math.floor(-0.8)); //-1
console.log(Math.round(0.1)); //0
console.log(Math.round(0.8)); //1
console.log(Math.round(-0.1)); //-0
console.log(Math.round(-0.8)); //-1
console.log(Math.trunc(0.1)); //0
console.log(Math.trunc(0.8)); //0
console.log(Math.trunc(-0.1)); //-0
console.log(Math.trunc(-0.8)); //-0
//So sánh tốc độ các vòng lặp
// Vòng lặp For thông thường là nhanh nhất do số lần lặp được cung cấp từ trước
//và không cần phải tiền xử lý trước khi lặp như vòng lặp forEach, forin hay for of
//So sánh typeof và instanceof
//typeof Toán tử typeof trả về một chuỗi là loại JavaScript cho một giá trị nhất định nào đó.
//instanceof kiểm tra  đối tượng có kế thừa 1 nguyên mẫu không
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
let mycar = new Car('Honda', 'Accord', 1998)
let a = mycar instanceof Car // returns true
let b = mycar instanceof Object // returns true
    //So sánh var, let và const
    //let : chỉ có thể cập nhật lại giá trị và phạm vi là  block scoped k thể tái khái bao trong cùng 1 block  nhưng có thể nếu không chung scope được khai báo  
    // let không gán giá trị sẽ là undefined
let a = 10;
a = 11;
console.log(a);
a = 11
    // ra ngoài block
if (true) {
    let a = 12
    console.log("block riêng", a); //vẫn được 
}
// let a = 12; //error
//const có 2 loại 
// Trong biến const nếu trường hợp kiểu của biến là primitive (bao gồm string, number, boolean, null, và undefined) thì chúng ta sẽ không thể tái khai báo hay cập nhật giá trị mới để thay thế cho giá trị trước đó của biến
const b = 10;
// b = 11 //error

// Đối với trường hợp kiểu biến là reference (bao gồm object, array, và function) thì tuy không thể tái khai báo hay cập nhật giá trị của biến nhưng chúng ta vẫn có thể cập nhật giá trị cho thuộc tính của biến đó.
const arr = []
arr.push(1)
console.log("arr", arr);

// var dùng cho toàn cùng có thể tái khái bao phạm vị toàn cùng nhưng nhược điểm là  code của chúng ta lên đến hàng trăm, hàng nghìn dòng code, hoặc chúng ta cũng không biết được giá trị của biến liệu có bị thay đổi ở đoạn code nào 
if (true) {
    var greeting = "name"
    console.log(greeting);
}
console.log(greeting);

var greeting = "hey hi";

var times = 4;

if (times > 3) {
    var greeting = "say Hello instead";
}

console.log(greeting); //"say Hello instead"

//hoisting
console.log(greeting);
var greeting = "say hello";
//sẽ được biên dịch là:
var greeting;
console.log(greeting); // greeting is undefined
greeting = "say hello";
// do  biến var còn có thêm tính chất hoisting: nghĩa là dù khai báo ở đâu thì biến đều sẽ được đem lên đầu scope trước khi code được thực hiện. nên t có thêm use stric để đảm bảo vấn đề này
//"use strict";Xác định rằng mã JavaScript phải được thực thi ở "chế độ nghiêm ngặt" nhằm tránh hoisting.

//Function scope// Scope A
// var myFunction = function() {
// Scope B
//     var myOtherFunction = function() {
// Scope C
//     };
// };
//Lexical Scope

// Scope A
// var myFunction = function() {
// Scope B
//     var name = 'Bap'; // định nghĩa trong Scope B
//     var myOtherFunction = function() {
// Scope C: `name` có thể được truy cập tại đây
//     };
// };

//Closures là returun của 1 function trả về function
// function(name) {
//     var text = 'Hello, ' + name; // scope cha
//  đây là Closures:
//return function() {
//
//         console.log(text); // có thể truy cập từ scope con.
//     };
// };
// tham trị
// Kiểu này dùng cho các kiểu dữ liệu nguyên thuỷ: String, Number, Boolean, BigInt, Symbol, undefined, null.Kiểu này thì cũng khá
// là đơn giản, khi gán cho nó một giá trị thì nó sẽ lưu lại giá trị đó và tại một thời điểm thì chỉ lưu một giá trị
// Ví dụ 1:
//     let a = 1;

//Tạo ra biến a và lưu giá trị của a vào ô nhớ - 1

// let b = a;
//Tạo ra biến b, sao chép giá trị của biến a và lưu vào ô nhớ mới - 1

// a = 2;

//Sửa giá trị của biến a và cập nhật lại ô nhớ - 2

// console.log(b) //1
// Kiểu này thì phức tạp hơn kiểu tham trị và được dùng cho các kiểu dữ liệu phức tạp: Object, Array, Function.
// Ở đây khi gán cho nó một giá trị thì nó không lưu lại giá trị này mà thực chất nó lưu lại địa chỉ của ô nhớ lưu giá trị này.

// Ví dụ 2:
//     let a = { name: "cat" }
//Tạo ra biến a, lưu giá trị của a vào ô nhớ và gán lại địa chỉ ô nhớ cho biến a (a = #a001)

// let b = a
//Tạo ra biến b và gán giá trị của biến a cho b, ở đây chính là địa chỉ địa chỉ ô nhớ của a (b =#a001)

// a.name = "dog"
//Sửa giá trị của biến a thì giá trị trong ô nhớ được cập nhật

// console.log(b) // { name: "dog" }
function isObject(obj) {
    return obj != null && typeof obj === "object";
}

// Hàm so sánh sâu
function isDeepEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    console.log("keys1", keys1); // trả về mảng các thuộc tính của obj1
    const keys2 = Object.keys(obj2); // trả về mảng các thuộc tính của obj2
    // nếu số lượng keys khác nhau thì chắc chắn khác nhau
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];
        // kiểm tra xem hai giá trị có cùng là object hay không
        const areObjects = isObject(val1) && isObject(val2);
        // nếu cùng là object thì phải gọi đệ quy để so sánh 2 object
        if (areObjects && !isDeepEqual(val1, val2)) {
            return false;
        }
        // nếu không cùng là object thì so sánh giá trị
        if (!areObjects && val1 !== val2) {
            return false;
        }
    }
    return true;
}
let point1 = { x: 1, y: 2, metadata: { type: "point", age: 12 } };
let point2 = { x: 1, y: 2, meta: { type: "point" } };
console.log("so sánh 2 object ", isDeepEqual(point1, point2));
"use strict"
const people = {
    name: 'người'
}
const superman = {
    name: 'superman'
}
people.children = superman

console.log("people", people);

console.log("superman", superman);

people.children.name = 'tên mới'

console.log("people", people);

console.log("superman", superman);

//Tạo đối tượng với Object contructor functions
function Khachhang(ht, dc, dt) {
    this.hoten = ht;
    this.diachi = dc;
    this.dienthoai = dt;
    this.thongtin = function() {
        console.log(this.hoten, this.diachi, this.dienthoai);
    }
}
const kh01 = new Khachhang("Phạm Văn Long", "Ninh Bình", 866828712);

kh01.tuoi = 50;

kh01.thongtin();

console.log(kh01);

//Sử dụng prototyping inheritance
function BaiTho(tg, nd) {
    this.tg = tg;
    this.noidung = nd;
}

const sach = new BaiTho('Lục Vân Tiên', 'đấu tranh')

sach.diachi = 'HN'


BaiTho.prototype.dodai = 10

// Prototype là khuôn mẫu cho các đối tượng trong javascript. Các đối tượng kế thừa các thuộc tính và phương thức từ
// prototype của mình.Nếu bạn bổ sung thuộc tính hay phương thức vào prototype thì các đối tượng cũng sẽ có

console.log(sach.dodai); // sách cỏ thể trỏ trực tiếp đến dodai được khai báo ở BaiTho.prototype.dodai



// Trong JavaScript, this từ khóa đề cập đến một đối tượng.

// Đối tượng nào this phụ thuộc vào cách đang được gọi(được sử dụng hoặc được gọi).

// Từ khóa this  đề cập đến các đối tượng khác nhau tùy thuộc vào cách nó được sử dụng:

// Trong một phương thức đối tượng, this là tham chiếu đến đối tượng.

const btn = 1
btn.phuongthuc // this ở đây là btn

// Một mình, this đề cập đến đối tượng toàn cục  .

console.log(this);

// Trong một hàm, this tham chiếu đến đối tượng toàn cục.

// Trong một chức năng, trong chế độ nghiêm ngặt use strict , this là undefined.

// Trong một sự kiện, this đề cập đến phần tử đã nhận sự kiện.

// Nhìn chung, hàm call và apply là gần giống nhau.Chúng đều gọi hàm trực tiếp.Chỉ khác ở cách truyền tham số
// vào(với call thì đối số phân cách bởi dấu phẩy comma và với apply thì đối số cho bởi mảng array)

// Hàm bind thì hơi khác hơn một chút.Hàm này không gọi hàm trực tiếp mà nó sẽ trả về một hàm mới.Và bạn có thể sử dụng hàm
// số mới này sau.Về cách truyền tham số vào thì nó giống với hàm call.
//call
var person1 = { firstName: 'Jon', lastName: 'Kuperman' };
var person2 = { firstName: 'Kelly', lastName: 'King' };

function say(greeting1, greeting2) {
    console.log(greeting1 + ',' + greeting2 + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Hello', 'Good morning'); // => Hello,Good morning Jon Kuperman
say.call(person2, 'Hello', 'Good morning'); // => Hello,Good morning Kelly King

//apply

var person1 = { firstName: 'Jon', lastName: 'Kuperman' };
var person2 = { firstName: 'Kelly', lastName: 'King' };

function say(greeting0, greeting1) {
    console.log(greeting0 + ',' + greeting1 + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(person1, ['Hello', 'Good moring']); // => Hello,Good moring Jon Kuperman
say.apply(person2, ['Hello', 'Good moring']); // => Hello,Good moring Kelly King
//bind
var person1 = { firstName: 'Jon', lastName: 'Kuperman' };
var person2 = { firstName: 'Kelly', lastName: 'King' };

function say(greeting0, greeting1) {
    console.log(greeting0 + ',' + greeting1 + ' ' + this.firstName + ' ' + this.lastName);
}
var sayHelloJon = say.bind(person1, 'Hello', 'Good morning');
var sayHelloKelly = say.bind(person2, 'Hello', 'Good morning');
sayHelloJon(); // => Hello,Good morning Jon Kuperman
sayHelloKelly(); // => Hello,Good morning Kelly King
//So sánh mảng và đối tượng
// giống nhau đều là lưu trữ nhiều giá trị
//khác là đánh dấu ở mảng dùng index còn đối tượng thì cần có tên
//kế thừa protype function
function Animal(name) {
    this.type = "Animal";
    this.name = name;
    this.sayType = function() {
        console.log("type: " + this.type);
    };
}
Animal.prototype.sayName = function() {
    console.log("name: " + this.name);
};

function Dog(name) {
    this.super_ = Animal;
    this.super_.call(this, name);
    this.type = "Dog";
    this.shout = function() {
        console.log("shout: " + "Go Go Go !!!");
    };
}
inherits(Dog, Animal);

function inherits(child, parent) {
    child.prototype = Object.create(parent.prototype, {
        constructor: {
            value: child,
            enumerable: false,
            writable: true,
            configurable: true,
        },
    });
}
let myDog = new Dog("Rex");
myDog.shout(); // shout: Go Go Go !!!
myDog.sayType(); // type: Dog
myDog.sayName(); // name: Rex// let + const
// arrow function
// mặc định arrow function luôn return về không có {} và trong một số trường hợp có nhiều tác vụ ta cần có {} thì phải thêm return

// không cần return
(a, b) => a + b;
// cần thêm return 
(a, b) => {
    const chuck = 42;
    return a + b + chuck;
}
// this trong arrow function sẽ được là this biến toàn cục (window)

// arrow function không được tính như 1 constructors và vì thế ta không dùng arrow function với từ khóa new

//không phù hợp dùng với call,bind,apply vì call,bind,apply thiết lập phạm vi scope còn arrow function là mặc định để
// this là biến toàn cục

//không sử dụng với yield bởi bản chât yield nó như return mà arrow function đã mặc định return

//Promise
//Promise bản chất là 1 object đặc biệt dược xây dựng sẵn  trong javascript được xử dụng cho việc xử lí thao tác bất đồng bộ
//
//A Promiseở một trong các trạng thái sau:

// đang chờ xử lý: trạng thái ban đầu, không được hoàn thành hoặc bị từ chối. (pending)
// hoàn thành: có nghĩa là hoạt động đã được hoàn thành thành công. (fulfilled)
// bị từ chối: nghĩa là thao tác không thành công. (rejected)

const func = (resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
}
const myPromise = new Promise(func());
//Chained Promises được xử dụng sử lí dựa vào Promise đã khởi tạo dựa trên ba hàm sau : promise.then(), promise.catch(), and promise.finally()
//then là 1 function nhận vào tối đa 2 hàm thành công và thật bại
myPromise.then(
        function success(data) {
            console.log(data);
        },
        function error(error) {
            console.log(error);
        }
    )
    // hoặc bạn có thể nhận 1 hàm và bắt lỗi dựa vào promise.catch()
myPromise.then(
        function success(data) {
            console.log(data);
            return data
        },
    )
    .then(
        function success(data) {
            console.log(data);
        },
    )
    .catch(error => console.log(error));

// lưu ý khi dùng nhiều then dễ bị rơi vào Promise Hell và then sau sẽ nhận giá trị then trước trả về để sử dụng

//fix Promise Hell Kotexcode
// Promise Hell

// function success() {
//     return new Promise(function(resolve, reject) {
//          ....code
//     })
// }
// myPromise.then(
//     function success(data) {
//         console.log(data);
//         return success(data)
//             .then(function success(data) {
//                 console.log(data);
//                 return success(data)
//                     .then(function success(data) {
//                         console.log(data);
//                         return success(data)
//                     })
//             })
//     },
// )

//fix kotexcode

// myPromise.then(success).then(success).then(success)

//Enhanced Object Literals in ES6 khởi tạo nhanh 1 object
//Factory Functions
function getLaptop(make, model, year) {
    return {
        make: make,
        model: model,
        year: year
    }
}

const laptop = getLaptop("Apple", "MacBook", "2015"); // dễ phồng bộ nhớ do luôn tồn tại nhiều bản sao object

//Object Literals
// nếu tạo 1 object giống sẽ phải khai báo lại và cop tất cả thuộc tính và phương thức
var o = {
    x: 42,
    y: 3.14,
    f: function() {},
    g: function() {}
};

//Prototype Chains
//Điều này có 1 hạn chế là gây ra sự lặp lại code. Dòng đầu tiên và dòng cuối cùng của chức năng "thing" đều bị lặp lại.

var thingPrototype = {
    f: function() {},
    g: function() {}
};

function thing() {
    var o = Object.create(thingPrototype);

    o.x = 42;
    o.y = 3.14;

    return o;
}

var o = thing();

//es6
class Thing {
    constructor() {
        this.x = 42;
        this.y = 3.14;
    }

    f() {}
    g() {}
}

var o = new Thing();

// ES6 Template String tạm gọi là một cú pháp, cho phép bạn viết biểu thức ngay bên trong string.ES6 Template String
// tạm gọi là một cú pháp, cho phép bạn viết biểu thức ngay bên trong string.

const ten = "ngỗng";
const greeting = `con ${ten}`;
console.log(greeting);

// ưu điểm nổi bật của ES6 Template String

// Ghép nối string
const intro = "một đàn";
const firstName = "con";
const lastName = "ngỗng";

const full3 = `${intro} ${firstName} ${lastName}.`;
console.log(full3);

//Sử dụng đồng thời nháy đơn và nháy kép

const str = `I'm a "JavaScript Lover".`;
console.log(str)

// Viết string trên nhiều dòng
const str1 =
    `Hello everyone!
    This is line 1 of multiline string example.
    This is line 2 of multiline string example.`
console.log(str1);
//Viết biểu thức toán học hoặc hàm ngay trong string
//bình thường
let x = 1;
let y = 2;
let sum = (x, y) => x + y;
console.log("Sum of x and y is: " + (x + y));
//Khi sử dụng ES6 Template String:
let z = 1;
let t = 2;
let tong = (z, t) => z + t;
console.log(`tong of x and y is: ${z + t}`);
//Async / Await là một tính năng của JavaScript giúp chúng ta làm việc với các hàm bất đồng bộ theo cách thú vị hơn và dễ hiểu hơn.
// Async - khai báo một hàm bất đồng bộ(async function someName() {... }).
// Tự động biến đổi một hàm thông thường thành một Promise.
// Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.
// Async cho phép sử dụng Await.
// Await - tạm dừng việc thực hiện các hàm async.(Var result = await someAsyncCall().
// Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.Await chỉ làm việc với Promises,
// nó không hoạt động với callbacks.Await chỉ có thể được sử dụng bên trong các
//function async.
// async getListPostHasPaging({ commit }, { pagesize = PAGE_SIZE, currPage = CURRENT_PAGE, tagIndex = null }) {
//     commit('SET_LOADING', true, { root: true })
//     try {
//         var config = {
//             params: {
//                 currPage,
//                 pagesize,
//             }
//         }
//         if (tagIndex) {
//             config.params.tagIndex = tagIndex
//             var result = await axiosInstance.get('/post/getListByCategory.php', config);
//         } else {
//             var result = await axiosInstance.get('/post/getListPagination.php', config);

//         }
//         commit('SET_LOADING', false, { root: true })

//         if (result.data.status == 200) {
//             if (currPage === 1) {
//                 commit('SET_LIST_POSTS', result.data.posts)
//             } else if (currPage > 1) {
//                 commit('PUSH_LIST_POSTS', result.data.posts)
//             }
//         }

//     } catch (err) {
//         commit('SET_LOADING', false, { root: true });
//         console.log('lỗi', err)
//     }
// },
//Những điều cần lưu ý khi sử dụng Async / Await
// Chúng ta không thể sử dụng Await bên trong thông thường các hàm

// function firstAsync() {
//     let promise = Promise.resolve(10);
//     let result = await promise; // Syntax error
// }
//Async / Await thực hiện tuần tự
// async function sequence() {
//     await promise1(50); // Wait 50ms…
//     await promise2(50); // …then wait another 50ms.
//     return "done!";
// }
//async function sequence() {
// await Promise.all([promise1(), promise2()]);//chạy đồng thời 2 api
// return "done!";
// }
// Destructuring
// Destructuring Objects
// lấy giá trị thuộc tính Object dễ dàng thuận tiện hơn
const note = {
        id: 1,
        website: 'anonystick.com',
        date: '17/07/2014',
    }
    //cách cũ
    // const id = note.id
    // const website = note.website
    // const date = note.date
    // sử dụng Destructuring Objects
    // const { id, website, date } = note
    // Destructuring Arrays
const date = ['2014', '17', '07']
    //cách cũ
    // const year = date[0]
    // const month = date[1]
    // const day = date[2]
    //sử dụng Array Destructuring
    // const [year, month, day] = date
    //Spread
    //Spread operator là ba dấu chấm ( ...), có thể chuyển đổi một mảng thành một chuỗi các tham số được phân tách bằng dấu phẩy
    //Array
const ocean = [1, 2, 3]
const newOcean = [...ocean, 4, 5]
console.log("newOcean", newOcean);

//Objects
const obj = {
    ten: 'ngỗng'
}
const newObj = {
    ...obj,
    age: 5
}
console.log("newObj", newObj);

//Spread with Function Calls

function multiply(a, b, c) {
    return a * b * c
}
const numbers = [1, 2, 3]

multiply(...numbers);

//Rest là ngược của Spread(lưu ý phải để rest ở cuối trong danh sách các parameters của hàm)
//Default là giá trị mặc định của biến được truyền vào nếu giá trị biến truyền vào không có hoặc không xác định
function multiply(a, b = 1) {
    return a * b;
}
//Axios là một thư viện HTTP Client dựa trên Promise dùng để tương tác giữa backend và frontend
//Axios sử dụng thuộc tính data đã tự động convert sang json,
//Axios giúp code tường minh hơn
//Axios hỗ trợ hầu như mọi trình duyệt và version, kể cả các trình duyệt cũ như IE11 cũng có thể chạy Axios mà không có vấn đề gì
//Classes là một dạng function đặc biệt, thay vì sử dụng từ function thì chúng ta sử dụng class và thuộc tính được gán bên trong phương thức constructor().
// Classes có tính kế thừa(inheritance), dễ dàng kế thừa tất cả phương thức từ Classes đã có trước đó.
// Class Definition.

class Employee {
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setAge(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
};

//để khởi tạo đối tượng được khai báo theo chuẩn ES6 thì các bạn sử dụng từ khóa new với cú pháp như sau:
//new Employee();
//kế thế
class Member {
    constructor() {
        this.name = "Dương Minh Trí";
    }

    memberName() {
        return this.name;
    }
}

class User extends Member {
    constructor(name, age) {
        super(name);
        this.age = 4;
    }

    memberInfo() {
        return this.memberName() + 'Tuổi:' + this.age;
    }
}
var x = new User();
console.log(x.memberInfo());
//(super)
class Employee {
    getClassName() {
        return "Class Employee";
    }
};
class MaleEmployee extends Employee {
    getClassName() {
        return "Class MaleEmployee";
    }
    classClassName() {
        return super.getClassName();
    }
}
var employee = new MaleEmployee();
console.log(employee.classClassName());
//kết quả: Class Employeeconst axios = require('axios');
// async - await
async function timeout() {
    console.log("timeout", 1);
    const a = await new Promise((resolve, reject) =>
        setTimeout(resolve, 5000, "timeout"));
    console.log("timeout", a);
    console.log("timeout", 3);
}
async function myFuc() {
    console.log("myFuc", 1);
    await timeout();
    console.log("myFuc", 4)
}
myFuc();
//axios + async+await
const axiosInstance = axios.create({
    baseURL: '',
    headers: {
        'accept': 'application/json'
    }
});
async function getPostDetailById() {
    try {
        console.log("bắt đầu gọi API");
        const promise1 = await axiosInstance.get('http://api-meme-zendvn-01.herokuapp.com/api//member/member.php?userid=2');
        const promise2 = axiosInstance.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        const [result1, result2] = await Promise.all([promise1, promise2])
        console.log("result1", result1.data, "result2", result2.data);
        console.log("Gọi xong gọi API");

    } catch (error) {
        return {
            ok: false,
            error: error.message
        }
    }
}
getPostDetailById();
//axios + promise
const promise = new Promise((resolve) => console.log(resolve(axiosInstance.get('http://api-meme-zendvn-01.herokuapp.com/api//member/member.php?userid=2'))))
    .then(res => console.log("res", res))
console.log("promise", promise);
//Promise.allSettled() phương thức trả về resolve 1 mảng chứa kết quả
//Promise.any  trả về resolve nhanh nhất nếu tất cả reject thì sẽ trả về hết reject
//Promise.race trả về  resolve nhanh nhất k cần là resolve hay reject