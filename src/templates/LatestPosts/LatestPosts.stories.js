import { ref } from "vue";
import PostsService from "@/services/PostsService";
import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsBlockHeader from "@/components/BlockHeader/BlockHeader.vue";
import CsCard from "@/components/Card/Card.vue";

export default {
  title: "Design System/Templates/Latest",
  component: {
    CsSection,
    CsContainer,
    CsBlockHeader,
    CsCard,
  },
};

const Template = (args) => ({
  components: {
    CsSection,
    CsContainer,
    CsBlockHeader,
    CsCard,
  },
  setup() {
    const level = ref(null);
    const postsService = ref(new PostsService());
    postsService.value.getPosts(2, 7).then((data) => (level.value = data));
    return { ...args, level };
  },
  template: `
  <cs-section margin="my-6" backgroundColor="bg-primary-200">
    <cs-container
      breakpoint="lg"
      maxWidth="max-w-screen-lg"
    >
      <cs-block-header
        :breakpoint="breakpoint"
        :title="title"
        lineFraction="w-1/3"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
        <cs-card
          v-for="post in level"
          :breakpoint="breakpoint"
          :heading="6"
          media="left"
          mediaFraction="w-1/4"
          bodyFraction="w-3/4"
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
  title: "Sociedad",
};
