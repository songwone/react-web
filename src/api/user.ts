/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-07-26 17:31:50
 * @LastEditors: songone
 * @LastEditTime: 2021-08-17 14:03:04
 */
import request from '@/utils/request'
import settings from '@/setting'

export const login = (data: any) => request({
  url: `/base/auth/system/` + settings.systemId,
  method: 'post',
  data
})