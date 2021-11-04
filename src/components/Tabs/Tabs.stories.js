import { ref } from "vue";
import PostsService from "@/services/PostsService";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabItem from "@/components/Tabs/TabItem.vue";
import TabPanel from "@/components/Tabs/TabPanel.vue";
import TabPanelItem from "@/components/Tabs/TabPanelItem.vue";
import CsCardList from "@/components/CardList/CardList.vue";
import CsCardListItem from "@/components/CardList/CardListItem.vue";

export default {
  title: "Design System/Components/Tabs",
  component: {
    Tabs,
    TabItem,
    TabPanel,
    TabPanelItem,
    CsCardList,
    CsCardListItem,
  },
};

const Template = (args) => ({
  components: {
    Tabs,
    TabItem,
    TabPanel,
    TabPanelItem,
    CsCardList,
    CsCardListItem,
  },
  setup() {
    const active = ref(2);
    const list1 = ref(null);
    const list2 = ref(null);
    const list3 = ref(null);
    const list4 = ref(null);
    const postsService = ref(new PostsService());

    postsService.value.getPosts(1, 5).then((data) => (list1.value = data));
    postsService.value.getPosts(6, 10).then((data) => (list2.value = data));
    postsService.value.getPosts(11, 15).then((data) => (list3.value = data));
    postsService.value.getPosts(16, 20).then((data) => (list4.value = data));

    const lists = [
      { tab: list1 },
      { tab: list2 },
      { tab: list3 },
      { tab: list4 },
    ];
    const titles = [
      { caption: "Hoy" },
      { caption: "Semana" },
      { caption: "Mes" },
      { caption: "Archivo" },
    ];

    return { ...args, active, lists, titles };
  },
  template: `
  <div class="p-10">
    <tabs v-model="active">
      <tab-item v-for="title in titles">
        {{ title.caption }}
      </tab-item>
    </tabs>
    <tab-panel v-model="active">
      <tab-panel-item v-for="{tab} in lists">
        <cs-card-list theme="primary" >
          <cs-card-list-item
            v-for="(card, number) in tab.value"
            :decimal="number + 1"
            :category="card.category"
            :title="card.title"
          />
        </cs-card-list>
      </tab-panel-item>
    </tab-panel>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  breakpoint: "md",
};
