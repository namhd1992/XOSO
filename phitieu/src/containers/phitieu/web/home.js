import React from 'react'
import { bindActionCreators } from 'redux'
import Pagination from "react-js-pagination";
import Ultilities from '../../../Ultilities/global'
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux'
import './css/style_web.css';
import {
	pickCard,
	getTuDo,
	getHistoryTuDo,
	getMoreSessions,
	getVinhDanh,
	getLuckyInfo,
	getLuckyItems,
	getInfoUser,
	userLogout,
	gds,
	getItemAward,
	getRollup,
	getDonate,
	getInfoDonate,
	checkRollup,
	getListSanQua,
	getDuatopVtvCard
} from '../../../modules/lucky'
import {
	getData
} from '../../../modules/profile'


import banner_thongbao_off from './images/banner-thongbao-off.png';
import icon_scoin from './images/icon-scoin.png';
import btn_xac_nhan from './images/btn-xac-nhan.png';
import icon_success from './images/icon-success.png';
import fb_a1 from './images/fb-a1.jpg';
import fb_a2 from './images/fb-a2.jpg';
import fb_a3_a4 from './images/fb-a3-a4.jpg';
import fb_a5 from './images/fb-a5.png';
import fb_i1 from './images/fb-i1.jpg';
import fb_i2 from './images/fb-i2.jpg';
import fb_i3_i4 from './images/fb-i3-i4.jpg';
import fb_i5 from './images/fb-i5.jpg';
import tab_appfb from './images/tab-appfb.png';
import tab_appfb_active from './images/tab-appfb-active.png';

import btn_dongy from './images/btn-dongy.png';
import banner_baotri from './images/banner-baotri.png';
import tab_cachthucthamgia_active from './images/tab-cachthucthamgia-active.png';
import tab_cachthucthamgia from './images/tab-cachthucthamgia.png';
import tab_hdsanqua_active from './images/tab-hdsanqua-active.png';
import tab_hdsanqua from './images/tab-hdsanqua.png';
import tab_hdduatop_active from './images/tab-hdduatop-active.png';
import tab_hdduatop from './images/tab-hdduatop.png';
import tab_hdsdgiaithuong_active from './images/tab-hdsdgiaithuong-active.png';
import tab_hdsdgiaithuong from './images/tab-hdsdgiaithuong.png';

import scoin_10k from './images/scoin-10k.png';
import voucher_scoin_banktranfer from './images/voucher-scoin-banktranfer.png';
import scoin_voucher_10k from './images/scoin-voucher-10k.png';
import che_do_duatop from './images/che-do-duatop.png';
import che_do_sanqua from './images/che-do-sanqua.png';
import tab_giaithuong from './images/tab-giaithuong.png';
import btn_sanqua_duatop from './images/btn-sanqua-duatop.png';
import btn_dangnhap from './images/btn-dangnhap.png';
import btn_dangxuat from './images/btn-dangxuat.png';
import btn_sanqua from './images/btn-sanqua.png';
import btn_duatop from './images/btn-duatop.png';
import btn_vinhdanhsanqua_active from './images/btn-vinhdanhsanqua-active.png';
import btn_vinhdanhsanqua from './images/btn-vinhdanhsanqua.png';
import btn_bxhduatop from './images/btn-bxhduatop.png';
import btn_bxhduatop_active from './images/btn-bxhduatop-active.png';
import btn_huongdanmuathescoin from './images/btn-huongdanmuathescoin.png';
import btn_nhanthongbaosukien from './images/btn-nhanthongbaosukien.png';
import btn_napgame from './images/btn-napgame.png';
import img_hotline from './images/img-hotline.png';
import logo_scoin from './images/logo_scoin.png';
import logo_scoinvip from './images/logo_scoinvip.png';
import logo_splay from './images/logo_splay.png';
import btn_tudo from './images/btn-tudo.png';
// import xiaomi_black from './images/xiaomi-black-shark-2.png';
import img_card10k from './images/img-card10k.png';
import img_card20k from './images/img-card20k.png';
import img_card50k from './images/img-card50k.png';
import img_card100k from './images/img-card100k.png';
import img_card200k from './images/img-card200k.png';
import img_card300k from './images/img-card300k.png';
import img_card500k from './images/img-card500k.png';
import img_card1000k from './images/img-card1000k.png';
import img_card2000k from './images/img-card2000k.png';
import img_card5000k from './images/img-card5000k.png';
import img_thescoinvoucher from './images/img-thescoinvoucher.png';

import img_dacochu from './images/img-dacochu.png';


import btn_phanthuong_active from './images/btn-phanthuong-active.png';
import btn_phanthuong from './images/btn-phanthuong.png';
import btn_lichsu from './images/btn-lichsu.png';
import btn_lichsu_active from './images/btn-lichsu-active.png';
import btn_nap_scoin from './images/btn-nap-scoin.png';
import btn_activevip from './images/btn-activevip.png';
import vip_kimcuong from './images/vip-kimcuong.png';
import vip_bachkim from './images/vip-bachkim.png';
import vip_vang from './images/vip-vang.png';
import vip_bac from './images/vip-bac.png';
import vip_dong from './images/vip-dong.png';

