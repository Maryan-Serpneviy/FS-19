!function(e){function t(t){for(var n,i,c=t[0],l=t[1],d=t[2],u=0,f=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,d||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,c=1;c<o.length;c++){var l=o[c];0!==r[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={0:0},a=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var s=l;a.push([19,1]),o()}([,,,,,,,,,function(e,t,o){var n=o(10);"string"==typeof n&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};o(2)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){},,,function(e,t,o){var n=o(14);"string"==typeof n&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};o(2)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){},function(e,t,o){var n=o(16);"string"==typeof n&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};o(2)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){},function(e,t,o){var n=o(18);"string"==typeof n&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};o(2)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(4),i=o.n(a),c=(o(9),o(1)),l=o.n(c);o(13);function d(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:e.checked,onChange:e.checkAllTodos}),r.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"))}function s(e){return r.a.createElement("section",{className:"main"},r.a.createElement(d,{checked:e.todos.every((function(e){return e.completed})),checkAllTodos:e.checkAllTodos}),r.a.createElement("ul",{className:"todo-list"},e.todos.filter((function(t){return"All"===e.filter||"Completed"===e.filter&&t.completed||"Active"===e.filter&&!t.completed})).map((function(t){return r.a.createElement("li",{key:t.id,className:t.completed?"completed":""},r.a.createElement("div",{className:"view"},!e.canEdit&&r.a.createElement("input",{id:t.id,checked:t.completed,onChange:e.handleTodoCheck,className:"toggle",type:"checkbox"}),e.canEdit&&t.id===e.current?r.a.createElement("input",{onChange:e.handleTodoEdit,onKeyDown:e.finishTodoEdit,onBlur:e.changeTodoText,value:e.editValue,className:"todo-edit"}):r.a.createElement("label",{onClick:e.editTodo,htmlFor:"todo-".concat(t.id)},t.content),!e.canEdit&&r.a.createElement("button",{id:t.id,onPointerDown:e.confirmAction,name:"remove",className:"destroy"})))}))))}d.propTypes={checked:l.a.bool.isRequired,checkAllTodos:l.a.func.isRequired},s.propTypes={todos:l.a.array.isRequired,filter:l.a.oneOf(["All","Active","Completed"]).isRequired,handleTodoCheck:l.a.func.isRequired,confirmAction:l.a.func.isRequired,checkAllTodos:l.a.func.isRequired,canEdit:l.a.bool.isRequired,current:l.a.number,editValue:l.a.string.isRequired,handleTodoEdit:l.a.func.isRequired,editTodo:l.a.func.isRequired,finishTodoEdit:l.a.func.isRequired,changeTodoText:l.a.func.isRequired};o(15);function u(e){return r.a.createElement("footer",{className:"footer",style:{filter:"block"}},r.a.createElement("span",{className:"todo-count"},e.todosLeft," todos left"),r.a.createElement("ul",{className:"filters"},["All","Active","Completed"].map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:"#/".concat(t),className:e.filter===t?"selected":"",onClick:e.setFilter},t))}))),e.completed?r.a.createElement("button",{onClick:e.confirmAction,className:"clear-completed",name:"clear"},"Clear completed"):null)}u.propTypes={todosLeft:l.a.number.isRequired,filter:l.a.oneOf(["All","Active","Completed"]).isRequired,setFilter:l.a.func.isRequired,completed:l.a.bool.isRequired,confirmAction:l.a.func.isRequired};o(17);function f(e){var t={remove:e.removeTodo,clear:e.clearCompleted};return r.a.createElement("div",{className:"todoapp__confirm"},"This action cannot be undone. Proceed?",r.a.createElement("button",{onClick:t[e.action],className:"confirm-btn confirm_yes",name:"confirm"},"√"),r.a.createElement("button",{onClick:e.confirmAction,className:"confirm-btn confirm_no",name:"decline"},"×"))}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}f.propTypes={confirmAction:l.a.func.isRequired,removeTodo:l.a.func.isRequired,clearCompleted:l.a.func.isRequired,action:l.a.string.isRequired};var T=4,g=function(e){function t(){var e,o,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l];return n=this,a=(e=h(t)).call.apply(e,[this].concat(c)),o=!a||"object"!==m(a)&&"function"!=typeof a?y(n):a,b(y(o),"state",{todoInput:"",editValue:"",nextTodo:0,todos:[],filter:"All",allChecked:!1,completed:!1,canAdd:!1,canEdit:!1,confirm:!1,action:null,currentId:null}),b(y(o),"inputField",r.a.createRef()),b(y(o),"handleNewTodo",(function(e){o.setState({todoInput:e.target.value})})),b(y(o),"addNewTodo",(function(e){var t=o.state,n=t.todoInput,r=t.todos,a=e.target.id;n.length>T?o.setState({canAdd:!0}):o.setState({canAdd:!1}),("Enter"===e.key&&n.length>T&&n.trim()||"btn-new"===a&&n.length>T&&n.trim())&&(o.inputField.current.focus(),o.setState((function(e){return r.push({id:e.nextTodo,content:n,completed:!1}),{todos:r,nextTodo:e.nextTodo+1,todoInput:"",canAdd:!1}})))})),b(y(o),"handleTodoCheck",(function(e){var t=e.target.id;o.setState((function(e){var o=!0,n=!1,r=void 0;try{for(var a,i=e.todos[Symbol.iterator]();!(o=(a=i.next()).done);o=!0){var c=a.value;c.id===Number(t)&&(c.completed=!c.completed)}}catch(e){n=!0,r=e}finally{try{o||null==i.return||i.return()}finally{if(n)throw r}}return e}))})),b(y(o),"removeTodo",(function(){var e=o.state.todos.filter((function(e){return e.id!==o.state.currentId}));o.setState({todos:e,confirm:!1})})),b(y(o),"checkAllTodos",(function(){o.setState((function(e){e.allChecked=!e.allChecked;var t=!0,o=!1,n=void 0;try{for(var r,a=e.todos[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){r.value.completed=e.allChecked}}catch(e){o=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(o)throw n}}return e}))})),b(y(o),"setFilter",(function(e){o.setState({filter:e.target.innerText})})),b(y(o),"clearCompleted",(function(){o.setState((function(e){return{todos:e.todos.filter((function(e){return!e.completed})),confirm:!1}}))})),b(y(o),"confirmAction",(function(e){var t=e.target,n=t.id,r=t.name;o.setState({confirm:!o.state.confirm,action:r,currentId:Number(n)})})),b(y(o),"handleTodoEdit",(function(e){o.setState({editValue:e.target.value})})),b(y(o),"editTodo",(function(e){var t=Number(/\d+/.exec(e.target.htmlFor)[0]);o.setState({canEdit:!0,currentId:t,editValue:e.target.innerText})})),b(y(o),"finishTodoEdit",(function(e){"Enter"===e.key&&o.changeTodoText(),"Escape"===e.key&&o.setState({canEdit:!1})})),b(y(o),"changeTodoText",(function(){var e=o.state,t=e.currentId,n=e.editValue;o.setState((function(e){return e.todos.find((function(e){return e.id===t})).content=n,{todos:e.todos,canEdit:!e.canEdit}}))})),o}var o,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),o=t,(n=[{key:"componentDidUpdate",value:function(e,t,o){var n=document.querySelector(".todo-edit");n&&(n.focus(),n.value=this.state.editValue)}},{key:"componentDidMount",value:function(){this.inputField.current.focus(),this.restoreState()}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("state",JSON.stringify(t))}},{key:"componentWillMount",value:function(){this.restoreState()}},{key:"restoreState",value:function(){if(localStorage.getItem("state")){var e=JSON.parse(localStorage.getItem("state"));this.setState(e)}}},{key:"render",value:function(){return r.a.createElement("section",{className:"todoapp"},this.state.confirm&&r.a.createElement(f,{action:this.state.action,confirmAction:this.confirmAction,removeTodo:this.removeTodo,clearCompleted:this.clearCompleted}),r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"todos"),r.a.createElement("input",{value:this.state.todoInput,onChange:this.handleNewTodo,onKeyUpCapture:this.addNewTodo,ref:this.inputField,maxLength:40,className:"new-todo",placeholder:"What needs to be done?"}),r.a.createElement("button",{onPointerUp:this.addNewTodo,className:this.state.canAdd?"add-todo_active":"add-todo",id:"btn-new"},"+")),r.a.createElement(s,{todos:this.state.todos,confirmAction:this.confirmAction,handleTodoCheck:this.handleTodoCheck,removeTodo:this.removeTodo,checkAllTodos:this.checkAllTodos,filter:this.state.filter,current:this.state.currentId,canEdit:this.state.canEdit,editValue:this.state.editValue,handleTodoEdit:this.handleTodoEdit,editTodo:this.editTodo,finishTodoEdit:this.finishTodoEdit,changeTodoText:this.changeTodoText}),r.a.createElement(u,b({todosLeft:this.state.todos.filter((function(e){return!e.completed})).length,completed:this.state.todos.some((function(e){return e.completed})),filter:this.state.filter,setFilter:this.setFilter,confirmAction:this.confirmAction,clearCompleted:this.clearCompleted},"confirmAction",this.confirmAction)))}}])&&p(o.prototype,n),a&&p(o,a),t}(r.a.Component);i.a.render(r.a.createElement((function(){return r.a.createElement(g,null)}),null),document.querySelector("#root"))}]);