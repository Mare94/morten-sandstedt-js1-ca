const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/druid";
const corsEnabledUrl = "https://noroffcors.onrender.com/" + url;

const resultsContainer = document.querySelector("results");


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '909fe699e7msh53b75f17f8c54b6p1c3184jsn10ec8f9f33c8',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
	}
};

/*fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/




async function getHeartStoneData(){
    const response = await fetch(corsEnabledUrl, options);
    const data = await response.json();
    
    console.log(data)

    resultsContainer.innerHTML = "";

    for(let i = 0; i < 5; i++){
            console.log(data[i].name)
            console.log(data[i].type)
            console.log(data[i].cardSet)

            const nameCard = data[i].name;
            const typeCard = data[i].type;
            const cardSet = data[i].cardSet;


            resultsContainer.innerHTML += "<div class='result'>"+"<ul>"+"<li>"
            +data[i].name
            +"</li>"+"<li>"+data[i].type+"</li>"+"<li>"
            +data[i].cardSet+"</li>"+"</ul>"+"</div>"; 


    };
       
};

getHeartStoneData();