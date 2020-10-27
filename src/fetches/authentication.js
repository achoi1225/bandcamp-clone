import { baseUrl } from "../config";
// import { errorNotifications } from "../error-notifications.js";

export const getToken = async ({email, password, userName, artist}) => {
    try {
        console.log(`${ baseUrl }`);
        const res = await fetch(`${baseUrl}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, userName, artist }),
        });
    
        if(res.ok) {
            console.log('something went wrong');
            throw res;
        }

        const { token, user: { id } } = await res.json();
        
        localStorage.setItem("BC_USER_TOKEN", token);
        localStorage.setItem("BC_USER_ID", id);
        localStorage.setItem("BC_USER_USERNAME", userName);

        console.log('sign up successful!!!!');

    } catch(err) {
        console.log(err);
        // errorNotifications(err);
    }
}