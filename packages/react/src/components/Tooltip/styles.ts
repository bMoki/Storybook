import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const StyledTooltipContent = styled(Tooltip.Content, {
    borderRadius: '$md',
    padding: '$3 $4',
    backgroundColor: '$gray900',
})

export const StyledArrow = styled(Tooltip.Arrow, {
    fill: '$gray900',
    width: '$4',
    height: '$2',
});
