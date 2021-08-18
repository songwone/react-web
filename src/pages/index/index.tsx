/*
 * @Descripttion: 
 * @version: 
 * @Author: songone
 * @Date: 2021-07-15 08:48:28
 * @LastEditors: songone
 * @LastEditTime: 2021-08-17 14:05:46
 */
import { useSelector } from "react-redux";

const Index = (props: any) => {
  console.log(
    "🚀 ~ file: index.tsx ~ line 3 ~ Index ~ props",
    useSelector((state) => state)
  );

  return <div>index123</div>;
};

export default Index;
