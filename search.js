let smileys;

function getJSON(url) {
    // Fetches from given URL
    return fetch(url)
        // Turns it into json
        .then(function (response) {
            return response.json();
        })
}

function initialize() {
    (async () => {
        const searchField = document.getElementById('search');
        smileys = await getJSON(config.baseURL + 'emojis');
        searchField.disabled = false;
        searchField.value = '';
    })();
}

function displayImg(imgLink, elementId) {
    const element = document.getElementById(elementId);
    element.innerHTML = `<img src="${imgLink}"/>`;
}

function deleteImg(elementId) {
    const element = document.getElementById(elementId);
    element.innerHTML = '';
}

function search() {
    const searchTerm = document.getElementById('search').value;
    const foundIt = smileys.hasOwnProperty(searchTerm);
    if (foundIt) {
        displayImg(smileys[searchTerm], 'emoji');
    } else {
        deleteImg('emoji');
    }
}