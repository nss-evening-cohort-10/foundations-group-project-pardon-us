const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};




    
//Home Page
    

//About Page
    
    
//Merch Page
 //Merch Array of Objects
const merchandise = [
    {
      title: "Metronome",
      type: "Shirt",
      price: "10",
      imageUrl: "./Images/bKdUbXud_jpeg_1600x.jpg"
    },
    {
      title: "Pardon",
      type: "Shirt",
      price: "10",
      imageUrl:
        "./Images/download.jpg"
    },
    {
      title: "Ah! Shark",
      type: "Shirt",
      price: "10",
      imageUrl: "./Images/0006187651_10.jpg"
    },
    {
      title: "Fumin'",
      type: "Poster",
      price: "25",
      imageUrl: "./Images/a0706942430_16.jpg"
    },
    {
      title: "Pardon Us",
      type: "Poster",
      price: "25",
      imageUrl: "./Images/a1333370211_16 (1).jpg"
    },
    {
      title: "Thersea May Not",
      type: "Poster",
      price: "25",
      imageUrl: "./Images/a3168995921_16.jpg"
    },
    {
      title: "Wait!",
      type: "Vinyl",
      price: "15",
      imageUrl: "./Images/a0535589715_16.jpg"
    },
    {
      title: "Demos",
      type: "Vinyl",
      price: "15",
      imageUrl: "./Images/a3980155309_16.jpg"
    },
    {
      title: "Pardon Us",
      type: "Vinyl",
      price: "15",
      imageUrl: "./Images/a1333370211_16 (1).jpg"
    }
  ];
  
  //Merch Builder
  const buildMerchandise = type => {
    let domString = "";
    merchandise.forEach(merch => {
        if (merch.type === type){
            domString += `<div class="card merch col--3">`;
            domString += `<h3 class="title">${merch.title}</h3>`;
            domString += `<h3><img src="${merch.imageUrl}"></h3>`;
            domString += `<strong>$${merch.price}</strong>`;
            domString += `</div>`;
        }
        else if (type === "All"){
          domString += `<div class="card merch col--3">`;
          domString += `<h3 class="title">${merch.title}</h3>`;
          domString += `<h3><img src="${merch.imageUrl}"></h3>`;
          domString += `<strong>$${merch.price}</strong>`;
          domString += `</div>`;
        }
    });
  
    printToDom("merchandise", domString);
  };
  
  //nav builder
  const navBuilder = () => {
    let domString = `<ul class="nav flex-column">
          <li class="nav-item">
              <input type="button" class="nav-link" id="posters" value="Posters">
              </input>
          </li>
          <li class="nav-item">
              <input type="button" class="nav-link" id="shirts" value="Shirts">
              </input>
          </li>
          <li class="nav-item">
              <input type="button" class="nav-link" id="vinyl" value="Vinyl">
              </input>
          </li>
          <li class="nav-item">
              <input type="button" class="nav-link" id="all" value="All">
              </input>
          </li>
      </ul>`;
  
    printToDom("vertical-nav", domString);
  };
  
  const eventListener = () => {
      document .getElementById("posters").addEventListener("click", () => {
          buildMerchandise("Poster");
      });
      document .getElementById("shirts").addEventListener("click", () => {
          buildMerchandise("Shirt");
      });
      document .getElementById("vinyl").addEventListener("click", () => {
          buildMerchandise("Vinyl");
      });
      document .getElementById("all").addEventListener("click", () => {
          buildMerchandise("All");
      });
  }
  
//   const init = () => {
//     // console.log(document.URL.indexOf("merch.html")!=-1);
//     if (document.URL.indexOf("merch.html") != -1) {
//       navBuilder();
//       eventListener();
//     }
//   };
    
