//your code here
const items=document.querySelectorAll('.image');
let draggedItem=null;
items.forEach(image =>{
	image.addEventListener('dragstart',dragStart);
	image.addEventListener('dragover',dragOver);
	image.addEventListener('drop',dragDrop);
});

function dragStart(e) {
	draggedItem=e.target;
	e.dataTransfer.setData('text',e.target.id);
	setTimeout(() =>{
		e.target.style.visibility='hidden';
	},0);
}

function dragOver(e) {
	e.preventDefault();
}

function dragDrop(e) {
	e.prevventDefault();
	const targetItem=e.target;

if (targetItem !== draggedItem && targetItem.classList.contains('image')) {
      const draggedItemId = draggedItem.id;
      const targetItemId = targetItem.id;

      const draggedItemBg = getComputedStyle(draggedItem).backgroundImage;
      const targetItemBg = getComputedStyle(targetItem).backgroundImage;
      
      draggedItem.style.backgroundImage = targetItemBg;
      targetItem.style.backgroundImage = draggedItemBg;
      
      draggedItem.id = targetItemId;
      targetItem.id = draggedItemId;
  }
  draggedItem.style.visibility = 'visible';
  draggedItem = null;
}



