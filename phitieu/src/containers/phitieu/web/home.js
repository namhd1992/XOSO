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

import sua_tam_nuoc_hoa from './images/sua-tam-nuoc-hoa.jpg';
import noi_chien_khong_dau from './images/noi-chien-khong-dau.jpg';
import goi_massage from './images/goi-massage.jpg';



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
				this.setState({content:	`C?? <b>${user.Gifts}</b> m??n qu?? ch??a m???`})
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
		

		this.getDuatopVtvCard(2,1);
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
		// this.props.getMoreSessions().then(()=>{
		// 	var data=this.props.dataSesions;
		// 	if(data!==undefined){
		// 		if(data.Status===0){
		// 			this.setState({listSesstions:data.Data}, ()=>{
		// 				$('#Modalgiaithuong').modal('show');
		// 			})
		// 		}else if(data.Status===2){
		// 			this.setState({message_error:data.Message}, ()=>{
		// 				$('#myModal11').modal('show');
		// 			})
		// 		}else if(data.Status===3){
		// 			this.logoutAction();
		// 		}else{
		// 			console.log("L???i")
		// 		}
		// 	}
		// })
		$('#Modalgiaithuong').modal('show');
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
						this.setState({message_error:'Kh??ng l???y ???????c d??? li???u b???ng vinh danh.'})
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
				console.log("Tr??nh duy???t kh??ng h??? tr??? localStorage");
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
					this.setState({message_error:'Ch??a t???i ???????c d??? li???u. Vui l??ng th??? l???i'})
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
			return "Gi???i th?????ng s??n qu??"
		}else if(type===2){
			return "Gi???i th?????ng ??ua top"
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
		var s = hour + ':' + min + ':' + sec + " ng??y " + date + '/' + month + '/' + year ;
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
					this.setState({rollup:true, message_rollup: data.Message, type_action:'??i???m danh', showRollup:false}, ()=>{
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
								<a title="????ng nh???p" onClick={this.logoutAction} style={{cursor:'pointer'}}><img src={btn_dangxuat} alt="" width="100" /></a>
							</div>
							<div class="text-center align-self-center pr-1">
								<p class="font-size-16 text-white mb-0">{user.Username}</p>
							</div>
						</div>):(<div class="login d-flex flex-row-reverse">
							<div class="align-self-center">
								<a title="????ng nh???p" onClick={this.loginAction} style={{cursor:'pointer'}}><img src={btn_dangnhap} alt="" width="100" /></a>
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
														<th class="p-1 bg-border-right w-33">T??i kho???n</th>
														<th class="p-1 bg-border-right w-33">T???ng ??i???m</th>
														<th class="p-1 w-33">S??? l?????t ph??ng</th>
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
													lastPageText={'Trang cu???i'}
													firstPageText={'Trang ?????u'}
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
										H??? th???ng ph??t h??nh game VTC Mobile
										<br></br>
										Copyright &copy;2021 VTC Mobile. All rights reserved
									</p>
									<p class="text-center mb-0 pb-1">
										C??ng ty C??? Ph???n VTC D???ch V??? Di ?????ng <br></br>
										T???ng 11, T??a nh?? VTC Online, s??? 18 Tam Trinh, Hai B?? Tr??ng, H?? N???i <br></br>
										S??T : (84-4).39877470 | Email : vtcmobile@vtc.vn <br></br>
										Ng?????i ch???u tr??ch nhi???m qu???n l?? n???i dung: ??ng Nguy???n Vi???t Quang Minh <br></br>
										T???ng ????i h??? tr??? 1900 1104
									</p>
								</div>
								{(showRollup)?(<div class="alert alert-info alert-diemdanh p-1 m-0">
									<span class="text-blink" style={{cursor:'pointer'}}><a onClick={this.rollup} title="??i???m danh" data-toggle="modal" >??i???m danh <strong>+ 5 phi ti??u</strong>.</a></span>
								</div>):(<div></div>)}
								
								<div class="menu-left">
									<a title="H?????ng d???n ch??i" onClick={this.showModalHuongDan} style={{cursor:'pointer'}}><p class="mb-0 menu-link"></p></a>
									<a title="Gi???i th?????ng" onClick={this.showModalGiaiThuong} style={{cursor:'pointer'}}><p class="mb-0 menu-link"></p></a>
								</div>	
								
							</div>
						</div> 
					</div>


			{/* <!-- The Modal Th??ng b??o ????ng nh???p--> */}
			<div className="modal fade" id="Modaldangnhap">
				<div class="modal-dialog modal-dangnhap">
					<div class="modal-content bg-transparent border-0">
					<div class="modal-header border-0 p-0 text-dark">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body border-0">
						<h2 class="font-size-16 pt-4 font-weight-bold text-uppercase text-center">B???n v???n ch??a ????ng nh???p</h2>
						<p class="text-center"><a title="????ng nh???p" onClick={this.loginAction}><img src={btn_dangnhap} width="30%" alt="" /></a></p>
					</div>

					</div>
				</div>
			</div>

			{/* <!-- The Modal Th??ng b??o l???i--> */}
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
						<div class="modal-body border-0 py-0 mb-2 mt-3 px-3 scroll-modal-body w-100">        
							<div class="row ml-2 mr-0 mb-1 border-giaithuong-e">
							<div class="col-12 text-center text-brown pt-1">
								<h2 class="font-size-3vw font-weight-bold text-uppercase mb-0 btn btn-warning">Gi???i nh???t</h2> 
									<p class="font-size-3vw font-weight-bold mb-1">G???i massage G-MINNIE EZ</p>
									<p class="font-size-3vw font-weight-bold mb-1"><a target="_blank"><img src={goi_massage} alt="" width="30%" /></a></p>              
								</div>
							</div>
							<div class="row ml-2 mr-0 mb-1 border-giaithuong-e">
							<div class="col-12 text-center text-brown pt-1">
								<h2 class="font-size-3vw font-weight-bold text-uppercase mb-0 btn text-danger border-danger">Gi???i nh??</h2> 
									<p class="font-size-3vw font-weight-bold mb-1">N???i chi??n kh??ng d???u 4.5L Sunhouse Mama SHD4086W</p>
									<p class="font-size-3vw font-weight-bold mb-1"><a target="_blank"><img src={noi_chien_khong_dau} alt="" width="30%" /></a></p>              
								</div>
							</div>
							<div class="row ml-2 mr-0 mb-1 border-giaithuong-e">
							<div class="col-12 text-center text-brown pt-1">
								<h2 class="font-size-3vw font-weight-bold text-uppercase mb-0 btn text-danger border-danger">Gi???i ba</h2> 
									<p class="font-size-3vw font-weight-bold mb-1">S???a t???m h????ng n?????c hoa Adiva Sweet Memories</p>
									<p class="font-size-3vw font-weight-bold mb-1"><a target="_blank"><img src={sua_tam_nuoc_hoa} alt="" width="30%" /></a></p>              
								</div>
							</div>
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
							<h4 class="font-size-16 font-weight-bold">1. C??ch th???c tham gia</h4>
							<dl class="font-size-16">
								<dt>- ?????i t?????ng tham gia:</dt>
								<dd>???	To??n b??? kh??ch h??ng ???? ????ng k?? t??i kho???n tr??n ???ng d???ng ON Plus.</dd>
								<dd>???	N???u ch??a ????ng k?? t??i kho???n, Kh??ch h??ng vui l??ng ????ng k?? t??i kho???n ????? tham gia.</dd>
								<dt>- C??ch th???c tham gia:</dt>
								<dd>???	Trong th???i gian di???n ra game, khi Kh??ch h??ng ????ng k?? t??i kho???n tr??n ???ng d???ng ON Plus th??nh c??ng, th???c hi???n nhi???m v??? ??i???m danh v??o ???ng d???ng ho???c khi kh??ch h??ng ph??t sinh giao d???ch mua g??i c?????c th??nh c??ng, t??i kho???n s??? ???????c nh???n phi ti??u ????? tham gia game, s??? phi ti??u ???????c quy ?????nh nh?? sau:</dd>
								<dd> 
									<table class="table table-bordered table-hover mx-auto" style={{width: "90%"}}>
										<thead>
										<tr>
											<th class="p-1">Nhi???m v???</th>
											<th class="p-1">S??? phi ti??u nh???n</th>
											<th class="p-1">S??? l?????t ph??ng</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="p-1">??i???m danh</td>
											<td class="p-1">5</td>
											<td class="p-1">5</td>
										</tr>
										<tr>
											<td class="p-1">Kh??ch h??ng m???i</td>
											<td class="p-1">10</td>
											<td class="p-1">10</td>
										</tr>
										<tr>
											<td class="p-1">Kh??ch h??ng mua g??i c?????c ng??y</td>
											<td class="p-1">20</td>
											<td class="p-1">20</td>
										</tr>
										<tr>
											<td class="p-1">Kh??ch h??ng mua g??i c?????c th??ng</td>
											<td class="p-1">40</td>
											<td class="p-1">40</td>
										</tr>
										<tr>
											<td class="p-1">Kh??ch h??ng mua g??i c?????c n??m</td>
											<td class="p-1">100</td>
											<td class="p-1">100</td>
										</tr>
										
										</tbody>
									</table>
								</dd>            
								<dd> - Sau khi nh???n ???????c Phi ti??u, kh??ch h??ng ch???n ??UA TOP ????? ch??i.</dd>
								<dd> <img src={btn_sanqua_duatop} width="350" class="img-fluid d-block mx-auto" alt="" /></dd>
								<dd> - Kh??ch h??ng vu???t m??n h??nh ??i???n tho???i ????? n??m phi ti??u v??o b???ng</dd>
								<dd> <img src={nem_phi_tieu} width="350" class="img-fluid d-block mx-auto" alt="" /></dd>
								<dd> <img src={huy_nem_tieu} width="350" class="img-fluid d-block mx-auto" alt="" /></dd>
								<dd> - Ng?????i ch??i nh???n ???????c s??? <strong>??I???M</strong> t????ng ???ng v???i <strong>V??? TR??</strong> phi ti??u t???i b???ng nh?? sau: (khu v???c t?? v??ng)</dd>
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
							<h4 class="font-size-16 font-weight-bold">2.  ??ua TOP</h4>
							<dl class="font-size-16">
								<dd>- M???i t??i kho???n c?? s??? ??i???m m???c ?????nh ban ?????u l?? 0 ??i???m.</dd>                
								<dd>- Ng?????i ch??i s??? d???ng s??? Phi ti??u m??nh c?? ????? n??m v??o b???ng, s??? ??i???m nh???n ???????c sau m???i l???n n??m s??? ???????c C???NG d???n v??o t???ng ??i???m ??ang c??.</dd>
								<dd>- K???t th??c Phi??n ??ua top, t??i kho???n c?? t???ng ??i???m CAO nh???t, CAO th??? hai v?? CAO th??? ba s??? l?? ng?????i TH???NG cu???c v?? nh???n ???????c gi???i th?????ng.</dd>  
								<dd>- Tr?????ng h???p nhi???u ng?????i ch??i c?? t???ng ??i???m cao nh???t b???ng nhau, th??? h???ng ???????c x???p theo quy ?????nh ng?????i th???ng cu???c l?? ng?????i ?????t ???????c s??? ??i???m cao nh???t v???i s??? l?????t ph??ng ??t nh???t.</dd>
                				<dd><em>-	L??u ??: Trong tr?????ng h???p ph??t sinh tranh ch???p, khi???u n???i li??n quan ?????n ch????ng tr??nh, C??ng ty VTC Mobile s??? tr???c ti???p gi???i quy???t v?? quy???t ?????nh c???a VTC Mobile l?? k???t qu??? cu???i c??ng. M???i tr?????ng h???p gian l???n ho???c kh??ng trung th???c s??? b??? x??? l?? theo ph??p lu???t.</em></dd>
								     
							</dl>	
						</div>
						
						</div>
						
					</div>
					{/* <!--End Modal body --> */}
					</div>
				</div>			
			</div>

			{/* <!-- The Modal banner b???o tr??--> */}
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

			{/* <!-- The Modal Th??ng b??o thay ?????i th??? l???--> */}
			<div class="modal fade" id="Modalthele">
				<div class="modal-dialog modal-dangnhap">
					<div class="modal-content bg-transparent border-0">
					{/* <!-- Modal Header --> */}
					<div class="modal-header border-0 p-0 m-0" style={{zIndex:99999}}>
						<button type="button" class="close text-dark" data-dismiss="modal">&times;</button>
					</div>
					{/* <!-- Modal body --> */}
					<div class="modal-body border-0 mt-n4">
						<h2 class="font-size-16 pt-4 font-weight-bold text-uppercase text-center">??i???u ch???nh th??? l??? S??n qu?? k??? t??? 8h 8/8/2021</h2>
						<p class="font-size-16 mb-0 text-center">-  Ng?????i ch??i chi???n th???ng <strong>PH???I</strong> l?? ng?????i ????a t???ng ??i???m <strong>V??? 0 S???M NH???T</strong>.</p>
						<p class="font-size-16 mb-0 text-center">-  N???u kh??ng c?? ng?????i ch??i n??o ????a ???????c ??i???m v??? 0, gi???i th?????ng ???????c b???o l??u v?? c???ng d???n v??o Phi??n ch??i ti???p theo.</p>
						<p class="text-center"><a href="/sanqua" title="?????ng ?? v??o S??n Qu??"><img class="mt-2" src={btn_dongy} width="120" alt="S??n Qu??" /></a></p>
					</div>

					</div>
				</div>
			</div>

			{/* <!-- The Modal ??i???m danh th??nh c??ng--> */}
			<div class="modal fade" id="Modalddthanhcong">
				<div class="modal-dialog modal-sm">
					<div class="modal-content border-0">
					<div class="modal-header border-0 p-0 text-dark">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body border-0 pt-0 text-center">
						{(rollup)?(<p class="text-info font-size-18 mb-2"><img src={icon_success} width="24" class="" alt="" /> {type_action} th??nh c??ng</p>):(
							<p class="text-info font-size-18 mb-2">Th??ng B??o</p>
						)}
						
						<p class="text-red font-size-18">{message_rollup}</p>
					</div>

					</div>
				</div>
			</div>


			{/* <!-- The Modal ??i???m danh th??nh c??ng--> */}
			<div class="modal fade" id="ModalListEmpty">
				<div class="modal-dialog modal-sm">
					<div class="modal-content border-0">
					<div class="modal-header border-0 p-0 text-dark">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
					</div>
					<div class="modal-body border-0 pt-0 text-center">
						<p class="text-info font-size-18 mb-2">Th??ng B??o</p>
						
						<div class="text-red font-size-18" dangerouslySetInnerHTML={{__html: 'Hi???n kh??ng c?? phi??n S??n Qu??.</br> B???n v??o m???c Trang Ch??? -> Gi???i Th?????ng ????? xem th??ng tin phi??n k??? ti???p nh??!'}}></div>
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
