module.exports = function check(str, bracketsConfig) {
  const brackets = {
    ")": "(",
    "]": "[",
    "}": "{"
    "|":"|"
  };

  const st = [];
  for (let i = 0; i < str.length; i++) {
    if (isClosedBracket(str[i])) {
      if (brackets[str[i]] !== st.pop()) return false;
    } else {
      st.push(str[i]);
    }
  }
  return st.length === 0;
}

function isClosedBracket(ch) {
  return [")", "]", "}", "|"].indexOf(ch) > -1;
}
}

