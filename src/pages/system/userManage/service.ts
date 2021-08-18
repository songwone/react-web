/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-08-18 10:09:45
 * @LastEditors: songone
 * @LastEditTime: 2021-08-18 11:05:18
 */
import request from '@/utils/request'

export interface IModifyData {
  roles: number[];
  remark: string;
  name: string;
  password: string;
  status: 0 | 1;
  status_flag: boolean;
  email: string;
  phone: string;
}

export interface IDoctor {
  id: number
  name: string
  dept_id: number
  room_name: string
  phone: string
  sex: string
  remark: string
  user_id?: number
}

export interface IDict {
  title: string
  value: string
}

export const getUserList = (page: number, pagesize: number) => {
  return request.get(`/base/user/?size=${pagesize}&page=${page}`);
};

export const getUserInfo = (id: number | string) => {
  return request.get(`/base/user/${id}`);
};

export const deleteUser = (id: number | string) => {
  return request.delete(`/user/id/${id}`);
};

export const modifyUser = (id: number ,obj: Partial<IModifyData>) => {
  return request.put(`/base/user/${id}`, obj);
};

export const modifyPwd = (id: number, newPwd: string) => {
  return request.put(`/base/user/pwd/${id}`, { new: newPwd })
}

export const addUser = (user: Partial<IModifyData>) => {
  return request.post('/base/user/', user);
}

export const getRoleList = () => {
  return request.get('/base/role/');
};

export const addSystemUser = (name: string) => {
  return request.put(`/base/user/system/${name}`)
}

export const getDoctor = (userId: number) => {
  return request.get(`/dws/ws/doctor/${userId}`)
}

export const putDoctor = (userId: number, form: IDoctor) => {
  return request.put(`/dws/ws/doctor/${userId}`, form)
}

export const getDoctorRoom = () => {
  return request.get(`/base/dict/tree/doctor_room`)
}