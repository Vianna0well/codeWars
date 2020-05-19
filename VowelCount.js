function getCount(str) {
    var vowelsCount = 0;
    var strCut = str.split('')
    
    for(var x = 0; x < str.length; x++) {
      if(strCut[x] == 'a' ||
      strCut[x] == 'e' ||
      strCut[x] == 'i' ||
      strCut[x] == 'o' ||
      strCut[x] == 'u' ){
        vowelsCount = vowelsCount + 1
      }
    }
    
    return vowelsCount;
  }