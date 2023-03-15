//接口访问
axios.defaults.baseURL = '/Book_Manage_System/';

const one = document.getElementById("one").value;
const two = document.getElementById("two").value;
const three = document.getElementById("three").value;



function landing() {//此处是登录的总函数
    const one = document.getElementById("one").value;
    const two = document.getElementById("two").value;
    const three = document.getElementById("three").value;
    
    function  land(one,two,three) {
        if(one && two !== false) {
            //尝试插入接口
            axios({
                url: '/register/servlet/registerServlet',
                method: 'POST',
                data: {
                    "kind": `${three}`,
                    "name": `${one}`,
                    "password": `${two}`,
                }
            })
            .then((res) => {
                console.log("注册成功！！！！！", res);
            })
        }
    }    
}