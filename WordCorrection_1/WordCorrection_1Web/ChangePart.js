

function changePart(correctPart, misspelledPart) {

    Word.run(function (context) {
        var range;
        var searchQ = [];
        var searchResults;

        return context.sync()
            .then(function () {
                range = context.document.body;
                context.load(range, 'text');
            })
            .then(context.sync)
            .then(function () {
                searchResults = range.search(misspelledPart, {matchWholeWord: true });
                context.load(searchResults, 'font');
                searchQ.push(searchResults);

            })
            .then(context.sync)
            .then(function () {

                var lenQ = searchQ.length;
                for (var searchInd = 0; searchInd < lenQ; searchInd++) {
                    var popSearch = searchQ.shift();

                    /*for (var dupInd = 0; dupInd < popSearch.items.length; dupInd++) {
                        popSearch.items[dupInd].font.highlightColor = '#FFFFFF';

                        //setTimeout(function () { popSearch.items[dupInd].font.highlightColor = '#F00F00';}, 2000);

                        //popSearch.items[dupInd].font.bold = true;
                        if (correctPart === 'ignore&NoPushInDB') {
                            continue;
                        }
                        if (correctPart === 'ignore&PushInDB') {
                            storeDB(misspelledPart);
                            continue;
                        }
                        popSearch.items[dupInd].insertText(correctPart, 'Replace');
                    }*/

                    popSearch.items[0].font.highlightColor = '#FFFFFF';
                    if (correctPart === 'ignore&NoPushInDB') {
                        continue;
                    }
                    if (correctPart === 'ignore&PushInDB') {
                        //storeDB(misspelledPart); No need Right now
                        continue;
                    }
                    popSearch.items[0].insertText(correctPart, 'Replace');


                }
            })
            .then(context.sync);
    })
        .catch(function (error) {
            console.log('Error: ' + JSON.stringify(error));
            if (error instanceof OfficeExtension.Error) {
                console.log('Debug info: ' + JSON.stringify(error.debugInfo));
            }
        });



}

function parmanentColor(item) {
    item.font.highlightColor = '#F00F00';
}