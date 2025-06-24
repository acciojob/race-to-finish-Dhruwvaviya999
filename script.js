window.promises = [];
let outputDiv = document.getElementById("output");

let promise1 = new Promise((res, rej) => {
	setTimeout(() => {
		res("Promise 1 resolved");
	}, (Math.floor(Math.random() * 5) + 1) * 1000)
})

let promise2 = new Promise((res, rej) => {
	setTimeout(() => {
		res("Promise 2 resolved");
	}, (Math.floor(Math.random() * 5) + 1) * 1000)
})

let promise3 = new Promise((res, rej) => {
	setTimeout(() => {
		res("Promise 3 resolved");
	}, (Math.floor(Math.random() * 5) + 1) * 1000)
})

let promise4 = new Promise((res, rej) => {
	setTimeout(() => {
		res("Promise 4 resolved");
	}, (Math.floor(Math.random() * 5) + 1) * 1000)
})

let promise5 = new Promise((res, rej) => {
	setTimeout(() => {
		res("Promise 5 resolved");
	}, (Math.floor(Math.random() * 5) + 1) * 1000)
})

Promise.any([promise1, promise2, promise3, promise4, promise5]).then((res) => {
	outputDiv.textContent = res;
})




// Do not change the code above this
// add your promises to the array `promises`
