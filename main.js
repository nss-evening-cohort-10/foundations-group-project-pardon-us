console.log("hi from js!");

//Print to DOM
    const printToDom = (divId, textToPrint) => {
        const selectedDiv = document.getElementById(divId);
        selectedDiv.innerHTML = textToPrint;
    };
    
//Home Page
    

//About Page
const artistList = [
    {
        img: 'images/alex1.jpg',
        name: 'Alex Howard',
        description: 'Alex Howard is the founder, front man, and lead vocalist for the multi-platinum, Grammy Award-winning, UK rock group Pardon Us. In addition to being the founding member of Pardon and leading it through its overwhelming success, Brown is also credited as an impactful songwriter, producer, and philanthropist.',
        socialSites: ['<a href="#"><i class="fab fa-facebook-f"></i></a>', '<a href="#"><i class="fab fa-twitter"></i></a>', '<a href="#"><i class="fab fa-youtube"></i></a>', '<a href="#"><i class="fab fa-instagram"></i></a>', '<a href="#"><i class="fab fa-spotify"></i></a>'],
    },
    {
        img: 'images/gabs.jpg',
        name: 'Gabby Santos',
        description: 'I was born on April 20th, 1978 (send cash, not presents) in Liverpool. Had a relatively simple, suburban upbringing. My interest in music was a little out of the ordinary for most 5 year olds. I was actually PLAYING guitar by 7. While everyone else was playing video games, I was practicing scale fingers & chord changes. I am still good at Tecmo Bowl though.',
        socialSites: ['<a href="#"><i class="fab fa-facebook-f"></i></a>', '<a href="#"><i class="fab fa-twitter"></i></a>', '<a href="#"><i class="fab fa-youtube"></i></a>', '<a href="#"><i class="fab fa-instagram"></i></a>', '<a href="#"><i class="fab fa-spotify"></i></a>'],
    },
    {
        img: 'images/morgan3.jpeg',
        name: 'Morgan Brown',
        description: 'Music has been a part of my life as long as I can remember. While my parents didn’t play any instruments, they would always have music playing around the house and anytime we were in the car. The Police, Led Zeppelin, Paul Simon, The Beatles, Grateful Dead, Tom Petty and The Heartbreakers, and many more were all shaping my musical taste from an early age.',
        // socialSites: [`<a href="#"><i class="fab fa-facebook-f"></i></a> 
        // <a href="#"><i class="fab fa-twitter"></i></a> 
        // <a href="#"><i class="fab fa-youtube"></i></a>
        // <a href="#"><i class="fab fa-instagram"></i></a>
        // <a href="#"><i class="fab fa-spotify"></i></a>`]
    }
    ];
    
    const printArtist = (artistArray) => {
        let artistString = '';
        for (let i = 0; i < artistArray.length; i++){
            const artistObject = artistArray[i];
            artistString += `
            <div class="card-container">
                <div class="card">
                    <figure class="front">
                    <img src="${artistObject.img}" alt="${artistObject.name}">
                    </figure>
                    <figure class="back">
                        <div>
                            <h3>${artistObject.name}</h3>
                            <div class="description">
                            ${artistObject.description}
                        </div>
                        <div class="d-flex justify-content-center">
                            <a href="https://www.facebook.com/wearepardonus"><i class="fab fa-facebook-f"></i></a> 
                            <a href="#"><i class="fab fa-twitter"></i></a> 
                            <a href="#"><i class="fab fa-youtube"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-spotify"></i></a>
                        </div>    
                    </figure>
                </div>
                </div>
            </div>                  
               `
        }
        printToDom('artistDiv', artistString);
    };

    
//Merch Page
 
    
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
        } else if (document.URL.includes('about')) {
            printArtist(artistList);				 
        } else {
            // hide tour dates				 
        }
    };
    
    init();