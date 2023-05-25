function fnShowHiddeData(value) {

    let currentValue = document.getElementById(`${value}`).style.display;

    if (currentValue == "block") {
        document.getElementById(`${value}`).style.display = "none";
    } else {
        document.getElementById(`${value}`).style.display = "block";
    }
};

function fnAddOrRemoveElements() {
    if (document.getElementById('idAgregarRemover').innerHTML == '') {

        const tagHeaderComponent = document.getElementById('idAgregarRemover');

        const tagMainDiv = document.createElement('div');
        tagMainDiv.setAttribute('id', 'idMainDiv');
        tagMainDiv.setAttribute('class', 'col-sm');
        tagHeaderComponent.appendChild(tagMainDiv);
        tagMainDiv.innerHTML = `This Text is added by JS`;

    } else {
        document.getElementById('idAgregarRemover').innerHTML = '';
    }
};