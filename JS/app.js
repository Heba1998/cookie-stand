
'use strict'
let hours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00AM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'];
let locations=[];

function Cookies(location, minCus, maxCus, avg) {
  this.location = location;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avg = avg;
  this.randomPerHour = [];
  this.DailySales = 0;
  this.hourToSale();
locations.push(this);
}

Cookies.prototype.Random = function () {
  let range = this.maxCus - this.minCus;
  let random = Math.floor(Math.random() * range + this.minCus);
  return random;
}

Cookies.prototype.hourToSale = function () {
  for (let i = 0; i < hours.length; i++) {

    let avgCookieSales = Math.floor(this.Random() * this.avg);
    this.randomPerHour.push(avgCookieSales);
    this.DailySales += avgCookieSales;

  }
}


let Seattle = new Cookies('Seattle', 23, 65, 6.5);
let Dubai = new Cookies('Dubai', 11, 38, 3.7);
let Tokyo = new Cookies('Tokyo', 3, 24, 1.2);
let Paris = new Cookies('Paris', 20, 38, 2.3);
let Lima = new Cookies('Lima', 2, 16, 4.6);


let parent = document.getElementById('sales-Data');
console.log(parent);
let CreateTable = document.createElement('table');
parent.appendChild(CreateTable);



// header
function header () {
  let FirstRow = document.createElement('tr');
CreateTable.appendChild(FirstRow);
let ContentOfFirstRow = document.createElement('th');
FirstRow.appendChild(ContentOfFirstRow);
ContentOfFirstRow.textContent = '         ';
for (let i=0;i<hours.length;i++){
let ContentOfOtherRows = document.createElement('th');
FirstRow.appendChild(ContentOfOtherRows);
ContentOfOtherRows.textContent = hours[i];
}

let LastColumn=document.createElement('th');
FirstRow.appendChild(LastColumn);
LastColumn.textContent= 'total cookies per day'
}
header();


// table content 
Cookies.prototype.render=function() {
  let ContentRow = document.createElement('tr');
  CreateTable.appendChild(ContentRow);

  let index = document.createElement('td');
  ContentRow.appendChild(index);
  index.textContent = this.location;



  for (let j=0;j<hours.length;j++){
    let totalindex = document.createElement('td');
  ContentRow.appendChild(totalindex);
  totalindex.textContent = this.randomPerHour[j];
    }

    
  let LastColumn=document.createElement('td');
  ContentRow.appendChild(LastColumn);
  LastColumn.textContent=this.DailySales;

}

for (let i = 0; i < locations.length; i++) {
  locations[i].hourToSale();
  locations[i].render();
  
}
console.log(locations);

// footer 
function footer () {
  let footerrow = document.createElement('tr');
  CreateTable.appendChild(footerrow);
  
  let firstcolumn = document.createElement('th');
  footerrow.appendChild(firstcolumn);
  firstcolumn.textContent='Totals';


  for (let j = 0; j < hours.length; j++) {
    let total=0;
    for (let k = 0; k < locations.length; k++) {
      total += locations[k].randomPerHour[j];
    }
    console.log(total);
    
  let lastindex = document.createElement('th');
  footerrow.appendChild(lastindex);
  lastindex.textContent=total;
  
}

let lasttotal=0;
for (let k = 0; k < locations.length; k++) {
  lasttotal +=locations[k].DailySales;
}
console.log(lasttotal);

let lastindex = document.createElement('th');
footerrow.appendChild(lastindex);
lastindex.textContent=lasttotal;
}

footer();
 

//Create form

 let CookiesForm = document.getElementById('MyForm');
 CookiesForm.addEventListener('submit', AddNewShop);

 function AddNewShop(event) {
     event.preventDefault();

    CreateTable.deleteRow(CreateTable.rows.length -1);

    let location = event.target.location.value;
     console.log(location);
     let minCus = parseInt(event.target.Minimum.value);
     console.log(minCus);
      let maxCus = parseInt(event.target.Maximum.value);
      console.log(maxCus);
     let avg = parseFloat(event.target.average.value);
     console.log(avg);
    
     let NewStore = new Cookies(location,minCus,maxCus,avg)
    NewStore.render();

    footer();
   
}
 
