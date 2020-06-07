/*! For license information please see 7759b62a.463a072e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{189:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return m}));var n=r(2),o=r(9),a=(r(0),r(258)),s=(r(262),r(261),{id:"v0.11.2",title:"v0.11.2",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/doug-martin",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","patch"]}),i={permalink:"/nestjs-query/blog/v0.11.2",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/blog/blog/2020-05-13-v0.11.2.mdx",source:"@site/blog/2020-05-13-v0.11.2.mdx",description:"@InjectAssemblerQueryService",date:"2020-05-13T00:00:00.000Z",tags:[{label:"releases",permalink:"/nestjs-query/blog/tags/releases"},{label:"patch",permalink:"/nestjs-query/blog/tags/patch"}],title:"v0.11.2",readingTime:1.84,truncated:!1,nextItem:{title:"v0.11.0",permalink:"/nestjs-query/blog/v0.11.0"}},c=[{value:"<code>@InjectAssemblerQueryService</code>",id:"injectassemblerqueryservice",children:[{value:"Example",id:"example",children:[]}]},{value:"Using Assemblers in auto-generated Resolver",id:"using-assemblers-in-auto-generated-resolver",children:[]},{value:"Using Services in auto-generated Resolver",id:"using-services-in-auto-generated-resolver",children:[]}],l={rightToc:c};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"injectassemblerqueryservice"},Object(a.b)("inlineCode",{parentName:"h2"},"@InjectAssemblerQueryService")),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"v0.11.1")," a new ",Object(a.b)("inlineCode",{parentName:"p"},"@InjectAssemblerQueryService")," decorator has been introduced to reduce boiler plate code related to creating an ",Object(a.b)("inlineCode",{parentName:"p"},"AssemblerQueryService"),"."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"Define your assembler"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.assembler.ts"',title:'"todo-item.assembler.ts"'}),"import { Assembler, ClassTransformerAssembler } from '@nestjs-query/core';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Assembler(TodoItemDTO, TodoItemEntity)\nexport class TodoItemAssembler extends ClassTransformerAssembler<TodoItemDTO, TodoItemEntity> {\n  convertToDTO(entity: TodoItemEntity): TodoItemDTO {\n    const dto = super.convertToDTO(entity);\n    dto.age = Date.now() - entity.created.getMilliseconds();\n    return dto;\n  }\n}\n\n")),Object(a.b)("p",null,"Now, instead of defining an ",Object(a.b)("inlineCode",{parentName:"p"},"AssemblerQueryService")," you can use the decorator."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.resolver.ts" {8}',title:'"todo-item.resolver.ts"',"{8}":!0}),"import { QueryService, InjectAssemblerQueryService } from '@nestjs-query/core';\nimport { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(@InjectAssemblerQueryService(TodoItemAssembler) readonly service: QueryService<TodoItemDTO>) {\n    super(service);\n  }\n}\n")),Object(a.b)("h2",{id:"using-assemblers-in-auto-generated-resolver"},"Using Assemblers in auto-generated Resolver"),Object(a.b)("p",null,"There is a new ",Object(a.b)("inlineCode",{parentName:"p"},"AssemblerClass")," option when using the ",Object(a.b)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," to generate your resolver to using a custom ",Object(a.b)("inlineCode",{parentName:"p"},"Assembler"),"."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"When using the AssemblerClass option you don't need to specify the entity."))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.module.ts" {12-13,17-18}',title:'"todo-item.module.ts"',"{12-13,17-18}":!0}),"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemAssembler } from './todo-item.assembler';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      // Register the assembler\n      assemblers: [TodoItemAssembler],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          // specify the assembler type to use.\n          AssemblerClass: TodoItemAssembler,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n\n")),Object(a.b)("h2",{id:"using-services-in-auto-generated-resolver"},"Using Services in auto-generated Resolver"),Object(a.b)("p",null,"There is a new ",Object(a.b)("inlineCode",{parentName:"p"},"ServiceClass")," option when using the ",Object(a.b)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," to generate your resolver to a custom ",Object(a.b)("inlineCode",{parentName:"p"},"QueryService"),"."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"When using the ServiceClass option you don't need to specify the entity."))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todo-item.module.ts" {12-13,17-18}',title:'"todo-item.module.ts"',"{12-13,17-18}":!0}),"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemService } from './todo-item.service';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      // Register the the custom QueryService\n      services: [TodoItemService],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          // specify the QueryService type to use.\n          ServiceClass: TodoItemService,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")))}m.isMDXComponent=!0},258:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),m=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(r),p=n,b=u["".concat(s,".").concat(p)]||u[p]||d[p]||a;return r?o.a.createElement(b,i(i({ref:t},l),{},{components:r})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},259:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var s=o.apply(null,n);s&&e.push(s)}else if("object"===a)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},260:function(e,t,r){"use strict";var n=r(0),o=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=o},261:function(e,t,r){"use strict";var n=r(0),o=r.n(n);t.a=function(e){return o.a.createElement("div",null,e.children)}},262:function(e,t,r){"use strict";r(23),r(18),r(17);var n=r(0),o=r.n(n),a=r(260);var s=function(){return Object(n.useContext)(a.a)},i=r(259),c=r.n(i),l=r(126),m=r.n(l),u=37,d=39;t.a=function(e){var t=e.block,r=e.children,a=e.defaultValue,i=e.values,l=e.groupId,p=s(),b=p.tabGroupChoices,v=p.setTabGroupChoices,y=Object(n.useState)(a),f=y[0],j=y[1];if(null!=l){var O=b[l];null!=O&&O!==f&&j(O)}var g=function(e){j(e),null!=l&&v(l,e)},h=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===t,className:c()("tabs__item",m.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:function(e){return function(e,t,r){switch(r.keyCode){case d:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(h,e.target,e)},onFocus:function(){return g(t)},onClick:function(){return g(t)}},r)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter((function(e){return e.props.value===f}))[0]))}}}]);