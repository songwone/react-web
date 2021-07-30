/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-07-26 17:31:50
 * @LastEditors: songone
 * @LastEditTime: 2021-07-28 14:53:54
 */
import request from '@/utils/request'

export const login = (data: any) => request({
  url: `/base/auth/system/1`,
  method: 'post',
  data
})