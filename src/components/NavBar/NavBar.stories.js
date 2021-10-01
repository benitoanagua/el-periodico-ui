import { ref } from "vue";
import PostsService from "@/services/PostsService";
import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsNavBar from "@/components/NavBar/NavBar.vue";
import CsSearch from "@/components/Search/Search.vue";
import CsLogo from "@/components/Logo/Logo.vue";
import { PhList } from "phosphor-vue";
import { menu } from "@/helpers/Data";

export default {
  title: "Design System/Components/NavBar",
  component: {
    CsSection,
    CsContainer,
    CsNavBar,
    CsSearch,
    CsLogo,
    PhList,
  },
};

const Template = (args) => ({
  components: {
    CsSection,
    CsContainer,
    CsNavBar,
    CsSearch,
    CsLogo,
    PhList,
  },
  setup() {
    const news = ref([]);
    const postsService = ref(new PostsService());
    postsService.value.getAll().then((data) => (news.value = data));
    return { ...args, news };
  },
  template: `
    <cs-section margin="my-4">
      <cs-container
        maxWidth="max-w-screen-lg"
        :breakpoint="breakpoint"
      >
        <div class="w-full h-40 bg-neutral-200" />
      </cs-container>
    </cs-section>

    <cs-section
      class="sticky top-0"
      :backgroundColor="backgroundColor"
    >
      <cs-container
        maxWidth="max-w-screen-lg"
        :breakpoint="breakpoint"
      >
        <cs-nav-bar
          :breakpoint="breakpoint"
          :model="items"
        >
          <template v-slot:menuMobile>
            <ph-list :size="24" />
          </template>
          <template v-slot:menuDesktop>
            <ph-list :size="24" />
          </template>
          <template v-slot:logoMobile>
            <cs-logo height="h-6" />
          </template>
          <template v-slot:search>
            <cs-search
              :breakpoint="breakpoint"
              :posts="news"
              :limit="5"
            />
          </template>
        </cs-nav-bar>
      </cs-container>
    </cs-section>

    <cs-section margin="my-4">
    <cs-container
      maxWidth="max-w-screen-lg"
      :breakpoint="breakpoint"  
    >
      <div class="space-y-2">
          <div
            v-for="n in 50"   
            class="w-full h-4 bg-neutral-200"
          />
      </div>
      </cs-container>
    </cs-section>
  `,
});

export const Default = Template.bind({});
Default.args = {
  breakpoint: "lg",
  backgroundColor: "bg-secondary-400",
  items: menu,
};
