!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(1);var i;!function(t){const e={Canvas2d:new r.ContextManager("2d"),WebGL:new r.ContextManager("webgl")};t.initialize=function(){"undefined"==typeof window||window.BlazorExtensions?window.BlazorExtensions=Object.assign({},window.BlazorExtensions,e):window.BlazorExtensions=Object.assign({},e)}}(i||(i={})),i.initialize()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ContextManager=class{constructor(t){if(this.contexts=new Map,this.webGLObject=new Array,this.webGLContext=!1,this.webGLTypes=[WebGLBuffer,WebGLShader,WebGLProgram,WebGLFramebuffer,WebGLRenderbuffer,WebGLTexture,WebGLUniformLocation],this.add=(t,e)=>{if(!t)throw new Error("Invalid canvas.");if(!this.contexts.get(t.id)){var n;if(!(n=e?t.getContext(this.contextName,e):t.getContext(this.contextName)))throw new Error("Invalid context.");this.contexts.set(t.id,n)}},this.remove=t=>{this.contexts.delete(t.id)},this.setProperty=(t,e,n)=>{const r=this.getContext(t);this.setPropertyWithContext(r,e,n)},this.getProperty=(t,e)=>{const n=this.getContext(t);return this.serialize(n[e])},this.call=(t,e,n)=>{const r=this.getContext(t);return this.callWithContext(r,e,n)},this.callBatch=(t,e)=>{const n=this.getContext(t);for(let t=0;t<e.length;t++){let r=e[t].slice(2);e[t][1]?this.callWithContext(n,e[t][0],r):this.setPropertyWithContext(n,e[t][0],Array.isArray(r)&&r.length>0?r[0]:null)}},this.callWithContext=(t,e,n)=>this.serialize(this.prototypes[e].apply(t,null!=n?n.map(t=>this.deserialize(e,t)):[])),this.setPropertyWithContext=(t,e,n)=>{t[e]=this.deserialize(e,n)},this.getContext=t=>{if(!t)throw new Error("Invalid canvas.");const e=this.contexts.get(t.id);if(!e)throw new Error("Invalid context.");return e},this.deserialize=(t,e)=>{if(!this.webGLContext||null==e)return e;if(e.hasOwnProperty("webGLType")&&e.hasOwnProperty("id"))return this.webGLObject[e.id];if(Array.isArray(e)&&!t.endsWith("v"))return Int8Array.of(...e);if("string"!=typeof e||"bufferData"!==t&&"bufferSubData"!==t)return e;{let t=window.atob(e),r=t.length,i=new Uint8Array(r);for(var n=0;n<r;n++)i[n]=t.charCodeAt(n);return i}},this.serialize=t=>{if(t instanceof TextMetrics)return{width:t.width};if(!this.webGLContext||null==t)return t;const e=this.webGLTypes.find(e=>t instanceof e);if(null!=e){const n=this.webGLObject.length;return this.webGLObject.push(t),{webGLType:e.name,id:n}}return t},this.contextName=t,"2d"===t)this.prototypes=CanvasRenderingContext2D.prototype;else{if("webgl"!==t&&"experimental-webgl"!==t)throw new Error("Invalid context name: "+t);this.prototypes=WebGLRenderingContext.prototype,this.webGLContext=!0}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luaXRpYWxpemVDYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhc0NvbnRleHRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiQ2FudmFzIiwiZXh0ZW5zaW9uT2JqZWN0IiwiQ2FudmFzMmQiLCJDb250ZXh0TWFuYWdlciIsIldlYkdMIiwiaW5pdGlhbGl6ZSIsIndpbmRvdyIsImNvbnRleHROYW1lIiwiY29udGV4dHMiLCJNYXAiLCJ3ZWJHTE9iamVjdCIsIkFycmF5Iiwid2ViR0xDb250ZXh0Iiwid2ViR0xUeXBlcyIsIldlYkdMQnVmZmVyIiwiV2ViR0xTaGFkZXIiLCJXZWJHTFByb2dyYW0iLCJXZWJHTEZyYW1lYnVmZmVyIiwiV2ViR0xSZW5kZXJidWZmZXIiLCJXZWJHTFRleHR1cmUiLCJXZWJHTFVuaWZvcm1Mb2NhdGlvbiIsImFkZCIsImNhbnZhcyIsInBhcmFtZXRlcnMiLCJFcnJvciIsInRoaXMiLCJpZCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwic2V0IiwicmVtb3ZlIiwiZGVsZXRlIiwic2V0UHJvcGVydHkiLCJzZXRQcm9wZXJ0eVdpdGhDb250ZXh0IiwiZ2V0UHJvcGVydHkiLCJzZXJpYWxpemUiLCJtZXRob2QiLCJhcmdzIiwiY2FsbFdpdGhDb250ZXh0IiwiY2FsbEJhdGNoIiwiYmF0Y2hlZENhbGxzIiwibGVuZ3RoIiwicGFyYW1zIiwic2xpY2UiLCJpc0FycmF5IiwicHJvdG90eXBlcyIsImFwcGx5IiwidW5kZWZpbmVkIiwibWFwIiwiZGVzZXJpYWxpemUiLCJlbmRzV2l0aCIsIkludDhBcnJheSIsIm9mIiwiYmluU3RyIiwiYXRvYiIsImJ5dGVzIiwiVWludDhBcnJheSIsImNoYXJDb2RlQXQiLCJUZXh0TWV0cmljcyIsIndpZHRoIiwidHlwZSIsImZpbmQiLCJwdXNoIiwid2ViR0xUeXBlIiwiQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIiwiV2ViR0xSZW5kZXJpbmdDb250ZXh0Il0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFNRyxXQUFZLE9BQU9ILEVBQ2hGLElBQUlJLEVBQUtYLE9BQU9ZLE9BQU8sTUFHdkIsR0FGQTFCLEVBQW9Ca0IsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElBQ3RELEVBQVBFLEdBQTRCLGlCQUFURixFQUFtQixJQUFJLElBQUlNLEtBQU9OLEVBQU9yQixFQUFvQlUsRUFBRWUsRUFBSUUsRUFBSyxTQUFTQSxHQUFPLE9BQU9OLEVBQU1NLElBQVFDLEtBQUssS0FBTUQsSUFDOUksT0FBT0YsR0FJUnpCLEVBQW9CNkIsRUFBSSxTQUFTMUIsR0FDaEMsSUFBSVMsRUFBU1QsR0FBVUEsRUFBT3FCLFdBQzdCLFdBQXdCLE9BQU9yQixFQUFnQixTQUMvQyxXQUE4QixPQUFPQSxHQUV0QyxPQURBSCxFQUFvQlUsRUFBRUUsRUFBUSxJQUFLQSxHQUM1QkEsR0FJUlosRUFBb0JhLEVBQUksU0FBU2lCLEVBQVFDLEdBQVksT0FBT2pCLE9BQU9rQixVQUFVQyxlQUFlMUIsS0FBS3VCLEVBQVFDLElBR3pHL0IsRUFBb0JrQyxFQUFJLEdBSWpCbEMsRUFBb0JBLEVBQW9CbUMsRUFBSSxHLGdGQ2xGckQsYUFFQSxJQUFVQyxHQUFWLFNBQVVBLEdBQ1IsTUFFTUMsRUFBa0IsQ0FDdEJDLFNBQVUsSUFBSSxFQUFBQyxlQUFlLE1BQzdCQyxNQUFPLElBQUksRUFBQUQsZUFBZSxVQUdaLEVBQUFFLFdBQWhCLFdBQ3dCLG9CQUFYQyxRQUEyQkEsT0FBdUIsaUJBTzNEQSxPQUF1QixpQkFBSSxPQUFILFVBQ25CQSxPQUF1QixpQkFDdkJMLEdBTkxLLE9BQXVCLGlCQUFJLE9BQUgsVUFDbkJMLElBYlgsQ0FBVUQsTUFBTSxLQXdCaEJBLEVBQU9LLGMsOEVDMUJQLHVCQVVFLFlBQW1CRSxHQUVqQixHQVhlLEtBQUFDLFNBQVcsSUFBSUMsSUFDZixLQUFBQyxZQUFjLElBQUlDLE1BRTNCLEtBQUFDLGNBQWUsRUFFTixLQUFBQyxXQUFhLENBQzVCQyxZQUFhQyxZQUFhQyxhQUFjQyxpQkFBa0JDLGtCQUFtQkMsYUFBY0Msc0JBY3RGLEtBQUFDLElBQU0sQ0FBQ0MsRUFBMkJDLEtBQ3ZDLElBQUtELEVBQVEsTUFBTSxJQUFJRSxNQUFNLG1CQUM3QixJQUFJQyxLQUFLakIsU0FBUzNCLElBQUl5QyxFQUFPSSxJQUE3QixDQUVBLElBQUlDLEVBTUosS0FKRUEsRUFERUosRUFDUUQsRUFBT00sV0FBV0gsS0FBS2xCLFlBQWFnQixHQUVwQ0QsRUFBT00sV0FBV0gsS0FBS2xCLGNBRXJCLE1BQU0sSUFBSWlCLE1BQU0sb0JBRTlCQyxLQUFLakIsU0FBU3FCLElBQUlQLEVBQU9JLEdBQUlDLEtBR3hCLEtBQUFHLE9BQVVSLElBQ2ZHLEtBQUtqQixTQUFTdUIsT0FBT1QsRUFBT0ksS0FHdkIsS0FBQU0sWUFBYyxDQUFDVixFQUEyQjNCLEVBQWtCVixLQUNqRSxNQUFNMEMsRUFBVUYsS0FBS0csV0FBV04sR0FDaENHLEtBQUtRLHVCQUF1Qk4sRUFBU2hDLEVBQVVWLElBRzFDLEtBQUFpRCxZQUFjLENBQUNaLEVBQTJCM0IsS0FDL0MsTUFBTWdDLEVBQVVGLEtBQUtHLFdBQVdOLEdBQ2hDLE9BQU9HLEtBQUtVLFVBQVVSLEVBQVFoQyxLQUd6QixLQUFBeEIsS0FBTyxDQUFDbUQsRUFBMkJjLEVBQWdCQyxLQUN4RCxNQUFNVixFQUFVRixLQUFLRyxXQUFXTixHQUNoQyxPQUFPRyxLQUFLYSxnQkFBZ0JYLEVBQVNTLEVBQVFDLElBR3hDLEtBQUFFLFVBQVksQ0FBQ2pCLEVBQTJCa0IsS0FDN0MsTUFBTWIsRUFBVUYsS0FBS0csV0FBV04sR0FDaEMsSUFBSyxJQUFJdEQsRUFBSSxFQUFHQSxFQUFJd0UsRUFBYUMsT0FBUXpFLElBQUssQ0FDNUMsSUFBSTBFLEVBQVNGLEVBQWF4RSxHQUFHMkUsTUFBTSxHQUMvQkgsRUFBYXhFLEdBQUcsR0FDbEJ5RCxLQUFLYSxnQkFBZ0JYLEVBQVNhLEVBQWF4RSxHQUFHLEdBQUkwRSxHQUVsRGpCLEtBQUtRLHVCQUNITixFQUNBYSxFQUFheEUsR0FBRyxHQUNoQjJDLE1BQU1pQyxRQUFRRixJQUFXQSxFQUFPRCxPQUFTLEVBQUlDLEVBQU8sR0FBSyxRQUt6RCxLQUFBSixnQkFBa0IsQ0FBQ1gsRUFBY1MsRUFBZ0JDLElBQ2hEWixLQUFLVSxVQUFVVixLQUFLb0IsV0FBV1QsR0FBUVUsTUFBTW5CLEVBQWlCb0IsTUFBUlYsRUFBb0JBLEVBQUtXLElBQUsvRCxHQUFVd0MsS0FBS3dCLFlBQVliLEVBQVFuRCxJQUFVLEtBR2xJLEtBQUFnRCx1QkFBeUIsQ0FBQ04sRUFBY2hDLEVBQWtCVixLQUNoRTBDLEVBQVFoQyxHQUFZOEIsS0FBS3dCLFlBQVl0RCxFQUFVVixJQUd6QyxLQUFBMkMsV0FBY04sSUFDcEIsSUFBS0EsRUFBUSxNQUFNLElBQUlFLE1BQU0sbUJBRTdCLE1BQU1HLEVBQVVGLEtBQUtqQixTQUFTM0IsSUFBSXlDLEVBQU9JLElBQ3pDLElBQUtDLEVBQVMsTUFBTSxJQUFJSCxNQUFNLG9CQUU5QixPQUFPRyxHQUdELEtBQUFzQixZQUFjLENBQUNiLEVBQWdCMUMsS0FDckMsSUFBSytCLEtBQUtiLGNBQTBCbUMsTUFBVnJELEVBQXFCLE9BQU9BLEVBRXRELEdBQUlBLEVBQU9HLGVBQWUsY0FBZ0JILEVBQU9HLGVBQWUsTUFDOUQsT0FBUTRCLEtBQUtmLFlBQVloQixFQUFXLElBQy9CLEdBQUlpQixNQUFNaUMsUUFBUWxELEtBQVkwQyxFQUFPYyxTQUFTLEtBQ25ELE9BQU9DLFVBQVVDLE1BQU8xRCxHQUNuQixHQUF1QixpQkFBYixHQUFxQyxlQUFYMEMsR0FBc0Msa0JBQVhBLEVBU3BFLE9BQU8xQyxFQVQwRixDQUNqRyxJQUFJMkQsRUFBUy9DLE9BQU9nRCxLQUFLNUQsR0FDckIrQyxFQUFTWSxFQUFPWixPQUNoQmMsRUFBUSxJQUFJQyxXQUFXZixHQUMzQixJQUFLLElBQUl6RSxFQUFJLEVBQUdBLEVBQUl5RSxFQUFRekUsSUFDeEJ1RixFQUFNdkYsR0FBS3FGLEVBQU9JLFdBQVd6RixHQUVqQyxPQUFPdUYsSUFLSCxLQUFBcEIsVUFBYXpDLElBQ25CLEdBQUlBLGFBQWtCZ0UsWUFDbEIsTUFBTyxDQUFFQyxNQUFPakUsRUFBT2lFLE9BRzNCLElBQUtsQyxLQUFLYixjQUEwQm1DLE1BQVZyRCxFQUFxQixPQUFPQSxFQUV0RCxNQUFNa0UsRUFBT25DLEtBQUtaLFdBQVdnRCxLQUFNRCxHQUFTbEUsYUFBa0JrRSxHQUM5RCxHQUFZYixNQUFSYSxFQUFtQixDQUNyQixNQUFNbEMsRUFBS0QsS0FBS2YsWUFBWStCLE9BRzVCLE9BRkFoQixLQUFLZixZQUFZb0QsS0FBS3BFLEdBRWYsQ0FDTHFFLFVBQVdILEVBQUtyRixLQUNoQm1ELEdBQUlBLEdBR04sT0FBT2hDLEdBaEhUK0IsS0FBS2xCLFlBQWNBLEVBQ0MsT0FBaEJBLEVBQ0ZrQixLQUFLb0IsV0FBYW1CLHlCQUF5QnBFLGNBQ3hDLElBQW9CLFVBQWhCVyxHQUEyQyx1QkFBaEJBLEVBSWxDLE1BQU0sSUFBSWlCLE1BQU0seUJBQXlCakIsR0FIekNrQixLQUFLb0IsV0FBYW9CLHNCQUFzQnJFLFVBQ3hDNkIsS0FBS2IsY0FBZSIsImZpbGUiOiJibGF6b3IuZXh0ZW5zaW9ucy5jYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBDb250ZXh0TWFuYWdlciB9IGZyb20gJy4vQ2FudmFzQ29udGV4dE1hbmFnZXInO1xyXG5cclxubmFtZXNwYWNlIENhbnZhcyB7XHJcbiAgY29uc3QgYmxhem9yRXh0ZW5zaW9uczogc3RyaW5nID0gJ0JsYXpvckV4dGVuc2lvbnMnO1xyXG4gIC8vIGRlZmluZSB3aGF0IHRoaXMgZXh0ZW5zaW9uIGFkZHMgdG8gdGhlIHdpbmRvdyBvYmplY3QgaW5zaWRlIEJsYXpvckV4dGVuc2lvbnNcclxuICBjb25zdCBleHRlbnNpb25PYmplY3QgPSB7XHJcbiAgICBDYW52YXMyZDogbmV3IENvbnRleHRNYW5hZ2VyKFwiMmRcIiksXHJcbiAgICBXZWJHTDogbmV3IENvbnRleHRNYW5hZ2VyKFwid2ViZ2xcIilcclxuICB9O1xyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93W2JsYXpvckV4dGVuc2lvbnNdKSB7XHJcbiAgICAgIC8vIHdoZW4gdGhlIGxpYnJhcnkgaXMgbG9hZGVkIGluIGEgYnJvd3NlciB2aWEgYSA8c2NyaXB0PiBlbGVtZW50LCBtYWtlIHRoZVxyXG4gICAgICAvLyBmb2xsb3dpbmcgQVBJcyBhdmFpbGFibGUgaW4gZ2xvYmFsIHNjb3BlIGZvciBpbnZvY2F0aW9uIGZyb20gSlNcclxuICAgICAgd2luZG93W2JsYXpvckV4dGVuc2lvbnNdID0ge1xyXG4gICAgICAgIC4uLmV4dGVuc2lvbk9iamVjdFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93W2JsYXpvckV4dGVuc2lvbnNdID0ge1xyXG4gICAgICAgIC4uLndpbmRvd1tibGF6b3JFeHRlbnNpb25zXSxcclxuICAgICAgICAuLi5leHRlbnNpb25PYmplY3RcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkNhbnZhcy5pbml0aWFsaXplKCk7XHJcbiIsImV4cG9ydCBjbGFzcyBDb250ZXh0TWFuYWdlciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0cyA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB3ZWJHTE9iamVjdCA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0TmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgd2ViR0xDb250ZXh0ID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBwcm90b3R5cGVzOiBhbnk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB3ZWJHTFR5cGVzID0gW1xyXG4gICAgV2ViR0xCdWZmZXIsIFdlYkdMU2hhZGVyLCBXZWJHTFByb2dyYW0sIFdlYkdMRnJhbWVidWZmZXIsIFdlYkdMUmVuZGVyYnVmZmVyLCBXZWJHTFRleHR1cmUsIFdlYkdMVW5pZm9ybUxvY2F0aW9uXHJcbiAgXTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbnRleHROYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY29udGV4dE5hbWUgPSBjb250ZXh0TmFtZTtcclxuICAgIGlmIChjb250ZXh0TmFtZSA9PT0gXCIyZFwiKVxyXG4gICAgICB0aGlzLnByb3RvdHlwZXMgPSBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlO1xyXG4gICAgZWxzZSBpZiAoY29udGV4dE5hbWUgPT09IFwid2ViZ2xcIiB8fCBjb250ZXh0TmFtZSA9PT0gXCJleHBlcmltZW50YWwtd2ViZ2xcIikge1xyXG4gICAgICB0aGlzLnByb3RvdHlwZXMgPSBXZWJHTFJlbmRlcmluZ0NvbnRleHQucHJvdG90eXBlO1xyXG4gICAgICB0aGlzLndlYkdMQ29udGV4dCA9IHRydWU7XHJcbiAgICB9IGVsc2VcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvbnRleHQgbmFtZTogJHtjb250ZXh0TmFtZX1gKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGQgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgcGFyYW1ldGVyczogYW55KSA9PiB7XHJcbiAgICBpZiAoIWNhbnZhcykgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNhbnZhcy4nKTtcclxuICAgIGlmICh0aGlzLmNvbnRleHRzLmdldChjYW52YXMuaWQpKSByZXR1cm47XHJcblxyXG4gICAgdmFyIGNvbnRleHQ7XHJcbiAgICBpZiAocGFyYW1ldGVycylcclxuICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KHRoaXMuY29udGV4dE5hbWUsIHBhcmFtZXRlcnMpO1xyXG4gICAgZWxzZVxyXG4gICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQodGhpcy5jb250ZXh0TmFtZSk7XHJcblxyXG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29udGV4dC4nKTtcclxuXHJcbiAgICB0aGlzLmNvbnRleHRzLnNldChjYW52YXMuaWQsIGNvbnRleHQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZSA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiB7XHJcbiAgICB0aGlzLmNvbnRleHRzLmRlbGV0ZShjYW52YXMuaWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFByb3BlcnR5ID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoY2FudmFzKTtcclxuICAgIHRoaXMuc2V0UHJvcGVydHlXaXRoQ29udGV4dChjb250ZXh0LCBwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFByb3BlcnR5ID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHByb3BlcnR5OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoY2FudmFzKTtcclxuICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZShjb250ZXh0W3Byb3BlcnR5XSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FsbCA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBtZXRob2Q6IHN0cmluZywgYXJnczogYW55KSA9PiB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KGNhbnZhcyk7XHJcbiAgICByZXR1cm4gdGhpcy5jYWxsV2l0aENvbnRleHQoY29udGV4dCwgbWV0aG9kLCBhcmdzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxsQmF0Y2ggPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgYmF0Y2hlZENhbGxzOiBhbnlbXVtdKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KGNhbnZhcyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhdGNoZWRDYWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgcGFyYW1zID0gYmF0Y2hlZENhbGxzW2ldLnNsaWNlKDIpO1xyXG4gICAgICBpZiAoYmF0Y2hlZENhbGxzW2ldWzFdKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsV2l0aENvbnRleHQoY29udGV4dCwgYmF0Y2hlZENhbGxzW2ldWzBdLCBwYXJhbXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0UHJvcGVydHlXaXRoQ29udGV4dChcclxuICAgICAgICAgIGNvbnRleHQsXHJcbiAgICAgICAgICBiYXRjaGVkQ2FsbHNbaV1bMF0sXHJcbiAgICAgICAgICBBcnJheS5pc0FycmF5KHBhcmFtcykgJiYgcGFyYW1zLmxlbmd0aCA+IDAgPyBwYXJhbXNbMF0gOiBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxsV2l0aENvbnRleHQgPSAoY29udGV4dDogYW55LCBtZXRob2Q6IHN0cmluZywgYXJnczogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zZXJpYWxpemUodGhpcy5wcm90b3R5cGVzW21ldGhvZF0uYXBwbHkoY29udGV4dCwgYXJncyAhPSB1bmRlZmluZWQgPyBhcmdzLm1hcCgodmFsdWUpID0+IHRoaXMuZGVzZXJpYWxpemUobWV0aG9kLCB2YWx1ZSkpIDogW10pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UHJvcGVydHlXaXRoQ29udGV4dCA9IChjb250ZXh0OiBhbnksIHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHtcclxuICAgIGNvbnRleHRbcHJvcGVydHldID0gdGhpcy5kZXNlcmlhbGl6ZShwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb250ZXh0ID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpID0+IHtcclxuICAgIGlmICghY2FudmFzKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY2FudmFzLicpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzLmdldChjYW52YXMuaWQpO1xyXG4gICAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29udGV4dC4nKTtcclxuXHJcbiAgICByZXR1cm4gY29udGV4dDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzZXJpYWxpemUgPSAobWV0aG9kOiBzdHJpbmcsIG9iamVjdDogYW55KSA9PiB7XHJcbiAgICBpZiAoIXRoaXMud2ViR0xDb250ZXh0IHx8IG9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiBvYmplY3Q7IC8vZGVzZXJpYWxpemF0aW9uIG9ubHkgbmVlZHMgdG8gaGFwcGVuIGZvciB3ZWJHTFxyXG5cclxuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoXCJ3ZWJHTFR5cGVcIikgJiYgb2JqZWN0Lmhhc093blByb3BlcnR5KFwiaWRcIikpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLndlYkdMT2JqZWN0W29iamVjdFtcImlkXCJdXSk7XHJcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSAmJiAhbWV0aG9kLmVuZHNXaXRoKFwidlwiKSkge1xyXG4gICAgICByZXR1cm4gSW50OEFycmF5Lm9mKC4uLihvYmplY3QgYXMgbnVtYmVyW10pKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mKG9iamVjdCkgPT09IFwic3RyaW5nXCIgJiYgKG1ldGhvZCA9PT0gXCJidWZmZXJEYXRhXCIgfHwgbWV0aG9kID09PSBcImJ1ZmZlclN1YkRhdGFcIikpIHtcclxuICAgICAgbGV0IGJpblN0ciA9IHdpbmRvdy5hdG9iKG9iamVjdCk7XHJcbiAgICAgIGxldCBsZW5ndGggPSBiaW5TdHIubGVuZ3RoO1xyXG4gICAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheShsZW5ndGgpO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBieXRlc1tpXSA9IGJpblN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBieXRlcztcclxuICAgIH0gZWxzZVxyXG4gICAgICByZXR1cm4gb2JqZWN0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXJpYWxpemUgPSAob2JqZWN0OiBhbnkpID0+IHtcclxuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBUZXh0TWV0cmljcykge1xyXG4gICAgICAgIHJldHVybiB7IHdpZHRoOiBvYmplY3Qud2lkdGggfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMud2ViR0xDb250ZXh0IHx8IG9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiBvYmplY3Q7IC8vc2VyaWFsaXphdGlvbiBvbmx5IG5lZWRzIHRvIGhhcHBlbiBmb3Igd2ViR0xcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy53ZWJHTFR5cGVzLmZpbmQoKHR5cGUpID0+IG9iamVjdCBpbnN0YW5jZW9mIHR5cGUpO1xyXG4gICAgaWYgKHR5cGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gdGhpcy53ZWJHTE9iamVjdC5sZW5ndGg7XHJcbiAgICAgIHRoaXMud2ViR0xPYmplY3QucHVzaChvYmplY3QpO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB3ZWJHTFR5cGU6IHR5cGUubmFtZSxcclxuICAgICAgICBpZDogaWRcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlXHJcbiAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=