import { styled } from "../../styles";
import * as Toast from '@radix-ui/react-toast';
import { keyframes } from "@stitches/react";

const hide = keyframes({
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
});

const slideIn = keyframes({
    from: { transform: `translateX(calc(100% + 25px))` },
    to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
    from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
    to: { transform: `translateX(calc(100% + 25px))` },
});

export const ToastViewport = styled(Toast.Viewport, {
    position: 'fixed',
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: '$6',
    gap: '$1',
    width: 360,
    maxWidth: '100vw',
    margin: 0,
    // listStyle: 'none',
    zIndex: 2147483647,
    // outline: 'none',

})

export const StyledToastRoot = styled(Toast.Root, {
    backgroundColor: '$gray800',
    borderRadius: '$sm',
    border: '1px solid $gray600',
    padding: '$3 $5',
    display: 'grid',
    gridTemplateAreas: '"title action" "description action"',
    gridTemplateColumns: 'auto max-content',
    columnGap: '$4',
    alignItems: 'center',

    '@media (prefers-reduced-motion: no-preference)': {
        '&[data-state="open"]': {
            animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
        '&[data-state="closed"]': {
            animation: `${hide} 100ms ease-in`,
        },
        '&[data-swipe="move"]': {
            transform: 'translateX(var(--radix-toast-swipe-move-x))',
        },
        '&[data-swipe="cancel"]': {
            transform: 'translateX(0)',
            transition: 'transform 200ms ease-out',
        },
        '&[data-swipe="end"]': {
            animation: `${swipeOut} 100ms ease-out`,
        },
    }

})

export const StyledToastTitle = styled(Toast.Title, {
    gridArea: 'title',
    marginBottom: 5,
})
export const StyledToastDescription = styled(Toast.Description, {
    gridArea: 'description',
    margin: 0,
    color: "$gray200",
})

export const ToastCloseButton = styled(Toast.Close, {
    color: "$gray200",

    '&:hover': {
        color: "$gray100",
    }
})