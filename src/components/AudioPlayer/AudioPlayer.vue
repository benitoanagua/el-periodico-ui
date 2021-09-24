<template>
  <div :class="classPlayer">
    <div :class="classAudioPlayer">
      <div :class="classAudioContainer" @click="playPause">
        <ph-play v-if="isPaused" :size="32" />
        <ph-pause v-else :size="32" />
      </div>
      <div :class="classTime">
        <div>{{ current }} / {{ length }}</div>
      </div>
      <div id="volume-slider" :class="classVolumeSlider">
        <div
          :class="classVolumePercentage"
          :style="{ width: volume + '%' }"
        ></div>
      </div>
      <div :class="classVolumeButton" @click="volMute">
        <ph-speaker-simple-high v-if="!isMuted" :size="24" />
        <ph-speaker-simple-slash v-else :size="24" />
      </div>
    </div>
    <div id="timeline" :class="classTimeline">
      <div :class="classProgress" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from "vue";
import {
  PhPlay,
  PhPause,
  PhSpeakerSimpleHigh,
  PhSpeakerSimpleSlash,
} from "phosphor-vue";

export default {
  name: "CsAudioPlayer",
  components: {
    PhPlay,
    PhPause,
    PhSpeakerSimpleHigh,
    PhSpeakerSimpleSlash,
  },
  props: {
    breakpoint: {
      type: String,
      default: "md",
    },
    url: {
      type: String,
      default: "https://filesamples.com/samples/audio/mp3/sample1.mp3",
    },
    radio: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);
    const isPaused = ref(true);
    const isMuted = ref(false);
    const progress = ref(0);
    const current = ref("0:00");
    const length = ref("");
    const volume = ref(100);

    const audio = new Audio(props.url);

    onMounted(() => {
      audio.addEventListener(
        "loadeddata",
        () => {
          length.value = getTimeCodeFromNum(audio.duration);
          audio.volume = 1;
        },
        false
      );

      const timeline = document.querySelector("#timeline");
      timeline.addEventListener(
        "click",
        (e) => {
          const timelineWidth = window.getComputedStyle(timeline).width;
          const timeToSeek =
            (e.offsetX / parseInt(timelineWidth)) * audio.duration;
          audio.currentTime = timeToSeek;
        },
        false
      );

      const volumeSlider = document.querySelector("#volume-slider");
      volumeSlider.addEventListener(
        "click",
        (e) => {
          const sliderWidth = window.getComputedStyle(volumeSlider).width;
          const newVolume = e.offsetX / parseInt(sliderWidth);
          audio.volume = newVolume;
          volume.value = newVolume * 100;
        },
        false
      );

      setInterval(() => {
        progress.value = (audio.currentTime / audio.duration) * 100;
        current.value = getTimeCodeFromNum(audio.currentTime);
      }, 500);
    });

    // methods
    const volMute = () => {
      audio.muted = !audio.muted;
      isMuted.value = !isMuted.value;
    };
    const playPause = () => {
      if (audio.paused) {
        isPaused.value = false;
        audio.play();
      } else {
        isPaused.value = true;
        audio.pause();
      }
    };
    const getTimeCodeFromNum = (num) => {
      let seconds = parseInt(num);
      let minutes = parseInt(seconds / 60);
      seconds -= minutes * 60;
      const hours = parseInt(minutes / 60);
      minutes -= hours * 60;

      if (hours === 0)
        return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
      return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
      ).padStart(2, 0)}`;
    };

    // classes
    const classPlayer = computed(() => ({
      "flex flex-col max-w-xs": true,
      [`${props.breakpoint}:h-12 h-10 `]: true,
      "max-w-xs": !props.radio,
      [`${props.breakpoint}:w-48 w-36 `]: props.radio,
    }));
    const classAudioPlayer = computed(() => ({
      "flex justify-between items-center w-full": true,
    }));
    const classAudioContainer = computed(() => ({
      "flex justify-center items-center bg-accent-500 text-white": true,
      [`${props.breakpoint}:w-12 w-10 ${props.breakpoint}:h-12 h-10`]: true,
    }));
    const classTime = computed(() => ({
      "flex w-16 text-sm": true,
      hidden: props.radio,
    }));
    const classVolumeSlider = computed(() => ({
      "h-4 bg-black transition duration-300": true,
      [`${props.breakpoint}:w-24 w-16 `]: true,
    }));
    const classVolumePercentage = computed(() => ({
      "bg-accent-500 h-full": true,
    }));
    const classVolumeButton = computed(() => ({
      "flex items-center": true,
    }));
    const classTimeline = computed(() => ({
      "flex flex-none bg-transparent h-2 -mt-2 w-full cursor-pointer": true,
    }));
    const classProgress = computed(() => ({
      "bg-black bg-opacity-25 transition duration-300": true,
      hidden: props.radio,
    }));

    return {
      isPaused,
      isMuted,
      audio,
      progress,
      current,
      length,
      volume,

      volMute,
      playPause,
      getTimeCodeFromNum,

      classPlayer,
      classAudioPlayer,
      classAudioContainer,
      classTime,
      classVolumeSlider,
      classVolumePercentage,
      classVolumeButton,
      classTimeline,
      classProgress,
    };
  },
};
</script>