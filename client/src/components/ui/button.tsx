import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md hover:translate-y-[-2px]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm hover:shadow-md hover:translate-y-[-2px]",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md hover:translate-y-[-2px]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // New variants using success, danger, etc.
        success: "bg-success text-white hover:bg-success/90 shadow-sm hover:shadow-md hover:translate-y-[-2px]",
        danger: "bg-danger text-white hover:bg-danger/90 shadow-sm hover:shadow-md hover:translate-y-[-2px]",
        accent: "bg-accent text-white hover:bg-accent/90 shadow-sm hover:shadow-md hover:translate-y-[-2px]",
        
        // Original Gigee style variants 
        gigeeFilled: "bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px]",
        gigeeOutline: "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 transition-all duration-300 hover:translate-y-[-2px]",
        gigeeGhost: "text-primary hover:bg-primary/10 transition-all duration-300 hover:translate-y-[-2px]",
        
        // Orange variants (using secondary color)
        orangeFilled: "bg-secondary text-white hover:bg-secondary/90 transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px]",
        orangeOutline: "border-2 border-secondary bg-transparent text-secondary hover:bg-secondary/10 transition-all duration-300 hover:translate-y-[-2px]",
        
        // Blue variants (using accent color)
        blueFilled: "bg-accent text-white hover:bg-accent/90 transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px]",
        blueOutline: "border-2 border-accent bg-transparent text-accent hover:bg-accent/10 transition-all duration-300 hover:translate-y-[-2px]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10 py-3 text-base",
        icon: "h-10 w-10",
        gigee: "px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // White text variants that should always maintain white text
    const whiteTextVariants = ['default', 'destructive', 'secondary', 'gigeeFilled', 'success', 'danger', 'accent', 'orangeFilled', 'blueFilled'];
    
    // Combine classes with potential text color override
    const combinedClassName = cn(
      buttonVariants({ variant, size, className }),
      whiteTextVariants.includes(variant as string) ? "!text-white" : ""
    )
    
    return (
      <Comp
        className={combinedClassName}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
