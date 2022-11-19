const detailContainer = document.querySelector(".card-result");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);
const urlName = params.get("name");

const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/";
const corsEnabledUrl = "https://noroffcors.onrender.com/" + url;

const cardUrl = corsEnabledUrl + urlName;

console.log(cardUrl);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '909fe699e7msh53b75f17f8c54b6p1c3184jsn10ec8f9f33c8',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
	}
};


async function getCardDetail(){
    
        const response = await fetch(cardUrl, options);
        const details = await response.json();
    

        console.log(details);
        
        createHtml(details);

}

getCardDetail();

function createHtml(details){
    detailContainer.innerHTML += `
                                    <div class="detail-result">
                                    <h1>${details.name}</h1>
                                    <h2>
                                    <div>${details.artist}</div>
                                    <div>${details.cardSet}</div>
                                    <div>${details.playerClass}</div>
                                    <div>${details.type}</div>
                                    <div>${details.text}</div>
                                    </h2>
                                    </div>`;
}