let smileys;

function search() {
    const searchTerm = document.getElementById('search').value;
    const foundIt = smileys.hasOwnProperty(searchTerm);
    console.log(searchTerm);
    console.log(foundIt);


}