// 按模块分，name：函数名、path：后台路径、method：请求类型、desc：描述
const files = require.context('@/api', false, /\w*(?<!(?:index|url|interface))(\.js)$/)
const Interface = {}

files.keys().forEach(key => {
  const k = key.replace(/(.\/|\.js)+/g, '')
  Interface[k] = files(key).default
})

export default Interface
