import { ref } from "vue";
import PostsService from "@/services/PostsService";
import CsStack from "@/components/Stack/Stack.vue";
import CsStackItem from "@/components/Stack/StackItem.vue";
import CsCardList from "@/components/CardList/CardList.vue";
import CsCardListItem from "@/components/CardList/CardListItem.vue";

export default {
  title: "Design System/Components/Stack",
  component: {
    CsStack,
    CsStackItem,
    CsCardList,
    CsCardListItem,
  },
};

const Template = (args) => ({
  components: {
    CsStack,
    CsStackItem,
    CsCardList,
    CsCardListItem,
  },
  setup() {
    const card1 = ref(null);
    const card2 = ref(null);
    const card3 = ref(null);
    const card4 = ref(null);
    const postsService = ref(new PostsService());
    postsService.value.getPosts(1, 5).then((data) => (card1.value = data));
    postsService.value.getPosts(6, 10).then((data) => (card2.value = data));
    postsService.value.getPosts(11, 15).then((data) => (card3.value = data));
    postsService.value.getPosts(16, 20).then((data) => (card4.value = data));
    return { ...args, card1, card2, card3, card4 };
  },
  template: `
  <div>mi texto superior</div>
  <cs-stack>
    <cs-stack-item :breakpoint="breakpoint" :total="4" :order="1">
      <cs-card-list
        theme="primary"
        caption="Hoy"
      >
        <cs-card-list-item
          v-for="(item, index) in card1"
          :decimal="index + 1"
          :category="item.category"
          :title="item.title"
        />
      </cs-card-list>
    </cs-stack-item>
    <cs-stack-item :breakpoint="breakpoint" :total="4" :order="2">
      <cs-card-list
        theme="accent"
        caption="Semana"
      >
        <cs-card-list-item
          v-for="(item, index) in card2"
          :decimal="index + 1"
          :category="item.category"
          :title="item.title"
        />
      </cs-card-list>
    </cs-stack-item>
    <cs-stack-item :breakpoint="breakpoint" :total="4" :order="3">
      <cs-card-list
        theme="neutral"
        caption="Mes"
      >
        <cs-card-list-item
          v-for="(item, index) in card3"
          :decimal="index + 1"
          :category="item.category"
          :title="item.title"
        />
      </cs-card-list>
    </cs-stack-item>
    <cs-stack-item :breakpoint="breakpoint" :total="4" :order="4">
      <cs-card-list
        theme="secondary"
        caption="Todos los tiempos"
      >
        <cs-card-list-item
          v-for="(item, index) in card4"
          :decimal="index + 1"
          :category="item.category"
          :title="item.title"
        />
      </cs-card-list>
    </cs-stack-item>
  </cs-stack>
  <div>mi texto inferior</div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  breakpoint: "md",
};
