import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'


export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        size: 'md',
        children:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, ipsum quaerat molestias mollitia quia quisquam assumenda corporis excepturi ad dolore doloribus quae repellat dignissimos ratione suscipit aspernatur quasi, expedita obcaecati!'
    },
    argTypes: {
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: {
                type: 'inline-radio'
            }
        },
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}
