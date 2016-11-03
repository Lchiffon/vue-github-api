var apiURL = 'https://api.github.com/users/'

var app = new Vue({

  el: '#app',

  data: {
    user: null,
    response: null
  },

  created: function () {
    this.fetchData()
  },

  watch: {
    user: 'fetchData'
  },

  methods: {
    fetchData: function () {
      var self = this;

      fetch(apiURL + self.user)
        .then(response => response.json())
        .then(data => {
          self.response = data
        }, (err) => {
          console.error(err);
          self.response = {};
        });
    }
  }
});