const toPigLatin = (str) => {
  const strArr = str.split(" ");

  let morphArr = strArr.map(
    (ele) => ele.substring(1) + ele.substring(0, 1) + "ay"
  );

  return morphArr.join(" ");
};

const str = "The quick brown fox";
const pigStr = toPigLatin(str);
console.log(pigStr);
