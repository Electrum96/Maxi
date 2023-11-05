import {action, makeObservable, observable, runInAction} from 'mobx';
import products from '../data/products';

class Product {
  list = products;
  sortedList = this.list;
  basketList = [];

  constructor() {
    makeObservable(this, {
      list: observable,
      sortedList: observable,
      basketList: observable,
      addProduct: action,
      removeProduct: action,
      clearCart: action,
      incrementProduct: action,
      decrementProduct: action,
    });
  }

  incrementProduct = (id) => {
    const product = this.basketList.find(el => el.id === id);

    if (product) {
      product.count = product.count + 1;
    }
  }

  decrementProduct = (id) => {
    const product = this.basketList.find(el => el.id === id);

    if (product.count && product.count > 1) {
      product.count = product.count - 1;
    }
  }

  addProduct = (id) => {
    const product = this.sortedList.find(el => el.id === id);

    if (product) {
      product.added = true;
      this.basketList.push(product);
    }
  }

  isProductBasket = (id) => {
    return this.basketList.find(el => el.id === id) ? true : false
  }

  removeProduct = (id) => {
    const product = this.basketList.find(el => el.id === id);

    if (product) {
      product.added = false;
      product.count = 1;
      this.basketList = this.basketList.filter(i => i.id !== id);
    }
  }

  sortedProduct = (value) => {
    runInAction(() => {
      if (value) {
        this.sortedList = this.list.filter(product => product.classTab === value);
      } else {
        this.sortedList = this.list;
      }
      
    });
  }

  clearCart = () => {
    this.sortedList = this.sortedList.map(el => ({
      ...el,
      added: false,
      count: 1,
    }));

    this.basketList = [];
  }
}

const product = new Product();

export default product;
