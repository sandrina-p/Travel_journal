var moment = require('moment'); 

var myDate = new Date();
var dateFormating = moment(myDate).format('LL');

console.log(dateFormating);

let destinations = [
    
    //Visited

    {
      city: 'Rome',
      country: 'Italy',
      photo: 'img/rome.jpg',
      visited: true
    },
    {
      city: 'Milan',
      country: 'Italy',
      photo: 'img/milan.jpg',
      visited: true
    },
    {
      city: 'Venice',
      country: 'Italy',
      photo: 'img/venice.jpg',
      visited: true
    },
    {
      city: 'Padua',
      country: 'Italy',
      photo: 'img/padua.jpg',
      visited: true
    },
    {
      city: 'Verona',
      country: 'Italy',
      photo: 'img/verona.jpg',
      visited: true
    },
    {
      city: 'Florence',
      country: 'Italy',
      photo: 'img/florence.jpg',
      visited: true
    },
    {
      city: 'Bergamo',
      country: 'Italy',
      photo: 'img/bergamo.jpg',
      visited: true
    },
    {
      city: 'Barcelona',
      country: 'Spain',
      photo: 'img/barcelona.jpg',
      visited: true
    },
    {
      city: 'Lloret de mar',
      country: 'Spain',
      photo: 'img/lloretdemar.jpg',
      visited: true
      },
    {
      city: 'Nice',
      country: 'France',
      photo: 'img/nice.jpg',
      visited: true
    },
    {
      city: 'Cannes',
      country: 'France',
      photo: 'img/cannes.jpg',
      visited: true
    },
    {
      city: 'Stockholm',
      country: 'Sweden',
      photo: 'img/stockholm.jpg',
      visited: true
    },
    {
      city: 'Malmo',
      country: 'Sweeden',
      photo: 'img/malmo.jpg',
      visited: true
    },
    {
      city: 'Copenhagen',
      country: 'Denmark',
      photo: 'img/copenhagen.jpg',
      visited: true
    },
    {
      city: 'Vienna',
      country: 'Austria',
      photo: 'img/vienna.jpg',
      visited: true
    },
    {
      city: 'Monaco',
      country: 'Monaco',
      photo: 'img/monaco.jpg',
      visited: true
    },
    {
      city: 'Budapest',
      country: 'Hungary',
      photo: 'img/budapest.jpg',
      visited: true
    },
    {
      city: 'Prague',
      country: 'Czech republic',
      photo: 'img/prague.jpg',
      visited: true
    },
    {
      city: 'Belgrade',
      country: 'Serbia',
      photo: 'img/belgrade.jpg',
      visited: true
    },
    {
      city: 'Zlatibor',
      country: 'Serbia',
      photo: 'img/zlatibor.jpg',
      visited: true
    },
    {
      city: 'Kopaonik',
      country: 'Serbia',
      photo: 'img/kopaonik.jpg',
      visited: true
    },
    {
      city: 'Bratislava',
      country: 'Slovakia',
      photo: 'img/bratislava.jpg',
      visited: true
    },
    {
      city: 'Sofia',
      country: 'Bulgaria',
      photo: 'img/sofia.jpg',
      visited: true
    },
    {         
      city: 'Bansko',
      country: 'Slovakia',
      photo: 'img/bansko1.jpg',
      visited: true
    },
    {         
      city: 'Varna',
      country: 'Slovakia',
      photo: 'img/varna.jpg',
      visited: true
    },
    {
      city: 'Thessaloniki',
      country: 'Greece',
      photo: 'img/thessaloniki.jpg',
      visited: true
    },
    {
      city: 'Istanbul',
      country: 'Turkey',
      photo: 'img/istanbul.jpg',
      visited: true
    },

    //Wishlist

    {
        city: 'Paris',
        country: 'France',
        photo: 'img/paris.jpg',
        visited: false
    },
    {
        city: 'Santorini',
        country: 'Greece',
        photo: 'img/santorini.jpg',
        visited: false
    },
    {
        city: 'New York',
        country: 'U.S.',
        photo: 'img/newyork.jpg',
        visited: false
    },
    {
        city: 'Marrakech',
        country: 'Morocco',
        photo: 'img/marrakech.jpg',
        visited: false
    },
    {
        city: 'Amsterdam',
        country: 'Netherlands',
        photo: 'img/Amsterdam.png',
        visited: false
    },
    {
        city: 'Berlin',
        country: 'Germany',
        photo: 'img/berlin.jpg',
        visited: false
    },
    {
        city: 'Lisbon',
        country: 'Porugal',
        photo: 'img/lisbon.jpg',
        visited: false
    },
    {
        city: 'Tokyo',
        country: 'Japan',
        photo: 'img/tokyo.jpg',
        visited: false
    },
    {
        city: 'Sienna',
        country: 'Italy',
        photo: 'img/nice.jpg',
        visited: false

    },
    {
        city: 'Dublin',
        country: 'Ireland',
        photo: 'img/dublin.jpg',
        visited: false
    },
    {
        city: 'Saint petersburg',
        country: 'Russia',
        photo: 'img/saintpetersburg.jpg',
        visited: false
    },
  ]


  //create variables
  const visited = destinations.filter(item => item.visited === true);
  const bucketList = destinations.filter(item => item.visited === false);
 

  // get url's
  const getURL = (destinations) => {
    let url= destinations.map(obj => obj.photo.valueOf());
    return url;
  }


  //create an img element for each visited city
  //append the right url to each element 
  const elements= destinations.forEach(destination => {


    const createImg = (url) => {
      let img = document.createElement('img');

      for(let i=0; i<destinations.length; i++) {
        img.src = url[i];
      };

      if(destination.visited === true) {
        img.classList.add('visited');
      }
      else {
        img.classList.add('bucketList');
      }

      document.body.appendChild(img);
      // return img;
  };
  return createImg(getURL(destinations));
});


//connect lists with buttons






