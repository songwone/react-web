/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-07-15 08:48:28
 * @LastEditors: songone
 * @LastEditTime: 2021-07-26 17:35:34
 */
import { useSelector } from "react-redux";
import request from "@/utils/request";
import { useEffect } from "react";
const Index = (props: any) => {
  console.log(
    "🚀 ~ file: index.tsx ~ line 3 ~ Index ~ props",
    useSelector((state) => state)
  );
  useEffect(() => {
    request({
      method: 'get',
      url: '123'
    })
  }, [])

  return <div>index123</div>;
};

export default Index;
