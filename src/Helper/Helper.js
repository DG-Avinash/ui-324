
export const redirectPage=(lstorageKey,param,path,Navigate)=>{
localStorage.setItem(lstorageKey,JSON.stringify(param));
Navigate(path);
}