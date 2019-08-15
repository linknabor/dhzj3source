import xml2js from'xml2js' 
var xmlParser = new xml2js.Parser({explicitArray : false, ignoreAttrs : true})
    //xml转json
import wx from 'weixin-js-sdk';


let receiveData = {

    /*
     * 通过axios获取API数据,并将请求回来列表数据，自动装载到Vue实例模板中
     * @param  {objec} vm     [Vue实例]
     * @param  {string} url    [ajax地址]
     * @param  {string} backdataname [存储ajax返回数据的vm节点的key]
     * @params {object} callback  [回调函数]
     * @param  {object} params       [请求参数]
     */
        //请求数据统一的方法
    getData: function (vm, url, backdataname,callback,params) {
        if (typeof (params) == 'undefined' || typeof (params) != 'object') {
            params = {}
        };
        if (backdataname == '' || typeof (backdataname) != 'string') {
            backdataname = 'data';
        };
        vm.axios.get(url, {
                params: params
            })
            .then(function (res){
                let a = JSON.parse(res.data)
                vm[backdataname] = a
                if (typeof (callback) == 'function') {//回调
                    callback()
                }
            })
            .catch(function (err) {
                //alert('暂放-接口调用失败')
                console.log(err);
                // alert(err.message);
            })
    },
   /**
     * post方式提交数据（增加）
     * @param  {object} vm           [vue实例]
     * @param  {string} url          [ajax地址]
     * @param  {object} params       [请求参数]
     * @param  {object} callback     [请求成功后的回调函数]
     */
    postData: function (vm, url, params,backdataname,callback,failback) {
        if (typeof (params) == 'undefined' || typeof (params) != 'object') {
            params = {}
        };
        vm.axios.post(url, params)
            .then(function (res) {

                let a = res.data;
                 vm[backdataname] = JSON.parse(a);
                // xmlParser.parseString(a, function (err, result) {
                // //将返回的结果赋值
                //  vm[backdataname] = result.BaseResult
                // });
                if (typeof (callback) == 'function') {//回调
                        callback()
                }

            })
            .catch(function (err) {
                if(vm.loadingShow){
                    vm.loadingShow = false;
                }
                if (typeof (failback) == 'function') {//回调
                        failback()
                }
                ;
            });
    },

    


};
       
export default receiveData;