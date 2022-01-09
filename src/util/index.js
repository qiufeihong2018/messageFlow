export const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/ig.test(navigator.userAgent);

export const formatEnum2List = (valueEnum) => {
  const valueList = Object.values(valueEnum)
  return valueList;
}

export const formatEnum2Map = (valueEnum) => {
  let valueMap = new Map();
  Object.values(valueEnum).forEach(({ label, value }) => {
    valueMap.set(value, label)
  })
  return valueMap;
}