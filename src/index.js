module.exports = function check(str, bracketsConfig) {
  const brackets = {
    ")": "(",
    "]": "[",
    "}": "{"
    "|":"|"
  };

  const st = [];
  for (let i = 0; i < s.length; i++) {
    if (isClosedBracket(s[i])) {
      if (brackets[s[i]] !== st.pop()) return false;
    } else {
      st.push(s[i]);
    }
  }
  return st.length === 0;
}

function isClosedBracket(ch) {
  return [")", "]", "}", "|"].indexOf(ch) > -1;
}
}

