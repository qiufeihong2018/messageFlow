import { formatEnum2List, formatEnum2Map } from '../util'

// 和数据库的保存的枚举保持一致
export const MESSAGE_TYPE_ENUMS = {
  TEXT: {
    label: '文本',
    value: 0
  },
  IMAGE: {
    label: '图片',
    value: 1
  },
  SYSTEM_INFO: {
    label: '系统消息',
    value: 2
  },
  OTHER: {
    label: '其他',
    value: 3
  }
}

// 枚举转化成数组list，用于下拉选择
export const MESSAGE_TYPE_LIST = formatEnum2List(MESSAGE_TYPE_ENUMS)

// 枚举转化成map结构
export const MESSAGE_TYPE_MAP = formatEnum2Map(MESSAGE_TYPE_ENUMS)