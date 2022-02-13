// let + const
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

//kết quả: Class Employee