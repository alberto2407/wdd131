const options = {
    year: "numeric"
};
document.querySelector("#yearDate").innerHTML = new Date().toLocaleDateString("en-US", options);

function formatLastModified(date) {
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');

    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}
let lastModified = new Date(document.lastModified);
document.querySelector('#lastModified').textContent = formatLastModified(lastModified); 