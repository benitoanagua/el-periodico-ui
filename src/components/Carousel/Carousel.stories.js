import { ref } from "vue";
import PostsService from "@/services/PostsService";
import CsCarousel from "@/components/Carousel/Carousel.vue";
import CsCarouselItem from "@/components/Carousel/CarouselItem.vue";
import CsCard from "@/components/Card/Card.vue";

export default {
  title: "Design System/Components/Carousel",
  component: {
    CsCarousel,
    CsCarouselItem,
    CsCard,
  },
};

const Template = (args) => ({
  components: {
    CsCarousel,
    CsCarouselItem,
    CsCard,
  },
  setup() {
    const slides = ref(null);
    const postsService = ref(new PostsService());

    postsService.value.getPosts(4, 8).then((data) => (slides.value = data));

    return { ...args, slides };
  },
  template: `
  <cs-carousel>
    <template v-slot:navigation>
      Navigation
    </template>
    <template v-slot:pagination>
      Pagination
    </template>
    <template v-slot:slides>
      <div class="grid grid-cols-2 gap-6">
        <cs-carousel-item v-for="(post, index) in slides"
          :class="'order-' + (index + 1) + (index > 1 ? ' hidden':' ')"
        >
          <cs-card
            :breakpoint="breakpoint"
            :heading="6"
            media="top"
            aspectRatio="aspect-w-1 aspect-h-1"
            url="#"
            :title="post.title"
            :image="post.image"
            :noWrap="false"
          />
        </cs-carousel-item>
      </div>
    </template>

  </cs-carousel>
  `,
});

export const Default = Template.bind({});
Default.args = {
  breakpoint: "md",
};
