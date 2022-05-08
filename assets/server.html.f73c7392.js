import{_ as t,r as o,o as a,c as s,e as _,w as d,F as i,a as e,b as r}from"./app.7e6eba9e.js";const c={},p=e("h1",{id:"\u914D\u7F6E\u670D\u52A1\u5668",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u914D\u7F6E\u670D\u52A1\u5668","aria-hidden":"true"},"#"),r(" \u914D\u7F6E\u670D\u52A1\u5668")],-1),h=e("h2",{id:"\u4F7F\u7528-nginx",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4F7F\u7528-nginx","aria-hidden":"true"},"#"),r(" \u4F7F\u7528 nginx")],-1),l=e("p",null,"\u4E0B\u9762\u7ED9\u51FA\u4E00\u6BB5 nginx \u914D\u7F6E\u4F5C\u4E3A\u53C2\u8003\uFF1A",-1),x=e("pre",null,[e("code",null,`server {
  # server_name, port, ssl \u7B49\u8BBE\u7F6E

  location / {
    # \u8FD9\u91CC\u7684 8080 \u5BF9\u5E94 Koishi \u5B9E\u4F8B\u7684\u7AEF\u53E3
    proxy_pass http://127.0.0.1:8080/;
    proxy_redirect off;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_read_timeout 300s;
    proxy_send_timeout 300s;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
  }
}
`)],-1);function f(u,m){const n=o("panel-view");return a(),s(i,null,[p,h,l,_(n,{class:"code",title:"",style:{}},{default:d(()=>[x]),_:1})],64)}var v=t(c,[["render",f],["__file","server.html.vue"]]);export{v as default};
