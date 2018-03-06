var PRICE = 5.45;

new Vue({
  el:'#app',
  data:{
    total: 0,
    items: [
      { id:1, title: 'Item1' },
      { id:2, title: 'Item2' },
      { id:3, title: 'Item3' }
    ],
    cart: []
  },
  methods: {
    addItem: function (index) {
      this.total += 5.45;
      var item = this.items[index];
      var found = false;
      for (var i=0; i < this.cart.length; i++){
        if (this.cart[i].id === item.id){
          found = true;
          this.cart[i].qty++;
        }
      }
      if (!found) {
        this.cart.push({
          id: item.id,
          title: item.title,
          qty: 1,
          price: PRICE
        });
      }
    },
    inc: function (item) {
      item.qty++;
      this.total += PRICE;
    },
    dec: function (item) {
      item.qty--;
      this.total -= PRICE;
      if (item.qty <= 0) {
        for (var i =0; i < this.cart.length; i++) {
          if (this.cart[i].id === item.id) {
            this.cart.splice(i, 1);
            break;
          }
        }
      }
    }
  },
  filters: {
    currency: function (price) {
      return '$'.concat(price.toFixed());
    }
  }
});