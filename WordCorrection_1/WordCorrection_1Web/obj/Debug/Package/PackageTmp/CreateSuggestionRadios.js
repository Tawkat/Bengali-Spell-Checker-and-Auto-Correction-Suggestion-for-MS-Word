

function createRadios(suggList, divId) {

    var radioHtml = '';

    radioHtml += '<input type="radio" name="suggestionRadio" value="ignore&NoPushInDB"/><label style="color:green;">পরিহার করুন</label><br>';
    radioHtml += '<input type="radio" name="suggestionRadio" value="ignore&PushInDB"/><label style="color:green;">ভবিষ্যতেও পরিহার করুন</label><br>';
    for (var i = 0; i < suggList.length; i++) {
        radioHtml += '<input type="radio" name="suggestionRadio" value="' + suggList[i] + '"/>' + suggList[i] +'<br>';
    }


    var radioFragment = document.getElementById(divId);

    radioFragment.innerHTML = radioHtml;

    return radioFragment.firstChild;
}




function destroyRadios(divId) {
    var radioFragment = document.getElementById(divId);
    radioFragment.innerHTML = '';
    return radioFragment.firstChild;
}