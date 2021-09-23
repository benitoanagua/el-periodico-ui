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
import {
  PhPlay,
  PhPause,
  PhSpeakerSimpleHigh,
  PhSpeakerSimpleSlash,
} from "phosphor-vue";

export default {
  name: "CsAudioPlayer",
  data() {
    return {
      isPaused: true,
      isMuted: false,
      url: "https://dkihjuum4jcjr.cloudfront.net/ES_ITUNES/Shake%20It%20Up/ES_Shake%20It%20Up.mp3",
      //   url: "https://whsh4u-panel.com/proxy/gddupgij?mp=/stream",
      audio: null,
      progress: 0,
      current: "0:00",
      length: "",
      volume: 100,
    };
  },
  components: {
    PhPlay,
    PhPause,
    PhSpeakerSimpleHigh,
    PhSpeakerSimpleSlash,
  },
  mounted() {
    const audioPlayer = document.querySelector(".audio-player");

    const timeline = document.querySelector(".timeline");
    timeline.addEventListener(
      "click",
      (e) => {
        const timelineWidth = window.getComputedStyle(timeline).width;
        const timeToSeek =
          (e.offsetX / parseInt(timelineWidth)) * this.audio.duration;
        this.audio.currentTime = timeToSeek;
      },
      false
    );

    const volumeSlider = audioPlayer.querySelector(".volume-slider");
    volumeSlider.addEventListener(
      "click",
      (e) => {
        const sliderWidth = window.getComputedStyle(volumeSlider).width;
        const newVolume = e.offsetX / parseInt(sliderWidth);
        this.audio.volume = newVolume;
        this.volume = newVolume * 100;
      },
      false
    );

    this.audio = new Audio(this.url);
    this.audio.addEventListener(
      "loadeddata",
      () => {
        this.length = this.getTimeCodeFromNum(this.audio.duration);
        this.audio.volume = 1;
      },
      false
    );
    setInterval(() => {
      this.progress = (this.audio.currentTime / this.audio.duration) * 100;
      this.current = this.getTimeCodeFromNum(this.audio.currentTime);
    }, 500);
  },
  methods: {
    volMute() {
      this.audio.muted = !this.audio.muted;
      this.isMuted = !this.isMuted;
    },
    playPause() {
      if (this.audio.paused) {
        this.isPaused = false;
        this.audio.play();
      } else {
        this.isPaused = true;
        this.audio.pause();
      }
    },
    getTimeCodeFromNum(num) {
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
    },
  },
};
</script>