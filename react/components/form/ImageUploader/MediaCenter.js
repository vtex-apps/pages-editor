import React, { Fragment } from 'react'
import { Button, Modal, Tabs, Tab, Spinner } from 'vtex.styleguide'
import ImageIcon from '../../../images/ImageIcon'
import Dropzone from './Dropzone'
import Gallery from './Gallery'

const GRADIENT_STYLES = {
  background:
    '-moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.83) 99%, rgba(0,0,0,0.83) 100%)',
  background:
    '-webkit-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.83) 99%, rgba(0,0,0,0.83) 100%)',
  background:
    'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.83) 99%, rgba(0,0,0,0.83) 100%)',
  filter:
    "progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#d4000000', GradientType=0)",
}

class MediaCenter extends React.Component {
  state = {
    currentTab: 1,
    isLoading: false,
  }

  handleClearImage = () => {
    this.props.onChange(null)
  }

  handleGallerySelect = image => {
    this.props.onChange(image)
    this.props.closeModal()
  }

  handleImageDrop = async (acceptedFiles, rejectedFiles) => {
    const { uploadFile } = this.props

    if (acceptedFiles && acceptedFiles[0]) {
      this.setState({ isLoading: true })

      try {
        const {
          data: {
            uploadFile: { fileUrl },
          },
        } = await uploadFile({
          variables: { file: acceptedFiles[0] },
        })

        if (fileUrl) {
          this.props.onChange(fileUrl)
        }
      } catch (e) {
        console.log('Error: ', e)
      }

      this.setState({ isLoading: false })
    }

    if (rejectedFiles && rejectedFiles[0]) {
      console.log(
        'Error: one or more files are not valid and, therefore, have not been uploaded.'
      )
    }
  }

  handleTabChange = tabIndex => {
    this.setState({
      currentTab: tabIndex,
    })
  }

  render() {
    const { value, disabled } = this.props
    const { isLoading } = this.state

    const backgroundImageStyle = {
      backgroundImage: `url(${value})`,
      backgroundPosition: 'center',
    }

    const isButtonDisabled = value == null

    return (
      <div className="vtex-images-modal">
        <Modal isOpen={this.props.isModalOpen} onClose={this.props.closeModal}>
          <div style={{ width: '45vw', height: '45vh' }}>
            <Tabs>
              <Tab
                label="Media upload"
                active={this.state.currentTab === 1}
                onClick={() => this.handleTabChange(1)}
              >
                <div className="w-100 h-100 mt4 center ph3-ns">
                  {value ? (
                    <Dropzone
                      disabled={disabled || isLoading}
                      extraClasses={`bg-light-gray vtex-page-editor__media-center ${
                        !isLoading ? 'pointer' : ''
                      }`}
                      onDrop={this.handleImageDrop}
                    >
                      {isLoading ? (
                        <div className="w-100 h-100 flex justify-center items-center">
                          <Spinner />
                        </div>
                      ) : (
                        <div
                          className="w-100 h-100 relative bg-center contain"
                          style={backgroundImageStyle}
                        />
                      )}
                    </Dropzone>
                  ) : (
                    <Fragment>
                      <Dropzone
                        disabled={disabled || isLoading}
                        extraClasses={`vtex-page-editor__media-center ba bw1 b--dashed b--light-gray ${
                          !isLoading ? 'cursor' : ''
                        }`}
                        onDrop={this.handleImageDrop}
                      >
                        <div className="h-100 flex flex-column justify-center items-center">
                          {isLoading ? (
                            <Spinner />
                          ) : (
                            <Fragment>
                              <div className="mb3">
                                <ImageIcon stroke="#979899" />
                              </div>
                              <div className="mb5 f6 gray">
                                Drag your image here or
                              </div>
                              <Button size="small" variation="primary">
                                Upload a file
                              </Button>
                            </Fragment>
                          )}
                        </div>
                      </Dropzone>
                    </Fragment>
                  )}
                  <div className="flex mt4 fr">
                    <div className="pa2">
                      <Button
                        size="small"
                        variation="secondary"
                        disabled={isButtonDisabled}
                        onClick={() => this.handleClearImage()}
                      >
                        Cancel
                      </Button>
                    </div>
                    <div className="pa2">
                      <Button
                        size="small"
                        variation="primary"
                        disabled={isButtonDisabled}
                        onClick={() => this.props.closeModal()}
                      >
                        Insert
                      </Button>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab
                label="Gallery"
                active={this.state.currentTab === 2}
                onClick={() => this.handleTabChange(2)}
              >
                <Gallery
                  onImageSelect={image => this.handleGallerySelect(image)}
                />
              </Tab>
            </Tabs>
          </div>
        </Modal>
      </div>
    )
  }
}

export default MediaCenter
