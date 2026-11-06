export {};
let cleanup: (()=>void)|undefined;
function initTheme(){
cleanup?.();
document.querySelectorAll<HTMLButtonElement>('[aria-label="Toggle theme"]').forEach(button=>button.addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('theme',theme)}catch{}}));
const controller=new AbortController();
const bar=document.querySelector<HTMLElement>('.mobile-profile');
if(bar){const sync=()=>document.documentElement.style.setProperty('--mobile-profile-height',`${bar.offsetHeight}px`);const observer=new ResizeObserver(sync);observer.observe(bar);cleanup=()=>{observer.disconnect();controller.abort();};sync();}

if(bar){const scroll=()=>bar.classList.toggle('is-scrolled',scrollY>6);addEventListener('scroll',scroll,{passive:true,signal:controller.signal});scroll();}

}
document.addEventListener('astro:page-load',initTheme);
document.addEventListener('astro:before-swap',()=>cleanup?.());
document.addEventListener('astro:before-swap',event=>{event.newDocument.documentElement.dataset.theme=document.documentElement.dataset.theme;});
