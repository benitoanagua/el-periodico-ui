import { ref } from "vue";
import PostsService from "@/services/PostsService";
import CsCarousel from "@/components/Carousel/Carousel.vue";
import CsCarouselArrowNav from "@/components/Carousel/CarouselArrowNav.vue";
import CsCarouselDotNav from "@/components/Carousel/CarouselDotNav.vue";
import CsCarouselSlides from "@/components/Carousel/CarouselSlides.vue";
import CsCarouselSlideItem from "@/components/Carousel/CarouselSlideItem.vue";
import CsCard from "@/components/Card/Card.vue";

import { PhCaretCircleLeft, PhCaretCircleRight, PhSquare } from "phosphor-vue";

export default {
  title: "Design System/Components/Carousel",
  component: {
    CsCarousel,
    CsCarouselArrowNav,
    CsCarouselDotNav,
    CsCarouselSlides,
    CsCarouselSlideItem,
    CsCard,
    PhCaretCircleLeft,
    PhCaretCircleRight,
  },
};

const Template = (args) => ({
  components: {
    CsCarousel,
    CsCarouselArrowNav,
    CsCarouselDotNav,
    CsCarouselSlides,
    CsCarouselSlideItem,
    CsCard,
    PhCaretCircleLeft,
    PhCaretCircleRight,
  },
  setup() {
    const slides = ref(null);
    const postsService = ref(new PostsService());

    postsService.value.getPosts(15, 20).then((data) => (slides.value = data));

    return { ...args, slides };
  },
  template: `
  <cs-carousel>
    <template v-slot:arrownav>
      <cs-carousel-arrow-nav>
        <template v-slot:left>
          <ph-caret-circle-left :size="24" class="text-neutral-700"/>
        </template>
        <template v-slot:right>
          <ph-caret-circle-right :size="24" class="text-neutral-700"/>
        </template>
      </cs-carousel-arrow-nav>
    </template>
    <template v-slot:dotnav>
      <cs-carousel-dot-nav v-for="(slide, n) in slides" :item="n" />
    </template>
    <template v-slot:content>
      <cs-carousel-slides :visibleItems="visibleItems">
        <cs-carousel-slide-item v-for="(post, index) in slides">
          <cs-card
            :breakpoint="breakpoint"
            :heading="6"
            media="top"
            aspectRatio="aspect-w-1 aspect-h-1"
            url="#"
            :title="index+' '+post.title"
            :image="post.image"
            :noWrap="false"
          />
        </cs-carousel-slide-item>
      </cs-carousel-slides>
    </template>

  </cs-carousel>
  `,
});

export const Default = Template.bind({});
Default.args = {
  breakpoint: "md",
  visibleItems: 2,
};
