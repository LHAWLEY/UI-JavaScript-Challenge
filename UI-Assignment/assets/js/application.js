$(document).ready(function(){
  const URL = 'http://www.stellarbiotechnologies.com/media/press-releases/json?limit=3&offset=',
        LIMIT = 3;

  var offset = 0;

  update(offset);

  $(window).scroll(function() {
    var bottomOfViewport = $(this).scrollTop() + $(this).height(),
        bottomOfDocument = $(document).height();

    if (bottomOfViewport == bottomOfDocument) {
      update(offset += LIMIT);
    }
  });

  function update(offset) {
    $.getJSON(URL + offset, function(data) {
      $.each(data.news, function(key, value) {
        var row = '<tr><td>' + value.title + '</td><td>' + value.published + '</td></tr>';
        $(row).appendTo('tbody');
      });
    });
  }
});