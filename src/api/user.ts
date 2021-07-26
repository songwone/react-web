/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-07-26 17:31:50
 * @LastEditors: songone
 * @LastEditTime: 2021-07-26 17:35:02
 */
import request from '@/utils/request'

export const login = (data: any) => request({
  url: `/base/auth/system/2`,
  method: 'post',
  data
})