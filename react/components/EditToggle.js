import Toggle from '@vtex/styleguide/lib/Toggle'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import '../theme.css'

// eslint-disable-next-line
export default class EditToggle extends Component {
  static propTypes = {
    editTreePath: PropTypes.string,
    editMode: PropTypes.bool,
    toggleEditMode: PropTypes.func,
  }

  handleClick = () => {
    this.props.toggleEditMode()
  }

  render() {
    const {editTreePath, editMode} = this.props
    return (
      <div className="fixed z-999 shadow-4 bg-white flex justify-between w-100 pv3 ph3 pv5-ns ph5-ns top-0">
        <div className="f5 self-center">
          article-example
        </div>
        <div className="flex items-center">
          <label htmlFor="toggle1" className="pr4 pl2">Edit Mode</label>
          <Toggle id="toggle1" checked={editMode} onClick={this.handleClick} />
        </div>
      </div>
    )
  }
}
