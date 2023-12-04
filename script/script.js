var range = document.querySelector('.offer-container__form-range');

range.addEventListener('input', function () {
    document.getElementById("percent").innerHTML = this.value + ' %';
    
}, false);

function setBefore1() {
    let style = document.createElement('style');
    style.innerHTML = `
      .btn::before {
        content: 'Sed ut perspiciatis';
      }
    `;
    document.getElementById('checkbox').checked = false;
    document.head.appendChild(style);
}
function setBefore2() {
    let style = document.createElement('style');
    style.innerHTML = `
      .btn::before {
        content: 'Nemo enim ipsam';
      }
    `;
    document.getElementById('checkbox').checked = false;
    document.head.appendChild(style);
}
function setBefore3() {
    let style = document.createElement('style');
    style.innerHTML = `
      .btn::before {
        content: 'Et harum quidem';
      }
    `;
    document.getElementById('checkbox').checked = false;
    document.head.appendChild(style);
}
function setBefore4() {
    let style = document.createElement('style');
    style.innerHTML = `
      .btn::before {
        content: 'Temporibus autem';
      }
    `;
    document.getElementById('checkbox').checked = false;
    document.head.appendChild(style);
}
function setBefore5() {
    let style = document.createElement('style');
    style.innerHTML = `
      .btn::before {
        content: 'Itaque earum rerum';
      }
      input:checked ~ .list{
        clip-path: none;
        }
    `;
    document.getElementById('checkbox').checked = false;
    document.head.appendChild(style);
}