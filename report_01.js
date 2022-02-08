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
// console.log(myFuc());

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

console.log(isDeepEqual(point1, point2));

console.log(typeof(null));

// null khác undefined
// null là có khai báo nhưng để trống giá trị(có chủ đích) còn undefined là có khai báo nhưng không gán giá trị(do chủ quan), type of null là 1 object,
//instanceof và type of :instanceof thì nó sẽ kiểm tra xem đối tượng khởi tạo có trong prototype của đối tượng khởi tạo không còn  type of sẽ trả về kiểu đã định nghĩa sẵn
// tìm hiểu các kiểu so sánh trong javascript

//
console.log(11); // hiển thị màu xanh
console.log("ngỗng"); // hiển thị màu đen