export {};
function initFilters(){
const active=new Set<string>();
function apply(){document.querySelectorAll<HTMLElement>('[data-tags]').forEach(card=>{const tags=(card.dataset.tags||'').split(',');card.hidden=![...active].every(tag=>tags.includes(tag));});document.querySelectorAll<HTMLButtonElement>('.filter-tag').forEach(button=>{const selected=active.has(button.dataset.tag||'');button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));});}
function toggle(tag:string){active.has(tag)?active.delete(tag):active.add(tag);apply();}
document.querySelectorAll<HTMLButtonElement>('.filter-tag').forEach(b=>b.addEventListener('click',()=>toggle(b.dataset.tag!)));
document.querySelectorAll<HTMLElement>('[data-tag-name]').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();toggle(b.dataset.tagName!)}));
const tag=new URLSearchParams(location.search).get('tag');if(tag&&document.querySelector('.filter-tag')&&[...document.querySelectorAll<HTMLElement>('.filter-tag')].some(b=>b.dataset.tag===tag)){active.add(tag);}apply();

}
document.addEventListener('astro:page-load',initFilters);
