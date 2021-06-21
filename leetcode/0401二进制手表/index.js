var readBinaryWatch = function (turnedOn) {
  const ans = [];
  // 小时由 4 个比特表示
  for (let h = 0; h < 12; ++h) {
    // 分钟由 6 个比特表示
    for (let m = 0; m < 60; ++m) {
      // 枚举小时的所有可能值 [0,11]，以及分钟的所有可能值 [0,59]
      if (
        h.toString(2).split("0").join("").length +
          m.toString(2).split("0").join("").length ===
        turnedOn
      ) {
        // 计算二者的二进制中 11 的个数之和，若为 \textit{turnedOn}turnedOn
        ans.push(h + ":" + (m < 10 ? "0" : "") + m);
      }
    }
  }
  return ans;
};
let turnedOn = 1;
console.log(readBinaryWatch(turnedOn));
