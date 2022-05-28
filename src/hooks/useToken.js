import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        // console.log("user", user);

        const email = user?.user?.email;
        const currentUser = { email: email };

        if (email) {
            fetch(`https://mysterious-forest-77053.herokuapp.com/user/${email}`,{
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify(currentUser)
                })
                .then(res => res.json())
                .then(data => {
                    setToken(data);
                })

        }
    }, [user]);
    return [token, setToken];
}
export default useToken;