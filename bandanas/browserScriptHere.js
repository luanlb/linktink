var listCat = document.querySelectorAll('.cat-item a');
for (var i = 0; i < listCat.length; i++) {
  console.log(listCat[i].getAttribute('href'));
}
