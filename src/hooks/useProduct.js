import { useEffect, useState } from "react";

const useProduct = () => {
  const [tools, setTools] = useState([]);
  // console.log(tools);
  useEffect(() => {
    fetch(`http://localhost:5000/tools`)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return [tools, setTools];
};
export default useProduct;
