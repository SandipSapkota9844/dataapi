console.log('fetch.js');
let btn = document.getElementById("btn");
btn.addEventListener("click", getData);

url = "https://sandipsapkota9844.github.io/dataapi/district.json";


function getData() {
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        // console.log(data);
        let output = '';
        data.map((item) => {
            output += `
            <ul>
                <li> Distric Id : ${item.distict_id}</li>
                <li> Distric Name : ${item.name}</li>
                <li> Alternative name :   ${item.alt_name}</li>
                <li> Latitude : ${item.latitude}</li>
                <li> Lognitude: ${item.longitude}</li>
               
            </ul>
            `;
        });
        document.getElementById("content").innerHTML = output;
    });
}