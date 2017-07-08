const host = 'https://mainsite-restapi.ele.me';

const imgHost = 'https://fuss10.elemecdn.com';

//首页接口api
//定位
//参数： latitude longitude
const geo = '/bgs/poi/reverse_geo_coding'; 

//天气
//参数： latitude longitude
const weather = '/bgs/weather/current';

//热门词
//参数： latitude longitude
const hotwords = '/shopping/v3/hot_search_words';

//轮播
//参数： latitude longitude  templates[]=main_template
const banner = '/shopping/v2/entries';

//列表
//轮播
//参数： latitude longitude  offset  limit
const list = '/shopping/restaurants';


// 搜索地址（需要满足用户输入1秒后在查询）
// https://mainsite-restapi.ele.me
// /bgs/poi/search_poi_nearby
// 参数keyword={输入的地址}&offset=0 &limit=20
const search = '/bgs/poi/search_poi_nearby';


//热门词搜索
// https://mainsite-restapi.ele.me
// /shopping/v1/restaurants/search
// ?offset=0
// &limit=20
// &keyword={热门词}
// &latitude=
// &longitude=;
// &search_item_type=2
// &extra[]=activities
const hotwords2 = '/shopping/v1/restaurants/search';

// 商家分类列表
// https://mainsite-restapi.ele.me
// /shopping/v2/restaurant/category
// ?latitude=22.54286&longitude=114.059563
const category = '/shopping/v2/restaurant/category';






//https://mainsite-restapi.ele.me
///shopping/v3/hot_search_words
//?geohash=ws0bwr6nfz023mrtefw690&latitude=22.6289124&longitude=113.8322107搜索


// 关键词搜索
// https://mainsite-restapi.ele.me
// /shopping/restaurants
// ?latitude=22.54286
// &longitude=114.059563
// &keyword=
// &offset=0
// &limit=20
// &extras[]=activities
// &restaurant_category_ids[]={分类id}
// &order_by={排序方式 取值1~6}
// support_ids[]={筛选id}



//https://mainsite-restapi.ele.me
///shopping/restaurants
//?latitude=22.62628&longitude=113.83774&keyword=&offset=0&limit=20&extras[]=activities

const restaurants = '/shopping/restaurants'



//商家信息详情
//https://mainsite-restapi.ele.me
///shopping/restaurant/{商家id}
//?extras[]=activities
//&extras[]=albums
//&extras[]=license
//&extras[]=identification
//&latitude=22.54286
//&longitude=114.059563

const detail = '/shopping/restaurant'


// 商家商品详情
// https://mainsite-restapi.ele.me
// /shopping/v2/menu
// ?restaurant_id={商家id}


const shoppingv2 = '/shopping/v2/menu'



// 
// 商家评价分类
// https://mainsite-restapi.ele.me
// /ugc/v2/restaurants/{商家id}/ratings/tags
// 
// 商家评价
// https://mainsite-restapi.ele.me
// /ugc/v2/restaurants/{商家id}/ratings
// ?has_content=true
// &tag_name={全部，满意，不满意等。。。}
// &offset=10
// &limit=10



//https://mainsite-restapi.ele.me/shopping/restaurants?latitude=22.6289355&longitude=113.8320917&keyword=&offset=0&limit=20&extras[]=activities&restaurant_category_ids[]=209&restaurant_category_ids[]=211&restaurant_category_ids[]=212&restaurant_category_ids[]=213&restaurant_category_ids[]=214&restaurant_category_ids[]=215&restaurant_category_ids[]=216&restaurant_category_ids[]=217&restaurant_category_ids[]=218&restaurant_category_ids[]=219&restaurant_category_ids[]=221&restaurant_category_ids[]=222&restaurant_category_ids[]=223&restaurant_category_ids[]=224&restaurant_category_ids[]=225&restaurant_category_ids[]=226&restaurant_category_ids[]=227&restaurant_category_ids[]=228&restaurant_category_ids[]=229&restaurant_category_ids[]=230&restaurant_category_ids[]=231&restaurant_category_ids[]=232&restaurant_category_ids[]=234&restaurant_category_ids[]=235&restaurant_category_ids[]=236&restaurant_category_ids[]=237&restaurant_category_ids[]=238&restaurant_category_ids[]=263&restaurant_category_ids[]=264&restaurant_category_ids[]=265&restaurant_category_ids[]=266&restaurant_category_ids[]=267&restaurant_category_ids[]=268&restaurant_category_ids[]=269




export default {
	geoApi: host+geo,
	weatherApi: host+weather,
	hotwordsApi: host+hotwords,
	bannerApi: host+banner,
	listApi: host+list,
	imgHost,
	searchadd:host+search,
	hotwordsApi2:host+hotwords2,
	categoryApi:host+category,
	restaurantsApi:host+restaurants,
	detailApi:host+detail,
	shoppingv2Api:host+shoppingv2
}
