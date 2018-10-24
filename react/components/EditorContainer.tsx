import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import Draggable from 'react-draggable'
import { FormattedMessage } from 'react-intl'
import Sidebar from './Sidebar'

import DeviceSwitcher from './DeviceSwitcher'

import '../editbar.global.css'

export const APP_CONTENT_ELEMENT_ID = 'app-content-editor'

const getContainerProps = (layout: Viewport) => {
  switch (layout) {
    case 'mobile':
      return {
        className: 'mobile-preview center',
        style: {
          animationDuration: '0.2s',
          transition: `width 660ms`,
        },
      }
    case 'tablet':
      return {
        className: 'tablet-preview center',
        style: {
          animationDuration: '0.2s',
          transition: `width 660ms`,
        },
      }
    default:
      return {
        className: 'w-100 h-100 center',
        style: {
          animationDuration: '0.2s',
          transition: `width 660ms`,
        },
      }
  }
}

interface Props {
  runtime: RenderContext | null
  toggleShowAdminControls: () => void
  viewports: Viewport[]
  visible: boolean
}

interface State {
  highlightTreePath: string | null
}

export default class EditorContainer extends Component<
  Props & EditorContextProps,
  State
> {
  public static propTypes = {
    children: PropTypes.node,
    editor: PropTypes.object,
    runtime: PropTypes.object,
    visible: PropTypes.bool,
  }

  constructor(props: Props & EditorContextProps) {
    super(props)

    this.state = {
      highlightTreePath: null,
    }
  }

  public componentDidMount() {
    window.postMessage({ action: { type: 'STOP_LOADING' } }, '*')
  }

  public highlightExtensionPoint = (highlightTreePath: string | null) => {
    const {
      editor: { editMode, editExtensionPoint },
    } = this.props

    this.setState({ highlightTreePath }, () => {
      const iframe = document.getElementById('store-iframe') as HTMLIFrameElement
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.__setHighlightTreePath({
          editExtensionPoint,
          editMode,
          highlightExtensionPoint: this.highlightExtensionPoint,
          highlightTreePath,
        })
      }
    })
  }

  public getSnapshotBeforeUpdate(
    prevProps: Props & RenderContextProps & EditorContextProps,
  ) {
    const {
      editor: { editMode },
    } = this.props
    if (prevProps.editor.editMode !== editMode) {
      this.highlightExtensionPoint(null)
    }
  }

  public render() {
    const {
      editor,
      runtime,
      editor: { viewport, iframeWindow },
      toggleShowAdminControls,
      viewports,
      visible,
    } = this.props

    return (
      <div className="w-100 flex flex-column flex-row-l flex-wrap-l bg-white bb bw1 b--light-silver">
        {visible && <Sidebar editor={editor} runtime={runtime} highlightExtensionPoint={this.highlightExtensionPoint} />}
        <div
          className={`calc--height calc--height-ns ${
            visible ? 'calc--width' : 'w-100'
          }`}
        >
          {visible && (
            <div className="ph5 f5 near-black h-3em h-3em-ns w-100 bb bw1 flex justify-between items-center b--light-silver shadow-solid-y">
              <div className="flex items-center">
                <h3 className="f5 pr3">
                  <FormattedMessage id="pages.editor.editpath.label" />:
                </h3>
                {iframeWindow.location.pathname}
              </div>
            </div>
          )}
          <div
            id={APP_CONTENT_ELEMENT_ID}
            className={`pa5 flex items-center bg-light-silver z-0 center-m left-0-m relative overflow-x-auto-m ${
              visible ? 'calc--height-relative' : 'top-0 w-100 h-100'
            }`}
          >
            <Draggable
              bounds="parent"
              onStart={() => {
                const iframe = document.getElementById('store-iframe')
                if (iframe !== null) {
                  iframe.classList.add('iframe-pointer-none')
                }
              }}
              onStop={() => {
                const iframe = document.getElementById('store-iframe')
                if (iframe !== null) {
                  iframe.classList.remove('iframe-pointer-none')
                }
              }}
            >
              <div className="animated br2 bg-white bn shadow-1 flex items-center justify-center z-max absolute bottom-1 bottom-2-ns left-1 left-2-ns">
                <DeviceSwitcher
                  toggleEditMode={toggleShowAdminControls}
                  editor={editor}
                  viewports={viewports}
                  inPreview={!visible}
                />
              </div>
            </Draggable>
            <main
              {...getContainerProps(viewport)}
              role="main"
              style={{
                transition: `width 300ms ease-in-out 0ms, height 300ms ease-in-out 0ms`,
              }}
            >
              {this.props.children}
            </main>
          </div>
        </div>
      </div>
    )
  }
}
