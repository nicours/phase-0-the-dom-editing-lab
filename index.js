document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;

    // Add h1 tag
    const h1 = document.createElement('h1');
    h1.textContent = 'Heading';
    body.appendChild(h1);

    // Add p tag with strong, em, and a tags
    const p = document.createElement('p');
    p.innerHTML = 'This is a <strong>strong</strong> and <em>emphasized</em> text with a <a href="https://example.com">link</a>.';
    body.appendChild(p);

    // Add table tag
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Header</th>
        </tr>
        <tr>
            <td>Data</td>
        </tr>`;
    body.appendChild(table);
});
