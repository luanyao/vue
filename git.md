## git 安装   

## 初始化git本地仓库
- `git init`
      + 这里表示在本地初始化一个git 本地仓库

## git 全局配置 
- 就是在git设置当前使用的用户是谁 
- 每一次北京都会把当前备份者的信息存储起来 
- 命令：
1. 配置用户名：`git config --global user.name  'lvxiaoxiao'`
2. 配置邮箱 ：`git config --global user.email  'lvxiaoxiao@qq.com'`
3. 注意：邮箱配置一定要配合邮箱的规则，可以不是真实的

## 把代码存储到.git仓库里
1. 把代码放到仓储的门口,使用下面命令
      + `git add ./git.md`
2. 把仓储门口的代码放到里面的房间中去，使用下面的命令  -m表示message的 缩写
      + `git commit -m '这里写这次提交修改文件的具体信息说明'`

3. 如果想把文件（包含现在修改的，以前修改的，以及没有修改的文件）,都一次放到仓库门口
可以使用 `git add ./` 这个命令来实现
4. 如果想把修改后的文件一次全部放到仓库中去
可以使用`git commit --all -m '这里写文件说明，这个文件说明最少不要少（这是一次全部操作）'`这个命令 
   +`--all`表明把所有更改的文件提交到仓库中去（也叫版本库）
  


## 查看当前的状态 
- 可以用来查看当前代码有没有被放到仓储中去 
- 命令 `git sattus`
- 如果在终端看到红色的的提示说明，则表明
这个时候我们的文件还在工作区，没有放到仓储的大门口，需要使用命令 `git add  文件夹路径跟名字`把文件放到大门口 
- 如果在终端命令窗口使用`git status`命令，出现绿色的提示信息，则表明文件已经放到了仓库门口


## 查看更改日志  
1.  查看历史更改记录命令 `git log `
2.  查看历史简洁日志命令 `git log --online`
3.  清空终端窗口命令  `clear`

## 回退到指定的版本 
- `git reset --hard Head~0  `
      + 表示回退到上一次代码提交时的状态 
- `git reset --hard Head~1`
      + 表示回退到上上次代码提交时的状态
-  `git reset --hard Head~2`
      + 表示回退到上上上次代码提交时的状态 
以此类推
-  `git reset --hard [版本号]`
      +可以通过这个版本号（这个版本号就是没有提交代码的时候随机生成的6个数字）可以精确回退或者前进到某一次提交代码时的状态
- `git reflog `
      + 这个命令可以看到每一次切换版本的记录 :
      可以看到所有提交的版本号

## 创建分支 
-`git branch dev`
   --使用这个命令可以创建一个dev 分支（dev代表分支名字）
   +在刚创建时 dev分支李的东西和master分支里的东西是一样的

## 切换分支 
 -`git checkout dev `
    --使用这个命令可以切换到指定的分支，这里这行，命令表示切换到名为dev的分支
- `git branch `这个命令可以查看当前有哪些分支    

## 合并分支 
-`git merge dev`
      +合并分支内容，把当前分支与指定的分支（这里的分支名叫dev）,进行合并
      + 当前分支指的是`git branch`命令输出
      前面带有星号 “*”的分支
- 合并时如果有冲突，需要手动去处理，处理后还需要再提交一次 

## 删除分支 
- `git branch -d dev `
      +这个命令表示删除dev分支,-d 是代表delete 的意思，
      有一点需要注意： 删除分支不能自己删除自己
      意思就是表示不能在dev 分支上删除dev 分支 
      一定要在别的分支上删除dev 分支

## githup 网站 
https://github.com/
      + githup 不是git  只是一个网站
      + 只不过这个网站提供了允许别人通过git 上传代码的功能

## 提交代码到githup 上（当中git服务器来用）
- `git push git@gitee.com:luanyao/git.git  master`
      1.0 这个命令代表会把当前分支的内容上传到远程的master 上
      2.0 具体示例：`git push git@github.com:Summerjie007/project-name.git`



## 从githup上去把代码拿到本地 

- `git pull [地址] master `
   1.0 使用这个命令会可以把远程分支上的数据拿到本地：
   （注意： 要在本地初始化一个仓库）
    2.0 示例：`git pull git@github.com:Summerjie007/project-name.git`

- `git clone [地址]`
      使用这个命令会得到远程仓储相同的数据
      如果多次执行执行，会覆盖本地的内容


## git 中忽略的文件 
- .gitignore,在这个文件中可以设置要被忽略的文件或者目录 
-  被忽略的文件不会提交到仓储中去
- 在.gitignore中可以书写要被忽略的文件的路径，以/开头
   注意一行写一个路径，这些路径所对应的文件都会被忽略，
   不会提交到仓储中去 
      +具体写法
            * `/.idea`会忽略.idea文件
            * `/js`  会忽略js目录里的所以文件



### 通过ssh方式上传代码 (重要)

- Git是分布式的代码管理工具，远程的代码管理是基于SSH的，所以要使用远程的git则需要SSH的配置
- 公钥和私钥一一对 好比钥匙和锁，公钥给git仓库管理员，私钥放本地
- 生成SSH密钥过程：
  - 查看是否已经有了ssh密钥：`cd ~/.ssh`如果没有密钥则不会有此文件夹，有则备份删除
  - `ssh-keygen -t rsa -C 'kailunxin@gmail.com'`按3个回车，密码为空。
  - 打开.ssh文件下.pub的文件，添加到`https://github.com/settings/keys`这里是github以后就是你们自己公司的仓库位置

### 模拟两个用户push及pull代码及解决冲突

- 当多个用户提交的代码有冲突时候
- 1.到冲突的文件中选择保留和删除的文件
- 2.在重新添加提交推送到仓库中去

```
  itcast大前端git练习
  <<<<<<< HEAD
  这里是master的内容
  =======
  这里是dev分支上的内容
  >>>>>>> dev
```

### push和pull操作时，先pull再push

- 先pull , 再push
- 要先拉取最新代码，在一起推送代码到仓库保证代码是最新的而且你写的也在其中

### push和pull时的简写方式

- 当我们在push时，加上-u参数，那么在下一次push时
  我们只需要写上`git push`就能上传我们的代码。(加上-u之后，git会把
  当前分支与远程的指定的分支进行关联。git push origin master)
- 简单来说使用git push -u origin master以后就可以直接使用不带别的参数的git pull从之前push到的分支来pull




