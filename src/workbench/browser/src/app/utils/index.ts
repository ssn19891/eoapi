export const uuid = (): string => Math.random().toString(36).slice(-8);
export const whatType = (data: any): string => {
  if (data === undefined) {
    return 'undefined';
  }
  if (data === null) {
    return 'null';
  }
  if (data instanceof Array) {
    return 'array';
  }
  if (data instanceof Object) {
    return 'object';
  }
  if (typeof data === 'string') {
    return 'string';
  }
  if (typeof data === 'number') {
    return 'number';
  }
  if (typeof data === 'boolean') {
    return 'boolean';
  }
  return 'unknown';
};
/**
 * judge text content type
 * @returns textType - xml|json|html|text
 */
export const whatTextType = (tmpText) => {
  // TODO it can be better
  const tmpCompareText = tmpText.replace(/\s/g, '');
  if (/^({|\[)(.*)(}|])$/.test(tmpCompareText) && JSON.parse(tmpCompareText)) {
    return 'json';
  } else if (/^(<)(.*)(>)$/.test(tmpCompareText)) {
    if (/^(<!DOCTYPEhtml>)|(html)/i.test(tmpCompareText)) {
      return 'html';
    } else {
      return 'xml';
    }
  } else {
    return 'text';
  }
};
/**
 * reverse object key and value
 * @param obj
 */
export const reverseObj = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[obj[key]] = key;
    return acc;
  }, {});
};
/**
 * reverse object key and value
 * @param obj
 */
export const objectToArray = (obj) => {
  return Object.keys(obj).map((val) => ({
    key: val,
    value: obj[val],
  }));
};

