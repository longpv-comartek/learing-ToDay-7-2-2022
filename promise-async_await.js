const axios = require('axios');
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