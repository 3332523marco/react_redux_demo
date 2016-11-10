
export const ADD_COUNTER = 'ADD_COUNTER'

export function addPrice(index) {
    return {
        type: ADD_COUNTER,
        index
    }
}

//这些方法都导出,在其他文件导入时候,使用import * as actions 就可以生成一个actions对象包含所有的export