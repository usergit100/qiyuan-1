/**
 * 获取指定范围的随机数
 * @param max
 * @param min
 * @returns {number}
 */
export const getRandom = (max = 0, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min)
}

/**
 * 生成随机验证码
 * @param len
 * @returns {string}
 */
export const getVfcCode = (len = 4) => {
  let code = ''
  const random = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'] // 随机数
  for (let i = 0; i < len; i++) {
    const index = getRandom(random.length - 1) // 取得随机数的索引（0~35）
    code += random[index] // 根据索引取得随机数加到code上
  }
  return code
}
