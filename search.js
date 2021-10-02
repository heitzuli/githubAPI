let smileys;

function initialize() {
    (async () => {
        const searchField = document.getElementById('search');
        smileys = await getJSON(config.baseURL + 'emojis');
        searchField.disabled = false;
        searchField.value = '';
    })();
}

function search() {
    const searchTerm = document.getElementById('search').value;
    const foundIt = smileys.hasOwnProperty(searchTerm);
    console.log(searchTerm);
    console.log(foundIt);
    if (foundIt) {
        console.log('Found it!');
    }
}