var angleInput = document.getElementById('angle-input');
var angleValueDisplay = document.getElementById('angle-value');

angleInput.addEventListener('input', function () {
    var angle = this.value;
    document.getElementById('needle').style.transform = 'translateX(-50%) translateY(-100%) rotate(' + angle + 'deg)';
    angleValueDisplay.innerText = angle;
});