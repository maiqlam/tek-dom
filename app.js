/*
let titleEl = document.getElementById('title');
// console.log(titleEl);

let pEl = document.querySelector('.cool');
console.log(pEl);

let commentEls = document.querySelectorAll('.comment');
// console.log(commentEls);

// for(let c of commentEls) {
// 	console.log(c);
// }

let li = document.getElementsByTagName('li');

let myArray = Array.prototype.slice.call(li, 1, 3);
console.log(myArray);

for (let c of commentEls) {
    c.style.fontSize = '30px';
}

let comments = document.querySelector('#comments');
console.log(comments.firstChild);
console.log(comments.lastChild);

// creating a new item
const newLi = document.createElement('li');
const newLiTwo = document.createElement('li');
const p = document.createElement("p");
let lastItem = document.querySelector('#lastItem')

// adding text to an element
newLi.innerText = 'new item appended';
newLiTwo.innerText = 'new item prepended';
p.innerText = "new para";

// appending a new item to the end of an element
lastItem.append(newLi);

//prepending a new item to the beginning of an element
lastItem.prepend(newLiTwo);

comments.append(p);
// comments.appendChild(p); // same as above
// comments.prepend(p);
// comments.insertBefore(p, commentList.firstChild); //same as above

*/
const body = document.querySelector('body');
const div1 = document.createElement('div');
const ol = document.createElement('ol');

for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    ol.append(li);
};

div1.append(ol);
body.append(div1);

const div2 = document.createElement('div');
const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    ul.append(li);
}; 
div2.append(ul);
body.append(div2);

/* Justin's solution to achieve same format:
function to make the lists keeping JS dry 
    function createListItems(parent, count) {
      for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        parent.appendChild(li);
      }
    }
 
    createListItems(ol, 3);
    createListItems(ul, 3);
*/

/*
const googleLink = document.getElementById('googleLink');
    googleLink.href = 'https://www.google.com'; */
// document.querySelector('a')
// const gLink = document.createAttribute("href");

glink.setAttribute('href', 'http://google.com');
