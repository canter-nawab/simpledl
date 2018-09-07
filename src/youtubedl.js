
/** created by mayank */
window.onload=function()
{
    var videoUrls=window.ytplayer.config.args.url_encoded_fmt_stream_map.split(",").map(function(item){
        return item.split("&").reduce(function(pre,cur){
            console.log(pre,cur);
            cur=cur.split("=");
            return Object.assign(pre, {[cur[0]]: decodeURIComponent(cur[1])});
        },{});
    });
    console.log("Our extension has loaded",videoUrls);
}
