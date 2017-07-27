// change state
export default{
	// json data yes default parameter,my_parameter by me parameter
	setShopHeaderHeight({ commit, state },my_parameter) {
		console.log('success')
		commit('setShopHeaderHeight',my_parameter)
	}
}