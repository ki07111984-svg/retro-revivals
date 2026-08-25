
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const el=document.querySelector(a.getAttribute('href'));
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});
const form=document.querySelector('#enquiry');
if(form){
 form.addEventListener('submit',e=>{
   e.preventDefault();
   const name=document.querySelector('#name').value.trim();
   const email=document.querySelector('#email').value.trim();
   const message=document.querySelector('#message').value.trim();
   const subject=encodeURIComponent('Retro Revivals website enquiry');
   const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
   window.location.href=`mailto:ki07111984@gmail.com?subject=${subject}&body=${body}`;
 });
}
