# 项目介绍
## 登录界面 
- 账号密码输入错误会提醒用户

![login](https://wx1.sinaimg.cn/mw690/006JXoa0ly1g70idn0rbsj30tx0gtwuq.jpg)

![login](https://wx2.sinaimg.cn/mw690/006JXoa0ly1g70igcv6gpj30ua0gjtov.jpg)

## 注册界面 
- 账号名重复会提醒用户账号已被注册

![register](https://wx1.sinaimg.cn/mw690/006JXoa0ly1g70idnfmzpj30u70h3h27.jpg)

- 注册成功

![sucess](https://wx4.sinaimg.cn/mw690/006JXoa0ly1g70idoj4p6j30tx0mrat0.jpg)

## 主界面 
- 新注册账号登陆时，订单界面暂无数据

![main](https://wx1.sinaimg.cn/mw690/006JXoa0ly1g70idnq0mtj30v20msau4.jpg)

![order](https://wx1.sinaimg.cn/mw690/006JXoa0ly1g70idmgqd1j30ay0km3zd.jpg)

![](https://wx4.sinaimg.cn/mw690/006JXoa0ly1g70idmh4lej31ca0klq3v.jpg)

- 下单界面:*手机号必须为11位*

![order](https://wx4.sinaimg.cn/mw690/006JXoa0ly1g70idmgz9rj30bk0k13z8.jpg)

- 下单后点击【我的订单】跳转路由，无需刷新页面即可显示刚刚下达的订单

![](https://wx2.sinaimg.cn/mw690/006JXoa0ly1g70idmhzuzj312q0lsmyd.jpg)

![](https://wx2.sinaimg.cn/mw690/006JXoa0ly1g70ie9pxe1j31ce08ct97.jpg)


# 总结

## 父子组件传值的问题

### 父组件→子组件
1. 子组件通过props来接受父组件的数据，props为一个数组。
2. 子组件可以通过$ref来绑定自己，或者绑定模板中的标签，并且通过**this.$refs.name**来实现你的需求,**注意**：如果此时$ref绑定的是子组件中的标签，那么只有子组件自己能访问得到，父组件无法访问，只有当$ref绑定在子组件本身时父组件才能访问。
3. 父组件可以通过$children来操控子组件的数据，此时$children返回的是一个组件集合，并且是默认排序的。	
4. 父组件可以通过$root来调用根Vue实例中的内容。

### 子组件→父组件
1. 子组件调用父组件的方法:①通过$emit来派发任务 ②通过$parent访问父组件。

*因为系统并没有正式上线，所以没有接入支付接口，界面显示虽然简单，但基本功能已经达成，若要查看全部订单只需要登入管理者账号即可。通过这次练习熟悉了vue-cli的多页面配置以及路由跳转的相关问题，同时学习了路由的钩子函数，掌握了用axios来进行前后端的数据请求*

## 碰到的一些问题

### 切换路由保存原来的数据
keep-alive标签实现

### watch函数的问题
这里要注意ES6的箭头函数中的this指向问题，最好用fuction

### 跨域的问题
这里因为是自己写的后端，所以采用的是CORS方法，设置Access-Control-Allow-Origin，下面分享一下别人总结的方案，一起学习。
[解决跨域问题](http://blog.ipalfish.com/?p=1324)
