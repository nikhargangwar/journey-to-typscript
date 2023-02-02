
let userData =[];

const getAllUserData = ()=>{
    return userData;
};

const postUserdata   = (user)=>{
    const {name,age} = user;
    const data = {name,age};
    userData.push(data);
    return data;
};
export default {getAllUserData,postUserdata};