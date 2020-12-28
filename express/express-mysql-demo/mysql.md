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
