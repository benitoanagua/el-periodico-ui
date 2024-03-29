import { ref } from "vue";
import PostsService from "@/services/PostsService";
import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsCard from "@/components/Card/Card.vue";

export default {
  title: "Design System/Components/Card",
  component: {
    CsSection,
    CsContainer,
    CsCard,
  },
};

const Template = (args) => ({
  components: {
    CsSection,
    CsContainer,
    CsCard,
  },
  setup() {
    const posts = ref(null);
    const postsService = ref(new PostsService());
    postsService.value.get(5).then((data) => (posts.value = data));
    return { ...args, posts };
  },
  template: `
  <cs-section backgroundColor="bg-white">
    <cs-container
      breakpoint="lg"
      maxWidth="max-w-screen-lg"
    >
      <div class="grid grid-cols-1 ">
        <cs-card
          class="bg-primary-200"
          v-for="post in posts"
          :breakpoint="breakpoint"
          :heading="2"
          :media="media"
          :mediaFraction="mediaFraction"
          :bodyFraction="bodyFraction"
          :aspectRatio="aspectRatio"
          url="#"
          :isFloat="isFloat"
          :title="post.title"
          :image="post.image"
          :excerpt="post.excerpt"
          :author="post.author"
          :category="post.category"
          :date="post.date"
        />
      </div>
    </cs-container>
  </cs-section>
  `,
});

export const MediaLeft = Template.bind({});
MediaLeft.args = {
  breakpoint: "md",
  media: "left",
  mediaFraction: "w-1/2",
  bodyFraction: "w-1/2",
  aspectRatio: "aspect-w-4 aspect-h-3",
  isFloat: true,
};
export const MediaRight = Template.bind({});
MediaRight.args = {
  breakpoint: "md",
  media: "right",
  mediaFraction: "w-1/2",
  bodyFraction: "w-1/2",
  aspectRatio: "aspect-w-4 aspect-h-3",
  isFloat: true,
};
export const MediaTop = Template.bind({});
MediaTop.args = {
  breakpoint: "md",
  media: "top",
  mediaFraction: "w-1/2",
  bodyFraction: "w-1/2",
  aspectRatio: "aspect-w-4 aspect-h-3",
  isFloat: true,
};
export const MediaBottom = Template.bind({});
MediaBottom.args = {
  breakpoint: "md",
  media: "bottom",
  mediaFraction: "w-1/2",
  bodyFraction: "w-1/2",
  aspectRatio: "aspect-w-4 aspect-h-3",
  isFloat: true,
};
