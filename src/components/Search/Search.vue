<template>
  <div :class="classIconSearch">
    <ph-magnifying-glass
      class="cursor-pointer"
      :size="24"
      @click="openSearch"
    />
  </div>
  <div :class="classBoxSearch">
    <cs-search-form
      class="-mt-12"
      v-model:search="searchQuery"
      @click="closeSearch"
    />
    <cs-search-result
      class="py-1"
      space="space-y-2"
      divide="divide-y divide-neutral-100"
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
import { ref, reactive, computed } from "vue";
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
    posts: {
      type: Object,
      default: null,
    },
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

    const searchQuery = ref("");
    const displaySearch = ref(false);

    const openSearch = () => {
      displaySearch.value = true;
    };
    const closeSearch = () => {
      displaySearch.value = false;
      searchQuery.value = "";
    };

    const searchedPosts = computed(() => {
      return props.posts
        .filter(
          (post) =>
            post.title.toLowerCase().indexOf(searchQuery.value.toLowerCase()) !=
              -1 && searchQuery.value !== ""
        )
        .slice(0, props.limit);
    });

    const classIconSearch = computed(() => ({
      "h-12 inline-flex items-center": true,
    }));
    const classBoxSearch = computed(() => ({
      "bg-primary-50 border border-primary-100": true,
      [`w-full ${props.breakpoint}:w-6/12`]: true,
      "transform left-2/4 -translate-x-2/4": true,
      "shadow-2xl": true,
      hidden: !displaySearch.value,
      absolute: displaySearch.value,
      "-mb-32 pt-16 pb-2 px-4": true,
    }));

    return {
      searchedPosts,
      searchQuery,
      displaySearch,
      openSearch,
      closeSearch,
      classIconSearch,
      classBoxSearch,
    };
  },
};
</script>