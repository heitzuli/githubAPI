let smileys;

getJSON = (url) => {
    // Fetches from given URL
    return fetch(url)
        // Turns it into json
        .then(response => response.json())
        .catch(reason => reason.message)
}

displayImg = (imgLink, elementId) => {
    const element = document.getElementById(elementId);
    element.innerHTML = `<img src="${imgLink}"/>`;
}

deleteImg = (elementId) => {
    const element = document.getElementById(elementId);
    element.innerHTML = '';
}

search = () => {
    const searchTerm = document.getElementById('search').value;
    const foundIt = smileys.hasOwnProperty(searchTerm);
    if (foundIt) {
        displayImg(smileys[searchTerm], 'emoji');
    } else {
        deleteImg('emoji');
    }
}

(async () => {
    const searchField = document.getElementById('search');
    smileys = await getJSON(config.baseURL + '/emojis');
    autocomplete(document.getElementById('search'), Object.keys(smileys));
    searchField.disabled = false;
    searchField.value = '';
})();