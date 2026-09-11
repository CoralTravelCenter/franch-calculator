<script setup>
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const props = defineProps({
  as: { type: String, default: 'h2' },
  level: { type: String, default: 'h2' },
  class: { type: [Boolean, null, String, Object, Array], required: false },
})

const headingVariants = cva('scroll-m-20 font-semibold tracking-tight', {
  variants: {
    level: {
      h2: 'text-3xl lg:text-4xl',
      h3: 'text-xl',
    },
  },
  defaultVariants: { level: 'h2' },
})
</script>

<template>
  <component :is="as" :class="cn(headingVariants({ level }), props.class)">
    <slot />
  </component>
</template>
