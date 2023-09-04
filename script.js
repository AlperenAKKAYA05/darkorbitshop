/*

İtem Liste

*/
var itemList = document.getElementById("itemList");

var itemsPerPage = 6;

var currentPage = 0;

function showPage(page) {
  var start = page * itemsPerPage;
  var end = (page + 1) * itemsPerPage;

  var items = itemList.getElementsByTagName("li");

  for (var i = 0; i < items.length; i++) {
    items[i].style.display = i >= start && i < end ? "block" : "none";
  }
}

document.getElementById("prev").addEventListener("click", function () {
  // Eğer şu anki sayfa 0'dan büyükse, bir önceki sayfaya geçiyoruz ve yeni sayfayı gösteriyoruz.
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

document.getElementById("next").addEventListener("click", function () {
  // Eğer şu anki sayfa, toplam sayfa sayısının altındaysa, bir sonraki sayfaya geçiyoruz ve yeni sayfayı gösteriyoruz.
  if (currentPage < Math.ceil(itemList.children.length / itemsPerPage) - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

showPage(currentPage);
/*

İtem Liste Son

*/


/*

Güncellenen veriler

*/
var liItems = document.querySelectorAll("#itemList li");

var gemiImgDiv = document.querySelector(".gemi-img img");

var shipNameHeaders = document.querySelectorAll("h3#ship-name");

var cashme = document.querySelectorAll("p#cashme");

var info = document.querySelectorAll("p#info");

var mac = document.querySelectorAll("p#mac");

for (var i = 0; i < liItems.length; i++) {
  liItems[i].addEventListener("click", function () {
    var imgSrc = this.querySelector("img").getAttribute("src");

    gemiImgDiv.src = imgSrc;

    var shipName = this.querySelector("#name").textContent;

    for (var j = 0; j < shipNameHeaders.length; j++) {
      shipNameHeaders[j].textContent = shipName;
    }

    var howmcash = this.querySelector("#howm").textContent;

    for (var j = 0; j < cashme.length; j++) {
      cashme[j].textContent = howmcash;
    }

    for (var j = 0; j < mac.length; j++) {
      mac[j].textContent = howmcash;
       adetInput.value = "1";
    }

    var inf = this.querySelector("#inf").textContent;

    for (var j = 0; j < info.length; j++) {
      info[j].textContent = inf;
    }
  });
}
/*

Güncellenen veriler Son

*/


/*

Satın Alma Sınırları

*/
const adetInput = document.getElementById("adet");
const negativeButton = document.getElementById("negative");
const plusButton = document.getElementById("plus");
const macElement = document.getElementById("mac");
const cashmeElement = document.getElementById("cashme");

adetInput.addEventListener("input", function () {
  const validNumber = this.value.match(/^\d+$/);

  if (!validNumber || parseInt(this.value) < 1) {
    this.value = "1";
  }

  updateMacValue();
});

plusButton.addEventListener("click", function () {
  adetInput.value = parseInt(adetInput.value) + 1;
  updateMacValue();
});

negativeButton.addEventListener("click", function () {
  const currentValue = parseInt(adetInput.value);
  if (currentValue > 1) {
    adetInput.value = currentValue - 1;
    updateMacValue();
  }
});

function updateMacValue() {
  const adetValue = parseInt(adetInput.value);
  macElement.textContent = cashmeElement.textContent * adetValue;
}

/*

Satın Alma Sınırları Son

*/