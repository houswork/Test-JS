
const div = document.createElement('div');
const header = document.createElement('h1');
header.innerText = 'JavaScript'
header.classList.add('test')
const a = document.createElement('a');
a.href = 'https://vk.com/lailailalalai'
a.innerText = 'Мой Vk'

div.appendChild(header)
div.appendChild(a)
document.body.appendChild(div)
console.log(div)
console.log(a)  