// Task1
for (let i = 1; i <= 10; i++) {
	console.log(i);
}

// Task2
const cleanPhoneNumber = phone => phone.replace(/-/g, '')
console.log(cleanPhoneNumber('8-966-544'));

const anythingToLowerCase = anything => {
	if (!anything) {
		return ''
	}
	return String(anything).toLowerCase()
}
console.log(anythingToLowerCase('SLKSLSKL'));