// Copyright (c) 2022 gparap
// Get Random Quote

function getRandomQuote() {
    let quoteArea = document.getElementById("textarea-quote");

    fetch("<<replace-with-api>>")
        .then(response => response.json())
        .then(data => {
            quoteArea.innerHTML = data.quote;
            quoteArea.innerHTML += "\n\n";
            quoteArea.innerHTML += data.author;
        })
}