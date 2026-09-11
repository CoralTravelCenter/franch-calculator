<script setup>
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const props = defineProps({
  as: { type: String, default: 'p' },
  variant: { type: String, default: 'default' },
  class: { type: [Boolean, null, String, Object, Array], required: false },
})

const textVariants = cva('font-normal leading-7', {
  variants: {
    variant: {
      default: 'text-base',
      lead: 'text-xl',
    },
  },
  defaultVariants: { variant: 'default' },
})
</script>

<template>
  <component :is="as" :class="cn(textVariants({ variant }), props.class)">
    <slot />
  </component>
</template>
