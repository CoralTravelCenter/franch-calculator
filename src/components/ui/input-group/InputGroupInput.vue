<script setup>
import { computed, useAttrs } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  parser: { type: Function, default: value => value },
  formatter: { type: Function, default: value => value },
  class: { type: [Boolean, null, String, Object, Array], required: false },
})

const emit = defineEmits(['update:modelValue'])
const attrs = useAttrs()

const value = computed({
  get: () => props.formatter(props.modelValue ?? ''),
  set: nextValue => emit('update:modelValue', props.parser(nextValue)),
})
</script>

<template>
  <input
    v-bind="attrs"
    v-model="value"
    data-slot="input-group-control"
    :class="cn('h-full w-full min-w-0 bg-transparent px-3 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed', props.class)"
  />
</template>
