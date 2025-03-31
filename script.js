// Define the function at the global scope
function allowDrop(ev) {
  ev.preventDefault();
}

document.addEventListener('DOMContentLoaded', function() {
  const gridItems = document.querySelectorAll('.image');
  let draggedItem = null;

let imageUrls =
			['https://picsum.photos/id/237/200/300',
            'https://picsum.photos/seed/picsum/200/300',
            'https://picsum.photos/200/300.jpg',
            'https://picsum.photos/200/300/',
            'https://picsum.photos/id/237/200/300',
			 'https://picsum.photos/seed/picsum/200/300'
	];

gridItems.forEach((item, index) => {
    item.style.backgroundImage = `url('${imageUrls[index]}')`;
    

	
    item.addEventListener('dragstart', function() {
      draggedItem = this;
      setTimeout(() => {
        this.classList.add('dragging');
      }, 0);
    });

    item.addEventListener('dragend', function() {
      this.classList.remove('dragging');
    });

    item.addEventListener('dragover', function(e) {
      e.preventDefault();
    });

    item.addEventListener('dragenter', function(e) {
      e.preventDefault();
      this.classList.add('hovered');
    });

    item.addEventListener('dragleave', function() {
      this.classList.remove('hovered');
    });

    item.addEventListener('drop', function() {
      this.classList.remove('hovered');

      if (draggedItem !== this) {
        // Swap background images
        const tempBg = draggedItem.style.backgroundImage;
        draggedItem.style.backgroundImage = this.style.backgroundImage;
        this.style.backgroundImage = tempBg;
      }
    });
  });
});
