const URL =
  "https://api.vagalume.com.br/rank.php?apikey=660a4395f992ff67786584e238f501aa&type=art&period=week&periodVal=201134&scope=all&limit=3";

var box = document.getElementById("cardBox");

axios
  .get(URL)
  .then(res => {
    return res.data.art.week.all;
  })
  .then(obj => {
    creatItemsBox(obj);
  });

function creatItemsBox(items) {
  // loop para inserir itens no box
  items.forEach(item => {
    // Create item
    let itemDiv = document.createElement("div");
    // Add class name in item
    itemDiv.className = "card-item";
    // Create content
    let content = document.createElement("div");
    // Add class name in content
    content.className = "card-content";
    // Create img
    let img = createIMG(item.name, item.pic_medium);
    // Create title name
    let nameTitle = createHeaderCard(item.name);
    // Append img in content
    content.appendChild(img);
    // Append content in item
    itemDiv.appendChild(content);
    // Append title in item
    itemDiv.appendChild(nameTitle);
    // Append Item in Box
    box.appendChild(itemDiv);
  });
}

function createIMG(name, picture) {
  let img = document.createElement("img");
  // Add alt description in img
  img.alt = name;
  // Add SRC in img
  img.src = picture;
  return img;
}

function createHeaderCard(name) {
  let title = document.createElement("div");
  // add class name
  title.className = "card-head";
  // Create P element
  let parag = document.createElement("p");
  // Add text node in P element
  parag.appendChild(document.createTextNode(name));
  // Append P in title
  title.appendChild(parag);
  return title;
}

function createCardType() {}
