//const rgsbtn = document.getElementsById("bookManagementRegisterButton");

function myFunctionRegister() {//此处是注册的总函数
    var stuid = document.getElementById("schoolid").value;
    var pwd = document.getElementById("password").value;
    var cfmpwd = document.getElementById("confirmpassword").value;
    var eml = document.getElementById("email").value;
    var information = document.getElementById("information");
    function check(stuid,pwd,cfmpwd,eml,information) {
        let a = /^[1-9][0-9]{4,10}@qq.com$/;
        let b = a.test(eml);
        if(b != false) {
            if(stuid.length == 10){//这里未来要通过接口传去学号获得姓名并进行一系列验证
                if(pwd == cfmpwd){
                    information.innerHTML = "注册成功！";
                }
            }
            else{
                information.innerHTML = "您输入的学号有误！";
            }
        }
        else{
            information.innerHTML = "您输入的QQ邮箱有误！";
        }
    }
    check(stuid, pwd, cfmpwd, eml, information);
}
    