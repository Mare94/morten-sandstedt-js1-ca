const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards";
const corsEnabledUrl = "https://noroffcors.onrender.com/" + url;




const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '909fe699e7msh53b75f17f8c54b6p1c3184jsn10ec8f9f33c8',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
	}
};

async function getData(){
    const response = await fetch(corsEnabledUrl, options);
    const results = await response.json();

    console.log(results)
}

getData();