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
    coverName.innerText = cover.fields.tag;
    bookContainer.append(coverName);

    var coverName = document.createElement("h2");
    coverName.innerText = cover.fields.name;
    bookContainer.append(coverName);

    var coverName = document.createElement("h3");
    coverName.innerText = cover.fields.author;
    bookContainer.append(coverName);

    var coverName = document.createElement("p");
    // coverInfo.classList.add("cover-info");
    coverName.innerText = cover.fields.info;
    bookContainer.append(coverName);

    var coverImage = document.createElement('img');
    coverImage.src = cover.fields.image[0].url;
    bookContainer.append(coverImage);

    let tagOne = covers.filter(cover => cover.fields.tag == '1');
    let tagTwo = covers.filter(cover => cover.fields.tag == '2');
    let tagThree = covers.filter(cover => cover.fields.tag == '3');
    let tagFour = covers.filter(cover => cover.fields.tag == '4');
    let tagFive = covers.filter(cover => cover.fields.tag == '5');
    let tagSix = covers.filter(cover => cover.fields.tag == '6');

    bookContainer.addEventListener("click", function() {
        coverInfo.classList.toggle("active");
    })

  });
}


var cube = document.getElementById('cube');
var min = 1;
var max = 24;
cube.onclick = function() {
  var xRand = getRandom(max, min);
  var yRand = getRandom(max, min)
  cube.style.webkitTransform = 'rotateX('+xRand+'deg)rotateY('+yRand+'deg)';
  cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
}

function getRandom(max,min) {
  return (Math.floor (Math.random() * (max-min)) + min) * 90;
}
