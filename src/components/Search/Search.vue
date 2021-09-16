<template>
  <div class="">
    <div
      :class="'h-12 inline-flex items-center ' + breakpoint + ':px-0 px-3 py-3'"
    >
      <ph-magnifying-glass
        class="cursor-pointer"
        :size="24"
        @click="openSearch"
      />
    </div>
    <cs-search-form
      class="-mt-12"
      v-model:search="searchQuery"
      :visible="displaySearch"
      @click="closeSearch"
    />
    <cs-search-result
      space="space-y-2"
      divide="divide-y divide-neutral-100"
      :visible="displaySearch"
    >
      <cs-search-result-item
        class="pt-2"
        v-for="post in searchedPosts"
        :key="post.id"
        :title="post.title"
        :image="post.image"
        :date="post.date"
      />
    </cs-search-result>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from "vue";
import PostsService from "@/services/PostsService";
import CsSearchForm from "@/components/Search/SearchForm.vue";
import CsSearchResult from "@/components/Search/SearchResult.vue";
import CsSearchResultItem from "@/components/Search/SearchResultItem.vue";
import CsIcon from "@/components/Icon/Icon.vue";
import { PhMagnifyingGlass } from "phosphor-vue";

export default {
  name: "CsSearch",
  components: {
    CsSearchForm,
    CsSearchResult,
    CsSearchResultItem,
    CsIcon,
    PhMagnifyingGlass,
  },
  props: {
    limit: {
      type: Number,
      default: 4,
    },
    breakpoint: {
      type: String,
      default: "md",
    },
  },
  setup(props) {
    props = reactive(props);
    const postsService = ref(new PostsService());
    const posts = ref([]);
    const searchQuery = ref("");
    const displaySearch = ref(false);

    const openSearch = () => {
      displaySearch.value = true;
    };
    const closeSearch = () => {
      displaySearch.value = false;
    };

    onMounted(() => {
      postsService.value.getPosts().then((data) => (posts.value = data));
    });

    const searchedPosts = computed(() => {
      return posts.value
        .filter(
          (post) =>
            post.title.toLowerCase().indexOf(searchQuery.value.toLowerCase()) !=
              -1 && searchQuery.value !== ""
        )
        .slice(0, props.limit);
    });
    return {
      posts,
      searchedPosts,
      searchQuery,
      displaySearch,
      openSearch,
      closeSearch,
    };
  },
};
</script>