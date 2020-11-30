import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class Main {

  constructor() {
  }

  async render() {
    document.querySelector('[data-carousel-holder]').append((new Carousel(slides)).elem);
    this.ribbonMenu = new RibbonMenu(categories);
    document.querySelector('[data-ribbon-holder]').append(this.ribbonMenu.elem);
    this.stepSlider = new StepSlider({steps: 5,value :3});
    document.querySelector('[data-slider-holder]').append(this.stepSlider.elem);
    this.cartIcon  = new CartIcon();
    document.querySelector('[data-cart-icon-holder]').append(this.cartIcon.elem);
    this.cart = new Cart(this.cartIcon);

    let response = await fetch('products.json');

    if (response.ok) {

      this.json = await response.json();
      this.productsGrid = new ProductsGrid(this.json);
      document.querySelector('[data-products-grid-holder]').innerHTML = "";
      document.querySelector('[data-products-grid-holder]').append(this.productsGrid.elem);

      this.productsGrid.updateFilter({
        noNuts: document.getElementById('nuts-checkbox').checked,
        vegeterianOnly: document.getElementById('vegeterian-checkbox').checked,
        maxSpiciness: this.stepSlider.value,
        category: this.ribbonMenu.value
      });
    } else {
      alert("Ошибка HTTP: " + response.status);
    }

    document.body.addEventListener("product-add",(e) =>{
      this.json.forEach((item,index)=>{
        if(item.id == e.detail){
          this.cart.addProduct(item);
          return;
        }
      });
    });
    
    this.stepSlider.elem.addEventListener("slider-change",(e)=>{ 
      this.productsGrid.updateFilter({
        maxSpiciness: e.detail
      });
    });

    this.ribbonMenu.elem.addEventListener("ribbon-select",(e)=>{ 
      this.productsGrid.updateFilter({
        category: e.detail
      });
    });

    document.querySelector("input[id='nuts-checkbox']").addEventListener("change",(e)=>{
      this.productsGrid.updateFilter({
        noNuts: e.target.checked
      });
    });

    document.querySelector("input[id='vegeterian-checkbox']").addEventListener("change",(e)=>{
      this.productsGrid.updateFilter({
        vegeterianOnly: e.target.checked
      });
    });
  }
}
