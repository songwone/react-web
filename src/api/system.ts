/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-07-30 14:20:06
 * @LastEditors: songone
 * @LastEditTime: 2021-08-18 10:13:28
 */
import request from '@/utils/request'

// ============ 资源管理 ====================
export interface IResource {
  id: number;
  modify_time: number;
  name: string;
  order_num: number;
  parent_id: null | number;
  remark: null | string;
  subs: IResource[];
  type_id: number;
  value: string;
}
export interface IResourceForm{
  id: number
  name: string;
  order_num: number | null;
  parent_id: number | null;
  parent_name: string | null;
  remark: string | null;
  type_id: number;
}

interface IResourceDetail extends IResourceForm{
  value: string;
}

export interface IModifyResource{
  name: string;
  order_num: number | null;
  parent_id: number | null;
  remark: string | null;
  type_id: number;
  value: string;
}

export const getResourceList = (): Promise<{code:number;msg:string;data:IResource[]}> => {
  return request.get('/base/resource/');
};

export const getResourceDetail = (id: string): Promise<{code:number;msg:string;data:IResourceDetail}> => {
  return request.get(`/base/resource/${id}`);
};

export const deleteResource = (id: number) => {
  return request.delete(`/base/resource/${id}`);
};

export const editResource = (obj: IResourceForm) => {
  return request.put(`/base/resource/${obj.id}`, obj);
};

export const addResource = (obj: IResourceForm) => {
  return request.post('/base/resource/', obj)
}

