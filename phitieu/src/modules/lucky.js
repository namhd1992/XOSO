import axios from 'axios'
import Ultilities from '../Ultilities/global'
import {SERVER_ERROR} from './server'
export const LUCKY_REQUEST = 'lucky/LUCKY_REQUEST'
export const LUCKY_RESPONSE = 'lucky/LUCKY_RESPONSE'
export const LUCKY_ROTATION_DETAIL_RESPONSE = 'lucky/LUCKY_ROTATION_DETAIL_RESPONSE'
export const LUCKY_ROTATION_DETAIL_RESPONSE_USER = 'lucky/LUCKY_ROTATION_DETAIL_RESPONSE_USER'
export const LUCKY_DETAIL_RESPONSE = 'lucky/LUCKY_DETAIL_RESPONSE'
export const LUCKY_RESPONSE_MORE = 'lucky/LUCKY_RESPONSE_MORE'
export const LUCKY_PICK_RESPONSE = 'lucky/LUCKY_PICK_RESPONSE'
export const LUCKY_TURN_RESPONSE = 'lucky/LUCKY_TURN_RESPONSE'
export const LUCKY_HISTORY_RESPONSE='lucky/LUCKY_HISTORY_RESPONSE'
export const LUCKY_TU_DO='lucky/LUCKY_TU_DO';
export const LUCKY_HISTORY_TU_DO='lucky/LUCKY_HISTORY_TU_DO';
export const LUCKY_VINH_DANH='lucky/LUCKY_VINH_DANH';
export const LUCKY_CODE_BONUS='lucky/LUCKY_CODE_BONUS';
export const LUCKY_INFO='lucky/LUCKY_INFO'
export const LUCKY_ITEMS='lucky/LUCKY_ITEMS'
export const INFO_USER_RESPONSE='lucky/INFO_USER_RESPONSE'
export const DATA_USER_SPIN='lucky/DATA_USER_SPIN';
export const ITEM_AWARD='lucky/ITEM_AWARD';
export const LUCKY_SESSIONS='lucky/LUCKY_SESSIONS';

const initialState = {
	data: [], 
	waiting: false
}

export default (state = initialState, action) => { 
	switch (action.type) {
		case LUCKY_REQUEST:
			return {
				...state,
				waiting: true
			}
		case LUCKY_RESPONSE:
			return {
				...state,
				data: action.data,
				totalRecords: action.totalRecords,
				waiting: false
			}
		case LUCKY_RESPONSE_MORE:
			return {
				...state,
				data: state.data.concat(action.data),
				totalRecords: action.totalRecords,
				waiting: false
			}
		case LUCKY_DETAIL_RESPONSE:
			return {
				...state,
				dataDetail: action.data,
				waiting: false
			}
		case LUCKY_PICK_RESPONSE:
			return {
				...state,
				dataPick: action.data,
				waiting: false
			}
		case LUCKY_TURN_RESPONSE:
			return {
				...state,
				dataTurn: action.data,
				waiting: false
			}
		case LUCKY_HISTORY_RESPONSE:
			return {
				...state,
				dataHistory: action.data,
				waiting: false
			}
		case LUCKY_ROTATION_DETAIL_RESPONSE:
			return {
				...state,
				dataRotation: action.data,
				waiting: false
			}
		case LUCKY_ROTATION_DETAIL_RESPONSE_USER:
			return {
				...state,
				dataRotationWithUser: action.data,
				waiting: false
			}
		case LUCKY_TU_DO:
			return {
				...state,
				dataTuDo: action.data,
				waiting: false
			}
		case LUCKY_HISTORY_TU_DO:
			return {
				...state,
				dataHistoryTuDo: action.data,
				waiting: false
			}
		case LUCKY_VINH_DANH:
			return {
				...state,
				dataVinhDanh: action.data,
				waiting: false
			}
		case LUCKY_CODE_BONUS:
			return {
				...state,
				dataCodeBonus: action.data,
				waiting: false
			}
		case LUCKY_INFO:
			return {
				...state,
				dataLuckyInfo: action.data,
				waiting: false
			}
		case LUCKY_ITEMS:
			return {
				...state,
				dataLuckyItems: action.data,
				waiting: false
			}
		case INFO_USER_RESPONSE:
			return {
				...state,
				dataInfoUser: action.data,
				waiting: false
			}
		case DATA_USER_SPIN:
			return {
				...state,
				dataUserSpin: action.data,
				waiting: false
			}
		case ITEM_AWARD:
			return {
				...state,
				dataItemAward: action.data,
				waiting: false
			}
		case LUCKY_SESSIONS:
			return {
				...state,
				dataSesions: action.data,
				waiting: false
			}
		default:
			return state
	}
}

