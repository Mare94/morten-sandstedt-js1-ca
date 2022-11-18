const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/druid";
const corsEnabledUrl = "https://noroffcors.onrender.com/" + url;
const resultsContainer = document.querySelectorAll(".results");

// needed to make the API work, different for each API

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '909fe699e7msh53b75f17f8c54b6p1c3184jsn10ec8f9f33c8',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
	}
};


//API call to showcase heartstone druid class

async function getHeartStoneData() {
    
    const response = await fetch(corsEnabledUrl, options);
    const data = await response.json();
    
    console.log(data)

    for(let i = 0; i < 5; i++){
    
            console.log(data[i].name);
            console.log(data[i].type);
            console.log(data[i].cardSet);
    
        resultsContainer.innerHTML +=  `<div class="result">${data[i].name}</div>`;

    }
       
};

getHeartStoneData();




/*fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/