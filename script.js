const api__url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const quoteData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  quote.innerHTML = data.content;
  author.innerHTML = data.author;
};

quoteData(api__url);

const tweet = () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "---" +
      author.innerHTML,
    "Tweet Window",
    "width = 600",
    "height=300"
  );
};
