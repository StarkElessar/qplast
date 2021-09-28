class Products {

  render() {
    let htmlCatalog = '';

    CATALOG:seals.forEach(({id, name, price, img}) => {
      htmlCatalog += `
        <li>
          <span>${name}</span>
          <img src='${img}' />
          <span>${price} р.</span>
          <button>Подробнее</button>
        </li>
      `;
    });

    const html = `
      <ul>
        ${htmlCatalog}
      </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
};

const productsPage = new Products();
productsPage.render();