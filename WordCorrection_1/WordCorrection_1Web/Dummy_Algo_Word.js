var dummy_correct_word = ['আমি', 'তুমি', 'সে', 'ভাত', 'খাব', 'খাই', 'খাবে'];

function isDetectWord(word)
{
    /*var index = dummy_correct_word.indexOf(word);
    //console.debug(index);
    if (index !== -1) {
        return true;
    }
    else {
        return false;
    }*/

    if (!(word in dataList)) { return false; }
    var verdict = dataList[word]['verdict'];
    //console.debug(index);
    if (verdict == 0) {
        return true;
    }
    else {
        return false;
    }



}


function getSuggestedWordList(word) {

    suggestedList = [];
    if (!(word in dataList))
    {
        suggestedList.push(word);
        return suggestedList;
    }
    suggestedList.push(dataList[word]['candidates']);

    return suggestedList;

}

function storeWordDB(word) {
    var index = dummy_correct_word.indexOf(word);
    //console.debug(index);
    if (index !== -1) {
        return;
    }
    dummy_correct_word.push(word);
}