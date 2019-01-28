var postsData = require('../../data/posts_data.js'); // 这里只能用相对路径引用

Page({
    onLoad: function() {
        this.setData({
            postList: postsData.postList
        });
    }
});