import React from 'react'
import '../css/login.css' 
import logo from '../images/logo_e29ae78.png'
import qq from '../images/QQ_016bd05.png'
import wechat from '../images/weiX_3b51568.png'
import weibo from '../images/micoB_265cfe0.png' 
import $ from 'jquery'


class Login extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="zwj-login">
                <div className="head clearfix" id="logo" >
                    <img src={logo} className="fl" />
                    <span className="fr">服务电话：400-065-5161</span>
                </div>

                <div className="main clearfix">
                    <div className='inner'>
                        <div className="toggle">
                            <p className="p_border" onClick={this.tab2.bind(this)} style={{"color":"#fff"}}>账号密码登录</p>
                            |
                
                            <p onClick={this.tab1.bind(this)} >快捷免密登录</p>
                        </div>

                        <div className="tab password" ref="tab1" style={{"display": "block"}}>
                            <form id="memberForm" name="memberForm">
                                <ul>
                                    <li className="linkman" id="errorInfo">
                                        <input type="text"   placeholder="请输入手机号" className="userid userName"  />
                                        <i></i>
                                        <b></b>
                                    </li>
                                    <li className="key">
                                        <input type="password"   placeholder="请输入密码" className="passwd" />
                                        <i></i>
                                        <b></b>
                                    </li>
                                    <li className="accountPswd">
                                        <input type="checkbox"  className="autoLogin" name="autoLogin" value="1" />
                                        <span>记住账号</span>
                                        <i className="fr" id="forget">忘记密码</i>
                                    </li>
                                    <li>
                                        <input type="button" value="登 录" id="denglu" onClick={this.login1.bind(this)} />
                                    </li>
                                </ul>
                                <p className="thirdP">
                                    <a href="/api/login/qq" target="_blank">
                                        <img src={qq} />
                                        <b>QQ</b>
                                    </a>
                                    <span className="weiXin">
                                        <img src={wechat} />
                                        <b>微信</b>
                                    </span>
                                    <a href="http://apipc.goutrip.com/openid/before-bind/weibo.html" target="_blank">
                                        <img src={weibo} />
                                        <b>微博</b>
                                    </a>
                                    <span className="fr"  onClick={this.regist.bind(this)}>新用户注册</span>
                                </p>

                            </form>
                            <p className="prompt prompt_1" style={{"display": "none"}}>请先输入帐号</p>
                        </div>


                        <div className="common tab hide" style={{"display":"none"}} ref="tab2">
                            <form id="memberFormMobile">

                                <input type="hidden"  id="code" />
                                <input type="hidden"  id="create_time" />
                                <input type="hidden" name="telLogin" value="telLogin" />
                                <ol>
                                    <li className="linkPhone" id="errorInfoTel">
                                        <input type="text"  placeholder="手机号" name="userName" className="nickName" id="nickname" />
                                        <i></i>
                                        <b></b>
                                    </li>
                                    <li className="input_2 key">
                                        <input type="text" placeholder="请输入验证码" name="mobileVerify" id="mobileVerify" />&nbsp;
                                        <b></b>
                                        <input type="button" value="获取验证码" id="getCode" onClick={this.getcode.bind(this)}/>
                                    </li>
                                    <li className="input_3">
                                        <input type="checkbox"  name="agree" id="agreement" />
                                        <span>
                                        我已阅读并接受<a href="" target="_blank">《够旅游用户协议》</a>
                                    </span>
                                    </li>
                                    <li>
                                        <input type="button" className="login" value="登 录" onClick={this.login2.bind(this)} />
                                    </li>
                                </ol>
                                <p className="thirdP">
                                    <a href="" target="_blank">
                                        <img src={qq} />
                                        <b>QQ</b>
                                    </a>
                                    <span className="weiXin">
                                        <img src={wechat} />
                                        <b>微信</b>
                                    </span>
                                    <a href="http://apipc.goutrip.com/openid/before-bind/weibo.html" target="_blank">
                                        <img src={weibo} />
                                        <b>微博</b>
                                    </a>
                                    <span className="fr" onClick={this.regist.bind(this)}>新用户注册</span>
                                </p>
                            </form>
                            <p className="prompt prompt_2">
                                请先输入密码
                            </p>
                        </div>


                    </div>                
                </div> 
            </div>
        )
    }
    tab1(){
        this.refs.tab1.style.display = 'none'
        this.refs.tab2.style.display = 'block'

        $('.toggle p:first').css('color','#b0b0b0')
        $('.toggle p:eq(1)').css('color','#fff')     
    }
    tab2(){
         this.refs.tab1.style.display = 'block'        
         this.refs.tab2.style.display = 'none'   
        
         $('.toggle p:first').css('color','#fff')
         $('.toggle p:eq(1)').css('color','#b0b0b0')  
    }
    regist(){
        this.props.history.push('/regist')
    }
    //短信码
    getcode(){
        var flag = true;
        if($('.userName').val() == ''){
            $('.prompt').show().text('请先输入手机号')
            setTimeout(function(){
                $('.prompt').fadeOut()
            },1000)   
            flag = false;
        }
        if(flag == true){
            var phone= $('.nickName').val()       
            $.ajax({
                type: "post",
                url: "http://127.0.0.1:3005/registlogin/judge",
                data: {phone:phone,jd:3}
            });

            var count = 60;
            $('#getCode').prop({'disabled':true})
            var timer =setInterval(function(){
                count--;
                $('#getCode').val("重新发送("+count+")")
                if(count == 0){
                    clearInterval(timer)
                    $('#getCode').val("重新发送")
                    $('#getCode').prop({'disabled':false})
                }
            },1000)
        }
        
    }
    login1(){
        var flag = true;
        if($('.passwd').val() == ''){
            $('.prompt').show().text('请先输入密码')
            setTimeout(function(){
                $('.prompt').fadeOut()
            },1000)  
            flag = false;
        }
        var reg = /^1(3|5|7|8)\d{9}$/
        if(!reg.test($('.nickname').val())){
           $('.prompt').show().text('手机号格式错误请重新输入')
           setTimeout(function(){
               $('.prompt').fadeOut()
           },1000)   
           flag = false;
        }
        if($('.userName').val() == ''){
            $('.prompt').show().text('请先输入手机号')
            setTimeout(function(){
                $('.prompt').fadeOut()
            },1000)   
            flag = false;
        }

        if(flag == true){
            var phone= $('.userName').val()
            var psd = $('.passwd').val()
            $.ajax({
                type: "post",
                url: "http://127.0.0.1:3005/registlogin/judge",
                data: {phone:phone,psd:psd,jd:2},
                success: function (data) {
                    if(data == 1){
                        alert('登录成功')
                    }else{
                        $('.prompt').show().text('验证码错误请稍候重试')
                        setTimeout(function(){
                            $('.prompt').fadeOut()
                        },1000)   
                    }
                }
            });
        }
        
    }
    login2(){
        var flag = true;
        //协议验证
        if($('#agreement').prop('checked') == false){
            $('.prompt').show().text('请阅读用户协议并同意')
            setTimeout(function(){
                $('.prompt').fadeOut()
            },1000)  
            flag = false;
        }
        //短信码
        if($('#mobileVerify').val() == ''){
            $('.prompt').show().text('请先输入验证码')
            setTimeout(function(){
                $('.prompt').fadeOut()
            },1000)  
            flag = false;
        }
         //手机号码格式验证
         var reg = /^1(3|5|7|8)\d{9}$/
         if(!reg.test($('.nickname').val())){
            $('.prompt').show().text('手机号格式错误请重新输入')
            setTimeout(function(){
                $('.prompt').fadeOut()
            },1000)   
            flag = false;
         }
        //手机号
        if($('.nickName').val() == ''){
            $('.prompt').show().text('请先输入手机号')
            setTimeout(function(){
                $('.prompt').fadeOut()
            },1000)   
            flag = false;
        }

        if(flag == true){
            var phone= $('.nickName').val()
            var yzm = $('#mobileVerify').val()
            $.ajax({
                type: "post",
                url: "http://127.0.0.1:3005/registlogin/judge",
                data: {phone:phone,yzm:yzm,jd:4},
                success: function (data) {
                    if(data == 1){
                        alert('登录成功')
                    }else{
                        alert('登录失败')
                    }
                }
            });
        }

    }    
}

export default Login