<script setup>
import { cn } from "@/lib/utils";

const props = defineProps({
  class: {
    type: [Boolean, null, String, Object, Array],
    required: false,
    skipCheck: true,
  },
});
</script>

<template>
  <div
    data-slot="input-group"
    role="group"
    :class="
      cn(
        'border-input bg-background h-10 rounded-[12px] border transition-colors has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/30 has-disabled:bg-muted has-disabled:opacity-50 group/input-group relative flex w-full min-w-0 items-center outline-none',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
