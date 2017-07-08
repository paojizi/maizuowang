//轮播
const banner = '/api/billboard/home?__t=1498871531912';

//首页列表
const homelist = '/api/film/now-playing?__t=1498871531920&page=1&count=5';


//首页列表更多
const homelistmore = '/api/film/coming-soon?__t=1498871531925&page=1&count=3';

//定位
const address = '/api/city?__t=1498978564655'

///api/film/3714?__t=1499001604212

//热映
const film = '/api/film/now-playing?'

//即将上映
const coming = '/api/film/coming-soon?'

//影院
const cinema = '/api/cinema?__t=1499074742286'

//影院详情
///api/cinema/3280?__t=1499160948837
const cinemadetail = 'api/cinema/'

const detail = '/api/film/'





export default{
	bannerApi:banner,
	homelistApi:homelist,
	homelistmoreApi:homelistmore,
	addressApi:address,
	filmApi:film,
	comingApi:coming,
	cinemaApi:cinema,
	detailApi:detail,
	cinemadetailApi:cinemadetail
}
