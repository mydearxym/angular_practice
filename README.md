this is basic env version
todo: css ie8 problem
before install ssd
## install yeoman (参考：http://blog.fens.me/nodejs-yeoman-intro/)
    > sudo npm install -g yo grunt-cli bower
      安装以后默认是没有 gerenator 的
    > yo 
      会提示自动安装 gerenator, 但总是网络失败报错
      手动安装： sudo npm install -g generator-angular generator-webapp
      创建 angular 工程： yo angular:app project_name (不会新建目录哈，project_name只会出现在 package.json 之中
        还有那个 空格点选 angular 组件是取消的意思哈
        )
    > bower list 查看安装的包
    > 手动安装其他包，如 bower install --save angular-animate ( 参考：http://www.ng-newsletter.com/posts/angular-animation.html)
    > grunt serve 启动服务器（还需安装compass---sudo gem install compass,或加 --force 强制启动 ）
    > 安装测试用的 karma
    

   ** 配置 require.js (参考: http://webdesignporto.com/3-steps-to-fully-automatized-javascript-environment-with-yeoman-and-require-js-for-lazy-people/)
      > bower install requirejs --save
      > npm install grunt-requirejs --save 
      > angular & requirejs http://kielczewski.eu/2013/04/integrating-angularjs-with-requirejs/



    ** bower 使用与操作 ： http://blog.fens.me/nodejs-bower-intro/
    ** grunt 使用: 
       > 把grunt和grunt插件加入一个已经存在的package.json 文件最简单的方式就是使用 
         npm install <module> --save-dev 命令
       > 

    ** karma ->  npm instlal -g karma-cli


       



