# NODE_PATH simple demo

为了向 [@0pens0urce](https://www.v2ex.com/member/0pens0urce) 解释 NODE_PATH 的用法

参见：
[https://www.v2ex.com/t/482738](https://www.v2ex.com/t/482738)

## Usage:

在
[./another-package](https://github.com/run-ze/NODE_PATH-demo/tree/master/another-package)
目录执行 `npm i` 安装依赖,
然后在项目目录执行 `npm test`,
可以看到调用了
[./another-package](https://github.com/run-ze/NODE_PATH-demo/tree/master/another-package)
目录安装的 chalk。

## 原理:

`NODE_PATH` 环境变量可以改变 node 寻找模块的顺序,
使 node 优先从我们指定的位置查找模块。

node 会按照 `module.paths` 里的顺序查找模块,
直到找到为止, 否则就会报错。
