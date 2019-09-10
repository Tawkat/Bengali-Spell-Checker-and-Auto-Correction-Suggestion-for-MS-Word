'use strict';

(function () {

    // The initialize function must be run each time a new page is loaded.

    var globalWrong = new GlobalWrong();
    var dl = new Dl();

    Office.initialize = function (reason) {


        $(document).ready(function () {
            
            // The document is ready
            // Use this to check whether the API is supported in the Word client.
            if (Office.context.requirements.isSetSupported('WordApi', 1.1)) {
            //if (Office.context.requirements.isSetSupported('WordApi', 1.1)) {
                // Do something that is only available via the new APIs

                /////////////////////////////////////////////////////////////////////////////////////////


            ////////////////////////////////////////////////////////////////////////////////////////////

                //getSelectedData();
                //$(context./*document*/.body)
               // Word.run(function (context) {
                    //var doc = context.document.body;
                    /*if (doc !== '') {
                        context.load(doc, 'text');
                        //doc.keypress(insertEmersonQuoteAtSelection);
                        var w = doc.text.split(' ');
                        if (w[0] === 'er') { print("werwerwer"); }
                    }*/
                   /* $(function () {
                        doc.on('keyup keydown keypress', function (event) {
                            print(event.keyCode);

                        });
                    });*/
                //});

                $('#detectButton').click(detectMisspelledPart);
                $('#selectButton').click(selectData);

                $('#correctButton').click(correctPart);
                //$('#correctButton').css('visibility', 'hidden');

                $('#supportedVersion').html('This code is using Word 2016 or later.');
                //document.getElementById('checkhov').click(insertChekhovQuoteAtTheBeginning);

                
                
            }
            else {
                // Just letting you know that this code will not work with your version of Word.
                $('#supportedVersion').html('This code requires Word 2016 or later.');
            }









        });
    };


    // Function that writes to a div with id='message' on the page.
    function write(message) {
        document.getElementById('debugger').innerText += message;
    }
    

    function detectMisspelledPart() {
        Word.run(function (context) {
            // Queue a command to get the current selection and then
            // create a proxy range object with the results.
            //print("rgegrtg");
            var range = context.document.body;


            var searchWordQ = [];
            var searchSentQ = [];
            var searchResults;
            var words='';
            var sents='';

            // Queue a command to load the range selection result.
            return context.sync()
                .then(function () {
                    context.load(range, 'text');
                }).then(context.sync)
                .then(function () {
                    //print(range.text.trim());
                    var str = range.text;
                    str = str.replace(/[।.?,\/#!$%\^&\*;:{}=\-_`~()]/g, " ");
                    str = str.trim();
                    //print(str);

                    ///////////////////////////////////////////////////////////
                    // Send str as JSON


                    var xhr = new XMLHttpRequest();
                    //str = "অতীতকালে বিভিন্ন সময়ে নদীগুলো এদের গতিপথ পরিবর্তন করেছে";
                    //var url = "http://localhost/hello/index.php?data=" + encodeURIComponent(JSON.stringify({ "data": str }));
                    //var url = "http://localhost/hello/index.php";
                    //var url = "https://www.google.com/";
                    //var url = "http://127.0.0.1:5000/";
                    //var url = "http://127.0.0.1:5000/" + encodeURIComponent("অতীতকালে বিভিন্ন সময়ে নদীগুলো এদের গতিপথ পরিবর্তন করেছে");
                    var url = "http://127.0.0.1:5000/" + encodeURIComponent(str);
                    //var url = "http://127.0.0.1:5000/F:\demo.txt/" + encodeURIComponent("অতীতকালে বিভিন্ন সময়ে নদীগুলো এদের গতিপথ পরিবর্তন করেছে");
                    //xhr.overrideMimeType("application/json");
                    var tt;
                    $.ajax({
                        type: 'GET',
                        url: url,
                        dataType: 'json',
                        async:false,
                        success: function (data) {
                            //print(data);
                            //dataList = copyJSON(data);
                            //copyJSON(data, dl);
                            //tt = data[0]['index'];
                            //print2(data[0]['index']);
                            dataList = JSON.parse(JSON.stringify(data));
                            //print2(dataList['অতীতকালে']['verdict']);
                            
                        }
                    });

                    //print(dataList['অতীতকালে']['verdict']);
                    //if (!('অতীতকালেq' in dataList)) { print('NNN');}

                    /*print("etst")
                    $.ajax({
                        method: "POST",
                        url: "http://localhost/hello/index.php",
                        //url: "testingJSON.txt",
                        data: { name: "John", location: "Boston" }
                      })
                        .done(function (msg) {
                            print("Data Saved:");
                      });*/




                   


                    /*var url = "localhost/hello/index.php"
                    var data = [
                        {
                            "name": "Stitches",
                            "role": "tank"
                        },
                        {
                            "name": "Sonya",
                            "role": "bruiser"
                        }

                    ];
                    $.post(url, data, function (response) {
                        alert("Did it work");
                    });*/


                /*// Sending a receiving data in JSON format using GET method
                //
                    var xhr = new XMLHttpRequest();
                    var dt = JSON.stringify({ "email": "hey@mail.com", "password": "101010" });
                    //print(dt);
                    var url = "localhost/hello/index.php?data=" + dt;
                xhr.open("GET", url, true);
                    xhr.setRequestHeader("Content-Type", "application/json");
                    xhr.onreadystatechange = function () {
                        print(xhr.status);
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var json = JSON.parse(xhr.responseText);
                        //print(json);
                        //console.log(json.email + ", " + json.password);
                    }
                };
                xhr.send();*/



                    // Get JSON

                    /*var xmlhttp = new XMLHttpRequest();
                    var url = "testingJSON.txt";
                    //var url = "F:\demo.txt";
                    xmlhttp.open("GET", url, true);

                    xmlhttp.setRequestHeader("Content-Type", "application/json");

                    xmlhttp.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            var myArr = JSON.parse(xmlhttp.responseText);
                            //myFunction(myArr);
                            //print(myArr[1].index);
                            //print(xmlhttp.status);
                            //print2('Data: ' + xmlhttp.responseText + '\nStatus: ' + xmlhttp.status);
                        }
                    };
                    
                    xmlhttp.send();*/


                    /*var request = new XMLHttpRequest()

                    request.open('GET', 'dataJSON.json', true)

                    request.onload = function () {
                        // begin accessing JSON data here
                        var data = JSON.parse(this.response)

                        //var data = JSON.parse('[{"name": "Aragorn","race": "Human"},{"name": "Gimli","race": "Dwarf"}]');

                        print(data[0].name);
                    }

                    request.send()*/

                    // Pre-process them as indexwise
                    ///////////////////////////////////////////////////////////

                    ////////////////////// Word ///////////////////////////////////////
                    var cleanWord = str.replace(/[।.?,\/#!$%\^&\*;:{}=\-_`~()]/g, " "); //IGNORE PUNCTUATION
                    //print(cleanWord);
                    cleanWord = cleanWord.split(/\s+/);
                    for (var tmp = 0; tmp < cleanWord.length; tmp++) {
                        cleanWord[tmp] = cleanWord[tmp].trim().replace(/[।.?,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
                    }
                    words = cleanWord.filter(function (el) {
                        return el != ""; // or null
                    });
                    //print(words[words.length - 1]);

                    //////////////////// Sentence /////////////////////////////////////////////
                    var cleanSent = str.split(/[।.?,\/#!$%\^&\*;:{}=\-_`~()]/g);
                    if (str[str.length - 1].search(/[।.?,\/#!$%\^&\*;:{}=\-_`~()]/g) === -1) {
                        cleanSent.pop();
                    }

                    for (var tmp = 0; tmp < cleanSent.length; tmp++) {
                        cleanSent[tmp] = cleanSent[tmp].trim().replace(/[।.?,\/#!$%\^&\*;:{}=\-_`~()]/g, " ");
                    }

                    sents = cleanSent.filter(function (el) {
                        return el != ""; // or null
                    });
                    //words = range.text.split(' ');
                })

                // Synchronize the document state by executing the queued commands
                // and return a promise to indicate task completion.
                .then(context.sync)
                .then(function () {
                    // Get the longest word from the selection.
                    //unique_words = new Array(new Set(words));
                    //words = range.text.split('.');

                    //var longestWord = words.reduce(function (word1, word2) { return word1.length > word2.length ? word1 : word2; });

                    for (var word_index = 0; word_index < words.length; word_index++) {


                        if (isDetectWord(words[word_index])) {
                            continue;
                        }
                        //if (1 === 1) { continue;}


                        var mispelledWord = words[word_index];

                        // Queue a search command.
                        searchResults = range.search(mispelledWord, { matchWholeWord: true, ignorePunct: true });
                        //context.load(words, 'font');
                        //words.items[0].font.highlightColor = '#FFFF00';

                        // Queue a commmand to load the font property of the results.
                        //searchResults.items[0] = 'hello';
                        context.load(searchResults, 'font,style');

                        searchWordQ.push(searchResults);


                        //print(searchWordQ.length);
                    }


                    for (var sent_index = 0; sent_index < sents.length; sent_index++) {


                        if (isDetectSent(sents[sent_index])) {
                            continue;
                        }
                        //if (1 === 1) { continue; }

                        //print(sents[0]);

                        var wrongSent = sents[sent_index];

                        // Queue a search command.
                        searchResults = range.search(wrongSent, { matchWholeWord: true, ignorePunct: true });
                        //context.load(words, 'font');
                        //words.items[0].font.highlightColor = '#FFFF00';

                        // Queue a commmand to load the font property of the results.
                        //searchResults.items[0] = 'hello';
                        context.load(searchResults, 'font');

                        searchSentQ.push(searchResults);

                    }

                })
                .then(context.sync)
                .then(function () {

                    //searchResults = range.search('hello', { matchCase: true, matchWholeWord: true });
                    //context.load(words, 'font');
                    //words.items[0].font.highlightColor = '#FFFF00';

                    // Queue a commmand to load the font property of the results.
                    //searchResults.items[0] = 'hello';
                    //context.load(searchResults, 'font');
                    // Queue a command to highlight the search results.


                    var lenQ = searchWordQ.length;
                    for (var searchInd = 0; searchInd < lenQ; searchInd++) {

                        var popSearch = searchWordQ.shift();
                        for (var dupInd = 0; dupInd < popSearch.items.length; dupInd++) {
                            popSearch.items[dupInd].font.highlightColor = '#F00F00'; // Red
                            //popSearch.items[dupInd].font.style = 'underline';
                            //popSearch.items[0].font.bold = true;
                            //popSearch.items[0].insertText(words[0], 'Replace');
                        }
                        //popSearch.items[0].font.highlightColor = '#F00F00'; // Red

                    }

                    lenQ = searchSentQ.length;
                    //searchSentQ[0].items[0].font.highlightColor = '#F00F00';
                    //print(lenQ);
                    for (var searchInd = 0; searchInd < lenQ; searchInd++) {

                        var popSearch = searchSentQ.shift();
                        //print(popSearch.items.length);

                        for (var dupInd = 0; dupInd < popSearch.items.length; dupInd++) {
                            
                            popSearch.items[dupInd].font.highlightColor = '#F00F00'; // Red
                            //popSearch.items[0].font.bold = true;
                            //popSearch.items[0].insertText(words[0], 'Replace');
                        }

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


    function getSelectedData() {
        Office.context.document.getSelectedDataAsync(Office.CoercionType.Text, function (asyncResult) {
            //print(asyncResult);
            if (asyncResult.status == Office.AsyncResultStatus.Failed) {
                write('Action failed. Error: ' + asyncResult.error.message);
            }
            else {
                $('#nullSelected').html('');

                var wrongPart = (asyncResult.value).trim().replace(/[।.?,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

                if (wrongPart === '') {
                    destroyRadios('radio_container');
                    $('#correctButton').css('visibility', 'hidden');

                    $('#nullSelected').html('যে অংশটি পরিবর্তন করতে চান তা নির্বাচন করুন।');
                }
                else {

                    globalWrong.setMisspelledPart(wrongPart);
                    write('Selected data: ' + globalWrong.getMisspelledPart());

                    var suggestedList = getSuggestedList(wrongPart);

                    createRadios(suggestedList, 'radio_container');

                    $('#correctButton').css('visibility', 'visible');
                }

            }
        });
    }


    function selectData() {
        getSelectedData();
    }


    function correctPart() {
        /////////////////////////////////////////////////////////////////////////////////////////
        var radioValue = $("input[name='suggestionRadio']:checked").val();
        if (radioValue) {
            changePart(radioValue, globalWrong.getMisspelledPart());
        }

        //print('');
        destroyRadios('radio_container');
        $('#correctButton').css('visibility', 'hidden');
        globalWrong.destroyMisspelledPart();

        ////////////////////////////////////////////////////////////////////////////////////////////
    }

})();



















/////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //         TEST ZONE            //


//////////////////////////////////////////////////////////////////////////////////////////////////
/*Word.run(function (context) {
            // Queue a command to get the current selection and then
            // create a proxy range object with the results.
            //print("rgegrtg");
            var range;


            var searchQ = [];
            var searchResults;
            var words;

            // Queue a command to load the range selection result.
            return context.sync()
                .then(function () {
                    range = context.document.body;
                    context.load(range, 'text');
                }).then(context.sync)
                .then(function () {
                    words = range.text.split(/\s+/);
                    //words = range.text.split(' ');
                })

                // Synchronize the document state by executing the queued commands
                // and return a promise to indicate task completion.
                .then(context.sync)
                .then(function () {
                    // Get the longest word from the selection.
                    //unique_words = new Array(new Set(words));
                    //words = range.text.split('.');

                    //var longestWord = words.reduce(function (word1, word2) { return word1.length > word2.length ? word1 : word2; });

                    for (var word_index = 0; word_index < words.length; word_index++) {


                        if (isDetectWord(words[word_index])) {
                            continue;
                        }

                        var changeWord = globalWrong.getMisspelledWord();

                        // Queue a search command.
                        searchResults = range.search(changeWord, { matchCase: true, matchWholeWord: true });
                        //context.load(words, 'font');
                        //words.items[0].font.highlightColor = '#FFFF00';

                        // Queue a commmand to load the font property of the results.
                        //searchResults.items[0] = 'hello';
                        context.load(searchResults, 'font');

                        searchQ.push(searchResults);


                    }

                })
                .then(context.sync)
                .then(function () {



                    //searchResults = range.search('hello', { matchCase: true, matchWholeWord: true });
                    //context.load(words, 'font');
                    //words.items[0].font.highlightColor = '#FFFF00';

                    // Queue a commmand to load the font property of the results.
                    //searchResults.items[0] = 'hello';
                    //context.load(searchResults, 'font');
                    // Queue a command to highlight the search results.


                    var lenQ = searchQ.length;
                    for (var searchInd = 0; searchInd < lenQ; searchInd++) {

                        var popSearch = searchQ.shift();

                        popSearch.items[0].font.highlightColor = '#FFFFFF'; 
                        //popSearch.items[0].font.bold = true;
                        popSearch.items[0].insertText(radioValue, 'Replace');

                    }
                })
                .then(context.sync);
        })
            .catch(function (error) {
                console.log('Error: ' + JSON.stringify(error));
                if (error instanceof OfficeExtension.Error) {
                    console.log('Debug info: ' + JSON.stringify(error.debugInfo));
                }
            });*/

        ////////////////////////////////////////////////////////////////////////////////////////////















