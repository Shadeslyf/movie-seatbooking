const movies = [
  { id: 1, name: "Oppenheimer", price: 20 },
  { id: 2, name: "Spider Man: Across the Spider-Verse", price: 35 },
  { id: 3, name: "Mission Impossible - Dead Reckoning Part One", price: 30 },
  { id: 4, name: "John Wick Chapter 4", price: 35 },
];

let seats = document.querySelectorAll(".seat");
let rows = document.querySelectorAll(".row");
let totalSelectedSeat = 0;
let price = 0;
let totalprice = 0;
let bill = document.querySelector(".bill");

function generateAvailableSeat() {
  for (let row = 0; row < rows.length; row++) {
    for (let i = row; i < seats.length; i++) {
      if (i == getNotAvaliableSeat()) {
        //console.log(getNotAvaliableSeat)
        !seats[i].classList.contains("booked")
          ? seats[i].classList.add("booked")
          : null;
      }
    }
  }
}

//Select Seats
function selectSeat() {
  seats.forEach((seat) => {
    !seat.classList.contains("booked") &&
      seat.addEventListener("click", (e) => {
        seat.classList.contains("selected")
          ? seat.classList.remove("selected")
          : seat.classList.add("selected");
        let selectedSeat = document.querySelectorAll(".selected");
        totalSelectedSeat = selectedSeat.length;

        totalBill = price * totalSelectedSeat;
        totalSelectedSeat && price
          ? (bill.textContent =
              "Total Amount: " +
              price +
              "$ x  " +
              totalSelectedSeat +
              " seats" +
              " = " +
              totalBill +
              "$")
          : (bill.textContent = "");
        console.log(totalBill);

        //console.log(totalSelectedSeat);
      });
  });
}
selectSeat();

function getNotAvaliableSeat() {
  const totalSeat = seats.length;
  const notAvaliableSeat = Math.floor(Math.random() * totalSeat);
  return notAvaliableSeat;
}

function renderMovieList() {
  let select = document.getElementById("movieList");
  movies.map((movie) => {
    let option = document.createElement("option");
    option.value = movie.price;
    option.textContent = movie.name + " | Price: " + movie.price + "$";

    select.appendChild(option);
  });
}

renderMovieList();

function getSelectedMoviePrice() {
  var selectElement = document.getElementById("movieList");

  selectElement.addEventListener("change", function () {
    //generate availabe seats for the user to select
    reset();
    generateAvailableSeat();
    generateAvailableSeat();
    generateAvailableSeat();
    // Get the selected option
    var selectedOption = selectElement.options[selectElement.selectedIndex];

    price = selectedOption.value;
    totalBill = price * totalSelectedSeat;
    totalSelectedSeat && price
      ? (bill.textContent =
          "Total Amount: " +
          price +
          "$ x  " +
          totalSelectedSeat +
          " seats" +
          " = " +
          totalBill +
          "$")
      : (bill.textContent = "");
    //console.log(totalBill);
  });
}

getSelectedMoviePrice();

function reset(){
    price = 0;
    totalprice = 0;
    totalSelectedSeat = 0;
    seats.forEach(seat=>{
        seat.classList.contains("booked")? seat.classList.remove("booked"):null;
        seat.classList.contains("selected")? seat.classList.remove("selected"):null;
    })
}
