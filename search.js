let smileys;

function getJSON(url) {
    // Fetches from given URL
    return fetch(url)
        // Turns it into json
        .then(response => response.json())
        .catch(reason => reason.message)
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