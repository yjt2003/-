function myFunctionRetrievePassword() {
    var stuid = document.getElementById("schoolid").value;
    var pwd = document.getElementById("password").value;
    var cfmpwd = document.getElementById("confirmpassword").value;
    var eml = document.getElementById("email").value;
    var information = document.getElementById("bookManagementRetrievePasswordinformation");
    function retrieve(stuid,pwd,cfmpwd,eml,information) {
        let a = /^[1-9][0-9]{4,10}@qq.com$/;
        let b = a.test(eml);
        if(b != false) {
            if(stuid.length == 10){//这里未来要通过接口传去学号获得姓名并进行一系列验证
                if(pwd == cfmpwd){
                    information.innerHTML = "找回成功！";
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
    retrieve(stuid, pwd, cfmpwd, eml, information);
}