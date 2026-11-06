export {};
function initCards(){
function toggleResearchDetails(card:Element|null){if(!card)return;const details=card.querySelector('.card-details');const expanded=details?.classList.toggle('expanded');card.setAttribute('aria-expanded',String(expanded));}
document.querySelectorAll<HTMLButtonElement>('.authors-ellipsis').forEach(button=>button.addEventListener('click',e=>{e.stopPropagation();const row=button.closest('.authors-row');row?.classList.add('expanded');button.setAttribute('aria-expanded','true');toggleResearchDetails(button.closest('.research-card'));row?.querySelector<HTMLAnchorElement>('.author-hidden a')?.focus({preventScroll:true});}));
document.querySelectorAll<HTMLElement>('.research-card').forEach(card=>{card.addEventListener('click',e=>{if((e.target as Element).closest('a,button'))return;toggleResearchDetails(card);});card.addEventListener('keydown',e=>{if(e.target!==card)return;if(e.key==='Enter'||e.key===' '){e.preventDefault();toggleResearchDetails(card);}});});

}
document.addEventListener('astro:page-load',initCards);
