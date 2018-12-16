const URL =
  "https://api.vagalume.com.br/rank.php?apikey=660a4395f992ff67786584e238f501aa&type=art&period=week&periodVal=201134&scope=all&limit=3";

axios
  .get(URL)
  .then(res => {
    return res.data.art.week.all;
  })
  .then(obj => {
    return getBox(obj);
  });

function getBox(obj) {
  let box = document.getElementById("card-box");
  let itens = obj.map(item => boxElement(item));
  return itens;
}

function boxElement(item) {
  let itemElement = document.createElement("div");
  itemElement.className = "card-box";
  return itemElement;
}