// let Seattle = {
//     location : 'Seattle',
//     minCus : 23 ,
//     maxCus : 65 ,
//     avgCookieSales : 6.3 ,
//     randomPerHour : [],
//     dailySales : 0 ,

// randomCus : function (){
//     let range =Seattle.maxCus-Seattle.minCus;
//    let  Count=Math.random() * range + Seattle.minCus;
//      return Math.ceil(Count);
//  },

//   hourSales : function(){
//   for (let i=0;i<hours.length;i++){

//   let cookiesNum= Math.ceil(Seattle.randomCus() * Seattle.avgCookieSales);
//   Seattle.randomPerHour.push(cookiesNum);
//   Seattle.dailySales += cookiesNum ;
//   }
//   },

//   render: function(){
//   let theParent = document.getElementById('sales-Data');
//   let Header =document.createElement('h2');
//   theParent.appendChild(Header);
//   Header.textContent=this.location;
//   theParent.appendChild(Header);
//   let list = document.createElement('ul');
//   theParent.appendChild(list);
//   for (let i=0;i<hours.length;i++){
//       let listItm=document.createElement('li');
//       listItm.textContent=hours[i]+' : '+Seattle.randomPerHour[i]+'  cookies';
//       list.appendChild(listItm);
//   }

//   let listItm = document.createElement('li');
//   listItm.textContent='Total : ' + Seattle.dailySales+' cookies';
//   list.appendChild(listItm);

//   },
//   }

//   Seattle.hourSales();
//   Seattle.render();




//   let Tokyo = {
//     location : 'Tokyo',
//     minCus : 23 ,
//     maxCus : 65 ,
//     avgCookieSales : 6.3 ,
//     randomPerHour : [],
//     dailySales : 0 ,

// randomCus : function (){
//     let range =Tokyo.maxCus-Tokyo.minCus;
//    let  Count=Math.random() * range + Tokyo.minCus;
//      return Math.ceil(Count);
//  },

//   hourSales : function(){
//   for (let i=0;i<hours.length;i++){

//   let cookiesNum= Math.ceil(Tokyo.randomCus() * Tokyo.avgCookieSales);
//   Tokyo.randomPerHour.push(cookiesNum);
//   Tokyo.dailySales += cookiesNum ;
//   }
//   },

//   render: function(){
//   let theParent = document.getElementById('sales-Data');
//   let Header =document.createElement('h2');
//   theParent.appendChild(Header);
//   Header.textContent=this.location;
//   theParent.appendChild(Header);
//   let list = document.createElement('ul');
//   theParent.appendChild(list);
//   for (let i=0;i<hours.length;i++){
//       let listItm=document.createElement('li');
//       listItm.textContent=hours[i]+' : '+Tokyo.randomPerHour[i]+'  cookies';
//       list.appendChild(listItm);
//   }

//   let listItm = document.createElement('li');
//   listItm.textContent='Total : ' + Tokyo.dailySales+' cookies';
//   list.appendChild(listItm);

//   },
//   }

//   Tokyo.hourSales();
//   Tokyo.render();







//   let Dubai = {
//     location : 'Dubai',
//     minCus : 23 ,
//     maxCus : 65 ,
//     avgCookieSales : 6.3 ,
//     randomPerHour : [],
//     dailySales : 0 ,

// randomCus : function (){
//     let range =Dubai.maxCus-Dubai.minCus;
//    let  Count=Math.random() * range + Dubai.minCus;
//      return Math.ceil(Count);
//  },

//   hourSales : function(){
//   for (let i=0;i<hours.length;i++){

