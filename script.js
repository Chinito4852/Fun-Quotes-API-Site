const fetchQuote = function(route) {
  $.getJSON(`https://fun-quotes.herokuapp.com/${route}`, function(data) {
    $("#author").text(data.author);
    $("#quote").text(data.quote);
    $("#url").attr("href", `https://fun-quotes.herokuapp.com/${route}`);
    $("#url").text(`https://fun-quotes.herokuapp.com/${route}`);
  });
}

$(document).ready(function() {
  fetchQuote("random");
  $(".url-btn").click(function() {
    fetchQuote($(this).attr("name"));
  });
});
