const apiKey = "mKOZoLv7bu5y0BsdgbA9gWMXiFv75ee0rHeIs5Kb";
const apodUrl = "https://api.nasa.gov/planetary/apod";

function contentLoaded(){
    const apodElement = document.getElementById("apod");

    fetch(`${apodUrl}?api_key=${apiKey}`)
    .then(res=>res.json())
    .then(data=>{

        let media = `<img class="myimage" src="${data.hdurl}">`;
    
        apodElement.innerHTML = (`
            <div>
                ${media}
            </div>
            <div class="card">

                <span>${data.title}</span>
                <p>
                    ${data.explanation}
                </p>

                <p>${(new Date(data.date)).toDateString()}</p>
                <p>© ${data.copyright}</p>
            </div>
        `)
    })

}

window.addEventListener("DOMContentLoaded", contentLoaded)