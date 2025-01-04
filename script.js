const regions = [
    {
        id: 'pusat',
        name: 'Surabaya Pusat',
        puskesmas: 'Dr. Soetomo, Gundih, Kedungdoro, Ketabang, Peneleh, Simolawang, Tambakrejo, Tembok Dukuh'
    },
    {
        id: 'barat',
        name: 'Surabaya Barat',
        puskesmas: 'Asemrowo, Balongsari, Bangkingan, Benowo, Jeruk, Lidah Kulon, Lontar, Made, Manukan Kulon, Sememi, Simomulyo, Tanjungsari'
    },
    {
        id: 'timur',
        name: 'Surabaya Timur',
        puskesmas: 'Gading, Gunung Anyar, Kalijudan, Kalirungkut, Keputih, Klampis Ngasem, Medokan Ayu, Menur, Mojo, Mulyorejo, Pacarkeling, Pucangsewu, Rangkah, Tenggilis'
    },
    {
        id: 'utara',
        name: 'Surabaya Utara',
        puskesmas: 'Bulak Banteng, Dupak, Kenjeran, Krembangan Selatan, Moro Krembangan, Pegirian, Perak Timur, Sawah Pulo, Sidotropo, Tanah Kali Kedindi, Wonokusumo'
    },
    {
        id: 'selatan',
        name: 'Surabaya Selatan',
        puskesmas: 'Balas Klumprik, Banyu Urip, Dukuh Kupang, Gayungan, Jagir, Kebonsari, Ngagel, Putat Jaya, Sidosermo, Siwalankerto, Wiyung'
    }
];

function createRegionCard(region) {
    const card = document.createElement('div');
    card.className = 'region-card';
    card.setAttribute('data-region', region.id);

    const getArrowDirection = (id) => {
        switch (id) {
            case 'pusat': return 'animate-spin';
            case 'barat': return 'rotate-180';
            case 'timur': return 'rotate-0';
            case 'utara': return '-rotate-90';
            case 'selatan': return 'rotate-90';
            default: return '';
        }
    };

    card.innerHTML = `
        <div class="region-content">
            <div class="region-icon ${getArrowDirection(region.id)}">
                ${region.id !== 'pusat' ? `
                    <svg viewBox="0 0 46 40">
                        <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                    </svg>
                ` : ''}
            </div>
            <h3 class="region-name">${region.name}</h3>
            <p class="region-subtitle">List of Puskesmas Centers</p>
            <p class="region-puskesmas">${region.puskesmas}</p>
        </div>
    `;

    card.addEventListener('click', () => selectRegion(region.id));

    return card;
}

function selectRegion(regionId) {
    const cards = document.querySelectorAll('.region-card');
    cards.forEach(card => {
        if (card.getAttribute('data-region') === regionId) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });

    // Here you would typically navigate to the next page or show more details
    console.log(`Selected region: ${regionId}`);
    // For demonstration, we'll just show an alert
    alert(`You selected ${regionId}. In a real app, this would navigate to the Puskesmas list for ${regionId}.`);
}

function initializeApp() {
    const regionGrid = document.getElementById('regionGrid');
    regions.forEach(region => {
        const card = createRegionCard(region);
        regionGrid.appendChild(card);
    });

    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', () => {
        // In a real app, this would navigate back to the previous page
        console.log('Back button clicked');
        alert('In a real app, this would navigate back to the previous page.');
    });
}

document.addEventListener('DOMContentLoaded', initializeApp);