// Music Page
    const albumList = [
        {
            title: "Wait",
            year: 2019,
            url: "https://f4.bcbits.com/img/a0535589715_16.jpg",
            tracks: ["Beyond the Valley of the Wolves", "Counting Backwards", "Brains", "Thankful", "It's a Phil Ochs Kind of Day", "Half Empty", "If the Black Shirt Fits", "Inconvenient Reminder", "Signing Out", "We Aren't The Champions"]
        },
        {
            title: "Pardon Us",
            year: 2017,
            url: "https://f4.bcbits.com/img/a1333370211_16.jpg",
            tracks: ["Goodnight Adam", "Sleepwalk", "Carry On", "Flightless", "OHM"]
        },
        {
            title: "Pardon Us Stink",
            year: 2019,
            url: "https://f4.bcbits.com/img/a1656732168_16.jpg",
            tracks: ["Kicking and Screaming", "What Doesn't Kill Me", "Sphere", "Good For Me", "Shut Up and Die"]
        },
        {
            title: "Theresa May Not",
            year: 2018,
            url: "https://f4.bcbits.com/img/a3168995921_16.jpg",
            tracks: ["Theresa May Not", "Something True (B side)"]
        },
        {
            title: "Fumin'",
            year: 2016,
            url: "https://f4.bcbits.com/img/a0706942430_16.jpg",
            tracks: ["Fumin'", "Aim Low (Mary Lou Lord cover)"]
        },
        {
            title: "Time Gentlemen Please",
            year: 2015,
            url: "https://f4.bcbits.com/img/a1673681289_16.jpg",
            tracks: ["Time Gentlemen Please", "Home (Naked Raygun Cover)"]
        },
        {
            title: "Halloween Seventeen",
            year: 2017,
            url: "https://f4.bcbits.com/img/a2230950133_16.jpg",
            tracks: ["Ghouls' Night Out (Misfits cover)", "Little Demons (Helen Chambers cover)"]
        },
        {
            title: "Demos 2014",
            year: 2014,
            url: "https://f4.bcbits.com/img/a3980155309_16.jpg",
            tracks: ["Christina Demo", "FUD Demo", "Lost Weekend Demo", "Only Pain Demo"]
        },
        {
            title: "Here's to the State",
            year: 2017,
            url: "https://f4.bcbits.com/img/a2951469965_16.jpg",
            tracks: ["Here's to the State of Tory Britain", "Product (Business cover)"]
        }
    ];
        
    // const expandBtn = document.getElementById('');
    // const minimizeBtn = document.getElementById('');

    const printAlbums = (albumArray) => {
        //loop through albumArray and print title, year, and image to dom
        console.log('print album');
        let albumString = '';
        for (let i = 0; i < albumArray.length; i++){
            let albumObject = albumArray[i];
            albumString += `
                <div class="albumImage card text-center col-sm-8 offset-2" id="album${i}">
                    <img class="albumCover card-img-top" src=${albumObject.url} alt=${albumObject.title} />
                    <h3 class="albumTitle">${albumObject.title}</h3>
                    <p class="albumYear">${albumObject.year}</p>
                </div>
            `
        }
        printToDom('mainDiv', albumString);
    };

    const chronologicalOrder = () => {
        albumList.sort((first, last) => {
                if(first.year < last.year){
                    return 1
                } else {
                    return -1
                }
            }
        );
    };
    
    const displayTracks = (e) => {
        //function to reduce image div and add track list
        console.log('display event', e)
    };
    
    const hideTracks = (e) => {
        //function to expand image div and hide track list
        console.log('hide event', e)
    };

    
    // expandBtn.addEventListener('click', displayTracks);
    // minimizeBtn.addEventListener('click', hideTracks);
 

 // Init - All Pages
    const init = () => {
        if (document.URL.includes('albums')){
            chronologicalOrder();
            printAlbums(albumList);
        } else if (document.URL.includes('merch')) {
            // load merch	
            navBuilder();
            eventListener();
            buildMerchandise("All");			 
        } else if (document.URL.includes('about')) {
            // band member cards				 
        } else {
            // hide tour dates				 
        }
    };
    
    init();

