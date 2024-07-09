function changeColor() {
    const gfg = document.getElementById("gfg");
    const selectColor = document.getElementById("selectColor");

    let selectedColor = selectColor.options[selectColor.selectedIndex].value;

    gfg.style.color = selectedColor;
}