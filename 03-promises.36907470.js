!function(){var e=document.querySelector(".form");function n(e,n){var t=new Promise((function(e,t){var o=Math.random()>.3;setTimeout((function(){o?e():t()}),n)}));return t.then((function(){return console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))})).catch((function(){return console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))})),t}e.addEventListener("submit",(function(t){t.preventDefault();for(var o=Number(e.querySelector('input[name = "delay"]').value),r=Number(e.querySelector('input[name = "step"]').value),u=Number(e.querySelector('input[name = "amount"]').value),c=o,a=[],i=1;i<=u;i++){var m=n(i,c);a.push(m),c+=r}}))}();
//# sourceMappingURL=03-promises.36907470.js.map