window.onload = function() {
    document.getElementById('increase-text').addEventListener('click', function() {
        resizeText(1);
    });

    document.getElementById('decrease-text').addEventListener('click', function() {
        resizeText(-1);
    });

    document.getElementById('high-contrast').addEventListener('click', function() {
        document.body.classList.add('high-contrast');
    });

    document.getElementById('normal-contrast').addEventListener('click', function() {
        document.body.classList.remove('high-contrast');
    });

    document.getElementById('highlight-links').addEventListener('click', function() {
        document.body.classList.add('highlight-links');
    });

    document.getElementById('normal-links').addEventListener('click', function() {
        document.body.classList.remove('highlight-links');
    });
};

function resizeText(multiplier) {
    if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.1) + "em";
}
