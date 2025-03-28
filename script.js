		import '@4tw/cypress-drag-drop'
it('should drag and drop', () => {
  for (let index = 1; index <= 6; index++) {
    // Wait for the element to exist before running the test
    cy.get(`#div${index}`).drag(`#div${(index % 6) + 1}`);
      const draggable = $el[0];
      const droppable = Cypress.$(`#div${(index % 6) + 1}`)[0];
      const coords = droppable.getBoundingClientRect();

      draggable.dispatchEvent(new MouseEvent('mousedown'));
      draggable.dispatchEvent(new MouseEvent('mousemove', { clientX: 10, clientY: 0 }));
      draggable.dispatchEvent(new MouseEvent('mousemove', { clientX: coords.x + 10, clientY: coords.y + 10 }));
      draggable.dispatchEvent(new MouseEvent('mouseup'));

      cy.get(`#div${(index % 6) + 1}`).within(() => {
        cy.get('img').should('have.length', 1);
      });
  }
});