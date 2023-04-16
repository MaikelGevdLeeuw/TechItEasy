// VOORRAAD ARRAY MET TV'S

console.log("test")

const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

//opdracht 1a
console.log("opdracht 1a");
const output = inventory.map(tv => tv.name);
console.log(output);


//opdracht 1b
console.log("opdracht 1b");
inventory.map((tv) => {
  if (tv.sold >= tv.originalStock){
    console.log(tv);
  }
});
//opdracht 1c
console.log("opdracht 1c");
const ambiLight = inventory.find((tv) => {
  if (tv.options.ambiLight === true){
    console.log(tv);
  }
})

//opdracht 1d
console.log("opdracht 1d");
inventory.sort((a, b) => {
  return a.price - b.price;
});

console.log(inventory)


//opdracht 2a
console.log("opdracht 2a");
let total = 0;
for (let i = 0; i < inventory.length; i++){
   total =  total + inventory[i].sold;
}
console.log(total);

//opdracht 2b
console.log("opdracht 2b");
document.getElementById("soldTv").innerHTML = total;

//opdracht 2c
console.log("opdracht 2c");
let totalBought = 0;
for (let i = 0; i < inventory.length; i++){
  totalBought =  totalBought + inventory[i].originalStock;
}
console.log(totalBought);


//opdracht 2d
document.getElementById("totalBought").innerHTML = totalBought;


//opdracht 2e
let stillToSell = totalBought - total;
document.getElementById("stillToSell").innerHTML = stillToSell;


//opdracht 3a
const outputs = inventory.map((tv) =>{
  document.getElementById("tvBrands").innerHTML += `<li>${ tv.brand }</li>
    `
});

//opdracht 3b
function tvBrands(inventory) {
  const outputs = inventory.map((tv) =>{
    document.getElementById("tvBrands2").innerHTML += `<li>${ tv.brand }</li>
    `
  });
}

tvBrands(inventory);


//opdracht 4a
//Het lukt me helaas niet om voor 1 televisie het onderstaande te weergeven.

function showTV (inventory) {
  const output = inventory.map((tv) =>{
    document.getElementById("showTv").innerHTML += `${ tv.brand } - ${ tv.type } - ${ tv.name } <br>`
  });
}

showTV(inventory);


//opdracht 4b
function showTVPrice(inventory) {
  const output = inventory.map((tv) =>{
    document.getElementById("showTv").innerHTML += ` €${ tv.price },- <br>`
  });
}

showTVPrice(inventory);

//opdracht 4c
// ik krijg het helaas niet voor elkaar om de array availableSizes te splitten. Ik heb split geprobeerd maar die geeft een error.
function showTVScreen(inventory) {
  const output = inventory.map((tv) =>{
    const a = tv.availableSizes
    document.getElementById("showTVScreen").innerHTML += ` ${ a } <br>`
  });
}

showTVScreen(inventory);

//de volgende opdrachten zijn daarom ook niet gelukt sorry :(