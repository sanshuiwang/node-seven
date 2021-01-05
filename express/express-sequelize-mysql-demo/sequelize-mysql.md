### 查看安装的应用

brew list

### 查看 mysql 是否安装好

brew list | grep mysql

### 查看安装的服务(包含的有 started/stopped 状态)

brew services list

### 停止服务

brew services stop mysql

### 启动服务

brew services start mysql

## mysql 操作

### 连上 mysql

mysql -u root [-p 可以跟密码]

### 查看有哪些数据库

show databases;

### 使用某个库

use [库名称];

### 查看表

show tables;

### 使用 sql 语句进行表操作

```
    select * from 表名;
```

mysql
结构化数据库，数据存放的服务。

数据库： 划分的存储区域

table: 存数据集合

---

ORM(对象关系模型) 库有 sequelize

node-app --> ORM(sequelize) --> 驱动(node-mysql)[mysql2] --> mysql db

# sequelize

`npm install --save sequelize`

v6:

`npm install --save-dev sequelize-cli`

初始化 sequelize 的各个文件

`npx sequelize-cli init`
