(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,n){"use strict";e.exports=n(76)},56:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Subscribe=t.Recommended=t.Post=t.Poll=t.Playlist=t.Like=t.Group=t.ContactUs=t.CommunityMessages=t.CommentsBrowse=t.Comments=t.Auth=t.Application=t.AllowMessagesFromCommunity=t.VK=void 0;var o=n(77);Object.defineProperty(t,"VK",{enumerable:!0,get:function(){return o.VK}});var r=n(57),u=_(n(72)),i=_(n(71)),a=_(n(70)),l=_(n(69)),c=_(n(68)),s=_(n(67)),f=_(n(66)),p=_(n(65)),d=_(n(64)),y=_(n(63)),b=_(n(62)),v=_(n(61)),h=_(n(60)),m=_(n(59));function _(e){return e&&e.__esModule?e:{default:e}}var w=(0,r.withVK)(u.default),O=(0,r.withVK)(i.default),g=(0,r.withVK)(a.default),k=(0,r.withVK)(l.default),j=(0,r.withVK)(c.default),P=(0,r.withVK)(s.default),E=(0,r.withVK)(f.default),C=(0,r.withVK)(p.default),I=(0,r.withVK)(d.default),M=(0,r.withVK)(y.default),S=(0,r.withVK)(b.default),T=(0,r.withVK)(v.default),x=(0,r.withVK)(h.default),R=(0,r.withVK)(m.default);t.AllowMessagesFromCommunity=w,t.Application=O,t.Auth=g,t.Comments=k,t.CommentsBrowse=j,t.CommunityMessages=P,t.ContactUs=E,t.Group=C,t.Like=I,t.Playlist=M,t.Poll=S,t.Post=T,t.Recommended=x,t.Subscribe=R},57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.withVK=function(e){return function(t){return i.default.createElement(a.Consumer,null,function(n){return i.default.createElement(e,o({},t,{vk:n}))})}};var r,u=n(55),i=(r=u)&&r.__esModule?r:{default:r};var a=(0,u.createContext)();t.default=a},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(55),i=(o=u)&&o.__esModule?o:{default:o};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"mount",value:function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options,r=e.ownerId,u=e.onSubscribe,i=e.onUnsubscribe;t.Widgets.Subscribe(n,o,r),t.Observer.subscribe("widgets.subscribed",u),t.Observer.subscribe("widgets.unsubscribed",i)}},{key:"componentDidMount",value:function(){this.mount()}},{key:"componentWillUnmount",value:function(){var e=this.props.vk;e.Observer.unsubscribe("widgets.subscribed"),e.Observer.unsubscribe("widgets.unsubscribed")}},{key:"render",value:function(){var e=this.props.elementId;return i.default.createElement("div",{id:e})}}]),t}();a.defaultProps={elementId:"vk_subscribe",options:{mode:0,soft:0},onSubscribe:function(){},onUnsubscribe:function(){}},t.default=a},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(55),i=(o=u)&&o.__esModule?o:{default:o};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"mount",value:function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options;t.Widgets.Recommended(n,o)}},{key:"componentDidMount",value:function(){this.mount()}},{key:"render",value:function(){var e=this.props.elementId;return i.default.createElement("div",{id:e})}}]),t}();a.defaultProps={elementId:"vk_recommend",options:{limit:5,max:20,period:"week",sort:"friend_like",target:"parent"}},t.default=a},61:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(55),i=(o=u)&&o.__esModule?o:{default:o};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"mount",value:function(){var e=this.props,t=e.vk,n=e.elementId,o=e.ownerId,r=e.postId,u=e.hash,i=e.options;t.Widgets.Post(n,o,r,u,i)}},{key:"componentDidMount",value:function(){this.mount()}},{key:"render",value:function(){var e=this.props.elementId;return i.default.createElement("div",{id:e})}}]),t}();a.defaultProps={elementId:"vk_post"},t.default=a},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(55),i=(o=u)&&o.__esModule?o:{default:o};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"mount",value:function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options,r=e.pollId;t.Widgets.Poll(n,o,r)}},{key:"componentDidMount",value:function(){this.mount()}},{key:"render",value:function(){var e=this.props.elementId;return i.default.createElement("div",{id:e})}}]),t}();a.defaultProps={elementId:"vk_poll",options:{height:24}},t.default=a},63:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(55),i=(o=u)&&o.__esModule?o:{default:o};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"mount",value:function(){var e=this.props,t=e.vk,n=e.elementId,o=e.ownerId,r=e.playlistId,u=e.hash,i=e.options;t.Widgets.Playlist(n,-o,r,u,i)}},{key:"componentDidMount",value:function(){this.mount()}},{key:"render",value:function(){var e=this.props.elementId;return i.default.createElement("div",{id:e})}}]),t}();a.defaultProps={elementId:"vk_playlist"},t.default=a},64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(55),i=(o=u)&&o.__esModule?o:{default:o};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"mount",value:function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options,r=e.pageId,u=e.onLike,i=e.onUnlike,a=e.onShare,l=e.onUnshare;r?t.Widgets.Like(n,o,r):t.Widgets.Like(n,o),t.Observer.subscribe("widgets.like.liked",function(e){return u(e)}),t.Observer.subscribe("widgets.like.unliked",function(e){return i(e)}),t.Observer.subscribe("widgets.like.shared",function(e){return a(e)}),t.Observer.subscribe("widgets.like.unshared",function(e){return l(e)})}},{key:"componentDidMount",value:function(){this.mount()}},{key:"componentWillUnmount",value:function(){var e=this.props.vk;e.Observer.unsubscribe("widgets.like.liked"),e.Observer.unsubscribe("widgets.like.unliked"),e.Observer.unsubscribe("widgets.like.shared"),e.Observer.unsubscribe("widgets.like.unshared")}},{key:"render",value:function(){var e=this.props.elementId;return i.default.createElement("div",{id:e})}}]),t}();a.defaultProps={elementId:"vk_like",options:{type:"full",width:350,height:22,verb:0},onLike:function(){},onUnlike:function(){},onShare:function(){},onUnshare:function(){}},t.default=a},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(55),i=(o=u)&&o.__esModule?o:{default:o};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"mount",value:function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options,r=e.groupId,u=e.onJoin,i=e.onLeave;t.Widgets.Group(n,o,r),t.Observer.subscribe("widgets.groups.joined",u),t.Observer.subscribe("widgets.groups.leaved",i)}},{key:"componentDidMount",value:function(){this.mount()}},{key:"componentWillUnmount",value:function(){var e=this.props.vk;e.Observer.unsubscribe("widgets.groups.joined"),e.Observer.unsubscribe("widgets.groups.leaved")}},{key:"render",value:function(){var e=this.props.elementId;return i.default.createElement("div",{id:e})}}]),t}();a.defaultProps={elementId:"vk_groups",options:{width:"auto",mode:3,no_cover:1,wide:1},onJoin:function(){},onLeave:function(){}},t.default=a},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(55),i=(o=u)&&o.__esModule?o:{default:o};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"mount",value:function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options,r=e.ownerId;t.Widgets.ContactUs(n,o,-r)}},{key:"componentDidMount",value:function(){this.mount()}},{key:"render",value:function(){var e=this.props.elementId;return i.default.createElement("div",{id:e})}}]),t}();a.defaultProps={elementId:"vk_contact_us",options:{height:24}},t.default=a},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(55),i=(o=u)&&o.__esModule?o:{default:o};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.vk,n=e.elementId,o=e.groupId,r=e.options;(0,e.onMount)(t.Widgets.CommunityMessages(n,o,r),n)}},{key:"render",value:function(){var e=this.props.elementId;return i.default.createElement("div",{id:e})}}]),t}();a.defaultProps={elementId:"vk_community_messages",options:{onCanNotWrite:function(e){},welcomeScreen:1,expandTimeout:0,expanded:0,widgetPosition:"right",buttonType:"blue_circle",disableButtonTooltip:0},onMount:function(){}},t.default=a},68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(55),i=(o=u)&&o.__esModule?o:{default:o};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"mount",value:function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options;t.Widgets.CommentsBrowse(n,o)}},{key:"componentDidMount",value:function(){this.mount()}},{key:"render",value:function(){var e=this.props.elementId;return i.default.createElement("div",{id:e})}}]),t}();a.defaultProps={elementId:"vk_comments_browse",options:{height:0,limit:10,mini:"auto",norealtime:0}},t.default=a},69:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(55),i=(o=u)&&o.__esModule?o:{default:o};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"mount",value:function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options,r=e.pageId,u=e.onNewComment,i=e.onDeleteComment;t.Widgets.Comments(n,o,r),t.Observer.subscribe("widgets.comments.new_comment",function(e,t,n,o){return u(e,t,n,o)}),t.Observer.subscribe("widgets.comments.delete_comment",i)}},{key:"componentDidMount",value:function(){this.mount()}},{key:"componentWillUnmount",value:function(){var e=this.props.vk;e.Observer.unsubscribe("widgets.comments.new_comment"),e.Observer.unsubscribe("widgets.comments.delete_comment")}},{key:"render",value:function(){var e=this.props.elementId;return i.default.createElement("div",{id:e})}}]),t}();a.defaultProps={elementId:"vk_comments",options:{height:0,limit:10,attach:"*",autoPublish:0,mini:"auto",norealtime:0},onNewComment:function(){},onDeleteComment:function(){}},t.default=a},70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(55),a=(o=i)&&o.__esModule?o:{default:o};var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),u(t,[{key:"mount",value:function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options,u=r({},o);u.onAuth=function(e,t,n,r,u,i){return o.onAuth(e,t,n,r,u,i)},t.Widgets.Auth(n,u)}},{key:"componentDidMount",value:function(){this.mount()}},{key:"render",value:function(){var e=this.props.elementId;return a.default.createElement("div",{id:e})}}]),t}();l.defaultProps={elementId:"vk_auth",options:{width:300,onAuth:function(){}}},t.default=l},71:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(55),i=(o=u)&&o.__esModule?o:{default:o};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"mount",value:function(){var e=this.props,t=e.vk,n=e.elementId,o=e.appId,r=e.options;t.Widgets.App(n,o,r)}},{key:"componentDidMount",value:function(){this.mount()}},{key:"render",value:function(){var e=this.props.elementId;return i.default.createElement("div",{id:e})}}]),t}();a.defaultProps={elementId:"vk_app"},t.default=a},72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(55),i=(o=u)&&o.__esModule?o:{default:o};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"mount",value:function(){var e=this.props,t=e.vk,n=e.elementId,o=e.options,r=e.groupId,u=e.onAllow,i=e.onDeny;t.Widgets.AllowMessagesFromCommunity(n,o,r),t.Observer.subscribe("widgets.allowMessagesFromCommunity.allowed",function(e){return u(e)}),t.Observer.subscribe("widgets.allowMessagesFromCommunity.denied",function(e){return i(e)})}},{key:"componentDidMount",value:function(){this.mount()}},{key:"componentWillUnmount",value:function(){this.props.vk.Observer.unsubscribe("widgets.allowMessagesFromCommunity.allowed")}},{key:"render",value:function(){var e=this.props.elementId;return i.default.createElement("div",{id:e})}}]),t}();a.defaultProps={elementId:"vk_send_message",options:{height:24},onAllow:function(){},onDeny:function(){}},t.default=a},73:function(e,t,n){"use strict";function o(e){return function(){return e}}var r=function(){};r.thatReturns=o,r.thatReturnsFalse=o(!1),r.thatReturnsTrue=o(!0),r.thatReturnsNull=o(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},74:function(e,t,n){"use strict";e.exports={}},75:function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,a=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in n=Object(arguments[l]))r.call(n,c)&&(a[c]=n[c]);if(o){i=o(n);for(var s=0;s<i.length;s++)u.call(n,i[s])&&(a[i[s]]=n[i[s]])}}return a}},76:function(e,t,n){"use strict";
/** @license React v16.3.1
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=n(75),r=n(74),u=n(73),i="function"==typeof Symbol&&Symbol.for,a=i?Symbol.for("react.element"):60103,l=i?Symbol.for("react.portal"):60106,c=i?Symbol.for("react.fragment"):60107,s=i?Symbol.for("react.strict_mode"):60108,f=i?Symbol.for("react.provider"):60109,p=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.async_mode"):60111,y=i?Symbol.for("react.forward_ref"):60112,b="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,o=0;o<t;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);throw(t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.")).name="Invariant Violation",t.framesToPop=1,t}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function m(e,t,n){this.props=e,this.context=t,this.refs=r,this.updater=n||h}function _(){}function w(e,t,n){this.props=e,this.context=t,this.refs=r,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var O=w.prototype=new _;O.constructor=w,o(O,m.prototype),O.isPureReactComponent=!0;var g={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var o=void 0,r={},u=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)k.call(t,o)&&!j.hasOwnProperty(o)&&(r[o]=t[o]);var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];r.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===r[o]&&(r[o]=l[o]);return{$$typeof:a,type:e,key:u,ref:i,props:r,_owner:g.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g,I=[];function M(e,t,n,o){if(I.length){var r=I.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=o,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:o,count:0}}function S(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>I.length&&I.push(e)}function T(e,t,n,o){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var u=!1;if(null===e)u=!0;else switch(r){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case l:u=!0}}if(u)return n(o,e,""===t?"."+x(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var c=t+x(r=e[i],i);u+=T(r,c,n,o)}else if(null===e||void 0===e?c=null:c="function"==typeof(c=b&&e[b]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),i=0;!(r=e.next()).done;)u+=T(r=r.value,c=t+x(r,i++),n,o);else"object"===r&&v("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return u}function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function R(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var o=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?V(e,o,n,u.thatReturnsArgument):null!=e&&(E(e)&&(t=r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+n,e={$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),o.push(e))}function V(e,t,n,o,r){var u="";null!=n&&(u=(""+n).replace(C,"$&/")+"/"),t=M(t,u,o,r),null==e||T(e,"",A,t),S(t)}var W={Children:{map:function(e,t,n){if(null==e)return e;var o=[];return V(e,o,null,t,n),o},forEach:function(e,t,n){if(null==e)return e;t=M(null,null,t,n),null==e||T(e,"",R,t),S(t)},count:function(e){return null==e?0:T(e,"",u.thatReturnsNull,null)},toArray:function(e){var t=[];return V(e,t,null,u.thatReturnsArgument),t},only:function(e){return E(e)||v("143"),e}},createRef:function(){return{current:null}},Component:m,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_changedBits:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},Fragment:c,StrictMode:s,unstable_AsyncMode:d,createElement:P,cloneElement:function(e,t,n){var r=void 0,u=o({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,c=g.current),void 0!==t.key&&(i=""+t.key);var s=void 0;for(r in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)k.call(t,r)&&!j.hasOwnProperty(r)&&(u[r]=void 0===t[r]&&void 0!==s?s[r]:t[r])}if(1===(r=arguments.length-2))u.children=n;else if(1<r){s=Array(r);for(var f=0;f<r;f++)s[f]=arguments[f+2];u.children=s}return{$$typeof:a,type:e.type,key:i,ref:l,props:u,_owner:c}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.3.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:g,assign:o}},K=Object.freeze({default:W}),U=K&&W||K;e.exports=U.default?U.default:U},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VK=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=i(n(55)),u=i(n(57));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(t.VK=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,u=Array(r),i=0;i<r;i++)u[i]=arguments[i];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={vk:null},o._mounted=!0,o.fetchScript=function(e){return new Promise(function(t,n){var o=document.createElement("script");o.onload=t,o.onerror=n,o.type="text/javascript",o.src=e,o.async=!0,o.id="vk-openapi",document.getElementsByTagName("head")[0].appendChild(o)})},a(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.Component),o(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onApiAvailable;document.getElementById("vk-openapi")&&this._mounted&&this.setState({vk:window.VK}),"undefined"!=typeof window&&window.document&&window.document.createElement&&this.init().then(function(n){t(n),e._mounted&&e.setState({vk:n})}).catch(function(e){throw new Error(e)})}},{key:"init",value:function(){var e=this;return this.loadingPromise?this.loadingPromise:(this.loadingPromise=new Promise(function(t,n){var o=e.props,r=o.apiId,u=o.options;if(!r)throw new Error("You need to set apiId");window.vkAsyncInit=function(){window.VK.init({apiId:r,onlyWidgets:u.onlyWidgets}),t(window.VK)},document.getElementById("vk-openapi")||e.fetchScript("https://vk.com/js/api/openapi.js?"+u.version).catch(n)}),this.loadingPromise)}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"render",value:function(){var e=this.state.vk;return e?r.default.createElement(u.default.Provider,{value:e},r.default.createElement(r.default.Fragment,null,this.props.children)):null}}]),t}()).defaultProps={options:{version:152,onlyWidgets:!0},onApiAvailable:function(){}}}}]);