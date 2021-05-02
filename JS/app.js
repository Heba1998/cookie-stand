'use strict'
let hours = ['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00AM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM','7:00PM'];

let Seattle = {
    location : 'Seattle',
    minCus : 23 ,
    maxCus : 65 ,
    avgCookieSales : 6.3 ,
    randomPerHour : [],
    dailySales : 0 ,

randomCus : function (){
    let range =Seattle.maxCus-Seattle.minCus;
   let  Count=Math.random() * range + Seattle.minCus;
     return Math.ceil(Count);
 },
    
  hourSales : function(){
  for (let i=0;i<hours.length;i++){
    
  let cookiesNum= Math.ceil(Seattle.randomCus() * Seattle.avgCookieSales);
  Seattle.randomPerHour.push(cookiesNum);
  Seattle.dailySales += cookiesNum ;
  }
  },

  render: function(){
  let theParent = document.getElementById('sales-Data');
  let Header =document.createElement('h2');
  theParent.appendChild(Header);
  Header.textContent=this.location;
  theParent.appendChild(Header);
  let list = document.createElement('ul');
  theParent.appendChild(list);
  for (let i=0;i<hours.length;i++){
      let listItm=document.createElement('li');
      listItm.textContent=hours[i]+':'+Seattle.randomPerHour[i]+' cookies';
      list.appendChild(listItm);
  }

  let listItm = document.createElement('li');
  listItm.textContent='Total : ' + Seattle.dailySales+' cookies';
  list.appendChild(listItm);

  },
  }

  Seattle.hourSales();
  Seattle.render();




  let Tokyo = {
    location : 'Tokyo',
    minCus : 23 ,
    maxCus : 65 ,
    avgCookieSales : 6.3 ,
    randomPerHour : [],
    dailySales : 0 ,

randomCus : function (){
    let range =Tokyo.maxCus-Tokyo.minCus;
   let  Count=Math.random() * range + Tokyo.minCus;
     return Math.ceil(Count);
 },
    
  hourSales : function(){
  for (let i=0;i<hours.length;i++){
    
  let cookiesNum= Math.ceil(Tokyo.randomCus() * Tokyo.avgCookieSales);
  Tokyo.randomPerHour.push(cookiesNum);
  Tokyo.dailySales += cookiesNum ;
  }
  },

  render: function(){
  let theParent = document.getElementById('sales-Data');
  let Header =document.createElement('h2');
  theParent.appendChild(Header);
  Header.textContent=this.location;
  theParent.appendChild(Header);
  let list = document.createElement('ul');
  theParent.appendChild(list);
  for (let i=0;i<hours.length;i++){
      let listItm=document.createElement('li');
      listItm.textContent=hours[i]+':'+Tokyo.randomPerHour[i]+' cookies';
      list.appendChild(listItm);
  }

  let listItm = document.createElement('li');
  listItm.textContent='Total : ' + Tokyo.dailySales+' cookies';
  list.appendChild(listItm);

  },
  }

  Tokyo.hourSales();
  Tokyo.render();



    
     
                
 
  let Dubai = {
    location : 'Dubai',
    minCus : 23 ,
    maxCus : 65 ,
    avgCookieSales : 6.3 ,
    randomPerHour : [],
    dailySales : 0 ,

randomCus : function (){
    let range =Dubai.maxCus-Dubai.minCus;
   let  Count=Math.random() * range + Dubai.minCus;
     return Math.ceil(Count);
 },
    
  hourSales : function(){
  for (let i=0;i<hours.length;i++){
    
  let cookiesNum= Math.ceil(Dubai.randomCus() * Dubai.avgCookieSales);
  Dubai.randomPerHour.push(cookiesNum);
  Dubai.dailySales += cookiesNum ;
  }
  },

  render: function(){
  let theParent = document.getElementById('sales-Data');
  let Header =document.createElement('h2');
  theParent.appendChild(Header);
  Header.textContent=this.location;
  theParent.appendChild(Header);
  let list = document.createElement('ul');
  theParent.appendChild(list);
  for (let i=0;i<hours.length;i++){
      let listItm=document.createElement('li');
      listItm.textContent=hours[i]+':'+Dubai.randomPerHour[i]+' cookies';
      list.appendChild(listItm);
  }

  let listItm = document.createElement('li');
  listItm.textContent='Total : ' + Dubai.dailySales+' cookies';
  list.appendChild(listItm);

  },
  }

  Dubai.hourSales();
  Dubai.render();






  let Paris = {
    location : 'Paris',
    minCus : 23 ,
    maxCus : 65 ,
    avgCookieSales : 6.3 ,
    randomPerHour : [],
    dailySales : 0 ,

randomCus : function (){
    let range =Paris.maxCus-Paris.minCus;
   let  Count=Math.random() * range + Paris.minCus;
     return Math.ceil(Count);
 },
    
  hourSales : function(){
  for (let i=0;i<hours.length;i++){
    
  let cookiesNum= Math.ceil(Paris.randomCus() * Paris.avgCookieSales);
  Paris.randomPerHour.push(cookiesNum);
  Paris.dailySales += cookiesNum ;
  }
  },

  render: function(){
  let theParent = document.getElementById('sales-Data');
  let Header =document.createElement('h2');
  theParent.appendChild(Header);
  Header.textContent=this.location;
  theParent.appendChild(Header);
  let list = document.createElement('ul');
  theParent.appendChild(list);
  for (let i=0;i<hours.length;i++){
      let listItm=document.createElement('li');
      listItm.textContent=hours[i]+':'+Paris.randomPerHour[i]+' cookies';
      list.appendChild(listItm);
  }

  let listItm = document.createElement('li');
  listItm.textContent='Total : ' + Paris.dailySales+' cookies';
  list.appendChild(listItm);

  },
  }

  Paris.hourSales();
  Paris.render();






  let Lima = {
    location : 'Lima',
    minCus : 23 ,
    maxCus : 65 ,
    avgCookieSales : 6.3 ,
    randomPerHour : [],
    dailySales : 0 ,

randomCus : function (){
    let range =Lima.maxCus-Lima.minCus;
   let  Count=Math.random() * range + Lima.minCus;
     return Math.ceil(Count);
 },
    
  hourSales : function(){
  for (let i=0;i<hours.length;i++){
    
  let cookiesNum= Math.ceil(Lima.randomCus() * Lima.avgCookieSales);
  Lima.randomPerHour.push(cookiesNum);
  Lima.dailySales += cookiesNum ;
  }
  },

  render: function(){
  let theParent = document.getElementById('sales-Data');
  let Header =document.createElement('h2');
  theParent.appendChild(Header);
  Header.textContent=this.location;
  theParent.appendChild(Header);
  let list = document.createElement('ul');
  theParent.appendChild(list);
  for (let i=0;i<hours.length;i++){
      let listItm=document.createElement('li');
      listItm.textContent=hours[i]+':'+Lima.randomPerHour[i]+' cookies';
      list.appendChild(listItm);
  }

  let listItm = document.createElement('li');
  listItm.textContent='Total : ' + Lima.dailySales+' cookies';
  list.appendChild(listItm);

  },
  }

  Lima.hourSales();
  Lima.render();