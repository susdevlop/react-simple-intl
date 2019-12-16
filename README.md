由于项目中引用了react-intl导致了项目出现了很大的问题，无法编译。所有尝试一下自己去造个小车轮试试    
   
编写需求：  
    1.只编写一个react组件、  
    2.这个react返回多个方法、对象、和组件  或只有两个组件对象
    3.组件利用react的context技术生产一个provider  
    4.子组件内部利用provider的提供的context值去获取需要翻译的文本  
   
     
组件IntlProvider是一个接收props.children并渲染的一个简单的组件   
value值为一个对象，这个对象有两个值：{  
    lang:[string,a selected Text],//实际一个小轮子不需要提供这个值  
    languageObj:[Object,a selected language obj,eg:{"hello":""hello"}]  
}  
    
      
组件FormttedText是一个生成文本的组件，通过类内静态属性contextType使得组件本身获取到provider的提供的context值  
该组件需要一个以props形式传递进来的一个值的去配对contextType对应的字段，配对成功即渲染此字段   
否则也不报错，毕竟看到报错太痛苦了= =，或者是用console.warning()去报  
    
      
准备工作：  
    1.熟悉context，了解context的兼容性  
    2.了解最早支持context的版本  
    3.创建准备好的字典文件   
    4.使用吧，想不出来了，想到再写  
      
第一次测试：  
    轮子造完，开发项目测试成功，正在测试在生产环境中引入 ，最终只需导出simple-intl 2019年12月16日23:46:59   
    项目(虽然只是个小组件)使用到PropTypes需要先npm install prop-types  
  
最终结果：  
    理论适用于react16.12的版本  
    生产环境中的16.2无法使用  
    
项目尝试  
### `npm start`
### `npm test`
### `npm run build`
### `npm run eject`
