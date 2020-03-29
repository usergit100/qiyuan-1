const setItem = function (key, value, type = 'JSON') {
  this.setItem(key, type === 'JSON' ? JSON.stringify(value) : value)
}

const getItem = function (key, type = 'JSON') {
  const value = this.getItem(key)
  return type === 'JSON' ? JSON.parse(value) : value
}

const removeItem = function (keys = []) {
  for (const key of keys) {
    this.removeItem(key)
  }
}
/**
 * 操作sessionStorage
 * @type {{set(*=, *=, *=): void, get(*=, *=): void, clear(): void, remove(...[*]=): void}}
 */
export const ss = {
  set (key, value, type = 'JSON') {
    setItem.call(sessionStorage, key, value, type)
  },
  get (key, type = 'JSON') {
    return getItem.call(sessionStorage, key, type)
  },
  remove (...keys) {
    removeItem.call(sessionStorage, keys)
  },
  clear () {
    sessionStorage.clear()
  }
}
/**
 * 操作localStorage
 * @type {{set(*=, *=, *=): void, get(*=, *=): void, clear(): void, remove(...[*]=): void}}
 */
export const ls = {
  set (key, value, type = 'JSON') {
    setItem.call(localStorage, key, value, type)
  },
  get (key, type = 'JSON') {
    return getItem.call(localStorage, key, type)
  },
  remove (...keys) {
    removeItem.call(localStorage, keys)
  },
  clear () {
    localStorage.clear()
  }
}
