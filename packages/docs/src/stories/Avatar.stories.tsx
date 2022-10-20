import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@omn-ui/react'


export default {
    title: 'Data display/Avatar',
    component: Avatar,

    args: {
        src: 'https://github.com/bMoki.png',
        alt: 'Breno Sonda',
    },
    argTypes: {
        src: {
            control: {
                type: 'text'
            }
        }
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
        alt: 'Breno Sonda',
    }
}
