
function getSuggestedList(wrongPart) {

    if (wrongPart.indexOf(' ') === -1) {
        return getSuggestedWordList(wrongPart);
    }
    else {
        return getSuggestedSentList(wrongPart);
    }
}