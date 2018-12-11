import React from 'react'
import Heading from '../../atoms/heading'
import Button from '../../atoms/button'
import Paragraph from '../../atoms/paragraph'
import Stack from '../stack'
import { colors, spacing, misc } from '@auth0/cosmos-tokens'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import containerStyles from '../../_helpers/container-styles'

const Container = styled.div`
  ${containerStyles};
`

const TempStack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    flex: 0 auto;
  }
`
const Item = styled.li`
  padding: ${spacing.medium};
  border-bottom: 1px solid ${colors.text.error};
`

const ItemsContainer = styled.ul`
  border: 1px solid ${colors.text.error};
  border-radius: ${misc.radius};
  list-style: none;
  ${'' /* reset the default spacing for ul */};
  padding-left: 0;
  > ${Item}:last-child {
      border-bottom: none;
    }
  }
`

const Title = styled(Heading)`
  font-size: 1.0714285714em;
  color: ${colors.text.error};
`

const Description = styled.div`
  p {
    color: ${colors.text.secondary};
  }
`

const Action = styled.div`
  text-align: right;
`

const DangerZone = ({ items }) => (
  <Container margin={{ top: 'xlarge' }}>
    <Heading size={3} margin={{ top: 0 }}>
      Danger Zone
    </Heading>
    <ItemsContainer margin={{ bottom: 0 }}>
      {items.map(item => (
        <Item key={item.title}>
          <TempStack>
            <Description margin={{ right: 'small' }}>
              <Title size={4} margin={{ top: 0, bottom: 0, left: 0, right: 0 }}>
                {item.title}
              </Title>
              {item.description ? (
                <Paragraph margin={{ top: '0.5em', bottom: 0, left: 0, right: 0 }}>
                  {item.description}
                </Paragraph>
              ) : null}
            </Description>
            <Action>
              <Button
                type={item.action.type || 'button'}
                onClick={e => {
                  item.action.onClick(e)
                }}
                appearance="destructive"
                loading={item.action.loading}
              >
                {item.action.label}
              </Button>
            </Action>
          </TempStack>
        </Item>
      ))}
    </ItemsContainer>
  </Container>
)

DangerZone.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      action: PropTypes.function
    })
  ).isRequired
}

export default DangerZone
