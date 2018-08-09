import React from 'react'
import '../css/custom.css'
import $ from 'jquery'

class Custom extends React.Component{
	constructor (props){
		super(props);
		this.state= {
			fromcity: '',
			towhere: '',
			during: '',
			gotime: '',
			theme: '',
			totalperson: '',
			childnum: '',
			budget: '',
			name: '',
			phone: '',
			texmsg: '',
			mail: '',
			remark: ''

		}
		
		
	}
	
	render(){
		return(
			<div className="zwj-custom">
			
				<div className="main">
				<div style={{"width":"1600px"}}>
					<div className="main-t">
						<h2>私人定制</h2>
						<h4>私人订制旅行将为您提供最高品质的服务，最专业的分析与规划，让您与家人、朋友在旅途中充分享受美梦成真的愉悦与感动</h4>
						<div className="main-t-nav">
							<ul>
								<li><p>2</p><p>分钟</p></li>
								<li><p>3</p><p>小时</p></li>
								<li><p>48</p><p>小时</p></li>
							</ul>
							<div>
								<p>收集出行需求 </p>
								<p>内与您电话沟通</p>
								<p>内获得订制方案</p>
							</div>
						</div>	
					</div>
				
					<div className="main-tab">
						<ul className="main-tab-top">
							<li className="basic">基本出游信息</li>
							<li className="number">出游人数及预算</li>
							<li className="person">个人信息</li>
						</ul>
						<div>
							{/* tab1 */}
							<div className="main-tab1" style={{"display":"block"}}>
								<p className="tab-title">你想要的</p>
								<ol>
									<li className="where">
										<span>从哪出发</span>
										<div><input type="text" id="fromcity" /></div>
									</li>
									<li className="address">
										<span>到哪儿玩</span>
										<div>
											<input type="text" id="termini" />
											<span>推荐路线：</span>
											<a href="">东京</a>
											<a href="">首尔</a>
											<a href="">铁力士</a>
										</div>
									</li>
									<li className="time">
										<span>玩儿多久</span>
										<div>
											<span className="minus"></span>
											<input type="text" id="during" />
											<span className="add"></span>

										</div>
									</li>
									<li className="date">
										<span>出发日期</span>
										<div>
											<input className="laydate-icon" type="text" readOnly="" id="goTime" />
											<p>
												<span>可根据实际情况调整出发日期和天数</span>
											</p>
										</div>
									</li>
								</ol>
								<p className="tab_next">
									<span id="next_1" onClick={this.next1.bind(this)}>下一步</span>
								</p>
							</div>
							{/* tab2 */}
							<div className="main-tab2" style={{'display':"none"}}>
								<p className="tab-title">您期待的行程主题及人均预算是？</p>
								<ol>
									<li>
										<i>行程主题</i>
										<div className="theme">
											<span>特色汇聚</span>	
											<span>地标之旅</span>									
											<span>当地玩乐</span>											
											<span>邮轮游艇</span>											
											<span>健康养生</span>											
											<span>蜜月浓情</span>											
											<span>亲子人文</span>											
											<span>自驾狂欢</span>											
											<span>摄影取景</span>											
											<span>滑雪冲刺</span>											
											<span>冲浪挑战</span>											
											<span>潜水探秘</span>											
											<span>独家定制</span>											
										</div>
									</li>
									<li>
										<i>出游人数</i>
										<div className="trip">
											<p>
												<i className="minus"></i>
												<input type="text" defaultValue="1" id="num" readOnly="" />
												<i className="add"></i>
												<span>个成人</span>
											</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<p>
												<i className="minus"></i>
												<input type="text" defaultValue="0" id="withChildren" readOnly="" />
												<i className="add"></i>
												<span>个儿童</span>
												<i className="tip">(2-11周岁)</i>
											</p>
										</div>
									</li>
									<li>
										<i>人均预算：</i>
										<div className="budget">
											<span>3000以下</span>
											<span>3000-5000</span>
											<span>5000-8000</span>
											<span>8000-15000</span>
											<span>15000以上</span>
											<span>不确定</span>
										</div>
									</li>
								</ol>
								<div className="tab_btn">
									<p className="btn_prev">
										<span id="prev_1" onClick={this.prev1.bind(this)}>上一步</span>
									</p>
									<p className="btn_next">
										<span id="next_2" onClick={this.next2.bind(this)}>下一步</span>
									</p>
								</div>
							</div>
							{/* tab3 */}
							<div className="main-tab3" style={{"display":'none'}}>
								<p className="tab-title">所有问题都已回答完毕，请留下您的联系方式
                        		专家顾问会第一时间联系你哦～</p>
								<ol>
									<li className="name">
										<span>姓名：</span>
										<div>
											<input type="text" id="name" />
										</div>
									</li>

									<li className="tel">
										<span>手机：</span>
										<div>
											<input type="text" id="phone" />
										</div>
									</li>

									<li className="msg">
										<span>短信验证码：</span>
										<div>
											<input type="text" id="mobileVerify" />
											<input type="button" defaultValue="获取" id="getCode" />
											<input type="hidden" defaultValue="" id="code" />
											<input type="hidden" defaultValue="" id="create_time" />
										</div>
									</li>

									<li className="mail">
										<span>邮箱：</span>
										<div>
											<input type="text" id="emails" />
										</div>
									</li>

									<li className="remark">
										<span>补充备注：</span>
										<div>
											<textarea placeholder="您可以在这里补充说明相关需求" name="remark" id="remark" cols="30" rows="10"></textarea>
										</div>
									</li>
								</ol>

								<div className="tab_btn clearfix">
									<p className="btn_prev">
										<span id="prev_2" onClick={this.prev2.bind(this)}>上一步</span>
									</p>
									<p className="btn_next">
										<input type="submit" defaultValue="提交" id="next_3" onClick={this.next3.bind(this)} />
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="main-side">
						<h2 className="side_nav">我的需求单</h2>
						<div className="side_list">
							<ul>
								<li className="copy_where">
									<span>从哪出发：</span>
									<div id="fromcity2">{this.state.fromcity}</div>
								</li>
								<li className="copy_address">
									<span>到哪儿玩：</span>
									<div id="termini2">{this.state.towhere}</div>
								</li>
								<li className="copy_time">
									<span>玩儿多久：</span>
									<div id="days2">{this.state.during}</div>
								</li>
								<li className="copy_date">
									<span>出发日期：</span>
									<div id="goTime2">{this.state.gotime}</div>
								</li>
								<li className="copy_theme">
									<span>行程主题：</span>
									<div id="subject2">{this.state.theme}</div>
								</li>
								<li className="copy_trip">
									<span>出游人数：</span>
									<div id="num2">{this.state.totalperson}</div>
								</li>
								<li className="copy_budget">
									<span>人均预算：</span>
									<div id="money2">{this.state.budget}</div>
								</li>
							</ul>

							<ol>
								<li className="copy_name">
									<span>姓名：</span>
									<div id="name2">{this.state.name}</div>
								</li>
								<li className="copy_tel">
									<span>手机号：</span>
									<div id="phone2">{this.state.phone}</div>
								</li>
								<li className="copy_mail">
									<span>邮箱：</span>
									<div id="email2">{this.state.mail}</div>
								</li>
								<li className="copy_remark">
									<span>补充备注：</span>
									<div id="remark2">{this.state.remark}</div>
								</li>
							</ol>
						</div>
					</div>
				</div>
					<div className="main_btm">
						<p>网站备案/许可证号：京ICP备14016142号-1|够旅游公安 备案编号：京公网安备11010802014913号|主办单位名称：北京汇智纵横信息技术有限公司</p>
						<p> 办公地址：北京市海淀区中关村东路18号财智国际大厦A座17层 | 网站名称：够旅游网|网站首页网址：www.goutrip.com</p>
					</div>

				
				</div>
			</div>
		)
	}
	next1(){
		var fromcity = $('#fromcity').val(),
		towhere = $('#termini').val(),
		during = $('#during').val(),
		gotime = $('#goTime').val()

		this.setState({
			fromcity:fromcity,
			towhere: towhere,
			during: during,
			gotime: gotime
		})
		$('.main-tab1').hide()
		$('.main-tab2').show()
	}
	prev1(){
		$('.main-tab1').show()
		$('.main-tab2').hide()
	}
	next2(){
		var theme = '',budget = '';
		$('.theme span').each(function(i,item){
			if($(item).hasClass("choose")){
				theme = $(item).text()
			}
		})
		$('.budget span').each(function(i,item){
			if($(item).hasClass("choose")){
				budget = $(item).text()
			}
		})
		var totalperson = $('#num').val()

		this.setState({theme:theme,totalperson:totalperson,budget:budget})
		$('.main-tab2').hide()
		$('.main-tab3').show()
	}
	prev2(){
		$('.main-tab2').show()
		$('.main-tab3').hide()
	}
	next3(){
		var phone = $('#phone').val(),
		name = $('#name').val(),
		mail = $('#emails').val(),
		remark = $('#remark').val()

		this.setState({phone:phone,name:name,mail:mail,remark:remark})

	}
	componentDidMount(){
		$('.theme span').click(function(){
			$(this).addClass('choose')
			.siblings().removeClass('choose')
		})
		$('.budget span').click(function(){
			$(this).addClass('choose')
			.siblings().removeClass('choose')
		})

		$('.minus').click(function(){
			var num = parseInt($(this).next().val())
			if(num  > 0){
				$(this).next().val(num - 1)
			}else{
				$(this).next().val(0)
			}	
		})
		$('.add').click(function(){
			var num = parseInt($(this).prev().val())
			$(this).prev().val(num + 1)
		})


	}
}
export default  Custom;