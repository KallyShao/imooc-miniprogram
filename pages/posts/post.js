var postsData = require('../../data/posts_data.js'); // 这里只能用相对路径引用

Page({
    onLoad: function() {
        this.setData({
            postList: postsData.postList
        });

        wx.setStorageSync('name', {
            age: 18,
            addr: 'guagnzhou'
        });
    },
    _handlePostTap: function(event){
        let postId = event.currentTarget.dataset.postid; 
        wx.navigateTo({
            url: 'post-detail/post-detail?id=' + postId
        })
    }
});