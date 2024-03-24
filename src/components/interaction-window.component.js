class InteractionWindow extends HTMLElement {
  constructor() {
    super();

    const interactions = ['Navigate', 'Observe', 'Implement', 'Communicate'];

    const shadow = this.attachShadow({ mode: 'open' });

    const section = document.createElement('interaction-window');
    section.id = 'interaction-window';

    const actionArticle = document.createElement('article');
    actionArticle.id = 'action-box';
    actionArticle.innerHTML = `
      <label>Actions</label>
      <ul>
      ${interactions.map((action) => `<li>${action}</li>`)}
      </ul>
    `;

    const inventoryArticle = document.createElement('article');
    inventoryArticle.id = 'inventory-box';
    inventoryArticle.innerHTML = `
      <label>Inventory</label>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    `;

    section.appendChild(actionArticle);
    section.appendChild(inventoryArticle);

    const style = document.createElement('style');
    style.innerHTML = `
      #interaction-window {
        border: none;
        display: flex;
        flex-direction: column;
        height: 600px;
        gap: 16px;
      }

      #interaction-window > section {
        border: 1px solid var(--text-color);
        border-radius: 4px;
        flex: 1;
      }
    `;

    shadow.appendChild(section);
  }
}

customElements.define('interaction-window', InteractionWindow);