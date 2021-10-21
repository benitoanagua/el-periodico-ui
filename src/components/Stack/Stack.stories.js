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

    const cards = [
      { list: card1, caption: "Hoy", theme: "primary" },
      { list: card2, caption: "Semana", theme: "accent" },
      { list: card3, caption: "Mes", theme: "neutral" },
      { list: card4, caption: "Archivo", theme: "secondary" },
    ];

    return { ...args, cards };
  },
  template: `
  <div>mi texto superior</div>
  <cs-stack>
    <cs-stack-item
      v-for="({list, caption, theme}, index) in cards"  
      :breakpoint="breakpoint" :total="cards.length" :order="index + 1"
      :caption="caption"
    >
      <cs-card-list :theme="theme" >
        <cs-card-list-item
          v-for="(card, number) in list.value"
          :decimal="number + 1"
          :category="card.category"
          :title="card.title"
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
