function showDetails() {
    const list = document.getElementById('list');
    const details = document.getElementById('details');
    list.classList.add('showDetails');
    details.classList.add('showDetails');
}
document.getElementById('list').addEventListener('click', showDetails);