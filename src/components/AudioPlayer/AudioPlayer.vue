<template>
  <div class="player flex flex-col h-16 max-w-xs">
    <div
      class="
        audio-player
        flex
        justify-between
        items-center
        w-full
        bg-primary-200
      "
    >
      <div
        class="
          play-container
          flex
          justify-center
          items-center
          bg-accent-500
          text-white
          w-16
          h-16
        "
        @click="playPause"
      >
        <ph-play v-if="isPaused" :size="32" />
        <ph-pause v-else :size="32" />
      </div>
      <div class="time flex">
        <div class="current">{{ current }} / {{ length }}</div>
      </div>
      <div class="volume-slider w-24 h-4 bg-black transition duration-300">
        <div
          class="volume-percentage bg-accent-500 h-full w-3/4"
          :style="{ width: volume + '%' }"
        ></div>
      </div>
      <div class="volume-button flex items-center" @click="volMute">
        <ph-speaker-simple-high v-if="!isMuted" :size="24" />
        <ph-speaker-simple-slash v-else :size="24" />
      </div>
    </div>
    <div
      class="
        timeline
        flex flex-none
        bg-transparent
        h-2
        -mt-2
        w-full
        cursor-pointer
      "
    >
      <div
        class="progress bg-black bg-opacity-25 transition duration-300"
        :style="{ width: progress + '%' }"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
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
  setup() {
    const isPaused = ref(true);
    const isMuted = ref(false);
    const url = ref("https://filesamples.com/samples/audio/mp3/sample1.mp3");
    const audio = new Audio(url.value);
    const progress = ref(0);
    const current = ref("0:00");
    const length = ref("");
    const volume = ref(100);

    onMounted(() => {
      const audioPlayer = document.querySelector(".audio-player");

      const timeline = document.querySelector(".timeline");
      timeline.addEventListener("click", timelineClick, false);

      const volumeSlider = audioPlayer.querySelector(".volume-slider");
      volumeSlider.addEventListener("click", volumeSliderClick, false);

      audio.addEventListener("loadeddata", audioLoadeddata, false);

      setInterval(() => {
        progress.value = (audio.currentTime / audio.duration) * 100;
        current.value = getTimeCodeFromNum(audio.currentTime);
      }, 500);
    });

    // addEventListeners
    const timelineClick = (e) => {
      const timelineWidth = window.getComputedStyle(timeline).width;
      const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
      audio.currentTime = timeToSeek;
    };
    const volumeSliderClick = (e) => {
      const sliderWidth = window.getComputedStyle(volumeSlider).width;
      const newVolume = e.offsetX / parseInt(sliderWidth);
      audio.volume = newVolume;
      volume.value = newVolume * 100;
    };
    const audioLoadeddata = () => {
      length.value = getTimeCodeFromNum(audio.duration);
      audio.volume = 1;
    };

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

    return {
      isPaused,
      isMuted,
      url,
      audio,
      progress,
      current,
      length,
      volume,

      timelineClick,
      volumeSliderClick,
      audioLoadeddata,

      volMute,
      playPause,
      getTimeCodeFromNum,
    };
  },
};
</script>