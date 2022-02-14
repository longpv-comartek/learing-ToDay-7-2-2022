//floating point
// 0.1 + 0.2 != 0.3

function myFuc() {
    const a = 0.1
    const b = 0.2
    const c = 0.3

    const d = a + b

    const e = d.toFixed(2)
    console.log(typeof d, typeof e);
    return e === c
}

console.log("fix floating point", myFuc(), );

// so sánh 2 obj
// Hàm kiểm tra một giá trị là object
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


// null khác undefined
// null là có khai báo nhưng để trống giá trị(có chủ đích) còn undefined là có khai báo nhưng không gán giá trị(do chủ quan),
// type of null là 1 object,
console.log(typeof(null));
//instanceof và type of :Toán tử instanceof được sử dụng để kiểm tra một đối tượng nào đó có phải là một đối tượng của một lớp được chỉ định hay không.
//  type of sẽ trả về kiểu đã định nghĩa sẵn

// tìm hiểu các kiểu so sánh trong javascript

//
console.log(11); // hiển thị màu xanh
console.log("ngỗng"); // hiển thị màu đen

// vòng for(let i =0;i<n;i++) là nhanh nhất(đầu giờ em có nói cho anh nghe)

function C() {}

function D() {}

let o = new C()

// true, 
console.log(o instanceof C);

// false, 
console.log(o instanceof D);

// so sánh == và ===

console.log("==", 3 == "3");

console.log("===", 3 === "3");
//++  number và number ++
var number = 1
console.log(++number, number);

var number = 1

console.log(number++, number);

//scope


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

// list học sinh và điểm

const per1 = {
    name: 'A',
    score: 6

}
const per2 = {
    name: 'B',
    score: 7
}
const per3 = {
    name: 'C',
    score: 8
}
const per4 = {
    name: 'D',
    score: 9
}
const per5 = {
    name: 'E',
    score: 10
}

const arrUser = [per1, per2, per3, per4, per5]

const listStudent = JSON.parse(JSON.stringify(arrUser))



const mediumScore = listStudent.filter(item => {
    return item.score === 7
})
const goodScore = listStudent.filter(item => {
    return item.score === 8
})
const excellentScore = listStudent.filter(item => {
    return (item.score >= 9)
})


console.log("mediumScore", mediumScore);
console.log("goodScore", goodScore);
console.log("excellentScore", excellentScore);

// add field children

per1.children = 'mẫu giáo'

console.log("newper1", per1);

console.log('new arrUser', arrUser);

//