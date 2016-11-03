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
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL + self.user)
      xhr.onload = function () {
        self.response = JSON.parse(xhr.responseText)
      }
      xhr.send()
    }
  }
});