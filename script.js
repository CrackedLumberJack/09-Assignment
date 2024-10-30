let foods = [
    {
        name: "Pizza",
        temp: "Cold",
        rating: 10
    },
    {
        name: "Fries",
        temp: "Hot",
        rating: 9
    }
];

let myTable = document.createElement("table");
let mytHead = document.createElement("thead");
let mytBody = document.createElement("tbody");
let mytHeadtr = document.createElement("tr");
let mytdName = document.createElement("td");
let mytdTemp = document.createElement("td");
let mytdRating = document.createElement("td");
mytdName.textContent = "Name";
mytdTemp.textContent = "Temperature";
mytdRating.textContent = "Rating";
mytHeadtr.appendChild(mytdName);
mytHeadtr.appendChild(mytdTemp);
mytHeadtr.appendChild(mytdRating);
mytHead.appendChild(mytHeadtr);
myTable.appendChild(mytHead);
myTable.appendChild(mytBody);


document.getElementById("btnAdd").onclick = function() {
    const name = document.getElementById("txtName").value;
    const temp = document.getElementById("txtTemp").value;
    const rating = parseInt(document.getElementById("rating").value);

    foods.push({ name, temp, rating });

    let row = document.createElement("tr");
    let cellName = document.createElement("td");
    let cellTemp = document.createElement("td");
    let cellRating = document.createElement("td");

    cellName.textContent = name;
    cellTemp.textContent = temp;
    cellRating.textContent = rating;

    row.appendChild(cellName);
    row.appendChild(cellTemp);
    row.appendChild(cellRating);
    mytBody.appendChild(row);

    document.getElementById("foodForm").reset();
}
//Make sure to create tbody



document.getElementById("body").appendChild(myTable);