//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function stripArticles(bandName) {
    return bandName.replace(/^(The |A |An )/i, '').trim();
}

bands.sort((a, b) => {
    const nameA = stripArticles(a);
    const nameB = stripArticles(b);
    return nameA.localeCompare(nameB);
});

const ul = document.getElementById('bands');

bands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    ul.appendChild(li);
});