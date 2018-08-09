import React from 'react'
import '../css/regist.css'
import logo from '../images/logo_e29ae78.png'
import qq from '../images/QQ_016bd05.png'
import wechat from '../images/weiX_3b51568.png'
import weibo from '../images/micoB_265cfe0.png' 
import $ from 'jquery'


class Regist extends React.Component{
    constructor(props){
        super(props)
    }

	componentDidMount(){
		$('.nav_wrap').attr("display","none")
	}


    render(){
        return (
            <div className="zwj-container">
                <div className="head">
                    <a href="/home"><img src={logo} /></a>
                    <span>服务电话：400-065-5161</span>
                </div>
                <div className="main">
                    <div className="memberform">
                        <p className="title">新用户注册</p>
                        <div className="line"></div>


                        <ul className="content">
                            <li>
                                <i className="person"></i>
                                <input type="text" name="nickname" id="nickname" placeholder="请输入手机号" />
                                <span className="error"><i></i>请输入密码</span>
                                <i className="delete"></i>
                            </li>
                            <li>
                                <i className="password"></i>
                                <input type="password" name="passwd" id="passwd" placeholder="请设置密码" />
                                <i className="delete"></i>
                            </li>
                            <li>
                                <i className="password"></i>
                                <input type="password" name="passwd_two" id="passwd_two" placeholder="请再次输入密码" />
                                <i className="delete"></i>
                            </li>
                            <li className="getCode imgDiv">
                                <input type="text" name="mobileVerify" id="imgCode" placeholder="请输入验证码" />
                                <span id="checkCode" className="code" onClick={this.getcod.bind(this)}></span>
                            </li>
                            <li className="getCode">
                                <input type="text" name="mobileVerify" id="mobileVerify" placeholder="请输入验证码" />
                                
                                <button id="getCode" onClick={this.getcode.bind(this)}>获取验证码</button>
                                <i className="delete"></i>
                            </li>

                        </ul>





                        <div className="main_btm">
                            <p className="ipt">
                                <input type="checkbox" name="agree" id="agreement"  />
                                <span>我已阅读并接受<a href="http://www.goutrip.com/login/item" target="_blank">《够旅游用户协议》</a></span>
                            </p>
                            <p className="btn">
                                <button  id="zhuce" onClick={this.regist.bind(this)}>注册</button>
                            </p>
                        </div>
                        <div className="line"></div>
                        <div className="bottom">
                            <div className="otherLogin">
                                <a href="/login/qq" target="_blank">
                                    <img src={qq} />
                                    <span>QQ</span>
                                </a>
                                <a className="weiXin">
                                    <img src={wechat} />
                                    <b>微信</b>
                                </a>
                                <a href="http://apipc.goutrip.com/openid/before-bind/weibo.html" target="_blank" >
                                    <img src={weibo}  />
                                    <span>微博</span>
                                </a>
                            </div>

                            <div className="enter">
                                <span>已有账号,</span>
                            <a href="/login">登录&gt;</a>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        //生成验证码
        //var a = Math.floor(Math.random()*37)
        var  arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        var str = ''
        for(var i = 0; i<4;i++){
            str += arr[Math.floor(Math.random()*36)]
        }
        $('#checkCode').text(str)
        



        //二次密码框 失焦验证
        $('#passwd_two').blur(function(){
            if($(this).val() == ''){
                $('.error').css('display','block').html("<i></i>请输入手机号")
                setTimeout(() => {
                    $('.error').fadeOut()
                }, 1000);
            }
            var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
            if(!reg.test($(this).val())){
                $('.error').css('display','block').html("<i></i>密码格式错误 6-20位数字、字母组合")
                setTimeout(() => {
                    $('.error').fadeOut()
                }, 1000);
            }

            if($(this).val() != $('#passwd').val()){
                $('.error').css('display','block').html("<i></i>两次密码输入不一致")
                setTimeout(() => {
                    $('.error').fadeOut()
                }, 1000);
            }  
            
        })
        
         
        
    }
    //获取验证码
    getcod(){
        var  arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        var str = ''
        for(var i = 0; i<4;i++){
            str += arr[Math.floor(Math.random()*36)]
        }
        $('#checkCode').text(str)
    }

    // 获取短信码
    getcode(){
        var phone = $('#nickname').val();       
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:3005/registlogin/judge",
            data: {phone:phone,jd:3}
        });

