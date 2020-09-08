var moment = require('moment'); 

var myDate = new Date();
var dateFormating = moment(myDate).format('LL');

console.log(dateFormating);

let destinationsList = [
    
    //Visited

    {
      city: 'Rome',
      country: 'Italy',
      photo: require("./img/rome.jpg"),     
      visited: true
    },
    {
      city: 'Milan',
      country: 'Italy',
      photo: require('./img/milan.jpg'),
      visited: true
    },
    {
      city: 'Venice',
      country: 'Italy',
      photo: require('./img/venice.jpg'),
      visited: true
    },
    {
      city: 'Padua',
      country: 'Italy',
      photo: require('./img/padua.jpg'),
      visited: true
    },
    {
      city: 'Verona',
      country: 'Italy',
      photo: require('./img/verona.jpg'),
      visited: true
    },
    {
      city: 'Florence',
      country: 'Italy',
      photo: require('./img/florence.jpg'),
      visited: true
    },
    {
      city: 'Bergamo',
      country: 'Italy',
      photo: require('./img/bergamo.jpg'),
      visited: true
    },
    {
      city: 'Barcelona',
      country: 'Spain',
      photo: require('./img/barcelona.jpg'),
      visited: true
    },
    {
      city: 'Lloret de mar',
      country: 'Spain',
      photo: require('./img/lloretdemar.jpg'),
      visited: true
      },
    {
      city: 'Nice',
      country: 'France',
      photo: require('./img/nice.jpg'),
      visited: true
    },
    {
      city: 'Cannes',
      country: 'France',
      photo: require('./img/cannes.jpg'),
      visited: true
    },
    {
      city: 'Stockholm',
      country: 'Sweden',
      photo: require('./img/stockholm.jpg'),
      visited: true
    },
    {
      city: 'Malmo',
      country: 'Sweeden',
      photo: require('./img/malmo.jpg'),
      visited: true
    },
    {
      city: 'Copenhagen',
      country: 'Denmark',
      photo: require('./img/copenhagen.jpg'),
      visited: true
    },
    {
      city: 'Vienna',
      country: 'Austria',
      photo: require('./img/vienna.jpg'),
      visited: true
    },
    {
      city: 'Monaco',
      country: 'Monaco',
      photo: require('./img/monaco.jpg'),
      visited: true
    },
    {
      city: 'Budapest',
      country: 'Hungary',
      photo: require('./img/budapest.jpg'),
      visited: true
    },
    {
      city: 'Prague',
      country: 'Czech republic',
      photo: require('./img/prague.jpg'),
      visited: true
    },
    {
      city: 'Belgrade',
      country: 'Serbia',
      photo: require('./img/belgrade.jpg'),
      visited: true
    },
    {
      city: 'Zlatibor',
      country: 'Serbia',
      photo: require('./img/zlatibor.jpg'),
      visited: true
    },
    {
      city: 'Kopaonik',
      country: 'Serbia',
      photo: require('./img/kopaonik.jpg'),
      visited: true
    },
    {
      city: 'Bratislava',
      country: 'Slovakia',
      photo: require('./img/bratislava.jpg'),
      visited: true
    },
    {
      city: 'Sofia',
      country: 'Bulgaria',
      photo: require('./img/sofia.jpg'),
      visited: true
    },
    {         
      city: 'Bansko',
      country: 'Slovakia',
      photo: require('./img/bansko1.jpg'),
      visited: true
    },
    {         
      city: 'Varna',
      country: 'Bulgaria',
      photo: require('./img/varna.jpg'),
      visited: true
    },
    {
      city: 'Thessaloniki',
      country: 'Greece',
      photo: require('./img/thessaloniki.jpg'),
      visited: true
    },
    {
      city: 'Istanbul',
      country: 'Turkey',
      photo: require('./img/istanbul.jpg'),
      visited: true
    },

    //Wishlist

    {
        city: 'Paris',
        country: 'France',
        photo: require('./img/paris.jpg'),
        visited: false
    },
    {
        city: 'Santorini',
        country: 'Greece',
        photo: require('./img/santorini.jpg'),
        visited: false
    },
    {
        city: 'New York',
        country: 'U.S.',
        photo: require('./img/newyork.jpg'),
        visited: false
    },
    {
        city: 'Marrakech',
        country: 'Morocco',
        photo: require('./img/marrakech.jpg'),
        visited: false
    },
    {
        city: 'Amsterdam',
        country: 'Netherlands',
        photo: require('./img/Amsterdam.png'),
        visited: false
    },
    {
        city: 'Berlin',
        country: 'Germany',
        photo: require('./img/berlin.jpg'),
        visited: false
    },
    {
        city: 'Lisbon',
        country: 'Porugal',
        photo: require('./img/lisbon.jpg'),
        visited: false
    },
    {
        city: 'Tokyo',
        country: 'Japan',
        photo: require('./img/tokyo.jpg'),
        visited: false
    },
    {
        city: 'Sienna',
        country: 'Italy',
        photo: require('./img/sienna.jpg'),
        visited: false

    },
    {
        city: 'Dublin',
        country: 'Ireland',
        photo: require('./img/dublin.jpg'),
        visited: false
    },
    {
        city: 'Saint petersburg',
        country: 'Russia',
        photo: require('./img/saintpetersburg.jpg'),
        visited: false
    },
  ]

 

  //get list of urls
  const getURL = (destinationsList) => {
    let url= destinationsList.map(obj => obj.photo.valueOf());
    return url;
  }

  //create elements for each city
  destinationsList.forEach(destination => {

    //img wrapper
    const createImg = (url) => {
      let figure = document.createElement('figure');
      figure.classList.add('img-container');
    //img element
      let img = document.createElement('img');
      img.style.objectFit ='cover';
      document.querySelector('.gallery').appendChild(figure);
      figure.appendChild(img);
    //img caption
      let figcaption= document.createElement('figcaption');
      figcaption.classList.add('caption');
      figure.appendChild(figcaption);
      figcaption.insertAdjacentHTML("beforeend", `<h4 class='caption__city'>${destination.city}</h4>` );
      figcaption.insertAdjacentHTML("beforeend", `<h5 class='caption__country'>${destination.country}</h5>` )

    //urls
      img.src = destination.photo
      
    //add classes 
      if(destination.visited === true) {
        img.classList.add('visited');
        figcaption.classList.add('visited');

      }
      else {
        img.classList.add('bucketlist');
        figcaption.classList.add('bucketlist');

      }
  };

  return createImg(getURL(destinationsList));

});



  //connect lists and buttons

  //get buttons
  const visitedButton = document.querySelector('.visited-button'); 
  const bucketlistButton = document.querySelector('.bucketlist-button'); 
  const allButton = document.querySelector('.all'); 
  //get all .gallery items
  const galleryList = document.querySelector('.gallery');

  //set .visited as default active button
  document.addEventListener("DOMContentLoaded", function(event) { 
    document.querySelector(".visited-button").click();
 });

  visitedButton.addEventListener('click', () => {
    galleryList.classList.add('visited');
  });

  bucketlistButton.addEventListener('click', () => {
    galleryList.classList.add('bucketlist');
    galleryList.classList.remove('visited');
  });

  allButton.addEventListener('click', () => {
    galleryList.classList.remove('bucketlist');
    galleryList.classList.remove('visited');
  });

  //get clicked button
  const buttonIsActive = () => {
    const buttons= document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', clicked => {
            clicked.currentTarget.classList.add('active-button');
        })
    });
  }
  buttonIsActive();


//shrink header on scroll

const navbar = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
  navbar.classList.add('shrink');
});

//fade buttons on scroll

const buttonsContainer = document.querySelector('.buttons');

document.addEventListener('scroll', () => {
  buttonsContainer.classList.add('fade');
});


//Change header behaviour based on scrolling position
let scrollPos = 0;

window.addEventListener('scroll', function(){
  if ((document.body.getBoundingClientRect()).top === scrollPos) {
    document.querySelector('.navbar').classList.remove('shrink');
    document.querySelector('.buttons').classList.remove('fade');
  }
});

