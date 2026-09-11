import { cva } from 'class-variance-authority'

export { default as InputGroup } from '@/components/ui/input-group/InputGroup.vue'
export { default as InputGroupAddon } from '@/components/ui/input-group/InputGroupAddon.vue'
export { default as InputGroupInput } from '@/components/ui/input-group/InputGroupInput.vue'

export const inputGroupAddonVariants = cva(
  'flex items-center justify-center text-sm text-muted-foreground select-none',
  {
    variants: {
      align: {
        'inline-start': 'order-first pl-3',
        'inline-end': 'order-last pr-3',
        'block-start': 'order-first w-full px-3 pt-2',
        'block-end': 'order-last w-full px-3 pb-2',
      },
    },
    defaultVariants: { align: 'inline-start' },
  },
)
