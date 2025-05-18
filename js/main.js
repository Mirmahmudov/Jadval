let a = document.getElementById("a");
let toggle = true; // Nuqtalarni o‘chib-yonishi uchun flag

function vaqt() {
  const sana = new Date();
  let hafta = sana.getDay();

  let kunNomi = ["Yak", "Du", "Se", "Chor", "Pay", "Ju", "Sha"];
  hafta = kunNomi[hafta]; // To‘g‘ri indeks bilan olish

  let soat = sana.getHours();
  let daqiqa = sana.getMinutes();
  let soniya = sana.getSeconds();

  // Ikki xonali format qilish
  if (soat < 10) soat = "0" + soat;
  if (daqiqa < 10) daqiqa = "0" + daqiqa;
  if (soniya < 10) soniya = "0" + soniya;

  // Nuqta (:) har 500ms da o‘chib-yonishi
  let separator = toggle ? ":" : " ";

  a.innerHTML = hafta + " " + soat + separator + daqiqa + separator + soniya;
  toggle = !toggle; // Toggle-ni o‘zgartiramiz
}

setInterval(vaqt, 1000); // Har 500ms da yangilanadi
vaqt(); // Dastlabki ekranga chiqarish

// H1 elementiga uslub berish
a.style.color = "white";

a.style.textAlign = "center";
a.style.padding = "10px"; // Biroz oraliq qo‘shish
