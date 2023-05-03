let table = (arr_tag, arr) => {
  let i = 0;
  for (const elem_arr of arr_tag) {
    arr[i++] = elem_arr.textContent;
  }
  return arr;
}

let parse = (xmlString => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

  const photos = xmlDoc.getElementsByTagName('image');

  console.log(photos);

  let photos_arr = [];
  photos_arr = table(photos, photos_arr);

  let photosDiv = document.querySelectorAll('.sponsor');

  console.log(photosDiv);

  for (let i = 0; i < photos_arr.length; i++) {
    photosDiv[i].src = `${photos_arr[i]}`;
    // console.log(photosDiv[i].src);
    // photosDiv[i].style.background = `url('${photos_arr[i]}')`;
    // photosDiv[i].style.backgroundSize = 'cover';
  }
})

async function parseXML() {
  let a = await fetch('../XML/gallery.xml');
  let xmlString = await a.text();
  parse(xmlString);
}

parseXML();