import nem_phi_tieu from './images/nem-phi-tieu.png';
import huy_nem_tieu from './images/huy-nem-tieu.png';
import khu_vuc_1 from './images/khu-vuc-1.png';
import khu_vuc_2 from './images/khu-vuc-2.png';
import khu_vuc_3 from './images/khu-vuc-3.png';
import vong_tron_ngoai from './images/vong-tron-ngoai.png';
import vong_tron_trong from './images/vong-tron-trong.png';
import voucher_scoin from './images/voucher-scoin.png';
import nap_ngan_hang from './images/nap-ngan-hang.png';
import ck_ngan_hang from './images/ck-ngan-hang.png';
import topup_scoin from './images/topup-scoin.png';
import the_scoin from './images/the-scoin.png';
import nap_voucher_scoin from './images/nap-voucher-scoin.png';



// import muiten from './images/muiten.png';
import ReactResizeDetector from 'react-resize-detector'
// import spin from './images/spin.gif';
import $ from 'jquery';
import 'bootstrap';

const styles = {
	paper: {
		background: "#fff",
	},
};




class Lucky_Rotation extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			limit: 10,
			offsetTuDo: 0,
			offsetCode: 0,
			offsetVinhDanh: 0,
			numberShow:15,
			isAll:true,
			stop:true,
			itemOfSpin:[],
			luckySpin:{},
			isLogin:false,
			activeVinhDanh:1,
			activeTuDo:1,
			activeHistory:1,
			countVinhDanh:0,
			countHistory:0,
			countTuDo:0,
			dataVinhDanh:[],
			dataTuDo:[],
			listVinhDanh:[],
			listTuDo:[],
			listHistory:[],
			width:0,
			numberPage:3,
			height:0,
			img_width:0,
			img_height:0,
			inputValue: '',
			isSpin:false,
			closeAuto:true,
			message_error:'',
			server_err:false,
			finished:false,
			user:{},
			dataItem:{},
			waiting:false,
			innerWidth:0,
			type:1, 
			tab_tudo: true,
			listSesstions:[],
			tab_1:true,
			tab_2:false,
			content:'',
			rollup:true,
			message_rollup:'',
			dataInfoDonate:{},
			type_action:'',
			showRollup:false,
			listSanqua:[],
			message_sanqua_empty:''
		};
	}
	componentWillMount(){
		var user = JSON.parse(localStorage.getItem("user"));
		// this.onResize();
		window.addEventListener("resize", this.setScreenOrientation);
		window.removeEventListener('scroll', this.handleScroll);
		this.setState({innerWidth:window.innerWidth});
		if(user!==null){
			if(user.Gifts>0){
				this.setState({content:	`Có <b>${user.Gifts}</b> món quà chưa mở`})
				setTimeout(()=>{
					$('.popover-visible-trigger').popover('hide').off('click'); 
				}, 10000);
				
			}
		}
	}



	componentDidMount(){
		var user = JSON.parse(localStorage.getItem("user"));
		// var update29=localStorage.getItem("update29");
		// if(update29===null){
		// 	$('#Modalbanner').modal('show');
		// }
		// $('#Modalbanner').modal('show');

		// localStorage.setItem("update29", true);
		

		this.getDuatopVtvCard(1,1);
		$('.popover-visible-trigger').popover('show').off('click'); 


		this.setState({user:user})
		if(user!==null){
			this.props.checkRollup(user.Token).then(()=>{
				var data=this.props.dataCheckRollup;
				if(data!==undefined){
					if(data.Status===0){
						this.setState({showRollup: true})
					}else{
						this.setState({showRollup: false})
					}
				}
			})
		}
		
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillReceiveProps(nextProps){
		if(this.props.waiting !== nextProps.waiting){
			this.setState({waiting:nextProps.waiting})
			setTimeout(()=>{ 
				this.setState({waiting:false})
			}, 3000);
		}
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}

	setScreenOrientation=()=>{
		const {innerWidth}=this.state;
		if(Math.abs(innerWidth - window.innerWidth) >100){
			window.location.reload();
			this.setState({innerWidth:window.innerWidth})
		}
	}


	showModalGiaiThuong=()=>{
		this.props.getMoreSessions().then(()=>{
			var data=this.props.dataSesions;
			if(data!==undefined){
				if(data.Status===0){
					this.setState({listSesstions:data.Data}, ()=>{
						$('#Modalgiaithuong').modal('show');
					})
				}else if(data.Status===2){
					this.setState({message_error:data.Message}, ()=>{
						$('#myModal11').modal('show');
					})
				}else if(data.Status===3){
					this.logoutAction();
				}else{
					console.log("Lỗi")
				}
			}
		})
	}


	getDuatopVtvCard=(type, pageNumber)=>{
		const {limit}=this.state;
		var offsetVinhDanh=(pageNumber-1)*limit;
		this.setState({type:type, listVinhDanh:[], countVinhDanh:0}, ()=>{
			this.props.getDuatopVtvCard(limit, offsetVinhDanh, type).then(()=>{
				var data=this.props.dataVinhDanh;
				if(data!==undefined){
					if(data.Status===0){
						var listVinhDanh=data.Data;
						this.setState({listVinhDanh:data.Data, countVinhDanh:data.Totals})
					}else{
						$('#myModal11').modal('show');
						this.setState({message_error:'Không lấy được dữ liệu bảng vinh danh.'})
					}
				}else{
					$('#myModal12').modal('show');
					this.setState({server_err:true})
				}
			});
		})
	}


	handleScroll = (event) => {
		if (document.body.getBoundingClientRect().top < -300){
			$("#button").show();
		}else{
			$("#button").hide();
		}
	}

	loginAction = () => {
		const {server_err}=this.state;
		if(!server_err){
			if (typeof(Storage) !== "undefined") {
				var currentPath = window.location.pathname;
				localStorage.setItem("currentPath", currentPath);
			} else {
				console.log("Trình duyệt không hỗ trợ localStorage");
			}
			window.location.replace(`http://graph.vtcmobile.vn/oauth/authorize?client_id=92d34808c813f4cd89578c92896651ca&redirect_uri=${window.location.protocol}//${window.location.host}/login&agencyid=0`)
			
			
			// window.location.replace(`http://sandbox.graph.vtcmobile.vn/oauth/authorize?client_id=UH8DN779CWCMnCyeXGrm2BRqiTlJajUyZUEM0Kc&agencyid=0&redirect_uri=${window.location.protocol}//${window.location.host}/`);
		}else{
			$('#myModal12').modal('show');
		}
	}
	logoutAction = () => {
		this.logout();
		localStorage.removeItem("user");
		window.location.replace(
			`https://graph.vtcmobile.vn/oauth/authorize?client_id=92d34808c813f4cd89578c92896651ca&redirect_uri=${window.location.protocol}//${window.location.host}&action=logout&agencyid=0`,
		);

		// window.location.replace(
		// 	`http://sandbox.graph.vtcmobile.vn/oauth/authorize?client_id=UH8DN779CWCMnCyeXGrm2BRqiTlJajUyZUEM0Kc&redirect_uri=${window.location.protocol}//${window.location.host}&action=logout&agencyid=0`,
		// );
	}

	logout=()=>{
		var user = JSON.parse(localStorage.getItem("user"));
		var header = {
			headers: {
				"Content-Type": "application/json",
				"token": user.Token,
			}
		}
		axios.get(Ultilities.base_url() +'darts/user-signout/', header).then(function (response) {
			console.log(response)
		})
	}



	timeRemain=(times)=>{
		var _this=this;
		setInterval(()=>{
			var time=(times-Date.now())/1000;
			if(time>0){
				var day=Math.floor(time/86400) > 9 ? Math.floor(time/86400) : `0${Math.floor(time/86400)}`;
				var hour=Math.floor((time%86400)/3600) > 9 ? Math.floor((time%86400)/3600) : `0${Math.floor((time%86400)/3600)}`;
				var minute=Math.floor(((time%86400)%3600)/60) > 9 ? Math.floor(((time%86400)%3600)/60) : `0${Math.floor(((time%86400)%3600)/60)}`;
				var second=Math.ceil(((time%86400)%3600)%60) > 9 ? Math.ceil(((time%86400)%3600)%60) : `0${Math.ceil(((time%86400)%3600)%60)}`;
				_this.setState({day:day, hour: hour, minute: minute, second:second})
				// _this.setState({hour_live: hour, minute_live: minute, second_live:second})
			}
		}, 1000);
	}


	timeConverter=(time)=>{
		var start=time.substring(time.indexOf("(") +1,time.indexOf(")"));
		var a = new Date(+start);
		// var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var year = a.getFullYear();
		var m=a.getMonth()+1
		var month =m > 9 ? m : `0${m}`;
		var date = a.getDate();
		var hour = a.getHours() > 9 ? a.getHours() : `0${a.getHours()}`;
		var min = a.getMinutes() > 9 ? a.getMinutes() : `0${a.getMinutes()}`;
		var sec = a.getSeconds() > 9 ? a.getSeconds() : `0${a.getSeconds()}`;
		var time = date + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + sec ;
		return time;
	}


	showModalRules=()=>{
		$('#myModal1').modal('show'); 
	}

	hideModalRules=()=>{
		$('#myModal1').modal('hide');
	}



	showModalHuongDan=()=>{
		$('#Modalhuongdan').modal('show');
	}


	getHistory=(user)=>{
		const {limit, activeHistory}=this.state;
		var offsetHistory=(activeHistory-1)*limit;
		// $('#Loading').modal('show');
		this.setState({tab_tudo: false})
		this.props.getHistoryTuDo(user.Token, limit, offsetHistory).then(()=>{
			// $('#Loading').modal('hide');
			var data=this.props.dataHistoryTuDo;
			if(data!==undefined){
				if(data.Status===0){
					this.setState({listHistory:data.Data, countHistory:data.Totals})
				}else if(data.Status===3){
					this.logoutAction();
				}else{
					$('#myModal11').modal('show');
					this.setState({message_error:'Chưa tải được dữ liệu. Vui lòng thử lại'})
				}
			}else{
				$('#myModal12').modal('show');
				this.setState({server_err:true})
			}
		});
	}

	closePopupAuto=()=>{
		clearInterval(this.state.intervalId);
		this.setState({ isSpin:false, closeAuto:false});
		$('#myModal9').modal('hide');
	}

	showModalDetailBonus=()=>{
		$('#myModal4').modal('show');
	}

	hideModalDetailBonus=()=>{
		$('#myModal4').modal('hide');
	}
	closeServerErr=()=>{
		$('#myModal12').modal('hide');
	}


	handlePageChangeHistory=(pageNumber)=> {
		var user = JSON.parse(localStorage.getItem("user"));
		this.setState({activeHistory: pageNumber},()=>{
			this.getHistory(user)
		})
	}


	handlePageChangeVinhDanh=(type, pageNumber)=> {
		this.setState({activeVinhDanh: pageNumber},()=>{
			this.getDuatopVtvCard(type, pageNumber)
		})

	}

	openTabNapScoin=(url)=> {
		window.open(url, '_blank').focus();
	}

	xacThuc=(url)=> {
		localStorage.removeItem("user");
		document.location.reload(true);
		$('#myModal8').modal('hide');
		window.open(url, '_blank').focus();
	}



	randomItemIndex=()=>{
		// var item = items[Math.floor(Math.random()*items.length)];
	}

	numberWithCommas=(x)=> {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	sanqua=()=>{
		$('#Modalthele').modal('show');
	}

	dangNhap=()=>{
		var user = JSON.parse(localStorage.getItem("user"));
		if (user === null) {
			$('#Modaldangnhap').modal('show');
		}
	}

	showTooltip=()=>{
		$('[data-toggle="tooltip"]').tooltip();
	}

	getTypeGiaiThuong=(type)=>{
		if(type===1){
			return "Giải thưởng săn quà"
		}else if(type===2){
			return "Giải thưởng đua top"
		}
	}

	getImgItem=(item)=>{
		var obj;
		switch (item) {
			case "ScoinCard10K":
				obj=img_card10k;
				break;
			case "ScoinCard20K":
				obj=img_card20k;
				break;
			case "ScoinCard50K":
				obj=img_card50k;
				break;
			case "ScoinCard100K":
				obj=img_card100k;
				break;
			case "ScoinCard200K":
				obj=img_card200k;
				break;
			case "ScoinCard300K":
				obj=img_card300k;
				break;
			case "ScoinCard500K":
				obj=img_card500k;
				break;
			case "ScoinCard1000K":
				obj=img_card1000k
				break;
			case "ScoinCard2000K":
				obj=img_card2000k
				break;
			case "ScoinCard5000K":
				obj=img_card5000k;
				break;
			case "TopupScoin50K":
				obj=logo_scoin;
				break;
			case "ScoinVoucher10K":
				obj=img_thescoinvoucher;
				break;
			case "BankTransferVoucher20K":
				obj=img_thescoinvoucher;
				break;
			default:
				obj=logo_scoin;
				break;
		}
		return obj;
	}

	timeModalGiaiThuowng=(time)=>{
		var start=time.substring(time.indexOf("(") +1,time.indexOf(")"));
		var times=(start-Date.now())/1000;
		var s='0h : 0m :0s';
		if(times>0){
			var day=Math.floor(times/86400) > 9 ? Math.floor(times/86400) : `0${Math.floor(times/86400)}`;
			var hour=Math.floor((times%86400)/3600) > 9 ? Math.floor((times%86400)/3600) : `0${Math.floor((times%86400)/3600)}`;
			var minute=Math.floor(((times%86400)%3600)/60) > 9 ? Math.floor(((times%86400)%3600)/60) : `0${Math.floor(((times%86400)%3600)/60)}`;
			var second=Math.ceil(((times%86400)%3600)%60) > 9 ? Math.ceil(((times%86400)%3600)%60) : `0${Math.ceil(((times%86400)%3600)%60)}`;
			s =`${hour}h : ${minute}m : ${second}s` ;
		}
		return s;
	}

	timeEnd=(time)=>{
		var start=time.substring(time.indexOf("(") +1,time.indexOf(")"));
		var a = new Date(+start);
		// var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var year = a.getFullYear();
		var m=a.getMonth()+1
		var month =m > 9 ? m : `0${m}`;
		var date = a.getDate();
		var hour = a.getHours() > 9 ? a.getHours() : `0${a.getHours()}`;
		var min = a.getMinutes() > 9 ? a.getMinutes() : `0${a.getMinutes()}`;
		var sec = a.getSeconds() > 9 ? a.getSeconds() : `0${a.getSeconds()}`;
		var s = hour + ':' + min + ':' + sec + " ngày " + date + '/' + month + '/' + year ;
		return s;
	}


	numberWithCommas=(x)=> {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	tab1=()=>{
		this.setState({tab_1:true, tab_2:false})
	}

	tab2=()=>{
		this.setState({tab_1:false, tab_2:true})
	}

	rollup=()=>{
		var user = JSON.parse(localStorage.getItem("user"));
		this.props.getRollup(user.Token).then(()=>{
			var data=this.props.dataRollup;
			if(data!==undefined){
				if(data.Status===0){
					this.setState({rollup:true, message_rollup: data.Message, type_action:'Điểm danh', showRollup:false}, ()=>{
						$('#Modalddthanhcong').modal('show');
					})
				}else if(data.Status===1){
					this.setState({rollup:false, message_rollup: data.Message}, ()=>{
						$('#Modalddthanhcong').modal('show');
					})
				}
			}
		})
	}


	showGiaithuong=(data)=>{
		var n=data.length;
		var items=''
		for (let i = 0; i < n; i++) {
			if(i < n-1){
				items=data[i].Description + ' + ' +items
			}else{
				items=items + ' ' + data[i].Description
			}
			
		}
		return items;
	}

	render() {
		const {message_sanqua_empty, listSanqua, showRollup,type_action, dataInfoDonate, rollup, message_rollup, content, warning_tudo,tab_1, tab_2, tab_tudo ,type,numberPage, isLogin,message_error,dataItem,listSesstions,
			waiting, activeTuDo, activeHistory, activeVinhDanh, limit, countTuDo, countHistory, countVinhDanh, listHistory, listTuDo, listVinhDanh, user}=this.state;
		return (<div>	
					<div class="container-fluid page position-relative">
						{/* <div id="tooltip" style={{width:400, height:40}}></div> */}
						{/* {(isLogin)?(<div class="login d-flex flex-row-reverse">
							<div class="align-self-center">
								<a title="Đăng nhập" onClick={this.logoutAction} style={{cursor:'pointer'}}><img src={btn_dangxuat} alt="" width="100" /></a>
							</div>
							<div class="text-center align-self-center pr-1">
								<p class="font-size-16 text-white mb-0">{user.Username}</p>
							</div>
						</div>):(<div class="login d-flex flex-row-reverse">
							<div class="align-self-center">
								<a title="Đăng nhập" onClick={this.loginAction} style={{cursor:'pointer'}}><img src={btn_dangnhap} alt="" width="100" /></a>
							</div>
						</div>)} */}
						
						<div class="bg-top position-relative">
							<div class="bg-bottom">
								<div class="btn-s position-relative">
									<Link to="/duatop">
										<a style={{cursor:'pointer'}}><img src={btn_duatop} width="200px" hspace="10" /></a>
									</Link>
								</div>
								
								<div class="bxh position-relative mx-auto">
									<ul class="nav nav-pills nav-justified" role="tablist">
										{/* <li class="nav-item">
											<a class="nav-link btn-vinhdanh p-0" onClick={()=>this.getVinhDanh(1,1)}><img src={type===1?btn_vinhdanhsanqua_active:btn_vinhdanhsanqua} width="340" hspace="5" id="image-1" /></a>
										</li> */}
										<li class="nav-item">
											<a class="nav-link btn-bxhduatop p-0"><img src={btn_bxhduatop_active} width="340" hspace="5" id="image-2" /></a>
										</li>
									</ul>
									
									<div class="tab-content bg-bxh">
										<div id="home" class="tab-pane active pt-3 pb-3 px-3" style={{minHeight:520}}>
											<table class="table table-borderless text-center font-size-16 mb-0 text-red" style={{tableLayout: "fixed", borderCollapse: "collapse", lineHeight: "35px"}}>
												<thead>
													<tr class="bg-border-bottom">
														<th class="p-1 bg-border-right w-33">Tài khoản</th>
														<th class="p-1 bg-border-right w-33">Tổng điểm</th>
														<th class="p-1 w-33">Số lượt phóng</th>
													</tr>
												</thead>
												<tbody>

													{listVinhDanh.map((obj, key) => (
														<tr key={key} class="bg-border-bottom">
															<td className="p-0 bg-border-right w-33">{obj.Username}</td>
															<td class="p-0 bg-border-right w-33" onMouseOver={this.showTooltip} ><span data-toggle="tooltip" data-placement="bottom" title={obj.TotalPoints}>{obj.TotalPoints}</span></td>
															<td className="p-0 w-33 w-33">{obj.Throws}</td>
														</tr>
													))}
												</tbody>
											</table>
											<div className="pagination justify-content-center pag-custom">
												<Pagination
													activePage={activeVinhDanh}
													itemsCountPerPage={10}
													totalItemsCount={countVinhDanh}
													pageRangeDisplayed={numberPage}
													lastPageText={'Trang cuối'}
													firstPageText={'Trang đầu'}
													itemClass={"page-item"}
													linkClass={"page-link"}
													onChange={(v) => this.handlePageChangeVinhDanh(type,v)}
												/>
											</div> 
										</div>        
									</div>
								</div>

								<div class="btn-h position-relative mt-2">
									<a href="Tel:19001104" title="Hot line"><img src={img_hotline} width="300" hspace="40" /></a>
								</div>
								<div class="btn-h position-relative mt-2 pb-2 font-size-16 text-white-50">
									<p class="text-center">
										Hệ thống phát hành game VTC Mobile
										<br></br>
										Copyright &copy;2021 VTC Mobile. All rights reserved
									</p>
									<p class="text-center mb-0 pb-1">
										Công ty Cổ Phần VTC Dịch Vụ Di Động <br></br>
										Tầng 11, Tòa nhà VTC Online, số 18 Tam Trinh, Hai Bà Trưng, Hà Nội <br></br>
										SĐT : (84-4).39877470 | Email : vtcmobile@vtc.vn <br></br>
										Người chịu trách nhiệm quản lý nội dung: Ông Nguyễn Viết Quang Minh <br></br>
										Tổng đài hỗ trợ 1900 1104
									</p>
								</div>
								{(showRollup)?(<div class="alert alert-info alert-diemdanh p-1 m-0">
									<span class="text-blink" style={{cursor:'pointer'}}><a onClick={this.rollup} title="Điểm danh" data-toggle="modal" >Điểm danh <strong>+ 5 phi tiêu</strong>.</a></span>
								</div>):(<div></div>)}
								
								<div class="menu-left">
									<a title="Hướng dẫn chơi" onClick={this.showModalHuongDan} style={{cursor:'pointer'}}><p class="mb-0 menu-link"></p></a>
									<a title="Giải thưởng" onClick={this.showModalGiaiThuong} style={{cursor:'pointer'}}><p class="mb-0 menu-link"></p></a>
								</div>	
								
							</div>
						</div> 
					</div>


			{/* <!-- The Modal Thông báo đăng nhập--> */}
			<div className="modal fade" id="Modaldangnhap">
				<div class="modal-dialog modal-dangnhap">
					<div class="modal-content bg-transparent border-0">
					<div class="modal-header border-0 p-0 text-dark">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body border-0">
						<h2 class="font-size-16 pt-4 font-weight-bold text-uppercase text-center">Bạn vẫn chưa đăng nhập</h2>
						<p class="text-center"><a title="Đăng nhập" onClick={this.loginAction}><img src={btn_dangnhap} width="30%" alt="" /></a></p>
					</div>

					</div>
				</div>
			</div>

			{/* <!-- The Modal Thông báo lỗi--> */}
			<div className="modal fade" id="myModal11" style={{zIndex:99999}}>
				<div class="modal-dialog modal-dangnhap">
					<div class="modal-content bg-transparent border-0">
					<div class="modal-header border-0 p-0 text-dark">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body border-0">
						<h2 class="font-size-16 pt-4 font-weight-bold text-uppercase text-center">{message_error}</h2>
					</div>

					</div>
				</div>
			</div>


			{/* <!-- The Modal Giai thuong--> */}
			<div class="modal fade" id="Modalgiaithuong">
				<div class="modal-dialog modal-giaithuong modal-dialog-scrollable">
					<div class="modal-content bg-transparent border-0">

						<div class="modal-header border-0 p-0">
							<button type="button" class="close text-dark" data-dismiss="modal">&times;</button>
						</div>
						<div class="modal-body border-0 py-0 my-4 px-4 ml-2 ">   
							{listSesstions.map((obj, key) => (
								<div class="row mx-0 mb-1 border-giaithuong-e position-relative d-flex justify-content-center" key={key}>
									<div class="col-12 text-center text-brown pt-1">
										<h2 class="font-size-16 font-weight-bold text-uppercase mb-0">{this.getTypeGiaiThuong(obj.SessionType)}</h2>
										{(obj.Status===0)?(<p class="font-size-16 mb-0">Còn: {this.timeModalGiaiThuowng(obj.StartTime)}</p>):(<div></div>)}
										{(obj.Status===1)?(<p class="font-size-16 mb-0 text-yellow text-blink"><span class="spinner-grow text-yellow" style={{width: ".8rem", height: ".8rem"}}></span> Đang diễn ra ... </p>):(<div></div>)}
										{(obj.Status===2)?( <p class="font-size-16 mb-0 text-danger">Đã kết thúc {this.timeEnd(obj.EndTime)}</p>):(<div></div>)}
										
									</div>

									{obj.Awards.map((v, j) => (
										<div class="col-4 text-center" key={j}>
											<p class="m-0"><img src={this.getImgItem(v.Name)} alt="" width="60%" /></p>
											<p class="font-size-16 text-yellow">{v.Description}</p>
										</div>
									))}

									{(obj.Status===2)?(<img class="img-dacochu" src={img_dacochu} alt="" width="30%" />):(<div></div>)}
									
								</div>
							))}

							
						</div>
					</div>
				</div>
			</div>


			{/* <!-- The Modal Huong Dan--> */}
			<div class="modal fade" id="Modalhuongdan">
				<div class="modal-dialog modal-huongdan modal-dialog-scrollable">
					<div class="modal-content bg-transparent border-0">

					{/* <!-- Modal Header --> */}
					<div class="modal-header border-0 p-0">
						<button type="button" class="close text-dark" data-dismiss="modal">&times;</button>
					</div>

					{/* <!-- Modal body --> */}
					<div class="modal-body order-0 py-0 mt-4 mb-5 px-4 ml-2 scroll-modal-body">
						<ul class="nav nav-pills justify-content-around">
							<li class="nav-item">
								<a class="nav-link p-1" onClick={this.tab1}><img id="image-5" src={tab_1 ? tab_cachthucthamgia_active : tab_cachthucthamgia} width="120"  alt="" /></a>
							</li>
							<li class="nav-item">
								<a class="nav-link p-1" onClick={this.tab2}><img id="image-7" src={tab_2 ? tab_hdduatop_active : tab_hdduatop} width="120" alt="" /></a>
							</li>
						</ul>
						
						{/* <!-- Tab panes --> */}
						<div class="tab-content">
							{/* <!-- Tab hd1 --> */}
						<div class={tab_1 ? "tab-pane container mt-3 active" : "tab-pane container mt-3 fade"} id="hd1">
							<h4 class="font-size-16 font-weight-bold">1. Cách thức tham gia</h4>
							<dl class="font-size-16">
								<dt>- Đối tượng tham gia:</dt>
								<dd>•	Toàn bộ khách hàng đã đăng kí tài khoản trên ứng dụng ON Plus.</dd>
								<dd>•	Nếu chưa đăng kí tài khoản, Khách hàng vui lòng đăng kí tài khoản để tham gia.</dd>
								<dt>- Cách thức tham gia:</dt>
								<dd>•	Trong thời gian diễn ra game, khi Khách hàng đăng ký tài khoản trên ứng dụng ON Plus thành công, thực hiện nhiệm vụ điểm danh vào ứng dụng hoặc khi khách hàng phát sinh giao dịch mua gói cước thành công, tài khoản sẽ được nhận phi tiêu để tham gia game, số phi tiêu được quy định như sau:</dd>
								<dd> 
									<table class="table table-bordered table-hover mx-auto" style={{width: "90%"}}>
										<thead>
										<tr>
											<th class="p-1">Nhiệm vụ</th>
											<th class="p-1">Số phi tiêu nhận</th>
											<th class="p-1">Số lượt phóng</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="p-1">Điểm danh</td>
											<td class="p-1">5</td>
											<td class="p-1">5</td>
										</tr>
										<tr>
											<td class="p-1">Khách hàng mới</td>
											<td class="p-1">10</td>
											<td class="p-1">10</td>
										</tr>
										<tr>
											<td class="p-1">Khách hàng mua gói cước ngày</td>
											<td class="p-1">20</td>
											<td class="p-1">20</td>
										</tr>
										<tr>
											<td class="p-1">Khách hàng mua gói cước tháng</td>
											<td class="p-1">50</td>
											<td class="p-1">40</td>
										</tr>
										<tr>
											<td class="p-1">Khách hàng mua gói cước năm</td>
											<td class="p-1">100</td>
											<td class="p-1">100</td>
										</tr>
										
										</tbody>
									</table>
								</dd>            
								<dd> - Sau khi nhận được Phi tiêu, khách hàng chọn ĐUA TOP để chơi.</dd>
								<dd> <img src={btn_sanqua_duatop} width="350" class="img-fluid d-block mx-auto" alt="" /></dd>
								<dd> - Khách hàng vuốt màn hình điện thoại để ném phi tiêu vào bảng</dd>
								<dd> <img src={nem_phi_tieu} width="350" class="img-fluid d-block mx-auto" alt="" /></dd>
								<dd> <img src={huy_nem_tieu} width="350" class="img-fluid d-block mx-auto" alt="" /></dd>
								<dd> - Người chơi nhận được số <strong>ĐIỂM</strong> tương ứng với <strong>VỊ TRÍ</strong> phi tiêu tại bảng như sau: (khu vực tô vàng)</dd>
								<dd> <img src={khu_vuc_1} width="350" class="img-fluid d-block mx-auto" alt="" /></dd>
								<dd> <img src={khu_vuc_2} width="350" class="img-fluid d-block mx-auto" alt="" /></dd>
								<dd> <img src={khu_vuc_3} width="350" class="img-fluid d-block mx-auto" alt="" /></dd>
								<dd> <img src={vong_tron_ngoai} width="350" class="img-fluid d-block mx-auto" alt="" /></dd>
								<dd> <img src={vong_tron_trong} width="350" class="img-fluid d-block mx-auto" alt="" /></dd>
							</dl>          
						</div>
						{/* <!-- End Tab hd1 -->
						<!-- Begin Tab hd2 --> */}
						<div class={tab_2 ? "tab-pane container mt-3 active" : "tab-pane container mt-3 fade"} id="hd2">
							<h4 class="font-size-16 font-weight-bold">2.  Đua TOP</h4>
							<dl class="font-size-16">
								<dd>- Mỗi tài khoản có số điểm mặc định ban đầu là 0 điểm.</dd>                
								<dd>- Người chơi sử dụng số Phi tiêu mình có để ném vào bảng, số điểm nhận được sau mỗi lần ném sẽ được CỘNG dồn vào tổng điểm đang có.</dd>
								<dd>- Kết thúc Phiên Đua top, tài khoản có tổng điểm CAO nhất, CAO thứ hai và CAO thứ ba sẽ là người THẮNG cuộc và nhận được giải thưởng.</dd>  
								<dd>- Trường hợp nhiều người chơi có tổng điểm cao nhất bằng nhau, thứ hạng được xếp theo quy định người thắng cuộc là người đạt được số điểm cao nhất với số lượt phóng ít nhất.</dd>
                				<dd><em>-	Lưu ý: Trong trường hợp phát sinh tranh chấp, khiếu nại liên quan đến chương trình, Công ty VTC Mobile sẽ trực tiếp giải quyết và quyết định của VTC Mobile là kết quả cuối cùng. Mọi trường hợp gian lận hoặc không trung thực sẽ bị xử lý theo pháp luật.</em></dd>
								     
							</dl>	
						</div>
						
						</div>
						
					</div>
					{/* <!--End Modal body --> */}
					</div>
				</div>			
			</div>

			{/* <!-- The Modal banner bảo trì--> */}
			<div class="modal fade" id="Modalbanner">
				<div class="modal-dialog">
					<div class="modal-content bg-transparent border-0">
					<div class="modal-header border-0 p-0 m-0" style={{zIndex:99999}}>
						<button type="button" class="close text-dark" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body border-0 p-0 mt-n4">
						<img src={banner_thongbao_off} width="100%" alt="" />
					</div>

					</div>
				</div>
			</div>

			{/* <!-- The Modal Thông báo thay đổi thể lệ--> */}
			<div class="modal fade" id="Modalthele">
				<div class="modal-dialog modal-dangnhap">
					<div class="modal-content bg-transparent border-0">
					{/* <!-- Modal Header --> */}
					<div class="modal-header border-0 p-0 m-0" style={{zIndex:99999}}>
						<button type="button" class="close text-dark" data-dismiss="modal">&times;</button>
					</div>
					{/* <!-- Modal body --> */}
					<div class="modal-body border-0 mt-n4">
						<h2 class="font-size-16 pt-4 font-weight-bold text-uppercase text-center">Điều chỉnh thể lệ Săn quà kể từ 8h 8/8/2021</h2>
						<p class="font-size-16 mb-0 text-center">-  Người chơi chiến thắng <strong>PHẢI</strong> là người đưa tổng điểm <strong>VỀ 0 SỚM NHẤT</strong>.</p>
						<p class="font-size-16 mb-0 text-center">-  Nếu không có người chơi nào đưa được điểm về 0, giải thưởng được bảo lưu và cộng dồn vào Phiên chơi tiếp theo.</p>
						<p class="text-center"><a href="/sanqua" title="Đồng ý vào Săn Quà"><img class="mt-2" src={btn_dongy} width="120" alt="Săn Quà" /></a></p>
					</div>

					</div>
				</div>
			</div>

			{/* <!-- The Modal Điểm danh thành công--> */}
			<div class="modal fade" id="Modalddthanhcong">
				<div class="modal-dialog modal-sm">
					<div class="modal-content border-0">
					<div class="modal-header border-0 p-0 text-dark">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body border-0 pt-0 text-center">
						{(rollup)?(<p class="text-info font-size-18 mb-2"><img src={icon_success} width="24" class="" alt="" /> {type_action} thành công</p>):(
							<p class="text-info font-size-18 mb-2">Thông Báo</p>
						)}
						
						<p class="text-red font-size-18">{message_rollup}</p>
					</div>

					</div>
				</div>
			</div>


			{/* <!-- The Modal Điểm danh thành công--> */}
			<div class="modal fade" id="ModalListEmpty">
				<div class="modal-dialog modal-sm">
					<div class="modal-content border-0">
					<div class="modal-header border-0 p-0 text-dark">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body border-0 pt-0 text-center">
						<p class="text-info font-size-18 mb-2">Thông Báo</p>
						
						<div class="text-red font-size-18" dangerouslySetInnerHTML={{__html: 'Hiện không có phiên Săn Quà.</br> Bạn vào mục Trang Chủ -> Giải Thưởng để xem thông tin phiên kế tiếp nhé!'}}></div>
					</div>

					</div>
				</div>
			</div>


				{/* <ReactResizeDetector handleWidth={true} handleHeight={true} onResize={this.onResize} /> */}


		</div>)
	}
}

const mapStateToProps = state => ({
	dataSanqua: state.lucky.dataSanqua,
	dataCheckRollup: state.lucky.dataCheckRollup,
	dataRollup: state.lucky.dataRollup,
	dataInfoDonate: state.lucky.dataInfoDonate,
	dataDonate: state.lucky.dataDonate,
	dataProfile: state.profile.data,
	dataSesions: state.lucky.dataSesions,
	dataLuckyInfo: state.lucky.dataLuckyInfo,
	dataLuckyItems:state.lucky.dataLuckyItems,
	dataInfoUser:state.lucky.dataInfoUser,
	dataUserSpin:state.lucky.dataUserSpin,
	dataItemAward:state.lucky.dataItemAward,
	dataRotation:state.lucky.dataRotation,
	dataRotationWithUser:state.lucky.dataRotationWithUser,
	dataPick: state.lucky.dataPick,
	dataDetail: state.lucky.dataDetail,
	dataTurn: state.lucky.dataTurn,
	dataTuDo: state.lucky.dataTuDo,
	dataHistoryTuDo: state.lucky.dataHistoryTuDo,
	dataVinhDanh: state.lucky.dataVinhDanh,
	server:state.server.serverError,
	waiting: state.lucky.waiting,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	getMoreSessions,
	pickCard,
	getInfoUser,
	getItemAward,
	getHistoryTuDo,
	getData,
	getTuDo,
	getVinhDanh,
	getLuckyInfo,
	getLuckyItems,
	userLogout,
	gds,
	getRollup,
	getDonate,
	getInfoDonate,
	checkRollup,
	getListSanQua,
	getDuatopVtvCard
}, dispatch)


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Lucky_Rotation)
