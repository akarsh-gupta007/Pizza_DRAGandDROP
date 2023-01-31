let itemSrc = null;



function dragstarts(event) {
    arr.push(event.target.alt)
    itemSrc = event.target.src;
    document.querySelector('.pizza_maker_plate').classList.add('drag');
}

function drop() {
    var img = document.createElement('img');
    img.src = itemSrc;
    img.style.width = "90px"
    document.querySelector('.pizza_maker_plate').innerHTML = '';
    document.querySelector('.pizza_maker_plate').appendChild(img);
    topings();
}

function allowdrop(event) {
    event.preventDefault();
}

function topings() {
    let container = document.querySelector(".pizza_base_Container")
    container.style.display = "none"
    let toping = document.querySelector("#ingredient_container")
    toping.style.display = "block"
}
let arr = []
console.log(arr)




let submitbtn = () => {


    let temparr = arr;
    let frequency = temparr.reduce((acc, curr) => {
        acc[curr] = acc[curr] + 1 || 1;
        return acc;
    }, []);

    console.log(temparr, frequency)
    let data = document.querySelector("#data");
    let h1=document.createElement("h1")
    h1.textContent="Hurry!! Your Final Pizza Is Ready"
    h1.style.textAlign="center"

    let h3=document.createElement("h1")
    h3.textContent="These are the ingredients you have selected -"
    let div=document.createElement("div")
    div.appendChild(h3)
    data.appendChild(h1)
    data.appendChild(div);
    for (let key in frequency) {
        let p = document.createElement("h2");
        p.textContent = `${key}: ${frequency[key]}`;
        div.appendChild(p)
       
    }
    console.log("clicked")

    let toping = document.querySelector("#ingredient_container")
    toping.style.display = "none";
    let container = document.querySelector(".pizza_base_Container")
    container.style.display = "none"
    // document.getElementsByClassName("finalpizzahiden").style.display="block"
    
}

// // Store the frequency object in local storage
// localStorage.setItem("frequency", JSON.stringify(frequency));

// // To retrieve the frequency object from local storage
// let storedFrequency = JSON.parse(localStorage.getItem("frequency"));


// console.log(storedFrequency)