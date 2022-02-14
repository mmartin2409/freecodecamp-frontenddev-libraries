import { quotes } from "./quotes.js";

const getColor = () => {
  const colors = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  $(".background-color").css("background-color", color);
};

const getQuote = () => {
  const i = Math.floor(Math.random() * quotes.length);
  return {
    quoteText: quotes[i].text,
    quoteAuthor: quotes[i].author,
  };
};

const displayQuote = (data) => {
  $("#quoteText").html(data.quoteText);
  $("#author").html(`- ${data.quoteAuthor}`);

  $("#tweet-quote").attr(
    "href",
    "https://twitter.com/intent/tweet?hashtags=quotes,Fcc&related=freecodecamp&text=" +
      encodeURIComponent('"' + data.quoteText + '" ' + data.quoteAuthor)
  );
};

$("#new-quote").on("click", () => {
  displayQuote(getQuote());
  getColor();
});

$(document).ready(() => {
  displayQuote(getQuote());
  getColor();
});
