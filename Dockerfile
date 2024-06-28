FROM node:16
RUN mkdir -p /usr/src/app
# 指定工作区 后面所有的文件都在这个工作区中运行
WORKDIR /usr/src/app
COPY server.js /usr/src/app
EXPOSE 3000
# 执行启动命令 一个docker file 只能有一个
CMD node server.js