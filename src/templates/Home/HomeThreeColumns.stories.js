import { ref } from "vue";
import PostsService from "@/services/PostsService";
import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsCard from "@/components/Card/Card.vue";

export default {
  title: "Design System/Templates/Home/HomeThreeColumns",
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
    const level1 = ref(null);
    const level2 = ref(null);
    const level3 = ref(null);
    const level4 = ref(null);
    const postsService = ref(new PostsService());
    postsService.value.get(7).then((data) => (level1.value = data));
    postsService.value.getPosts(8, 9).then((data) => (level2.value = data));
    postsService.value.getPosts(10, 13).then((data) => (level3.value = data));
    postsService.value.getPosts(14, 16).then((data) => (level4.value = data));
    return { ...args, level1, level2, level3, level4 };
  },
  template: `
  <cs-section margin="my-6" backgroundColor="bg-white">
    <cs-container
      breakpoint="lg"
      maxWidth="max-w-screen-lg"
    >
      <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div class="w-full md:w-5/12">
          <div class="grid grid-cols-1">
            <cs-card
              v-for="post in level1"
              :breakpoint="breakpoint"
              :heading="2"
              media="bottom"
              mediaFraction="w-4/7"
              bodyFraction="w-3/7"
              aspectRatio="aspect-w-3 aspect-h-2"
              url="#"
              :isFloat="true"
              :title="post.title"
              :image="post.image"
              :excerpt="post.excerpt"
              :author="post.author"
              :category="post.category"
              :date="post.date"
            />
          </div>
        </div>
        <div class="w-full md:w-3/12">
          <div class="grid grid-cols-1 gap-6">
            <cs-card
              v-for="post in level2"
              :breakpoint="breakpoint"
              :heading="5"
              media="top"
              aspectRatio="aspect-w-3 aspect-h-2"
              url="#"
              :title="post.title"
              :image="post.image"
              :category="post.category"
              :date="post.date"
            />
          </div>
        </div>
        <div class="w-full md:w-4/12">
          <div class="grid grid-cols-1 gap-6">
            <cs-card
              v-for="post in level3"
              :breakpoint="breakpoint"
              :heading="6"
              media="left"
              mediaFraction="w-1/3"
              bodyFraction="w-2/3"
              aspectRatio="aspect-w-1 aspect-h-1"
              url="#"
              :title="post.title"
              :image="post.image"
              :category="post.category"
              :date="post.date"
              :noWrap="true"
            />
          </div>
        </div>
      </div>
    </cs-container>
  </cs-section>

  <cs-section margin="my-6" backgroundColor="bg-white">
  <cs-container
    breakpoint="lg"
    maxWidth="max-w-screen-lg"
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <cs-card
        v-for="post in level4"
        :breakpoint="breakpoint"
        :heading="6"
        media="left"
        mediaFraction="w-1/3"
        bodyFraction="w-2/3"
        aspectRatio="aspect-w-1 aspect-h-1"
        url="#"
        :title="post.title"
        :image="post.image"
        :category="post.category"
        :date="post.date"
        :noWrap="true"
      />
    </div>
  </cs-container>
</cs-section>
  `,
});

export const Default = Template.bind({});
Default.args = {
  breakpoint: "md",
  //   media: "left",
  //   mediaFraction: "w-1/2",
  //   bodyFraction: "w-1/2",
};
