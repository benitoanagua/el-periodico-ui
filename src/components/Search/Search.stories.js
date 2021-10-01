import { ref } from "vue";
import PostsService from "@/services/PostsService";
import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsSearch from "@/components/Search/Search.vue";

export default {
  title: "Design System/Components/Search",
  component: {
    CsSection,
    CsContainer,
    CsSearch,
  },
};

const Template = (args) => ({
  components: {
    CsSection,
    CsContainer,
    CsSearch,
  },
  setup() {
    const news = ref([]);
    const postsService = ref(new PostsService());
    postsService.value.getAll().then((data) => (news.value = data));
    return { ...args, news };
  },
  template: `
    <cs-section backgroundColor="bg-white">
      <cs-container maxWidth="max-w-screen-lg">
        <cs-search
          :breakpoint="breakpoint"
          :posts="news"
          :limit="limit"
        />
      </cs-container>
    </cs-section>
  `,
});

export const Default = Template.bind({});
Default.args = {
  breakpoint: "lg",
  limit: 4,
};
