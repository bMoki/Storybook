import type { Meta } from '@storybook/react'
import { Button, Toast, ToastRootProps } from '@omn-ui/react'
import { useArgs } from '@storybook/client-api';

export default {
    title: 'Form/Toast',
    component: Toast.Root,

    args: {
        open: false,
        onOpenChange: () => { }

    },
    argTypes: {
        open: {
            type: 'boolean',
        },
        children: {
            control: {
                type: null
            }
        }

    },
    decorators: [
        (Story) => {
            return (
                <Toast.Provider>
                    {Story()}
                </Toast.Provider>

            )
        }
    ]
} as Meta<ToastRootProps>

export const Playground = ({ onOpenChange, ...args }: any) => {
    const [{ open }, updateArgs] = useArgs();
    const handleClose = () => updateArgs({ open: !open });

    return (
        <div>
            <Button onClick={() => updateArgs({ open: !open })}>Open Toast</Button>
            <Toast.Root
                onOpenChange={handleClose}
                open={open}
                {...args}
            >
                <Toast.Title>Agendamento realizado</Toast.Title>
                <Toast.Description>Quarta-feira, 23 de Outubro as 16h</Toast.Description>

            </Toast.Root>
        </div>
    );
};