//   let cookiesNum= Math.ceil(Dubai.randomCus() * Dubai.avgCookieSales);
//   Dubai.randomPerHour.push(cookiesNum);
//   Dubai.dailySales += cookiesNum ;
//   }
//   },

//   render: function(){
//   let theParent = document.getElementById('sales-Data');
//   let Header =document.createElement('h2');
//   theParent.appendChild(Header);
//   Header.textContent=this.location;
//   theParent.appendChild(Header);
//   let list = document.createElement('ul');
//   theParent.appendChild(list);
//   for (let i=0;i<hours.length;i++){
//       let listItm=document.createElement('li');
//       listItm.textContent=hours[i]+' : '+Dubai.randomPerHour[i]+'  cookies';
//       list.appendChild(listItm);
//   }

//   let listItm = document.createElement('li');
//   listItm.textContent='Total : ' + Dubai.dailySales+' cookies';
//   list.appendChild(listItm);

//   },
//   }

//   Dubai.hourSales();
//   Dubai.render();






//   let Paris = {
//     location : 'Paris',
//     minCus : 23 ,
//     maxCus : 65 ,
//     avgCookieSales : 6.3 ,
//     randomPerHour : [],
//     dailySales : 0 ,

// randomCus : function (){
//     let range =Paris.maxCus-Paris.minCus;
//    let  Count=Math.random() * range + Paris.minCus;
//      return Math.ceil(Count);
//  },

//   hourSales : function(){
//   for (let i=0;i<hours.length;i++){

//   let cookiesNum= Math.ceil(Paris.randomCus() * Paris.avgCookieSales);
//   Paris.randomPerHour.push(cookiesNum);
//   Paris.dailySales += cookiesNum ;
//   }
//   },

//   render: function(){
//   let theParent = document.getElementById('sales-Data');
//   let Header =document.createElement('h2');
//   theParent.appendChild(Header);
//   Header.textContent=this.location;
//   theParent.appendChild(Header);
//   let list = document.createElement('ul');
//   theParent.appendChild(list);
//   for (let i=0;i<hours.length;i++){
//       let listItm=document.createElement('li');
//       listItm.textContent=hours[i]+' : '+Paris.randomPerHour[i]+'  cookies';
//       list.appendChild(listItm);
//   }

//   let listItm = document.createElement('li');
//   listItm.textContent='Total : ' + Paris.dailySales+' cookies';
//   list.appendChild(listItm);

//   },
//   }

//   Paris.hourSales();
//   Paris.render();






//   let Lima = {
//     location : 'Lima',
//     minCus : 23 ,
//     maxCus : 65 ,
//     avgCookieSales : 6.3 ,
//     randomPerHour : [],
//     dailySales : 0 ,

// randomCus : function (){
//     let range =Lima.maxCus-Lima.minCus;
//    let  Count=Math.random() * range + Lima.minCus;
//      return Math.ceil(Count);
//  },

//   hourSales : function(){
//   for (let i=0;i<hours.length;i++){

//   let cookiesNum= Math.ceil(Lima.randomCus() * Lima.avgCookieSales);
//   Lima.randomPerHour.push(cookiesNum);
//   Lima.dailySales += cookiesNum ;
//   }
//   },

//   render: function(){
//   let theParent = document.getElementById('sales-Data');
//   let Header =document.createElement('h2');
//   theParent.appendChild(Header);
//   Header.textContent=this.location;
//   theParent.appendChild(Header);
//   let list = document.createElement('ul');
//   theParent.appendChild(list);
//   for (let i=0;i<hours.length;i++){
//       let listItm=document.createElement('li');
//       listItm.textContent=hours[i]+' : '+Lima.randomPerHour[i]+'  cookies';
//       list.appendChild(listItm);
//   }

//   let listItm = document.createElement('li');
//   listItm.textContent='Total : ' + Lima.dailySales+' cookies';
//   list.appendChild(listItm);

//   },
//   }

//   Lima.hourSales();
//   Lima.render();