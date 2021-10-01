import { ref } from "vue";
import PostsService from "@/services/PostsService";
import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsCard from "@/components/Card/Card.vue";

export default {
  title: "Design System/Templates/Portada/Home1",
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
    const postsService = ref(new PostsService());
    postsService.value.get(5).then((data) => (level1.value = data));
    postsService.value.getPosts(6, 9).then((data) => (level2.value = data));
    postsService.value.getPosts(10, 15).then((data) => (level3.value = data));
    return { ...args, level1, level2, level3 };
  },
  template: `
  <cs-section margin="my-6" backgroundColor="bg-white">
    <cs-container
      breakpoint="lg"
      maxWidth="max-w-screen-lg"
    >
      <cs-card
        v-for="post in level1"
        :breakpoint="breakpoint"
        :heading="2"
        media="right"
        mediaFraction="w-1/2"
        bodyFraction="w-1/2"
        :title="post.title"
        :image="post.image"
        :excerpt="post.excerpt"
        :author="post.author"
        :category="post.category"
        :date="post.date"
      />
    </cs-container>
  </cs-section>
  
  <cs-section margin="my-6" backgroundColor="bg-white">
    <cs-container
      breakpoint="lg"
      maxWidth="max-w-screen-lg"
    >
      <div class="flex space-x-6">
        <div class="w-1/4" v-for="post in level2">
          <cs-card
            :breakpoint="breakpoint"
            :heading="5"
            media="top"
            :title="post.title"
            :image="post.image"
            :category="post.category"
            :date="post.date"
          />
        </div>
      </div>
    </cs-container>
  </cs-section>

  <cs-section margin="my-6" backgroundColor="bg-white">
    <cs-container
      breakpoint="lg"
      maxWidth="max-w-screen-lg"
    >
      <div class="flex flex-wrap">
        <div class="w-1/3" v-for="post in level3">
          <cs-card
            :breakpoint="breakpoint"
            :heading="6"
            media="left"
            mediaFraction="w-1/3"
            bodyFraction="w-2/3"
            :title="post.title"
            :image="post.image"
            :category="post.category"
            :date="post.date"
          />
        </div>
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
