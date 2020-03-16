// Determine whether a one-to-one character mapping exists from one string, s1, to another string, s2.
// s1 = 'abc' , s2= 'bcd' => true
// s1 = 'foo' , s2= 'bar' => false
// s1 = 'bar' , s2= 'foo' => true  

// first we need to build a chacter map function 



// character map taking in a string 
function charMap(str) {
    let charMap = {}
    let count = 1
    for (let letter in str) {
        if (!charMap[str[letter]]) {
            charMap[str[letter]] = count
        } else {
            charMap[str[letter]] = count + 1
        }
    }
  return charMap
}

