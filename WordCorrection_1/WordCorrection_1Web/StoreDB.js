

function storeDB(data) {

    if (data.indexOf(' ') === -1) {
        storeWordDB(data);
    }
    else {
        storeSentDB(data);
    }
}