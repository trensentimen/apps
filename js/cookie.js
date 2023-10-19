// cookieUtil.js

import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

function isCookieExist(cookieName) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const cookieParts = cookie.split('=');
        if (cookieParts[0] === cookieName) {
            return true;
        }
    }
    return false;
}

// getCookie("token");

console.log(getCookie("token"));
