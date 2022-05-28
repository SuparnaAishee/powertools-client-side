import { useEffect, useState } from "react";

const useProduct = () =>{

    const [tools, setTools] = useState([]);
// console.log(tools);
    useEffect(()=>{
        fetch(`https://mysterious-forest-77053.herokuapp.com/tools`)
        .then(res => res.json())
        .then(data =>setTools(data));
    } , [])


    return [tools, setTools];
}
export default useProduct;