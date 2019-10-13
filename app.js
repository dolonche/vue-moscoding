// Task1
for (let i = 1; i <= 10; i++) {
	console.log(i);
}

// Task2
const cleanPhoneNumber = phone => phone.replace(/-/g, '')
console.log(cleanPhoneNumber('8-966-544'));

// const anythingToLowerCase = anything => {
// 	if (!anything) {
// 		return ''
// 	}
// 	return String(anything).toLowerCase()
// }
// console.log(anythingToLowerCase('SLKSLSKL'));

// Task3
console.log(`Число Pi равно ${Math.PI}`);

// Task4
// Task4.1
const sleep = arg => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(console.log(arg));
		}, arg);
	});
}
sleep(2000);
// Task4.2
const anythingToLowerCase = anything => new Promise((resolve, reject) => {
	resolve(anything.toLowerCase());
	reject('');
})
anythingToLowerCase('lKLKHKLkjk')
	.then(result => {
		return result;
	})
	.then(console.log)
	.catch(noResult => {
		return noResult;
	})
	.catch(console.log)