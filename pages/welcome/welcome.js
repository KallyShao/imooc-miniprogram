Page({
    _handleTap: function(){
        // navigateTo是从父级跳到子级
        // wx.navigateTo({  
        //     url: '../posts/post'
        // });

        wx.redirectTo({
            url: '../posts/post'
        })
    }
})