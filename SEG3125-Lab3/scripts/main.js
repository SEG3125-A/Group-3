// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

window.onload = function(){ 
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById("Client").style.display = "block";
	populateListProductChoices('displayProduct')
}


function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	console.log(tablinks);

	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

// Silly little code for the price slider
var slider = document.getElementById("priceSlider");
var price = document.getElementById("price");
price.innerHTML = slider.value;
slider.oninput = function() {
	price.innerHTML = this.value;
}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct2) {
	console.log('test')
	var inputs = [];
	var cbs = document.forms['inputs'].elements['i'];
	for(var i=0,cbLen=cbs.length;i<cbLen;i++){
  		if(cbs[i].checked){
    		inputs.push(cbs[i].value);
  	} 
	}

    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    //s2.innerHTML = "";
	
	var grain = document.getElementById("grain");
	var veggie = document.getElementById("vegetable");
	var protein = document.getElementById("protein");

	grain.innerHTML = "";
	veggie.innerHTML = "";
	protein.innerHTML = "";

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictProducts(products, inputs, slider.value);
	optionArray.sort(compare);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>

	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		if(productName.isProtein){
			s2 = document.getElementById("protein");	
		}
		else if(productName.isGrain){
			s2 = document.getElementById("grain");	
		}
		else if(productName.isVegetable){
			s2 = document.getElementById("vegetable");	
		}
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		var img = document.createElement("img");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.price = productName.price;
		checkbox.value = productName.name;
		img.src = productName.image;
		img.height = 50;
		img.width = 50;
		s2.appendChild(checkbox);
		s2.appendChild(img);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName.name;
		label.appendChild(document.createTextNode(productName.name + ' - $' + productName.price));
		s2.appendChild(label);
		
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}

// This function helps search for specific products from the list provided in groceries.js
function search(){
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById("search");
	filter = input.value.toUpperCase();
	ul = document.getElementById("products");
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
	  a = li[i].getElementsByTagName("a")[0];
	  txtValue = a.textContent || a.innerText;
	  if (txtValue.toUpperCase().indexOf(filter) > -1) {
		li[i].style.display = "";
	  } else {
		li[i].style.display = "none";
	  }
	}
}


// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i]);
		}
	}
	
	console.log(chosenProducts);
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + calcTotal(chosenProducts)));
		
}

function hide(elem){
	div = document.getElementById(elem);
	if(div.style.display == 'none'){
		div.style.display = 'block';
	}
	else{
		div.style.display = 'none';
	}
	
}