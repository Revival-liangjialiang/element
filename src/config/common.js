export const getData = ()=>{
	if(typeof(Storage) !== "undefined") {  
        // 退出登陆的时候需要把sessionStorage.data赋值为字符串0
		if(sessionStorage.data!==undefined&&typeof(sessionStorage.data)!=='0'){ 
        return JSON.parse(sessionStorage.data)
    	}else{
    		return 0
    	}
    	} else {  
        alert("抱歉！您的浏览器版本过低，导致某些功能无法正常使用，请升级您的浏览器！")
    	}  
}
export const getSessionStorage = () => {
if(typeof(Storage) !== "undefined") {  
        return sessionStorage
    	} else {  
        alert("抱歉！您的浏览器版本过低，导致某些功能无法正常使用，请升级您的浏览器！")
    	} 
}
export const setLocalStorage = (key,value) =>{
	window.localStorage.setItem(key, value)
}
export const getLocalStorage = (key) => {
	return window.localStorage.getItem(key)
}
export const removeLocalStorage = (key) => {
	window.localStorage.removeItem(key)
}