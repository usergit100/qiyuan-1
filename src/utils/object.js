/**
 * 类型检查
 * @type {{isRegex(*=): boolean, isObject(*=): boolean, isSymbol(*=): boolean, isFunction(*=): boolean, isNumber(*=): boolean, isNull(*=): boolean, isDate(*=): boolean, isString(*=): boolean, isArray(*=): boolean, isUndefined(*=): boolean, _typeOf(*=): *}}
 */
export const checkType = {
  _typeOf (obj) {
    const toString = Object.prototype.toString
    const map = {
      '[object Object]': 'Object',
      '[object Array]': 'Array',
      '[object Date]': 'Date',
      '[object String]': 'String',
      '[object Number]': 'Number',
      '[object Undefined]': 'Undefined',
      '[object Null]': 'Null',
      '[object Symbol]': 'Symbol',
      '[object Regex]': 'Regex',
      '[object Function]': 'Function',
      '[object FormData]': 'FormData'
    }
    return map[toString.call(obj)]
  },
  isObject (target) {
    return this._typeOf(target) === 'Object'
  },
  isArray (target) {
    return this._typeOf(target) === 'Array'
  },
  isDate (target) {
    return this._typeOf(target) === 'Date'
  },
  isString (target) {
    return this._typeOf(target) === 'String'
  },
  isNumber (target) {
    return this._typeOf(target) === 'Number'
  },
  isUndefined (target) {
    return this._typeOf(target) === 'Undefined'
  },
  isNull (target) {
    return this._typeOf(target) === 'Null'
  },
  isSymbol (target) {
    return this._typeOf(target) === 'Symbol'
  },
  isRegex (target) {
    return this._typeOf(target) === 'Regex'
  },
  isFunction (target) {
    return this._typeOf(target) === 'Function'
  },
  isFormData (target) {
    return this._typeOf(target) === 'FormData'
  }
}
/**
 * 是否为空对象
 * @param obj
 * @returns {boolean}
 */
export const isEmptyObject = (obj = {}) => {
  for (const key in obj) {
    return false
  }
  return true
}
/**
 * 合并目标对象已有的属性
 * @param target
 * @param obj
 */
export const mergeObj = (target = {}, obj) => {
  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (target.hasOwnProperty(key)) {
      target[key] = obj[key]
    }
  }
}
/**
 * 设置目标对象的属性值
 * @param target
 * @param source
 */
export const setObjVal = (target = {}, ...source) => {
  Object.assign(target, ...source)
}
/**
 * 两个对象是否相等
 * @param obj1
 * @param obj2
 * @returns {boolean|undefined}
 */
export const isEqualObj = (obj1 = {}, obj2 = {}) => {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  } else if (keys1.length === 0 && keys2.length === 0) {
    return true
  } else {
    return !keys1.some(key => obj1[key] !== obj2[key])
  }
}
