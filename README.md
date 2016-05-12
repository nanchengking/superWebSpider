# superWebSpider
base on nwjs and node to develop a webspider which can cross paltform and operation system 

----
## 开发环境

### 1. casperjs来运行爬虫逻辑
```
http://docs.casperjs.org/en/latest/

```

### 2. 使用nwjs打包成跨平台应用
```
http://docs.nwjs.io/en/latest/References/Shell/
```
### 3. 开发注意事项
```
如果要查看gloable.console打印的log,需要在工作面板右键,选择查看背景页,普通console.log直接右键检查元素就可以了

打包成应用时,要保证电脑上安装了phantomjs,casperjs,node .如果必要,在项目里面打包.
```

----

## 学习历程(技术方案)

### 1. 一个markdown编辑器
```
https://ducode.org/node-webkit-tutorial-creating-a-markdown-editor.html
```
### 2. 读取excel文件
```
https://github.com/SheetJS/js-xlsx
```
只能读取简单格式,拿到一个object 的数组
```
[ { id: '1', '名字': '哈哈', phone: '1324536' },
  { id: '2', '名字': '哈哈', phone: '1324536' },
  { id: '3', '名字': '哈哈', phone: '1324536' },
  { id: '4', '名字': '哈哈', phone: '1324536' },
  { id: '5', '名字': '哈哈', phone: '1324536' },
  { id: '6', '名字': '傻逼', phone: '1324536' },
  { id: '7', phone: '1324536' } ]
```
### 3. casperjs通讯

```
https://github.com/SpookyJS/SpookyJS/wiki/Introduction
```