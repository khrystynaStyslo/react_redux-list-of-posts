(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(36)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),s=n.n(c),o=n(14),i=(n(28),n(15)),l=n(10),u=n(11),m=n(16),d=n(12),p=n(17),f=(n(29),n(30),n(13)),E=n(4);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b={LOAD_POSTS_REQUEST:"LOAD_POSTS_REQUEST",LOAD_POSTS_SUCCESS:"LOAD_POSTS_SUCCESS",GET_DATA:"GET_DATA"},h=function(){return{type:b.LOAD_POSTS_REQUEST}},v=function(){return{type:b.LOAD_POSTS_SUCCESS}},y=function(e,t,n){return{type:b.GET_DATA,posts:e,comments:n,users:t}},g={posts:[],isLoading:!1,isLoaded:!1};var D=Object(E.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case b.LOAD_POSTS_REQUEST:return O({},e,{isLoading:!e.isLoading});case b.LOAD_POSTS_SUCCESS:return O({},e,{isLoaded:!e.isLoaded});case b.GET_DATA:return O({},e,{posts:t.posts.map(function(e){return O({},e,{user:t.users.find(function(t){return t.id===e.userId}),comments:t.comments.filter(function(t){return t.postId===e.id})})})});default:return e}}),T=function(){var e=D.getState().isLoading;return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement("div",{className:"spinner-grow text-dark",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},_=(n(31),n(32),n(33),function(e){var t=e.name,n=e.email,a=e.website;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",null,t),r.a.createElement("h6",null,n),r.a.createElement("h6",null,a))}),j=(n(34),n(35),function(e){var t=e.comment;return r.a.createElement("div",{className:"card-body"},r.a.createElement("li",{className:"card-title"},t.name),r.a.createElement("p",{className:"card-text card-email"},t.email),r.a.createElement("p",{className:"card-text"},t.body))}),L=function(e){var t=e.comments;return r.a.createElement("div",{className:"card w-75"},r.a.createElement("h4",null,"Comments:"),t.map(function(e){return r.a.createElement(j,{comment:e,key:e.id})}))},w=function(e){var t=e.data;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"card-title"},t.title),r.a.createElement(_,t.user)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},t.body),r.a.createElement(L,{comments:t.comments})))},A=function(){return r.a.createElement("div",{className:"post-list"},D.getState().posts.map(function(e){return r.a.createElement(w,{data:e,key:e.id})}))},P=function(e){return fetch("".concat("https://jsonplaceholder.typicode.com/").concat(e)).then(function(e){return e.json()})},N=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={posts:D.getState().posts},n.getData=function(){D.dispatch(h()),Promise.all([P("posts"),P("users"),P("comments")]).then(function(e){var t=Object(i.a)(e,3),n=t[0],a=t[1],r=t[2];D.dispatch(h()),D.dispatch(y(n,a,r)),D.dispatch(v())})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribe=D.subscribe(function(){return e.setState({posts:D.getState().posts})})}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=D.getState(),t=e.posts,n=e.isLoading,a=e.isLoaded;return r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"Dynamic list of posts"),r.a.createElement("p",null,r.a.createElement("span",null,"posts: "),t.length),!a&&!n&&r.a.createElement("button",{onClick:this.getData,className:"btn btn-outline-dark"},"Load posts"),r.a.createElement(T,null),a&&r.a.createElement(A,null))}}]),t}(r.a.Component);s.a.render(r.a.createElement(o.a,{store:D},r.a.createElement(N,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.0effdd41.chunk.js.map