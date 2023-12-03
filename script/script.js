var range = document.querySelector('.offer-container__form-range');

range.addEventListener('input', function () {
    document.getElementById("percent").innerHTML = this.value + ' %';

}, false);