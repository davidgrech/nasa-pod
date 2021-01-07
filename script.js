const apiKey = "mKOZoLv7bu5y0BsdgbA9gWMXiFv75ee0rHeIs5Kb";
const apodUrl = "https://api.nasa.gov/planetary/apod";

function contentLoaded(){
    const apodElement = document.getElementById("apod");

    fetch(`${apodUrl}?api_key=${apiKey}`)
    .then(res=>res.json())
    .then(data=>{

        let media = `<img class="pod" src="${data.hdurl}">`;
    
        apodElement.innerHTML = (`
            <div class="heading">
                <h1>NASA Picture of the Day</h1>
                <div class="background">
                    ${media}
                </div>
            </div>
            <div class="card" style="margin-top:1rem">

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