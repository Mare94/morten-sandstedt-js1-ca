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
    
        for(let i = 0; i < 6; i++){

                if(i === 0){
                        function removeElementsByClass(className){
                            const elements = document.getElementsByClassName(className);
                            while(elements.length > 0){
                                elements[0].parentNode.removeChild(elements[0])
                            }
                        }
            
                        removeElementsByClass('loading');
                    }

                detailContainer.innerHTML += `
                <div class="detail-result">
                <h1>${details[i].name}</h1>
                <h2>
                <div>Cardset: ${details[i].cardSet}</div>
                <div>Playerclass: ${details[i].playerClass}</div>
                <div>Type: ${details[i].type}</div>
                <div>Card text - ${details[i].text}</div>
                </h2>
                </div>`;    
        }
    
        
}