var dummy_correct_sent = ['আমি ভাত খাব', 'আমি ভাত খাই', 'সে ভাত খাবে'];

function isDetectSent(sent)
{

    var index = dummy_correct_sent.indexOf(sent);
    //console.debug(index);
    if (index !== -1) {
        return true;
    }
    else {
        return false;
    }

}


function getSuggestedSentList(sent) {

    return dummy_correct_sent;

}

function storeSentDB(sent) {
    var index = dummy_correct_sent.indexOf(sent);
    //console.debug(index);
    if (index !== -1) {
        return;
    }
    dummy_correct_sent.push(sent);
}