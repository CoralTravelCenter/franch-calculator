import { cva } from "class-variance-authority";

export { default as Toggle } from '@/components/ui/toggle/Toggle.vue';

export const toggleVariants = cva(
  "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-[12px] border border-foreground/50 px-6 text-sm font-medium transition-colors outline-none hover:border-accent hover:text-accent focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 data-[state=on]:border-accent data-[state=on]:bg-accent data-[state=on]:text-accent-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-input border bg-transparent hover:bg-transparent data-[state=on]:hover:bg-accent",
      },
      size: {
        default:
          "h-12 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        sm: "h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*=size-])]:size-3.5",
        lg: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
