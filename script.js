const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('nav');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    HTMLFormControlsCollection.addEventListener('click',()=>{
        nav.classList.Remove('active');
    })
}