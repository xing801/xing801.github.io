// console.log("is our script working");

var Airtable = require("airtable");
// console.log(Airtable);

var base = new Airtable({ apiKey: "keybrmRFrNME9zqAn" }).base(
  "appW6szUFz4H4yTp8"
);

base("bookcovers").select({}).eachPage(gotPageOfCovers, gotAllCovers);

const covers = [];

function gotPageOfCovers(records, fetchNextPage) {
  console.log("gotPageOfCovers()");
  // add the records from this page to our array
  covers.push(...records);
  // request more pages
  fetchNextPage();
}

function gotAllCovers(err) {
  console.log("gotAllCovers()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogCovers();
  showCovers();
}

function consoleLogCovers() {
  console.log("consoleLogCovers()");
  covers.forEach((cover) => {
    console.log("Cover:", cover);
  });
}

function showCovers() {
  console.log("showCovers()");
  covers.forEach((cover) => {
    
    // var coverName = document.createElement("h1");
    // coverName.innerText = cover.fields.name;
    // document.body.append(coverName);
 
 	var bookContainer = document.createElement("div");
 	bookContainer.classList.add("book-container");
 	document.querySelector(".container").append(bookContainer);

	var coverName = document.createElement("h1");
	coverName.classList.add("cover-name");
    coverName.innerText = cover.fields.name;
    document.body.append(coverName); 
  
  });
}
