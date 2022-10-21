import * as RadixToast from '@radix-ui/react-toast';
import { X } from 'phosphor-react'
import { ComponentProps, ReactNode } from 'react';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { ToastViewport, StyledToastRoot, StyledToastTitle, StyledToastDescription, ToastCloseButton } from './styles';

export interface ToastProviderProps {
    children: ReactNode;
}

function ToastProvider({ children }: ToastProviderProps) {
    return (
        <RadixToast.Provider swipeDirection="right">
            {children}
            <ToastViewport />
        </RadixToast.Provider>
    )
}

export interface ToastRootProps extends ComponentProps<typeof RadixToast.Root> {
    children: ReactNode;

}

function ToastRoot({ children, ...props }: ToastRootProps) {
    return (
        <StyledToastRoot  {...props}>
            {children}
            <ToastCloseButton asChild>
                <X size={20} />
            </ToastCloseButton>
        </StyledToastRoot>
    )
}

export interface ToastTitleProps {
    children: ReactNode;
}
function ToastTitle({ children }: ToastTitleProps) {
    return (
        <StyledToastTitle asChild>
            <Heading size='sm'>{children}</Heading>
        </StyledToastTitle>
    )
}

export interface ToastDescriptionProps {
    children: ReactNode;
}
function ToastDescription({ children }: ToastDescriptionProps) {
    return (
        <StyledToastDescription asChild>
            <Text size='sm'>{children}</Text>
        </StyledToastDescription>
    )

}

export const Toast = {
    Provider: ToastProvider,
    Root: ToastRoot,
    Title: ToastTitle,
    Description: ToastDescription
}