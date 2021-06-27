const btn = document.getElementById('btn');
const text = document.getElementById('text');
const container = document.getElementById('container');

btn.addEventListener('click', ()=>{
    text.classList.remove("d-none");
    btn.classList.add("d-none");

    container.classList.remove('bg-1');  
    container.classList.add('bg-2');  
})