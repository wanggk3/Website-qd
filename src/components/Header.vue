<template>
  <header :style="{ position: hd_position }" style="background-color: #ffffff">
    <div>
      <div :class="{ img_hover: hover_flag }" class="web_icon">
        <img src="../../static/img/logo.png" alt="官网" @click="toHome" />
      </div>
      <ul>
        <li
          v-for="(item, index) in titleList"
          :key="index"
          @click="selected(item.title)"
        >
          <router-link
            :to="item.link"
            :class="{ active: active == item.title }"
            >{{ item.title }}</router-link
          >
          <div class="gdlt">
            <router-link
              v-for="(jitem, index) in item.child"
              :key="index"
              :to="jitem.link"
              >{{ jitem.title }}</router-link
            >
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    bg_color: {
      type: String,
      default: "transparent",
    },
    hd_position: {
      type: String,
      default: "fixed",
    },
    hover_flag: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      active: "首页",
      titleList: [
        {
          title: "首页",
          link: "/home",
        },
        {
          title: "关于我们",
          link: "/about",
          child: [
            { title: "我们的文化", link: "/product" },
            { title: "我们的宗旨", link: "/product" },
            { title: "我们的荣誉", link: "/product" },
            { title: "党建专题", link: "/product" },
          ],
        },
        {
          title: "领域及团队",
          link: "/product",
          child: [
            { title: "业务领域", link: "/home" },
            { title: "业务部门", link: "/home" },
            { title: "专业团队", link: "/home" },
            { title: "团队活动", link: "/home" },
          ],
        },
        {
          title: "律师介绍",
          link: "/lawyer",
        },
        {
          title: "新闻中心",
          link: "#",
        },
        {
          title: "业务领域",
          link: "#",
        },
        {
          title: "联系我们",
          link: "/error-500",
        },
      ],
    };
  },
  mounted() {
    this.active = this.$route.meta.nav;
  },
  methods: {
    selected(title) {
      this.active = title;
    },
    toHome() {
      this.$router.push("/home");
      this.active = "首页";
    },
  },
};
</script>

<style lang="scss" scoped>
$white: #ffffff;
@mixin rim {
  background: transparent none repeat scroll 0 0;
  content: "";
  height: 10px;
  position: absolute;
  width: 25px;
  visibility: hidden;
  transition: 0.3s ease;
  opacity: 0;
}
header {
  color: $white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  padding: 1.6% 0;
  transition: background-color 1.5s;
  & > div {
    display: flex;
    justify-content: space-between;
    margin: 0 10%;
    .img_hover:hover {
      &::before {
        content: "";
        height: 555px;
        width: 100%;
        position: absolute;
        left: 0%;
        top: 0;
        background-color: transparent;
        background-image: -webkit-linear-gradient(
          -30deg,
          transparent 30%,
          #fff 50%,
          transparent 70%
        ); /*设置渐变的背景，按对角线渐变*/
        background-blend-mode: hard-light; /*设置背景为混合模式下的强光模式*/
        background-size: 200%;
        animation: shine 5s forwards; /*给背景添加动画改变位置*/
      }
    }
    .web_icon {
      img {
        position: absolute;
        z-index: inherit;
        cursor: pointer;
        top: -2vh;
      }
    }
    ul {
      font-family: "Microsoft Yahei", "微软雅黑", sans-serif;
      // font-weight: bold;
      display: flex;
      list-style: none;
      li {
        margin-right: 5px;
        box-sizing: border-box;
        position: relative;
        a {
          display: block;
          line-height: 20px;
          padding: 6px 15px;
          text-decoration: none;
          box-sizing: border-box;
          color: #434343;
          position: relative;
          background-color: transparent;
          text-transform: uppercase;
          transition: 0.3s ease;
          &.active {
            color: #1f8b8d;
            &::before {
              visibility: visible;
              opacity: 1;
              left: 0;
            }
            &::after {
              visibility: visible;
              opacity: 1;
              right: 0;
            }
          }
          &:hover {
            background: none;
            color: #1f8b8d;
            outline: none;
            &::before {
              visibility: visible;
              opacity: 1;
              left: 0;
            }
            &::after {
              visibility: visible;
              opacity: 1;
              right: 0;
            }
          }
          &::before {
            @include rim;
            border-left: 1px solid #1f8b8d;
            border-top: 1px solid #1f8b8d;
            top: 0;
            left: -70px;
          }
          &::after {
            @include rim;
            border-right: 1px solid #1f8b8d;
            border-bottom: 1px solid #1f8b8d;
            bottom: 0;
            right: 70px;
          }
        }
      }
    }
  }
  ul > li .gdlt {
    position: absolute;
    width: 140%;
    // padding: 5px 0;
    left: -25%;
    top: 32px;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    display: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  ul > li:hover .gdlt {
    transition: max-height 0.3s ease-in;
    transform-origin: 50% 0;
    animation: slide-down 0.3s ease-in;
    -webkit-animation: slide-down 0.3s ease-in;
    display: block;
  }
}
@media (max-width: 1200px) {
  .web_icon img {
    height: 60px;
  }
}
// 动画
@keyframes shine {
  from {
    background-position: 130%;
  }
  to {
    background-position: -50%;
  }
}
</style>
