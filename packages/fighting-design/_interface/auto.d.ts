/**
 * 这里是一些基础的接口
 *
 * 用于组件内部
 *
 * 一些频繁使用的在这里进行了抽离，公共使用
 */

/**
 * 普通函数接口
 * 无参数，无返回值
 */
export interface ordinaryFunctionInterface {
  (): void
}

export interface AppInstallInterface {
  (app: App): App
}

/**
 * class 类名集合类型
 */
export type classListInterface = readonly (string | Record<readonly string, unknown>)[]
