  document.addEventListener('DOMContentLoaded', function() {


	     const gridItems = document.querySelectorAll('.image');
            let draggedItem = null;
            
            // Add event listeners for drag and drop
            gridItems.forEach(item => {
                item.addEventListener('dragstart', handleDragStart);
                item.addEventListener('dragover', handleDragOver);
                item.addEventListener('dragenter', handleDragEnter);
                item.addEventListener('dragleave', handleDragLeave);
                item.addEventListener('drop', handleDrop);
                item.addEventListener('dragend', handleDragEnd);
            });
            
            function handleDragStart(e) {
                draggedItem = this;
                this.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
                // Firefox requires data to be set for drag to work
                e.dataTransfer.setData('text/html', this.innerHTML);
            }
            
            function handleDragOver(e) {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                return false;
            }
            
            function handleDragEnter(e) {
                e.preventDefault();
                this.classList.add('over');
            }
            
            function handleDragLeave(e) {
                this.classList.remove('over');
            }
            
            function handleDrop(e) {
                e.stopPropagation();
                e.preventDefault();
                
                if (draggedItem !== this) {
                    // Swap background images
                    const draggedBg = draggedItem.style.backgroundImage;
                    const targetBg = this.style.backgroundImage;
                    
                    draggedItem.style.backgroundImage = targetBg;
                    this.style.backgroundImage = draggedBg;
                }
                
                this.classList.remove('over');
                return false;
            }
            
            function handleDragEnd() {
                this.classList.remove('dragging');
                gridItems.forEach(item => {
                    item.classList.remove('over');
                });
            }
        });