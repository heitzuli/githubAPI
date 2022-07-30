createRepoHTML = (repo) => `<a href="${config.gitHubURL}/${repo.name}">${repo.name}</a>`;

createPushEventHTML = (gitHubEvent) => `Pushed to ${createRepoHTML(gitHubEvent.repo)}`;

createCreateEventHTML = (gitHubEvent) => `Created a ${gitHubEvent.payload.ref_type}`;

createWatchEventHTML = (gitHubEvent) => `Starred ${createRepoHTML(gitHubEvent.repo)}`;

createDeleteEventHTML = (gitHubEvent) => `Deleted a ${gitHubEvent.payload.ref_type}`;
// All other types
createGenericEventHTML = (gitHubEvent) => `${gitHubEvent.type}`

createSpecificEventHTML = (gitHubEvent) => {
    switch (gitHubEvent.type) {
        case 'PushEvent': return createPushEventHTML(gitHubEvent);
        case 'CreateEvent': return createCreateEventHTML(gitHubEvent);
        case 'WatchEvent': return createWatchEventHTML(gitHubEvent);
        case 'DeleteEvent': return createDeleteEventHTML(gitHubEvent);
        default: return createGenericEventHTML(gitHubEvent);
    }
}

createEventHTML = (gitHubEvent) => `<div>${gitHubEvent.created_at}: ${createSpecificEventHTML(gitHubEvent)}</div>`

createErrorHTML = (message) => `<div class="error">Could not load events: ${message}</div>`

loadEvents = async() => {
    const gitHubUserName = document.getElementById('username').value;
    const gitHubEventsField = document.getElementById('gitHubEvents');

    // get list from github
    const events = await getJSON(`${config.baseURL}/users/${gitHubUserName}/events`);
    if (events.message) {
        // handle error somehow if there is one. Let's only handle 404 for now.
        gitHubEventsField.innerHTML = createErrorHTML(events.message);
    } else {

        // otherwise show list
        gitHubEventsField.innerHTML = events
            .map(event => createEventHTML(event))
            .join(''); // not joining will use a comma as separator
    }
}