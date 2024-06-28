let bugs = [];

function addBug() {
    const title = document.getElementById('bugTitle').value;
    const description = document.getElementById('bugDescription').value;
    const workProduct = document.getElementById('workProduct').value;
    const component = document.getElementById('component').value;
    const dateIdentified = document.getElementById('dateIdentified').value;
    const personIdentified = document.getElementById('personIdentified').value;

    if (title && description && workProduct && component && dateIdentified && personIdentified) {
        const bug = {
            title,
            description,
            workProduct,
            component,
            dateIdentified,
            personIdentified,
            status: 'Open'
        };

        bugs.push(bug);

        const bugList = document.getElementById('bugList');

        const bugElement = document.createElement('div');
        bugElement.className = 'bug';

        const bugTitle = document.createElement('h3');
        bugTitle.textContent = `Title: ${title}`;

        const bugDescription = document.createElement('p');
        bugDescription.textContent = `Description: ${description}`;

        const bugWorkProduct = document.createElement('p');
        bugWorkProduct.textContent = `Work Product: ${workProduct}`;

        const bugComponent = document.createElement('p');
        bugComponent.textContent = `Component: ${component}`;

        const bugDateIdentified = document.createElement('p');
        bugDateIdentified.textContent = `Date Identified: ${dateIdentified}`;

        const bugPersonIdentified = document.createElement('p');
        bugPersonIdentified.textContent = `Person Identified: ${personIdentified}`;

        const bugStatus = document.createElement('span');
        bugStatus.textContent = 'Bug-status: Open';
        bugStatus.className = 'bug-status';

        bugElement.appendChild(bugTitle);
        bugElement.appendChild(bugDescription);
        bugElement.appendChild(bugWorkProduct);
        bugElement.appendChild(bugComponent);
        bugElement.appendChild(bugDateIdentified);
        bugElement.appendChild(bugPersonIdentified);
        bugElement.appendChild(bugStatus);

        bugList.appendChild(bugElement);

        // Clear the input fields
        document.getElementById('bugTitle').value = '';
        document.getElementById('bugDescription').value = '';
        document.getElementById('workProduct').value = '';
        document.getElementById('component').value = '';
        document.getElementById('dateIdentified').value = '';
        document.getElementById('personIdentified').value = '';

        // Enable the "Save to Excel" button
        document.getElementById('saveButton').disabled = false;
    } else {
        alert('Please fill in all fields.');
    }
}

function saveToExcel() {
    const ws = XLSX.utils.json_to_sheet(bugs);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Bugs");

    XLSX.writeFile(wb, "bugs.xlsx");
}