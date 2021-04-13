// our airtable collection
// https://airtable.com/shrop5UF4QrGtzdqy

let Airtable = require('airtable');
let produce = [];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let base = new Airtable({apiKey: 'keyzwwUOzmCKuXxbq'}).base('appeT8cFAvPrr5xfM');

base('Produce').select({}).eachPage(getPageOfProduce, gotAllProduce);

function getPageOfProduce(records, fetchNextPage) {
  console.log('got page of produce...');

  produce.push(...records);

  fetchNextPage();
}

function gotAllProduce(err) {
  if (err) {
    console.log("error loading produce");
    console.error(err);
    return;
  }

  try {
    displayProduce();
  } catch(e) {
    console.error(e);
  }
};


// elements of page
let tagElement = document.querySelector('#tags');
let monthElement = document.querySelector('#months');
let produceElement = document.querySelector('#produce');

// detal modal
let infoElement = document.querySelector('#info');
let infoDetails = document.querySelector('#details');
let closeInfoButton = document.querySelector('#close-info');


function filterByMonth(event) {

}

function filterByTag(event) {
  let allImages = document.querySelectorAll('.produce');
  allImages.forEach(function (item) {
    if (item.classList.contains(event.target.dataset.type)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function showInfo(event) {
  if (event.target.classList.contains('produce')) {
    infoDetails.innerHTML = `
      <h1>${event.target.dataset.name}</h1>
      <p>available: ${event.target.dataset.availability}</p>k
    `;

    infoElement.classList.add('show');
  }
}

function closeInfo() {
  infoElement.classList.remove('show');
}

function displayProduce() {
  // console.log(produce);
  let addedTags = [];

  produce.forEach(function (item) {
    item.fields.Tags.forEach(function (tag) {
        if (!addedTags.includes(tag)) {
        let ourTag = document.createElement('button');
        ourTag.innerText = tag;
        ourTag.dataset.type = tag;
        ourTag.addEventListener('click', filterByTag);
        tagElement.append(ourTag);
        addedTags.push(tag);
      }
    });

    item.fields.Pictures.forEach(function(picture) {
      let img = document.createElement('img');
      img.src = picture.thumbnails.large.url;

      img.style.left = `calc(${Math.random()} * (100% - 7.5rem))`;
      img.style.top = `calc(${Math.random()} * (100% - 7.5rem))`;

      img.classList.add('produce');

      item.fields.Tags.forEach(function (tag) {
        img.classList.add(tag);
      });

      img.dataset.name = item.fields.Name;

      img.dataset.availability = item.fields.Availability;

      produceElement.append(img);
    });
  });
}

// produceElement.addEventListener('click', showInfo);
// closeInfoButton.addEventListener('click', closeInfo);
