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