document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('depositModal').style.display = 'block';
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('depositModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('depositModal')) {
        document.getElementById('depositModal').style.display = 'none';
    }
});