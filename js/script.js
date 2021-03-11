window.Event = new Vue();

Vue.component('productBox' , {
  props : ['index' , 'name' , 'image' , 'rate' , 'reviews' , 'like' , 'category' , 'countries' , 'time'],
  template : `
          <div class="col-md-4">
            <div class="product-box">
              <div class="img">
                <img :src="image" alt="">
                <i></i>
              </div>

              <div class="title">
                <h6>{{ name }}</h6>
                <i :class="like ? 'fa-solid fa-heart' : 'fa-light fa-heart'"  v-on:click.prevent="likeThis(index)"></i>
              </div>
              <div class="rate">
                <div class="stars">
                  <span style="width : 60%"></span>
                </div>
                <span>{{ reviews }} Reviews</span>
              </div>
              <div class="footer">
                <ul>
                  <li v-for="country in countries">{{ country }}</li>
                </ul>
                <div>
                  <i class="fa-light fa-clock"></i>
                  <span>{{ time }}</span>
                </div>
              </div>
            </div>
          </div>
            `,
  methods : {
    close() {
      this.$emit('close')
    }
  }
});

let app = new Vue({
  el : '#app',
  data : {
    products : {
      0 : {
        name : 'Pakistani Chicken Platter',
        image : '../img/food-1.png',
        rate : 4,
        reviews : '32',
        like : false,
        category : 'Lunch',
        countries : [
          'India', 'Pakistani'
        ],
        time : '20-30'
      },
      1 : {
        name : 'Pakistani Chicken Platter',
        image : '../img/food-2.png',
        rate : 4,
        reviews : '',
        like : true,
        category : '',
        countries : [
          'Italian'
        ],
        time : ''
      },
      2 : {
        name : 'Pakistani Chicken Platter',
        image : '../img/food-3.png',
        rate : 4,
        reviews : '',
        like : false,
        category : '',
        countries : [
          'Italian'
        ],
        time : ''
      }
    }
  }
});
