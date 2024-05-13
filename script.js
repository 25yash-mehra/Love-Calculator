const fname = document.getElementById("fname");
const sname = document.getElementById("sname");
const percentage = document.getElementById("percentage");
const result = document.getElementById("result");
const button = document.getElementById("button");

async function data(fname, sname) {
  const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d832fa8dc1msh9ce771d02145f1cp1761bejsn7864372aa2db",
      "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const store = await response.json();
    console.log(store);
    percentage.innerHTML = store.percentage + "%";
    result.innerHTML = store.result;
  } catch (error) {
    console.error(error);
  }
}

button.addEventListener("click", () => {
  data(fname.value, sname.value);
});
