
// Funciones
function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === match) {
            console.log("Found the", match, "at", i, "\n");
        } else {
            console.log("---No match found at", i, "\n");
        }
    }
}
letterFinder("test", "t");