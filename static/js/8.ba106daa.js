(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{37:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,a=n(1),o=(l=a)&&l.__esModule?l:{default:l},u=n(56);t.default=function(){return o.default.createElement("div",{className:"App-content"},o.default.createElement("h2",null,"Like Component"),o.default.createElement("h4",null,"To use Like Widget:"),o.default.createElement("pre",{style:{width:"60%"}},"\nimport {VK, Like} from 'react-vk';\n\nconst LikeComponent = () => {\n\treturn (\n\t    <VK apiId={your_api_id}>\n              <Like\n                  onLike={quantity => {\n                      console.log(quantity);\n                  }}\n              />\n\t    </VK>\n\t)\n};"),o.default.createElement("h4",null,"Result:"),o.default.createElement(u.VK,{apiId:6247321},o.default.createElement(u.Like,{onLike:function(e){console.log(e)}})),o.default.createElement("h5",null,"More info you can find on"," ",o.default.createElement("b",null,o.default.createElement("a",{href:"https://vk.com/dev/widget_like"},"VK API"))))}}}]);