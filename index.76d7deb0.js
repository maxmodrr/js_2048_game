!function(){function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function e(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}}var n=new/*#__PURE__*/(function(){var n;function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getInitialState();!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,r),this.state=t,this.score=0,this.status="idle"}return n=[{key:"moveLeft",value:function(){this.moveInline("left")}},{key:"moveRight",value:function(){this.moveInline("right")}},{key:"moveUp",value:function(){this.moveBlock("up")}},{key:"moveDown",value:function(){this.moveBlock("down")}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.score=0,this.status="playing",this.addRandomSell(),this.addRandomSell()}},{key:"restart",value:function(){this.status="idle",this.score=0,this.state=this.getInitialState()}},{key:"moveBlock",value:function(t){var e=this;if("playing"===this.getStatus()){var n=!1;this.state.forEach(function(r,a){var o=[];r.forEach(function(t,n){o.push(e.state[n][a])});var i=e.getNotEmptyCells(o,t);i=e.mergeCells(i,t);for(var s=0;s<4;s++)e.state[s][a]=i[s]||0,e.state[s][a]!==o[s]&&(n=!0)}),n&&(this.addRandomSell(),this.checkWinLose())}}},{key:"moveInline",value:function(n){var r,a=this;"playing"===this.getStatus()&&(this.state.forEach(function(o){var i=function(e){if(Array.isArray(e))return t(e)}(o)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(o)||e(o)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),s=a.getNotEmptyCells(o,n);s=a.mergeCells(s,n),o.forEach(function(t,e){o[e]=s[e]||0}),i.every(function(t,e){return t===o[e]})||(r=!0)}),r&&(this.addRandomSell(),this.checkWinLose()))}},{key:"getInitialState",value:function(){return[,,,,].fill(0).map(function(){return[,,,,].fill(0)})}},{key:"addRandomSell",value:function(){for(var t,n=[],r=0;r<4;r++)for(var a=0;a<4;a++)0===this.state[r][a]&&n.push([r,a]);var o=Math.floor(Math.random()*n.length),i=.9>Math.random()?2:4,s=function(t){if(Array.isArray(t))return t}(t=n[o])||function(t,e){var n,r,a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var o=[],i=!0,s=!1;try{for(a=a.call(t);!(i=(n=a.next()).done)&&(o.push(n.value),2!==o.length);i=!0);}catch(t){s=!0,r=t}finally{try{i||null==a.return||a.return()}finally{if(s)throw r}}return o}}(t,2)||e(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),l=s[0],u=s[1];this.state[l][u]=i}},{key:"getNotEmptyCells",value:function(t,e){var n=t.filter(function(t){return t>0});if("right"===e||"down"===e)for(;n.length<4;)n.unshift(0);if("left"===e||"up"===e)for(;n.length<4;)n.push(0);return n}},{key:"mergeCells",value:function(t,e){for(var n=0;n<t.length-1;n++){var r=t[n],a=t[n+1];r===a&&r>0&&(this.score+=r+a,t[n]=r+a,t.splice(n+1,1))}return"right"===e||"down"===e?this.getNotEmptyCells(t,e):t}},{key:"hasMove",value:function(){for(var t=0;t<4;t++)for(var e=0;e<4;e++){var n=this.state[t][e];if(0===n||(t<3?this.state[t+1][e]:0)===n||(e<3?this.state[t][e+1]:0)===n)return!0}return!1}},{key:"checkWinLose",value:function(){this.state.some(function(t){return t.includes(2048)})&&(this.status="win"),this.hasMove()||(this.status="lose")}}],function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(r.prototype,n),r}()),r=document.querySelector(".button.start"),a=document.querySelector(".message-start"),o=document.querySelector(".message-win"),i=document.querySelector(".message-lose"),s=document.querySelector(".game-score");function l(){var t=n.getState(),e=document.querySelectorAll(".field-row");s.textContent=n.getScore(),t.forEach(function(t,n){t.forEach(function(t,r){var a=e[n].children[r];a.className="field-cell",a.textContent="",t>0&&(a.textContent=t,a.classList.add("field-cell--".concat(t)))})}),"win"===n.getStatus()?o.classList.remove("hidden"):"lose"===n.getStatus()&&i.classList.remove("hidden")}r.addEventListener("click",function(){"idle"===n.getStatus()?(n.start(),r.classList.remove("start"),r.classList.add("restart"),r.textContent="Restart",a.classList.add("hidden")):(r.classList.remove("restart"),r.classList.add("start"),r.textContent="Start",a.classList.remove("hidden"),i.classList.add("hidden"),o.classList.add("hidden"),n.restart()),l()}),document.addEventListener("keydown",function(t){switch(t.key){case"ArrowLeft":n.moveLeft();break;case"ArrowRight":n.moveRight();break;case"ArrowUp":n.moveUp();break;case"ArrowDown":n.moveDown()}l()})}();
//# sourceMappingURL=index.76d7deb0.js.map