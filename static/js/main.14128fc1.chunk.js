(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,l){e.exports=l(17)},16:function(e,t,l){},17:function(e,t,l){"use strict";l.r(t);var r=l(0),a=l.n(r),c=l(3),n=l.n(c),o=(l(16),l(7)),s=l(4),i=l(5),u=l(9),d=l(6),h=l(1),p=l(8),y=function(e){var t=e.startstyle,l=e.handleStart;return a.a.createElement("div",null,a.a.createElement("button",{style:t,className:"Start_btn btn",type:"button",onClick:l},"Start"))};function b(e){var t={backgroundColor:{1:"red",2:"yellow",3:"white"}[e.value]};return a.a.createElement("div",{style:t,className:"cell",order:e.index,state:e.value,onClick:e.handleClick})}var f=[{id:0,cellcolor:0},{id:1,cellcolor:0},{id:2,cellcolor:0},{id:3,cellcolor:0},{id:4,cellcolor:0},{id:5,cellcolor:0},{id:6,cellcolor:0},{id:7,cellcolor:0},{id:8,cellcolor:0}],k=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={cells:f,counter:0,reset:!1,players:[],player1:[],player2:[]},e.handleClick=e.handleClick.bind(Object(h.a)(e)),e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){var t=this,l=+e.target.closest(".cell").getAttribute("order");console.log(54),this.setState(function(e){return{cells:e.cells.map(function(r){return r.id===l&&0===r.cellcolor&&(t.state.counter%2===0?(r.cellcolor=1,e.player1.push(l)):t.state.counter%2!==0&&(r.cellcolor=2,e.player2.push(l)),e.counter++),r})}})}},{key:"handleReset",value:function(){this.setState(function(e){return e.counter=0,{cells:e.cells.map(function(e){return e.cellcolor=0,e})}}),this.setState({reset:!this.state.reset})}},{key:"handleStart",value:function(){var e=prompt("Player #1 name"),t=prompt("Player #2 name");this.setState({players:[e,t]})}},{key:"handleBack",value:function(){this.setState(function(e){var t;return e.counter>0&&(e.counter%2===0?(t=e.player2.pop(),e.counter--,e.cells[t].cellcolor=0):e.counter%2!==0&&(t=e.player1.pop(),e.counter--,e.cells[t].cellcolor=0)),e})}},{key:"checkForWinner",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.cells.map(function(t,l){return a.a.createElement(b,{key:t.id,index:l,value:t.cellcolor,handleClick:e.handleClick})}),l={},r={},c={},n="reset",s={};this.state.players.every(function(e){return e})&&2===this.state.players.length?(l.display="block",r.display="none"):(l.display="none",r.display="block"),this.state.reset&&(c.display="none",n="reset"),this.state.counter%2===0?(s.backgroundColor="rgb(173, 74, 74)",s.text=this.state.players[0]):this.state.counter%2!==0&&(s.backgroundColor="rgb(233, 247, 30)",s.text=this.state.players[1]);var i=["012","345","678","036","147","258","048","246"];9===this.state.counter&&(c.text="you played a draw",c.display="inline-block",c.backgroundColor="#000",c.color="#fff",n="revenge",s.backgroundColor="#000",s.text="Game over",s.backgroundColor="#000",s.color="#ffff");for(var u=0;u<i.length;u++){var d=Object(o.a)(i[u],3),h=d[0],p=d[1],f=d[2];0!==this.state.cells[h].cellcolor&&this.state.cells[h].cellcolor===this.state.cells[p].cellcolor&&this.state.cells[p].cellcolor===this.state.cells[f].cellcolor&&(c.text="The ".concat(this.state.players[1===this.state.cells[h].cellcolor?0:1]," won the competition"),c.display="inline-block",c.color="#fff",n="revenge",c.backgroundColor=this.state.counter%2===0?"#ff0":"#f00",c.winner=!0,s.text=this.state.players[1===this.state.cells[h].cellcolor?0:1],s.backgroundColor=this.state.cells[h].cellcolor?"rgb(173, 74, 74)":"rgb(233, 247, 30)")}return a.a.createElement("div",null,a.a.createElement(y,{startstyle:r,handleStart:this.handleStart.bind(this)}),a.a.createElement("div",{style:l},a.a.createElement("h1",{style:s,className:"App_header"},s.text),a.a.createElement("button",{className:"Back_btn btn",onClick:function(){return e.handleBack()}},"back"),a.a.createElement("div",{className:"container"},t,a.a.createElement("div",{style:c,className:"winner"},c.text),a.a.createElement("button",{className:"Reset_btn btn",onClick:function(){return e.handleReset()}},n))))}}]),t}(r.Component);n.a.render(a.a.createElement(k,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.14128fc1.chunk.js.map