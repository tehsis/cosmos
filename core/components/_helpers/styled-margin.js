import { spacing } from '@auth0/cosmos-tokens'
const directions = ['top', 'bottom', 'left', 'right']

/**
 * Calculates the margin based on props.margin
 * @param {object} props
 * @return {string} css
 */

const margin = props => {
  const margin = props.margin || {}
  console.log('algo', props.margin)
  // if (!props.margin) return {}
  // console.log('hit margin helper with', props)

  let styles = ''
  directions.map(direction => {
    if (typeof margin[direction] !== 'undefined') {
      console.log(`mapping direction ${direction}`)
      let rawValue = margin[direction]
      let value
      /*
        if the value is a string, it's either a token (xsmall)
        or has units (8em)
         if it's a number, we assume it's pixels and pass it through
      */
      if (typeof rawValue === 'string') {
        if (spacing[rawValue]) value = spacing[rawValue]
        else value = rawValue
      } else {
        value = rawValue + 'px'
      }
      // syntax: margin-top: margin.top
      styles += `margin-${direction}: ${value};`
    }
  })
  return styles
}
export default margin
