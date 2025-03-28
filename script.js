const items=document.querySelectorAll('.parent');
let draggedItem=null;

items.forEach(parent =>{
	image.addEventListener('dragstart',dragStart);
	image.addEventListener('dragover',dragOver);
	image.addEventListener('drop',dragDrop);
	image.addEventListener('dragend',dragEnd);
});

function dragStart(e) {
	draggedItem=e.target;
	e.dataTransfer.setData('text',e.target.id);
	setTimeout(() =>{
		e.target.style.display='none';
	},0);
}

function dragOver(e) {
	e.preventDefault();
}

function dragDrop(e) {
	e.preventDefault();
	const targetItem=e.target;

	if (targetItem !== draggedItem && targetItem.classList.contains('.parent')) 
	{
      const draggedItemId = draggedItem.id;
      const targetItemId = targetItem.id;

      const draggedItemBg = getComputedStyle(draggedItem).backgroundImage;
      const targetItemBg = getComputedStyle(targetItem).backgroundImage;
      
      draggedItem.style.backgroundImage = targetItemBg;
      targetItem.style.backgroundImage = draggedItemBg;
      
      draggedItem.id = targetItemId;
      targetItem.id = draggedItemId;
  }
}
function dragEnd(e) {
  e.target.style.display = 'block';
  draggedItem = null;
}