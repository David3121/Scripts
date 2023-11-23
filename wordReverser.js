function wordReverser(phrase) {
    let newPhrase = [];
    const splitter = phrase.split(' ')
    newPhrase.push(splitter[1]);
    newPhrase.push(splitter[0]);
    return newPhrase.join(' ');
  }

  function wordReverser(phrase) {
    //an empty list.
    array = [];
  // Loops through each word in the phrase badkwards to add it to array in reverse.
    for (i = phrase.split(" ").length - 1; i >= 0; i--) {
      array.push(phrase.split(" ")[i]);
    }
    return array.join(" ");
  };