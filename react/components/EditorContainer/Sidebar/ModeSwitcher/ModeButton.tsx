import classnames from 'classnames'
import React from 'react'

import Content from '../../../icons/Content'
import Layout from '../../../icons/Layout'
import Style from '../../../icons/Style'
import { IconProps } from '../../../icons/utils'

import styles from './styles.css'

interface Props {
  activeMode: EditorMode
  mode: EditorMode
  switchHandler: () => void
}

type ModeIcons = { [Key in EditorMode]: React.ComponentClass<IconProps> }

const modeIcons: ModeIcons = {
  content: Content,
  layout: Layout,
  style: Style,
}

const ModeButton: React.SFC<Props> = ({ activeMode, mode, switchHandler }) => {
  const Icon = modeIcons[mode]

  const isActive = mode === activeMode

  const capitalizedMode = mode.substring(0, 1).toUpperCase() + mode.substring(1)

  return (
    <button
      className={classnames(
        {
          'c-muted-2 b--transparent hover-c-action-primary pointer': !isActive,
          'c-on-base b--emphasis': isActive,
        },
        'bg-transparent bl-0 bt-0 br-0 bw1 outline-0 pb3 pt4 relative v-mid w-100 flex items-center justify-center',
      )}
      disabled={isActive}
      onClick={switchHandler}
      value={mode}
    >
      <Icon
        size={24}
      />
      <div className="pl2 f6 fw5 ">
        {capitalizedMode}
      </div>
    </button>
  )
}

export default ModeButton
