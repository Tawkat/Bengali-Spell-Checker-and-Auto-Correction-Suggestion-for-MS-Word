function print(word) {
    //var pre_html = document.getElementById("debugger").innerHTML;
    //var content = pre_html + word;
    document.getElementById("debugger").innerHTML = word + "<br>";

}
function print2(word) {
    //var pre_html = document.getElementById("debugger").innerHTML;
    //var content = pre_html + word;
    document.getElementById("debugger2").innerHTML = word + "<br>";

}

function ascii_to_hexa(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    return arr1.join('');
}


function writeToFile(fileName,data)
{
    var fh = fopen(fileName, 3); // Open the file for writing

    if (fh != -1) // If the file has been successfully opened
    {
        var str = "Some text goes here...";
        fwrite(fh, data); // Write the string to a file
        fclose(fh); // Close the file 
    }
}




function copyJSON(original,clone) {
    //var clone=[];
    for (var i = 0; i < original.length; i++) {
        var aItem = original[i]
        clone.dataList.push({
            'index': aItem['index'], 'verdict': aItem['verdict'], 'word': aItem['word'],
            'candidates': aItem['candidates']
        });
    }
    print2(clone.dataList[0]['word']);
    //return clone;
}



