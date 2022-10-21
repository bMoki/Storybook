import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { Text } from '../Text'
import { StyledTooltipContent, StyledArrow } from './styles'

export interface TooltipProviderProps {
    children: ReactNode
}

function TooltipProvider({ children }: TooltipProviderProps) {
    return (
        <RadixTooltip.Provider>
            {children}
        </RadixTooltip.Provider>
    )
}

export interface TooltipRootProps {
    children: ReactNode
}
function TooltipRoot({ children }: TooltipRootProps) {
    return (
        <RadixTooltip.Root>
            {children}
        </RadixTooltip.Root>
    )
}

export interface TooltipTriggerProps {
    children: ReactNode
}

function TooltipTrigger({ children }: TooltipTriggerProps) {
    return (
        <RadixTooltip.Trigger asChild>
            {children}
        </RadixTooltip.Trigger>
    )
}

export interface TooltipContentProps {
    children: ReactNode
}

function TooltipContent({ children }: TooltipContentProps) {
    return (
        <RadixTooltip.Portal>
            <StyledTooltipContent>
                <Text weight='medium'>{children}</Text>
                <StyledArrow />
            </StyledTooltipContent >
        </RadixTooltip.Portal>
    )
}

export const Tooltip = {
    Provider: TooltipProvider,
    Root: TooltipRoot,
    Trigger: TooltipTrigger,
    Content: TooltipContent
}



