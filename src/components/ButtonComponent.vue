<template>
    <div class="pt-5">

        <div class="flex justify-end">
            <button @click="createItem"  :disabled="isActive"  type="button" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600  disabled:text-black disabled:bg-slate-50 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 Создать
            </button> 
        </div>
        <div> </div>
    </div>
</template>

<script>
//   import { computed, ref, watch } from "vue";

export default {
    components: {

    },
    props: {
        isActive: { default: false }
        //   listItem: { default: [] },
        //   item: { default: {} },
    },
    methods: {
        createItem() {
            this.$emit("create");
        }
    },
    emits: ["create"],
    // setup(props, { emit }) {
    // const createItem = ()=> {
    //     emit("create");
    // }
    //   const query = ref("");
    //   const selectedItem = ref(props.item);
    //   const filteredItem = computed(() =>
    //     query.value === ""
    //       ? props.listItem
    //       : props.listItem.filter((person) => {
    //           return person.name.toLowerCase().includes(query.value.toLowerCase());
    //         })
    //   );
    //   watch(selectedItem, (selectedItem) => {
    //     //  selectedItem = {value: .., name: ..}
    // emit("select", selectedItem);
    //     emit("update:item", selectedItem);
    //   });

    //   return {
    // createItem
    // query,
    // selectedItem,
    // filteredItem,
    //   };
    // },
};
</script>