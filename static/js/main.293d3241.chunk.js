(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(20)},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(6),c=n.n(r),i=(n(19),n(10)),o=n(4),s=n(1),u=n(7),d=n(8),h=n(12),m=n(9),v=n(2),b=n(11),f=function(e){var t=e.StartStyles,n=e.handleStart;return a.a.createElement("div",null,a.a.createElement("button",{className:t,type:"button",onClick:n},"Start"))};function k(e){return a.a.createElement("div",{className:1===e.value?"Cell bg_red":2===e.value?"Cell bg_green":(e.value,"Cell bg_white"),order:e.index,state:e.value,onClick:e.handleClick})}function g(e){return a.a.createElement("button",{className:"Back_btn btn",onClick:e.handleBack},"back")}function p(e){return a.a.createElement("button",{className:"Reset_btn btn",onClick:e.handleReset},"reset")}var O=[{id:0,cellcolor:0},{id:1,cellcolor:0},{id:2,cellcolor:0},{id:3,cellcolor:0},{id:4,cellcolor:0},{id:5,cellcolor:0},{id:6,cellcolor:0},{id:7,cellcolor:0},{id:8,cellcolor:0}],w=n(3),E=n.n(w),y=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(m.a)(t).call(this))).handleReset=function(){e.setState(function(e){return{cells:e.cells.map(function(e){return e.cellcolor=0,e}),counter:0,gameOver:!1,turns:[],winner:null}})},e.handleStart=function(){var t=prompt("Player #1 name"),n=prompt("Player #2 name");e.setState({players:[t,n]})},e.handleBack=function(){var t=Object(s.a)(e.state.cells),n=Object(s.a)(e.state.turns),l=e.state.counter;if(n.length>0){var a=n.pop();l--,t[a]=Object(o.a)({},t[a],{cellcolor:0})}e.setState({cells:t,counter:l,turns:n,gameOver:!1,winner:null})},e.state={cells:O,counter:0,winner:null,gameOver:!1,players:[],turns:[]},e.handleClick=e.handleClick.bind(Object(v.a)(e)),e}return Object(b.a)(t,e),Object(d.a)(t,[{key:"isGameOver",value:function(e){return 9===e}},{key:"checkForWinner",value:function(e){for(var t=["012","345","678","036","147","258","048","246"],n=e.filter(function(e,t){return t%2===0}),l=e.filter(function(e,t){return t%2===1}),a=0;a<t.length;a++){var r=Object(i.a)(t[a],3),c=r[0],o=r[1],s=r[2];if(n.includes(+c)&&n.includes(+o)&&n.includes(+s))return 0;if(l.includes(+c)&&l.includes(+o)&&l.includes(+s))return 1}return null}},{key:"handleClick",value:function(e){var t=Object(s.a)(this.state.turns),n=this.state,l=n.counter,a=n.winner,r=n.gameOver,c=Object(s.a)(this.state.cells),i=this.state.counter%2;0===this.state.cells[e].cellcolor&&(c[e]=Object(o.a)({},c[e],{cellcolor:i?2:1}),t.push(e),l+=1),a=this.checkForWinner(t),r=this.isGameOver(l),this.setState({cells:c,turns:t,counter:l,winner:a,gameOver:r})}},{key:"render",value:function(){var e=this,t=this.state.cells.map(function(t,n){return a.a.createElement(k,{key:t.id,index:n,value:t.cellcolor,handleClick:function(){return e.handleClick(t.id)}})}),n=this.state,l=n.winner,r=n.gameOver,c=n.counter,i=n.players,o=c%2?1:0,s=E()({Header:!0,bg_red:c%2===0,bg_green:c%2!==0,color_red:0===l,color_green:1===l,bg_white:null!==l||r}),u=E()({Winner:!0,"Winner--won bg_green":1===l,"Winner--won bg_red":0===l,"Winner--draw":r});return i.every(function(e){return e})&&2===i.length?a.a.createElement("div",null,a.a.createElement("div",{className:"display_block"},null!==l?a.a.createElement("h1",{className:s},i[l]," won"):a.a.createElement("h1",{className:s},r?"game over":i[o]),a.a.createElement(g,{handleBack:this.handleBack}),a.a.createElement("div",{className:"Container"},t,a.a.createElement("div",{className:u},null!==l?"The ".concat(i[l]," won the competition"):r&&"Draw"),a.a.createElement(p,{handleReset:this.handleReset})))):a.a.createElement("div",null,a.a.createElement(f,{StartStyles:"Start_btn btn",handleStart:this.handleStart}))}}]),t}(l.Component);c.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.293d3241.chunk.js.map