// script.js
document.getElementById('convertButton').addEventListener('click', function () {
    const opmlContent = document.getElementById('opmlInput').value;
    if (!opmlContent) {
        alert('Please paste your OPML code.');
        return;
    }

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(opmlContent, "text/xml");
    const title = xmlDoc.getElementsByTagName('title')[0].textContent || 'outline';
    const blob = new Blob([opmlContent], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);

    const downloadButton = document.getElementById('downloadButton');
    downloadButton.href = url;
    downloadButton.download = `${title}.opml`;
    downloadButton.style.display = 'inline-block';
});
