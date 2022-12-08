import { Text, TextProps } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique aut vel perspiciatis tenetur sapiente eveniet reprehenderit itaque tempore est neque, nobis amet consequuntur fugit, ipsam, molestias alias cum. Facilis, ipsum!',
  },
} as Meta

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'strong Text',
    as: 'strong',
  },
}
