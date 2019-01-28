var postsData = require('../../../data/posts_data.js'); // 这里只能用相对路径引用

Page({
    onLoad: function (option) {
        let postId = option.id;
        let postData = postsData.postList[postId];
        this.setData({
            postData: postData 
        })
    }
});