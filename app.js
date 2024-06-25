let name = document.querySelector('.name')
let price = document.querySelector('.price')
let createBtn = document.querySelector('.create')
let createDiv = document.querySelector('.createP')
let newName = document.querySelector('.newName')
let newPrice = document.querySelectorAll('.newPrice')
let newDate = document.querySelector('.newDate')
let container = document.querySelector('.container')
let imgCl = document.querySelector('.imgCl')
let numberIn = document.querySelector('.numberIn')
let number = document.querySelector('.number')

function create() {
	let newObj = {
		name: name.value,
		price: price.value,
		number: numberIn.value
	}

	if (name.value === '' || price.value === '' || number.velue === '') {
		console.log('error')
	} else {
		localStorage.setItem('product', JSON.stringify(newObj))
	}
}
container.style.display = 'none'

createBtn.addEventListener('click', () => {
	create()
	readProduct()
	container.style.display = 'block'
	createDiv.style.display = 'none'
})

imgCl.addEventListener('click', () => {
	container.style.display = 'none'
	createDiv.style.display = 'flex'
})

function readProduct() {
	let storedData = localStorage.getItem('product')
	let product = {}

	try {
		product = storedData ? JSON.parse(storedData) : {}
	} catch (error) {
		console.error('Error parsing JSON:', error)
		localStorage.removeItem('product')
	}

	const date = new Date()
	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const year = date.getFullYear()
	const hours = String(date.getHours()).padStart(2, '0')
	const minutes = String(date.getMinutes()).padStart(2, '0')

	const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`
	console.log(formattedDate)
	console.log(product)

	newName.innerHTML = product.name
	number.innerHTML = product.number
	newPrice.forEach(element => {
		element.innerHTML = `${product.price},00`
	})
	newDate.innerHTML = formattedDate
}

readProduct()
