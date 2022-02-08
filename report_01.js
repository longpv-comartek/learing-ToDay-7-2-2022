//floating point
// 0.1 + 0.2 != 0.3

function myFuc() {
    let a = 0.1
    let b = 0.2
    let c = 0.3

    let d = a + b

    let e = +d.toFixed(2)

    return e === c
}
console.log("fix floating point", myFuc());

// so sánh 2 obj
// Hàm kiểm tra một giá trị là object
function isObject(obj) {
    return obj != null && typeof obj === "object";
}

// Hàm so sánh sâu
function isDeepEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1); // trả về mảng các thuộc tính của obj1
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

let point1 = { x: 1, y: 2, metadata: { type: "point" } };
let point2 = { x: 1, y: 2, metadata: { type: "point" } };

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
//var :có thể khai báo lại
var i = 1;
var i = 2;
var obj = {
    name: "string"
}
console.log(typeof JSON.stringify(obj))

//let : chỉ có thể cập nhật lại giá trị và phạm vi là local