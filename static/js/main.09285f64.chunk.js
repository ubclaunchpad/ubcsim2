(this.webpackJsonpubcsim2=this.webpackJsonpubcsim2||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),i=n(4),u=n(0),o=n(1),c=n(6),s=n(5),l=n(7),h=function e(t,n,r){Object(u.a)(this,e),this.dfriends=void 0,this.dgpa=void 0,this.dsleep=void 0,this.dfriends=t,this.dgpa=n,this.dsleep=r},f=function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,[{key:"prompt",value:function(){return"Choose your faculty!"}},{key:"imgPath",value:function(){return""}},{key:"choices",value:function(){return[new v,new p,new k,new y]}}]),e}(),v=function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,[{key:"answer",value:function(){return"Arts"}},{key:"followUps",value:function(){return[]}},{key:"statChanges",value:function(){return new h(50,2,100)}}]),e}(),p=function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,[{key:"answer",value:function(){return"Engineering"}},{key:"followUps",value:function(){return[]}},{key:"statChanges",value:function(){return new h(0,4,100)}}]),e}(),k=function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,[{key:"answer",value:function(){return"Science"}},{key:"followUps",value:function(){return[]}},{key:"statChanges",value:function(){return new h(50,3,100)}}]),e}(),y=function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,[{key:"answer",value:function(){return"Sauder"}},{key:"followUps",value:function(){return[]}},{key:"statChanges",value:function(){return new h(100,2,100)}}]),e}(),w=function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,[{key:"prompt",value:function(){return"Gregor tells the class to start studying for 110 early!"}},{key:"imgPath",value:function(){return""}},{key:"choices",value:function(){return[new d,new m]}}]),e}(),d=function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,[{key:"answer",value:function(){return"Trust the natural recursion"}},{key:"followUps",value:function(){return[]}},{key:"statChanges",value:function(){return new h(10,.5,-15)}}]),e}(),m=function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,[{key:"answer",value:function(){return"Ok boomer"}},{key:"followUps",value:function(){return[]}},{key:"statChanges",value:function(){return new h(60,-.02,-8)}}]),e}(),g=function(){function e(){Object(u.a)(this,e),this.friends=void 0,this.gpa=void 0,this.sleep=void 0,this.friends=0,this.gpa=0,this.sleep=0}return Object(o.a)(e,[{key:"applyStatChanges",value:function(e){var t=this.friends+e.dfriends;this.friends=t>=0?t:0;var n=this.gpa+e.dgpa;this.gpa=n>4?4:n<0?0:n;var r=this.sleep+e.dsleep;this.sleep=r>100?100:r<0?0:r}},{key:"getFriends",value:function(){return this.friends}},{key:"getGpa",value:function(){return this.gpa}},{key:"getSleep",value:function(){return this.sleep}}]),e}(),b=function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,[{key:"prompt",value:function(){return"Oops! No more events!"}},{key:"imgPath",value:function(){return""}},{key:"choices",value:function(){return[]}}]),e}(),O=function(){function e(t,n){Object(u.a)(this,e),this.pool=void 0,this.queue=void 0,this.pool=t,this.queue=n}return Object(o.a)(e,[{key:"getNextEvent",value:function(){if(this.queue.length>0)return this.queue.shift();if(this.pool.length>0){var e=this.pool[Math.floor(Math.random()*this.pool.length)],t=this.pool.indexOf(e);return this.pool.splice(t,1),e}return new b}},{key:"queueFollowUpEvent",value:function(e){this.queue.unshift(e)}}]),e}();function j(e){return a.a.createElement("button",{className:"ChoiceButton",onClick:function(){return e.makeChoice(e.choice)}},e.choice.answer())}function C(e){var t=e.choices.map((function(t){return a.a.createElement(j,{key:t.answer(),choice:t,makeChoice:e.makeChoice})}));return a.a.createElement("div",{className:"Choices"},t)}var E=function(e){function t(e){var n;Object(u.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).makeChoice=function(e){n.state.playerStats.applyStatChanges(e.statChanges());var t=!0,r=!1,a=void 0;try{for(var i,u=e.followUps()[Symbol.iterator]();!(t=(i=u.next()).done);t=!0){var o=i.value;n.state.eventTracker.queueFollowUpEvent(o)}}catch(s){r=!0,a=s}finally{try{t||null==u.return||u.return()}finally{if(r)throw a}}var c=n.state.eventTracker.getNextEvent();n.setState((function(e){return{week:e.week+1,playerStats:e.playerStats,currentEvent:c,eventTracker:e.eventTracker}}))};var r=new g,a=new O([new w],[new f]),i=a.getNextEvent();return n.state={week:1,playerStats:r,currentEvent:i,eventTracker:a},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h2",{id:"prompt"},this.state.currentEvent.prompt()),a.a.createElement(C,{choices:this.state.currentEvent.choices(),makeChoice:this.makeChoice}))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(i.render)(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.09285f64.chunk.js.map