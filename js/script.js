const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/druid";
const corsEnabledUrl = "https://noroffcors.onrender.com/" + url;




const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '909fe699e7msh53b75f17f8c54b6p1c3184jsn10ec8f9f33c8',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        "access-control-allow-credentials": "true",
        "access-control-allow-origin": "*",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "date": "Thu, 17 Nov 2022 15:32:50 GMT",
        "server": "RapidAPI-1.2.8",
        "x-powered-by": "PHP/5.6.40",
        "x-rapidapi-region": "AWS - eu-central-1",
        "x-rapidapi-version": "1.2.8"
	}
};

/*fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/




async function getHeartStoneData(){
    const response = await fetch(corsEnabledUrl, options);
    const results = await response.json();

    console.log(results)
}

getHeartStoneData();