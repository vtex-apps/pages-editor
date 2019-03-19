import React from 'react'
import { injectIntl } from 'react-intl'
import { Button } from 'vtex.styleguide'

interface Props {
  isDisabled?: boolean
  isLoading: boolean
  onClick: (event: Event) => void
  variation?: 'primary' | 'secondary' | 'tertiary'
}

const SaveButton = ({
  intl,
  isDisabled = false,
  isLoading = false,
  onClick,
  variation,
}: Props & ReactIntl.InjectedIntlProps) => (
  <Button
    disabled={isDisabled}
    isLoading={isLoading}
    onClick={onClick}
    size="small"
    variation={variation}
  >
    {intl.formatMessage({
      id: 'pages.editor.components.button.save',
    })}
  </Button>
)

export default injectIntl(SaveButton)