        var count = 60;
        $('#getCode').prop({'disabled':true})
        var timer =setInterval(function(){
            count--;
            $('#getCode').text("重新发送("+count+")")
            if(count == 0){
                clearInterval(timer)
                $('#getCode').text("重新发送")
                $('#getCode').prop({'disabled':false})
            }
        },1000)
        
        
    }

   
    //密码格式错误 6-20位数字、字母组合
    regist(){
        var flag  = true;
        //协议验证
        if($('#agreement').prop('checked') == false){
            $('.error').css('display','block').html("<i></i>请阅读用户协议并同意")
                setTimeout(() => {
                    $('.error').fadeOut()
                }, 1000);
            flag = false
        }
        //验正 短信码是否输入
        if($('#mobileVerify').val() == ''){
            $('.error').css('display','block').html("<i></i>请输入验证码")
                setTimeout(() => {
                    $('.error').fadeOut()
                }, 1000);
            flag = false
        }
        //验证 验证码1
        if($('#imgCode').val().toUpperCase() != $('#checkCode').text()){
            $('.error').css('display','block').html("<i></i>验证码错误请重新输入")
                setTimeout(() => {
                    $('.error').fadeOut()
                }, 1000);
            flag = false
        }
        // 验证码1 输入
        if($('#imgCode').val()== ''){
            $('.error').css('display','block').html("<i></i>请点击获取验证码")
                setTimeout(() => {
                    $('.error').fadeOut()
                }, 1000);
            flag = false
        }

        if($('#passwd_two').val() != $('#passwd').val()){
            $('.error').css('display','block').html("<i></i>两次密码输入不一致")
            setTimeout(() => {
                $('.error').fadeOut()
            }, 1000);
            flag = false
        }
        if($('#passwd_two').val() == ''){
            $('.error').css('display','block').html("<i></i>请再次输入密码")
            setTimeout(() => {
                $('.error').fadeOut()
            }, 1000);
            flag = false
        }
        var reg1 =  /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
        if(!reg1.test($('#passwd').val())){
            $('.error').css('display','block').html("<i></i>密码格式错误 6-20位数字、字母组合")
            setTimeout(() => {
                $('.error').fadeOut()
            }, 1000);
            flag = false
        }
        //密码是否输入
        if($('#passwd').val() == ''){
            $('.error').css('display','block').html("<i></i>请输入密码")
                setTimeout(() => {
                    $('.error').fadeOut()
                }, 1000);
            flag = false
        }
        //手机号码格式验证
        var reg = /^1(3|5|7|8)\d{9}$/
        if(!reg.test($('#nickname').val())){
            $('.error').css('display','block').html("<i></i>手机号格式错误请重新输入")
                setTimeout(() => {
                    $('.error').fadeOut()
                }, 1000);
            flag = false
        }
        // 手机号 是否输入
        if($('#nickname').val() == ''){
            $('.error').css('display','block').html("<i></i>请输入手机号")
                setTimeout(() => {
                    $('.error').fadeOut()
                }, 1000);
            flag = false
        }
       
        
        if(flag == true){
            var phone = $('#nickname').val();
            var psd = $('#passwd').val();
            var yzm = $('#mobileVerify').val();
            $.ajax({
                type: "post",
                url: "http://127.0.0.1:3005/registlogin/judge",
                data: {phone:phone,psd:psd,jd:0,yzm:yzm},
                success: function (data) {
                    if(data == 1 ){
                        alert('注册成功')


                    }else if(data == 0){
                        $('.error').css('display','block').html("<i></i>该手机号已注册")
                        setTimeout(() => {
                            $('.error').fadeOut()
                        }, 1000);
                    }else if(data == 2){
                        $('.error').css('display','block').html("<i></i>短信验证码输入错误")
                        setTimeout(() => {
                            $('.error').fadeOut()
                        }, 1000);
                    }
                }
            });


        }
        
        


    }




}

export default Regist