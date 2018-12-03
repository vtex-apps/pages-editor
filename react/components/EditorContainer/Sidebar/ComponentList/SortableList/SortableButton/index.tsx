import React, { Component, Fragment } from 'react'
import { SortableElement, SortableElementProps } from 'react-sortable-hoc'

import { NormalizedComponent } from '../../typings'

import Button from './Button'
import DragHandle from './DragHandle'
import ExpandArrow from './ExpandArrow'

interface Props extends SortableElementProps {
  isSorting: boolean
  onEdit: (event: React.MouseEvent<HTMLButtonElement>) => void
  onMouseEnter: (event: React.MouseEvent<HTMLButtonElement>) => void
  onMouseLeave: () => void
  shouldRenderDragHandle: boolean
  subitems: NormalizedComponent['components']
  title: NormalizedComponent['name']
  treePath: NormalizedComponent['treePath']
}

interface State {
  isExpanded: boolean
}

class SortableButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isExpanded: false,
    }
  }

  public componentDidUpdate(prevProps: Props) {
    if (this.state.isExpanded && !prevProps.isSorting && this.props.isSorting) {
      this.setState({ isExpanded: false })
    }
  }

  public render() {
    const {
      onEdit,
      onMouseEnter,
      onMouseLeave,
      shouldRenderDragHandle,
      subitems,
      title,
      treePath,
    } = this.props

    return (
      <li className="list">
        <div className="flex items-center bb bw1 b--light-silver pointer">
          {subitems && (
            <ExpandArrow
              isExpanded={this.state.isExpanded}
              onClick={this.toggleExpansion}
            />
          )}
          <Button
            onEdit={onEdit}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            title={title}
            treePath={treePath}
          />
          {shouldRenderDragHandle && <DragHandle />}
        </div>
        {this.state.isExpanded && subitems && (
          <Fragment>
            {subitems.map((item, index) => (
              <div className="flex" key={item.treePath}>
                <div className="bl bw2 b--light-blue" />
                <div
                  className={`w-100 ${
                    index !== subitems.length - 1 ? 'bb b--light-silver ' : ''
                  }`}
                >
                  <Button
                    onEdit={onEdit}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    title={item.name}
                    treePath={item.treePath}
                  />
                </div>
              </div>
            ))}
            <div className="bb bw1 b--light-silver" />
          </Fragment>
        )}
      </li>
    )
  }

  private toggleExpansion = () => {
    this.setState(prevState => ({
      ...prevState,
      isExpanded: !prevState.isExpanded,
    }))
  }
}

export default SortableElement(SortableButton)
