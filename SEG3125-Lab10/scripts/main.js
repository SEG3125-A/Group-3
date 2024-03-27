var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
var nameRegex = /^[a-z ,.'-]+$/i;
var postalRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var cnumRegex = /\d{4} \d{4} \d{4} \d{4}/;
var cvvRegex = /\d{3}/;
var addrRegex = /^[#.0-9a-zA-Z\s,-]+$/;
var monthRegex = /^(0?[1-9]|1[012])$/;
var yearRegex = /^(19|20)\d{2}$/;
var provRegex = /[A-Za-z]{2}/;

// JavaScript to allow only one checkbox to be selected at a time for single select
function singleSelectCheck(thisCheckbox,groupName){
    if(thisCheckbox.checked){
        //let groupName = 'single-select';
        let checkboxes = document.querySelectorAll('input[name="' + groupName + '"]');
        checkboxes.forEach((item) => {
            if (item !== thisCheckbox) item.checked = false;
        });
    }
}

function validate() {
    // Get field values
    var cname = document.getElementById('cname').value;
    var cnum = document.getElementById('ccnum').value;
    var expmonth = document.getElementById('expmonth').value;
    var expyear = document.getElementById('expyear').value;
    var cvv = document.getElementById('cvv').value;

    var email = document.getElementById('email').value;
    var addr = document.getElementById('adr').value;

    var prov = document.getElementById('prov').value;
    var postal = document.getElementById('postal').value;

    // Perform Regex tests
    var cnameTest = nameRegex.test(cname);
    var cnumTest = cnumRegex.test(cnum);
    var expmonthTest = monthRegex.test(expmonth);
    var expyearTest = yearRegex.test(expyear);
    var cvvTest = cvvRegex.test(cvv);
    var emailTest = emailRegex.test(email);
    var addrTest = addrRegex.test(addr);
    var provTest = provRegex.test(prov);
    var postalTest = postalRegex.test(postal);

    if(cnameTest == false) {
        alert('Please enter a valid credit card name');
        return false;
    }
    if(cnumTest == false) {
        alert('Please enter a valid credit card nuber');
        return false;
    }
    if(expmonthTest == false) {
        alert('Please enter a valid expiration month');
        return false;
    }
    if(expyearTest == false) {
        alert('Please enter a valid expiration year');
        return false;
    }
    if(cvvTest == false) {
        alert('Please enter a valid CCV number');
        return false;
    }
    if(emailTest == false) {
        alert('Please enter a valid email');
        return false;
    }
    if(addrTest == false) {
        alert('Please enter a valid address');
        return false;
    }
    if(provTest == false) {
        alert('Please enter a valid province abbreviation');
        return false;
    }
    if(postalTest == false) {
        alert('Please enter a valid postal code');
        return false;
    }

    alert('Form submitted, thank you and we look forward to seeing you! :)');
    return true;
}