export const getLuckyInfo = (type, token) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"token": token,
		}
	}

	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "darts/user-get-current-session/?type="+type
		return axios.get(url, header).then(function (response) {
			console.log(response)
			dispatch({
				type: LUCKY_INFO,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getMoreSessions= () => {

	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "darts/current-sessions"
		return axios.get(url).then(function (response) {
			console.log(response)
			dispatch({
				type: LUCKY_SESSIONS,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const getDartScore = (type, points,sessionId,  token) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"token": token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + `darts/user-throw/?type=${type}&points=${points}&sessionId=${sessionId}`;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: DATA_USER_SPIN,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getVinhDanh = (limit, offset, type) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			// "token": token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "darts/award-table/?type="+type+"&limit=" + limit + "&offset=" + offset;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_VINH_DANH,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getTuDo = (token, limit, offset) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"token": token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "darts/user-awards?offset=" + offset + "&limit=" + limit;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_TU_DO,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const getHistoryTuDo = (token, limit, offset) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"token": token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "darts/user-history/?offset=" + offset + "&limit=" + limit;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_HISTORY_TU_DO,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const getLuckyItems = () => {
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "luckywheel/awards"
		return axios.get(url).then(function (response) {
			console.log(response)
			dispatch({
				type: LUCKY_ITEMS,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const getInfoUser = (token) => {
	
	var header = {
		headers: {
			"Content-Type": "application/json",
			"token": token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "luckywheel/user-signin";
		return axios.get(url, header).then(function (response) {
			console.log("response.data:",response.data)
			dispatch({
				type: INFO_USER_RESPONSE,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}





export const userLogout = (token) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"token": token,
		}
	}
	var url = Ultilities.base_url() + "luckywheel/user-signout";
	return axios.get(url, header).then(function (response) {
		console.log(response)
	}).catch(function (error) {
		console.log(error)
	})
}


export const pickCard = (token) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"token": token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		// var url = Ultilities.base_url() + "/awardSpin?spinId=" + id + "&scoinToken=" + scoinToken;
		var url = Ultilities.base_url() + "luckywheel/spin/?userToken=" + token;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_PICK_RESPONSE,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}



export const getItemAward = (token, award_id) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"token": token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "luckywheel/user-get-award?award-id=" + award_id;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: ITEM_AWARD,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getData = (limit, offset) => {
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin/get?limit=" + limit + "&offset=" + offset;
		return axios.get(url).then(function (response) {
			dispatch({
				type: LUCKY_RESPONSE,
				data: response.data.data,
				totalRecords: response.data.totalRecords
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getMoreData = (limit, offset) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin/get?limit=" + limit + "&offset=" + offset;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_RESPONSE_MORE,
				data: response.data,
				totalRecords: response.data.totalRecords
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getDetailData = (id) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			// "Authorization": "bearer " + token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin/detail?lucky_spin_id=" + id;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_DETAIL_RESPONSE,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}



export const buyTurn = (id, turn, spin_name) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			// "Authorization": "bearer " + token,
		}
	}
	var body = {
		spin_id: +id,
		number_turn: turn,
		spin_name:spin_name,
		// scoinToken: scoinToken
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin/buy-turn";
		return axios.post(url, body, header).then(function (response) {
			console.log(response.data)
			dispatch({
				type: LUCKY_TURN_RESPONSE,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const history = (id, type) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			// "Authorization": "bearer " + token,
		}
	}

	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin-history?lucky_spin_id="+id+'&type_gift='+type;
		return axios.get(url, header).then(function (response) {
			console.log(response.data)
			dispatch({
				type: LUCKY_HISTORY_RESPONSE,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const getRotationDetailData = (id) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			// "Authorization": "bearer " + token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "anonymous/lucky-spin/detail?lucky_spin_id=" + id;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_ROTATION_DETAIL_RESPONSE,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getRotationDetailDataUser = (token, id) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": "bearer " + token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin/detail?lucky_spin_id=" + id;
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_ROTATION_DETAIL_RESPONSE_USER,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}






export const getCodeBonus = (token, id, type) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": "bearer " + token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "lucky-spin-history?lucky_spin_id=" + id + '&type_gift='+type +"&limit=0";
		return axios.get(url, header).then(function (response) {
			dispatch({
				type: LUCKY_CODE_BONUS,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}