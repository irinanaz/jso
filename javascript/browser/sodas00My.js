'use strict';

var products = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
                 { name: "Orange", calories: 160, color: "orange", sold: 12101 },
                 { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
                 { name: "Diet Cola", calories: 15, color: "caramel", sold: 43922 },
                 { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
                 { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
                 { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
                 { name: "Water", calories: 0, color: "clear", sold: 62123 }
               ];


function compareProp (lijst, propNaam){
  if (typeof lijst[0][propNaam] == "number"){
    lijst.sort(comparePropNumbers(lijst,propNaam));
  }else{
   lijst.sort(compareStrings(lijst,propNaam));
}

}
function comparePropNumbers(a,b){
  if (a[propNaam] > b[propNaam]) { return 1; }
  else 
    if (a[propNaam] === b[propNaam]) { return 0; }
      else { return -1; }
}

}
function compareNumbers(a, b) {
  if (a > b) { return 1; }
  else 
    if (a === b) { return 0; }
      else { return -1; }
}


function compareStrings(a,b) {
  var propA = a.toUpperCase(); 
  var propB = b.toUpperCase(); 
  if (propA < propB) {
    return -1;
  }
  if (propA > propB) {
    return 1;
  }
  return 0;
}



function printProducts(products){
  for (var i = 0; i< products.length ; i++){
    console.log(products[i]);
  }
}
// sort by name:
products.sort(compareProp(products,"sold"));
printProducts(products);
products.sort(compareName);
printProducts(products);

// function compareSold(a, b) {
//   if (a.sold > b.sold) { return 1; }
//   else 
//     if (a.sold === b.sold) { return 0; }
//       else { return -1; }
// }

// function compareName(a,b) {
//   var propA = a.name.toUpperCase(); 
//   var propB = b.name.toUpperCase(); 
//   if (propA < propB) {
//     return -1;
//   }
//   if (propA > propB) {
//     return 1;
//   }
//   return 0;
// }