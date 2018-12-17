const URL =
  "https://api.vagalume.com.br/rank.php?apikey=660a4395f992ff67786584e238f501aa&type=art&period=week&periodVal=201134&scope=all&limit=3";

var box = document.getElementById("cardBox");

axios
  .get(URL)
  .then(res => {
    return res.data.art.week.all;
  })
  .then(obj => {
    creatItemsInBox(obj);
  })
  .catch(err => console.error(err));

function creatItemsInBox(items) {
  // loop para inserir itens no box
  items.forEach((item, i) => {
    // Create item
    let itemDiv = document.createElement("div");
    // Add class name in item
    itemDiv.className = "card-item";
    // Create content
    let content = document.createElement("div");
    // Add class name in content
    content.className = "card-content";
    // Create card img
    let img = createIMG(item.name, item.pic_medium, item.url);
    // Create card title name
    let nameTitle = createHeaderCard(item.name, item.views);
    // Create card type
    let type = createCardType(i);

    // Append img in content
    content.appendChild(img);
    // Append content in item
    itemDiv.appendChild(content);
    // Append title in item
    itemDiv.appendChild(nameTitle);
    // Appendtype in item
    itemDiv.appendChild(type);
    // Append Item in Box
    box.appendChild(itemDiv);
  });
}

function createIMG(name, picture, url) {
  let a = document.createElement("a");
  // Define href
  a.href = url;
  // create image
  let img = document.createElement("img");
  // Add alt description in img
  img.alt = name;
  // Add SRC in img
  img.src = picture;
  // create div Png
  let divPNG = document.createElement("div");
  // add class in div png
  divPNG.className = "png";
  // add png in link
  a.appendChild(divPNG);
  // add image in link
  a.appendChild(img);
  // addatributo to open other pag on browser
  a.target = "_blank";
  return a;
}

function createHeaderCard(name, views) {
  let title = document.createElement("div");
  // add class name
  title.className = "card-head";
  // Add background color
  title.style.backgroundColor = "#" + views;
  // Create P element
  let parag = document.createElement("p");
  // Add text node in P element
  parag.appendChild(document.createTextNode(name));
  // Append P in title
  title.appendChild(parag);
  return title;
}

function createCardType(index) {
  let arrtypes = ["Road Tripplin", "Young Folks", "Fast Car"];

  let typeDiv = document.createElement("div");
  // add class name
  typeDiv.className = "card-type";
  // Create P element
  let parag = document.createElement("p");
  // Add text node in P element
  parag.appendChild(document.createTextNode(arrtypes[index]));
  // Append P in typeDiv
  typeDiv.appendChild(parag);

  return typeDiv;
}
