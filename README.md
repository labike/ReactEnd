### React.js Open Source --- ReactEnd


#### clone  to local
> git clone 

#### install package.json
> npm/cnpm install 

#### install json-server
> cnpm/npm install json-server -g

#### start
> npm run dev 

#### start server
> npm run server

#### style
![image1](http://oo8h584mv.bkt.clouddn.com/reactEnd1)

#### json server
![image2](http://oo8h584mv.bkt.clouddn.com/reactEnd2)

#### data
![image](http://oo8h584mv.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-08-29%20%E4%B8%8A%E5%8D%889.48.38.png)

#### build project

```
$ mkdir reactEnd && cd reactEnd
$ mkdir app build
$ cd app mkdir actions reducers components store style views
```
```
├── app                 源码目录，在这个目录下做开发
│   ├── actions         存储可以发出的 action
│   │   ├── ajax.js     自主封装ajax
│   │   ├── login.js    控制登录验证
│   │   └── user.js     user的增删改查获取，弹出框控制action
│   ├── components      普通组件目录(如，弹出表单组件)
│   │   └── User
│   │       └── AlertUser.js   编辑添加弹出Form框组件
│   ├── index.js        入口文件，路由配置文件
│   ├── reducers        存放action的处理器reducers
│   │   ├── rootReducer.js
│   │   └── user.js
│   ├── store           全局 store 存储目录
│   │   └── store.js
│   ├── style           样式目录
│   │   └── index.css
│   └── views           容器组件存放目录
│       ├── Index.js
│       ├── Login.js
│       ├── Menu.js
│       └── User.js
├── build               打包后文件存储目录及模板文件存放位置 
│   ├── bundle.js
│   └── index.html
├── .babelrc            babel配置文件(默认隐藏)
├── db.json             模拟后台数据
├── package.json        npm配置文件
└── webpack.config.js   webpack配置文件
```

