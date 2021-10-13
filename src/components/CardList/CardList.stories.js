import { ref } from "vue";
import PostsService from "@/services/PostsService";
import CsCardList from "@/components/CardList/CardList.vue";
import CsCardListItem from "@/components/CardList/CardListItem.vue";

export default {
  title: "Design System/Components/CardList",
  argTypes: {
    theme: {
      options: ["neutral", "primary", "secondary", "accent"],
      control: { type: "inline-radio" },
    },
  },
  component: {
    CsCardList,
    CsCardListItem,
  },
};

const Template = (args) => ({
  components: {
    CsCardList,
    CsCardListItem,
  },
  setup() {
    const level = ref(null);
    const postsService = ref(new PostsService());
    postsService.value.getPosts(3, 7).then((data) => (level.value = data));
    return { ...args, level };
  },
  template: `
  <cs-card-list
    :theme="theme"
    :caption="caption"
  >
    <cs-card-list-item
      v-for="(item, index) in level"
      :decimal="index + 1"
      :category="item.category"
      :title="item.title"
    />
  </cs-card-list>
  `,
});

export const Default = Template.bind({});
Default.args = {
  theme: "neutral",
  caption: "Hoy",
};
