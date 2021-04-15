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
    let tagOne = covers.filter(cover => cover.fields.tag == '1');
    let tagTwo = covers.filter(cover => cover.fields.tag == '2');
    let tagThree = covers.filter(cover => cover.fields.tag == '3');
    let tagFour = covers.filter(cover => cover.fields.tag == '4');
    let tagFive = covers.filter(cover => cover.fields.tag == '5');
    let tagSix = covers.filter(cover => cover.fields.tag == '6');

    var box1 = document.querySelector("#group1");
    box1.addEventListener("click", function() {
      box1.innerHTML = ``;
      tagOne.forEach((cover) => {
        var coverName = document.createElement("h2");
        coverName.innerText = cover.fields.name;
        box1.append(coverName);

        var coverName = document.createElement("h3");
        coverName.innerText = cover.fields.author;
        box1.append(coverName);

        var coverName = document.createElement("p");
        coverName.innerText = cover.fields.info;
        box1.append(coverName);

        var coverImage = document.createElement('img');
        coverImage.src = cover.fields.image[0].url;
        box1.append(coverImage);

      })
    })

    var box2 = document.querySelector("#group2");
    box2.addEventListener("click", function() {
      box2.innerHTML = ``;
      tagTwo.forEach((cover) => {
        var coverName = document.createElement("h2");
        coverName.innerText = cover.fields.name;
        box2.append(coverName);

        var coverName = document.createElement("h3");
        coverName.innerText = cover.fields.author;
        box2.append(coverName);

        var coverName = document.createElement("p");
        coverName.innerText = cover.fields.info;
        box2.append(coverName);

        var coverImage = document.createElement('img');
        coverImage.src = cover.fields.image[0].url;
        box2.append(coverImage);

      })
    })

    var box3 = document.querySelector("#group3");
    box3.addEventListener("click", function() {
      box3.innerHTML = ``;
      tagThree.forEach((cover) => {
        var coverName = document.createElement("h2");
        coverName.innerText = cover.fields.name;
        box3.append(coverName);

        var coverName = document.createElement("h3");
        coverName.innerText = cover.fields.author;
        box3.append(coverName);

        var coverName = document.createElement("p");
        coverName.innerText = cover.fields.info;
        box3.append(coverName);

        var coverImage = document.createElement('img');
        coverImage.src = cover.fields.image[0].url;
        box3.append(coverImage);

      })
    })

    var box4 = document.querySelector("#group4");
    box4.addEventListener("click", function() {
      box4.innerHTML = ``;
      tagFour.forEach((cover) => {
        var coverName = document.createElement("h2");
        coverName.innerText = cover.fields.name;
        box4.append(coverName);

        var coverName = document.createElement("h3");
        coverName.innerText = cover.fields.author;
        box4.append(coverName);

        var coverName = document.createElement("p");
        coverName.innerText = cover.fields.info;
        box4.append(coverName);

        var coverImage = document.createElement('img');
        coverImage.src = cover.fields.image[0].url;
        box4.append(coverImage);

      })
    })

    var box5 = document.querySelector("#group5");
    box5.addEventListener("click", function() {
      box5.innerHTML = ``;
      tagFive.forEach((cover) => {
        var coverName = document.createElement("h2");
        coverName.innerText = cover.fields.name;
        box5.append(coverName);

        var coverName = document.createElement("h3");
        coverName.innerText = cover.fields.author;
        box5.append(coverName);

        var coverName = document.createElement("p");
        coverName.innerText = cover.fields.info;
        box5.append(coverName);

        var coverImage = document.createElement('img');
        coverImage.src = cover.fields.image[0].url;
        box5.append(coverImage);

      })
    })

    var box6 = document.querySelector("#group6");
    box6.addEventListener("click", function() {
      box6.innerHTML = ``;
      tagSix.forEach((cover) => {
        var coverName = document.createElement("h2");
        coverName.innerText = cover.fields.name;
        box6.append(coverName);

        var coverName = document.createElement("h3");
        coverName.innerText = cover.fields.author;
        box6.append(coverName);

        var coverName = document.createElement("p");
        coverName.innerText = cover.fields.info;
        box6.append(coverName);

        var coverImage = document.createElement('img');
        coverImage.src = cover.fields.image[0].url;
        box6.append(coverImage);

      })
    })
};


// var subbox1 = document.querySelector("#group1");
//     subbox1.addEventListener("click", function() {
//       subbox1.innerHTML = ``;
//       tagOne.forEach((cover) => {

//         var coverName = document.createElement("h3");
//         coverName.innerText = cover.fields.author;
//         document.body.append(coverName);

//         var coverName = document.createElement("p");
//         coverName.innerText = cover.fields.info;
//         document.body.append(coverName);

    
    // var coverName = document.createElement("h1");
    // coverName.innerText = cover.fields.name;
    // document.body.append(coverName);

	  // var coverName = document.createElement("h1");
   //  coverName.innerText = cover.fields.tag;
   //  bookContainer.append(coverName);

   //  var coverName = document.createElement("h2");
   //  coverName.innerText = cover.fields.name;
   //  bookContainer.append(coverName);

   //  var coverName = document.createElement("h3");
   //  coverName.innerText = cover.fields.author;
   //  bookContainer.append(coverName);

   //  var coverName = document.createElement("p");
   //  // coverInfo.classList.add("cover-info");
   //  coverName.innerText = cover.fields.info;
   //  bookContainer.append(coverName);

   //  // var coverInfo = document.createElement("p");

   //  var coverImage = document.createElement('img');
   //  coverImage.src = cover.fields.image[0].url;
   //  bookContainer.append(coverImage);


   //  bookContainer.addEventListener("click", function() {
   //      coverInfo.classList.toggle("active");
   //  })
 


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

let users = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17'];

function getRandomNumber(min,max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}
let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');

btnRandom.addEventListener('click', () => {
  let index = getRandomNumber(0, users.length-1);
  result.innerText = users[index];
});
