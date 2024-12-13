import { restArray } from "@/components/constants/restorans";
import { reactive } from "vue";

export const store = reactive({
  isOpen: false,
  restorans: restArray,
  toggleModal(value) {
    this.isOpen = value;
  },
});
