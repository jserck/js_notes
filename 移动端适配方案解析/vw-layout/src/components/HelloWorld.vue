<template>
     <div class="hello">
          <!-- <ul l-flex>
               <li>
                    <div w-188 bg-b>
                         <h1>大河向东流</h1>
                         <p>第三方的师父都是佛挡杀佛第三方第三方都是</p>
                         <div class="g-img">
                              <img src="/static/pic_gengxin@2x.png" alt />
                         </div>
                    </div>
               </li>
               <li>
                    <div w-187 bg-l>
                         <h1>大河向东流</h1>
                         <p>第三方的师父都是佛挡杀佛第三方第三方都是</p>
                         <div class="g-img">
                              <img src="/static/pic_gengxin@2x.png" alt />
                         </div>
                    </div>
               </li>
          </ul>
          <div aspectratio w-188-246 class="color">
               <div aspectratio-content></div>
          </div>-->
          <div class="g-wh">
               <!-- <p>第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是第三方的师父都是佛挡杀佛第三方第三方都是</p> -->
               <!-- <img src="/static/pic_gengxin@2x.png" alt /> -->
          </div>
          <div aspectratio class="aspect-box">
               <div class="aspect-box__content">
                    <!-- <img src="/static/pic_gengxin@2x.png" alt /> -->
               </div>
          </div>
     </div>
</template>

<script>
export default {
     name: 'HelloWorld',
     data() {
          return {

          }
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aspect-box {
     /* height: 0; */
     aspect-ratio: "1:1";
     /* padding-top: 100%; */
}
.aspect-box p {
     margin: 0;
     /* position: absolute; */
     width: 100%;
     height: 100%;
     left: 0;
     top: 0;
     color: red;
     font-size: 30px;
     line-height: 30px;
}
.ignore {
     /* position: relative; */
     /* height: 0; */
     /* padding: 100% 0 0; */
     /* background: url("/static/pic_gengxin@2x.png") no-repeat center; */
     /* background-size: cover; */
}
.ignore::before {
     content: "";
     width: 1px;
     margin-left: -1px;
     float: left;
     /* height: 0; */
     padding: 100% 0 0;
}
.ignore::after {
     /* to clear float */
     content: "";
     display: table;
     clear: both;
}
.ignore img {
     position: absolute;
     width: 100%;
     height: 100%;
     left: 0;
     top: 0;
}
.ignore p {
     margin: 0;
     /* position: absolute; */
     width: 100%;
     height: 100%;
     left: 0;
     top: 0;
     color: red;
     font-size: 30px;
     line-height: 30px;
}
.hello {
     position: relative;
     padding: 0 100px;
     background: #000;
}
.hello ul li {
     position: relative;
     color: #fff;
}
.hello ul li h1 {
     font-size: 24px;
}
.hello ul li p {
     font-size: 20px;
}
.g-img img {
     width: 100%;
     display: block;
}

@svg square {
     @rect {
          fill: var(--color, black);
          width: 100%;
          height: 100%;
     }
}

[exampleRed] {
     height: 1px;
     background: white svg(square param(--color red));
}
[bg-b] {
     background: #000;
     overflow: hidden;
}
[bg-l] {
     background: #0080ff;
     overflow: hidden;
}
[l-flex] {
     display: flex;
     justify-content: space-around;
}
[w-188] {
     width: 188px;
}
[w-187] {
     width: 187px;
}
[aspectratio] {
     position: relative;
}
[aspectratio]::before {
     content: "";
     display: block;
     width: 1px;
     margin-left: -1px;
     height: 0;
}

[aspectratio-content] {
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     width: 100%;
     height: 100%;
}
[w-188-246] {
     width: 188px;
     background-color: yellow;
}
[w-188-246] {
     aspect-ratio: "188:188";
}
</style>
