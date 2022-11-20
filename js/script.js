const resultsContainer = document.querySelector(".results");
const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/druid";
const corsEnabledUrl = "https://noroffcors.onrender.com/" + url;

// needed to make the API work, different for each API

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '909fe699e7msh53b75f17f8c54b6p1c3184jsn10ec8f9f33c8',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
	}
};


//API call to showcase heartstone druid class
// if statement used to remove loading indicator


async function getHeartStoneData() {
    
    try{
        const response = await fetch(corsEnabledUrl, options);
    const data = await response.json();
    
    console.log(data)

    for(let i = 0; i < 5; i++){
    
        if(i === 4){
            function removeElementsByClass(className){
                const elements = document.getElementsByClassName(className);
                while(elements.length > 0){
                    elements[0].parentNode.removeChild(elements[0])
                }
            }

            removeElementsByClass('loading');
        }

            console.log(data[i].name);
            console.log(data[i].type);
            console.log(data[i].cardSet);
    
        resultsContainer.innerHTML +=  `<a href="details.html?name=${data[i].name}" class='result'>
                                        <h2>Name: ${data[i].name}</h2>
                                        <p>Type: ${data[i].type}</p>
                                        <p>Cardset: ${data[i].cardSet}</p>
                                        </a>`;

    }
    }
    catch(error){
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
    
       
};

getHeartStoneData();




/*fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/