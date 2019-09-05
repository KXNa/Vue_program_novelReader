<template>
    <div class="slider-banner-view">
        <div class="sliders-wrapper">
            <ul class="slider-container" ref="slider">
                <li class="slider-item" v-for="(item, index) in sliders" :key="index">
                    <img width="100%" :src="item.image_url" alt />
                </li>
                <li class="slider-item">
                    <img width="100%" :src="sliders[0].image_url" alt />
                </li>
            </ul>
            <ul class="dots">
                <li
                v-for="(dot, i) in sliders"
                :key="i"
                :class="{dotted: i === index}"
                ></li>
            </ul>
        </div>
    </div>
</template>

<script>
// import { constants } from 'crypto';
// import { clearInterval, setInterval } from 'timers';
export default {
    name: "SlidersBanner",
    props: {
        sliders: {
            type: Array,
            required: true
        },
        picWidth: {
            type: Number,
            default: 100
        }
    },
    data: () => ({
    index: 0,
    timer: null
  }),
  methods: {
    nextPic() {
      this.index++;
      let offsetX = -this.index * this.picWidth;
      this.$refs.slider.style.transition = "all .5s linear";
      this.$refs.slider.style.transform = `translateX(${offsetX}vw)`;
    },
    resetPic() {
      if (this.index >= this.sliders.length) {
        this.index = 0;
        let offsetX = -this.index * this.picWidth;
        this.$refs.slider.style.transition = "none";
        this.$refs.slider.style.transform = `translateX(${offsetX}vw)`;
      }
    }
  },
  watch: {
    index(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.$emit("changeIndex", newValue);
      }
    }
  },
  mounted() {
     
    clearInterval(this.timer);
    this.timer = setInterval(this.nextPic, 2000);
    this.$refs.slider.addEventListener("transitionend", this.resetPic);
  },
  beforeDestroy(){
  },
  destroyed() {
      clearInterval(this.timer)
  },
}
</script>

<style lang="scss" scoped>
    .slider-banner-view {
        text-align: center;

        .sliders-wrapper {
            position: relative;
            width: 100%;
            height: 57vw;
            margin: 0 auto;
            overflow: hidden;

            .slider-container {
                display: flex;
                width: 1000%;
                position: absolute;

                .slider-item {
                    width: 10%;
                }
            }
        }
        .dots {
            position: absolute;
            bottom: 10px;
            right: 0;
            transform: translateX(-25%);

            li {
                display: inline-block;
                width: 8px;
                height: 8px;
                margin: 0 3px;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.3);
                cursor: pointer;

                &.dotted {
                    background-color: rgba(255, 255, 255, 0.8);
                }
            }
        }
    }
</style>