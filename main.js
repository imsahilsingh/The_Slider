let slide_con = document.querySelector('.slide-container');
let slide = document.querySelectorAll('.slide');
let slidelength = slide.length;
let newindexx = 0; 
let count = 0;
// setInterval(()=> {
//   newindexx++;
//   navigator();
// },2000);
function next() {
  // let slide = document.querySelectorAll('.slide');
  // slide.forEach((index)=> {
  //   index.style.display = 'none';
  // });
  // count++;
  newindexx++;
  navigator();
  // if(count >= slide.length) {
  //   count = 0;
  // }
  // slide[count].style.display = 'block';
}
function prev() {
  // let slide = document.querySelectorAll('.slide');
  // slide.forEach((index)=> {
  //   index.style.display = 'none';
  // });
  // count--;
  newindexx--;
  navigator();
  // if(count < 0) {
  //   count = slide.length -1;
  // }
  // console.log(count);
  // slide[count].style.display = 'block';
}
let navigator = ()=> {
  // slide.forEach((index)=> {
  //   index.style.display = 'none';
  // });
  if(newindexx >= slide.length) {
    newindexx = 0;
  }
   if(newindexx < 0) {
    newindexx = slide.length -1;
  }
  // pagination.children[count].classList.remove('active');
  pagination.childNodes[count].classList.remove('active');
  pagination.childNodes[newindexx].classList.add('active');
  console.log(pagination.children[newindexx]);

    slide[count].style.display = 'none';
    slide[newindexx].style.display = 'block';
    count = newindexx;
}
window.addEventListener('DOMContentLoaded',()=> {
  let slide = document.querySelector('.slide');
  slide.style.display = 'block';
  pagination.childNodes[newindexx].classList.add('active');
});

let pagination = document.querySelector('.pag-container');
if (!pagination) {
  pagination = document.createElement('div');
  pagination.className = 'pag-container';
  slide_con.append(pagination);
}
let pagHTML = [];
for (i=0; i<slidelength; i++) {
  pagHTML.push('<button class="pag-button" data-index="'+ i +'"></button>');
  pagination.innerHTML = pagHTML.join('');
}
pagination.addEventListener('click',(e)=> {
  let target = e.target;
  console.log(target);
  newindexx = Number(target.getAttribute('data-index'));
  
  
  console.log(newindexx);
  navigator();
  
})
console.log(pagination.childNodes[newindexx])