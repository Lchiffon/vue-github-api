var apiURL = 'https://api.github.com/users/'

var app = new Vue({

  el: '#app',

  data: {
    user: null,
    response: null
  },

  watch: {
    user: 'fetchData'
  },

  methods: {
    fetchData: function () {
      let self = this;

      fetch(apiURL + self.user)
        .then(response => response.json())
          .then(data => {
            self.response = data
          });
    }
  }
});