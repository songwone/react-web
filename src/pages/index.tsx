import { useSelector } from "react-redux";
const Index = (props: any) => {
  console.log(
    "🚀 ~ file: index.tsx ~ line 3 ~ Index ~ props",
    useSelector((state) => state)
  );

  return <div>index123</div>;
};

export default Index;
