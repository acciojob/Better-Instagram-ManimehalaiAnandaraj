 document.addEventListener('DOMContentLoaded', function() {
            const gridItems = document.querySelectorAll('.image');
            let draggedItem = null;
            
            // Set background images (normally this would be in style.css)
            gridItems.forEach((item, index) => {
                item.setAttribute("id",`div${index+1}`);
            });
            
            // Drag start event
            gridItems.forEach(item => {
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