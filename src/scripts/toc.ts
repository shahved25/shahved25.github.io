export {};
let cleanup: (()=>void)|undefined;
function initToc(){
cleanup?.();
const controller=new AbortController();
cleanup=()=>controller.abort();
const links=[...document.querySelectorAll<HTMLAnchorElement>('[data-toc-id]')];const headings=links.map(a=>document.getElementById(a.dataset.tocId!)).filter((e):e is HTMLElement=>!!e);
function update(){const offset=window.innerWidth<992?parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--mobile-profile-height'))+130:160;let current=headings[0];for(const h of headings){if(h.getBoundingClientRect().top<=offset)current=h;}links.forEach(a=>{const active=a.dataset.tocId===current?.id;a.classList.toggle('toc-active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}if(headings.length){let waiting=false;addEventListener('scroll',()=>{if(!waiting){waiting=true;requestAnimationFrame(()=>{update();waiting=false;});}},{passive:true,signal:controller.signal});update();}

}
document.addEventListener('astro:page-load',initToc);
document.addEventListener('astro:before-swap',()=>cleanup?.());
