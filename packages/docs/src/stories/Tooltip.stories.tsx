import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, ToastRootProps, Button } from '@omn-ui/react'
import { Plus } from 'phosphor-react'


export default {
    title: 'Form/Tooltip',
    component: Tooltip.Root,
    argTypes: {
        children: {
            control: {
                type: null
            }
        }
    },

    decorators: [
        (Story) => {
            return (
                <Tooltip.Provider>
                    {Story()}
                </Tooltip.Provider>

            )
        }
    ]

} as Meta<ToastRootProps>

export const Primary: StoryObj<ToastRootProps> = {
    args: {
        children:
            <Tooltip.Root>
                <Tooltip.Trigger>
                    <Button><Plus weight='bold' /></Button>
                </Tooltip.Trigger>
                <Tooltip.Content>
                    Add Button
                </Tooltip.Content>
            </Tooltip.Root>
    }
}

