$(document).ready(function(){
  var model = {
    limit: 3,
    offset: 0,
    data: [],
    url: function () {
      return (
        'http://www.stellarbiotechnologies.com/media/press-releases/json?limit=' + this.limit + '&offset=' + this.offset
      );
    },
    fetch: function () {
      $.getJSON(this.url(), function (response) {
        this.data = response.news
        $(this).trigger('change')
      }.bind(this));
    },
    incrementOffset: function () {
      this.offset += this.limit
    }
  }

  var view = {
    el: $('tbody'),
    model: model,
    setLisenters: function () {
      $(window).scroll(function() {
        var bottomOfViewport = $(window).scrollTop() + $(window).height(),
        bottomOfDocument = $(document).height();

        if (bottomOfViewport == bottomOfDocument) {
          this.model.incrementOffset()
          this.model.fetch()
        }
      }.bind(this));
      $(model).on('change', this.render.bind(this))
    },
    template: function (model) {
      var html = ''

      for (var i = 0; i < model.data.length; i++) {
        html +=
          '<tr><td>' + model.data[i].title + '</td><td>' +
          model.data[i].published + '</td></tr>'
      }
      return html
    },
    render: function () {
      $(this.template(this.model)).appendTo(this.el)
    }
  }

  view.setLisenters()
  model.fetch()
});

  // const URL = 'http://www.stellarbiotechnologies.com/media/press-releases/json?limit=3&offset=';
  // var limit = 3,
  //     offset = 0;
    // $.getJSON(URL + offset, function (data) {

  //   $.each(data.news, function(key, value) {
  //     var row = '<tr>' + '<td>' + value.title + '</td>' + '<td>' + value.published + '</td>' + '</tr>'
  //     $(row).appendTo('tbody');
  //   });
  // });

  // $(window).scroll(function() {
  //   var bottomOfViewport = $(this).scrollTop() + $(this).height(),
  //       bottomOfDocument = $(document).height();


  //   if (bottomOfViewport == bottomOfDocument) {
  //     offset += limit;
  //     $.getJSON(URL + offset, function (data) {

  //       $.each(data.news, function(key, value) {
  //         var row = '<tr>' + '<td>' + value.title + '</td>' + '<td>' + value.published + '</td>' + '</tr>'
  //         $(row).appendTo('tbody');
  //       });
  //     });
  //   }
  // });

