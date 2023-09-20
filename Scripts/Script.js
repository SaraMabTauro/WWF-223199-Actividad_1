
document.addEventListener('click', function(e) {
    const dropdowns = document.querySelectorAll('.has-dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
            const menu = dropdown.querySelector('.dropdown-menu');
            menu.style.display = 'none';
            menu.style.opacity = '0';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const dropdownItems = document.querySelectorAll('.header .dropdown-menu li');

    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            dropdownItems.forEach(item => item.classList.remove('active'));

            item.classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {

    const newsCards = document.querySelectorAll('.card');

    newsCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            const title = card.querySelector('.card-content h2');
            if (title) {
                title.style.color = '#dd681b';
            }
        });

        card.addEventListener('mouseout', () => {

            card.style.transform = 'scale(1)';
            const title = card.querySelector('.card-content h2');
            if (title) {
                title.style.color = '';
            }
        });
    });
});

function toggleRegionPicker() {
    var regionPicker = document.getElementById('region-picker');

    var currentHeight = parseFloat(getComputedStyle(regionPicker).height);
    
    if (currentHeight === 0) {

        for (var i = 0; i <= 510; i += 10) {
            (function (height) {
                setTimeout(function () {
                    regionPicker.style.height = height + 'px';
                }, i);
            })(i);
        }
    } else {
        
        for (var i = 510; i >= 0; i -= 10) {
            (function (height) {
                setTimeout(function () {
                    regionPicker.style.height = height + 'px';
                }, (510 - height) * 2);
            })(i);
        }
    }
}





const regiones = [
    "WWF GLOBAL",
    "ADRIA",
    "ARGENTINA",
    "ARMENIA",
    "ASIAPACIFIC",
    "AUSTRALIA",
    "AUSTRIA",
    "AZERBAIJAN",
    "BELGIUM",
    "BHUTAN",
    "BOLIVIA",
    "BORNEO",
    "BRAZIL",
    "BULGARIA",
    "CAMBODIA",
    "CAMEROON",
    "CANADA",
    "CAUCASUS",
    "CENTRAL AFRICAN REPUBLIC",
    "CENTRAL AMERICA",
    "CHILE",
    "CHINA",
    "COLOMBIA",
    "CROATIA",
    "DEMOCRATIC REPUBLIC OF THE CONGO",
    "DENMARK",
    "ECUADOR",
    "EUROPEAN POLICY OFFICE",
    "FINLAND",
    "FRANCE",
    "GABON",
    "GERMANY",
    "GREATER MEKONG",
    "GREECE",
    "GUIANAS",
    "HONG KONG SAR",
    "HUNGARY",
    "INDIA",
    "INDONESIA",
    "ITALY",
    "JAPAN",
    "KENYA",
    "KOREA",
    "LAOS",
    "LATVIA",
    "MADAGASCAR",
    "MALAYSIA",
    "MEDITERRANEAN",
    "MEXICO",
    "MONGOLIA",
    "MOZAMBIQUE",
    "MYANMAR",
    "NAMIBIA",
    "NEPAL",
    "NETHERLANDS",
    "NEW ZEALAND",
    "NORWAY",
    "PAKISTAN",
    "PAPUA NEW GUINEA",
    "PARAGUAY",
    "PERU",
    "PHILIPPINES",
    "POLAND",
    "PORTUGAL",
    "REGIONAL OFFICE AFRICA",
    "ROMANIA",
    "SENEGAL",
    "SERBIA",
    "SINGAPORE",
    "SLOVAKIA",
    "SLOVENIA",
    "SOUTH AFRICA",
    "SOUTH PACIFIC"
];

const listaRegiones = document.getElementById('region-list');

regiones.forEach(region => {
    const li = document.createElement('li');
    
    const iconoUbicacion = document.createElement('em');
    iconoUbicacion.classList.add('material-icons');
    iconoUbicacion.textContent = 'location_on'; 
    
    
    li.appendChild(iconoUbicacion);
    li.appendChild(document.createTextNode(region));
    
    listaRegiones.appendChild(li);
});
