import debounce from 'lodash.debounce'
import React, { Component, Fragment } from 'react'
import { ApolloConsumer } from 'react-apollo'
import { FormattedMessage } from 'react-intl'
import { EXPERIMENTAL_Select } from 'vtex.styleguide'

import { WidgetProps } from 'react-jsonschema-form'
import Collections from '../../../queries/Collections.graphql'


interface Option {
  label: string
  value: any
}

interface Collection {
  name: string
  id: string
}

interface Data {
  collectionSearch: Collection[]
}

interface State {
  data: Data
  errors: any
  loading: boolean
  value: any
}

interface CustomProps {
  value: any
}

class CollectionSelector extends Component<WidgetProps, State> {
  constructor(props: WidgetProps) {
    super(props)

    this.state = {
      data: { collectionSearch: [] } as Data,
      errors: null,
      loading: false,
      value: this.props.value,
    }
  }

  public render() {
    const {
      schema: { title }
    } = this.props

    const {
      errors,
      loading,
      data
    } = this.state

    const FieldTitle = () => title ? (
      <FormattedMessage id={title}>
        {text => <span className="w-100 db mb3">{text}</span>}
      </FormattedMessage>
    ) : null

    return (
      <Fragment>
        <FieldTitle/>
        <ApolloConsumer>
          {
          (client) => {

            if(errors) {
              console.log(errors)
              return (<p> Error! </p>)
            }

            return (
              <EXPERIMENTAL_Select
                multi = { false }

                options = {
                  (data && data.collectionSearch) ?
                  data.collectionSearch.map(
                    collection => ({
                      label: collection.name,
                      value: collection
                    })
                  ) : []
                }

                onChange = {
                  (option: Option) => {
                    if (option) {
                      const { value } = option

                      this.setState({
                        value
                      })
                      this.props.onChange(value)
                    }
                  }
                }

                loading = { loading }

                onSearchInputChange = {
                  debounce(async (input) => {
                    if (input.length >= 2 /* magic number: min. number of letters needed to search */) {
                      const {
                        data: newData,
                        errors: newErrors,
                        loading: newLoading,
                      } = await client.query<{collectionSearch: Collection[]}>({
                        query: Collections,
                        variables: {
                          query: input
                        }
                      })
                      this.setState({
                        data: newData,
                        errors: newErrors,
                        loading: newLoading,
                      })
                    } else {
                      this.setState({
                        data: { collectionSearch: [] as Collection[] },
                        loading: true,
                      })
                    }
                  }, 300 /* magic number: debounce time */ )
                }

                loadingMessage = {
                  'Write at least two letters' /* this is not showing up in the application, investigate */
                }
              />
            )
          }
          }
        </ApolloConsumer>
      </Fragment>
    )
  }
}

export default CollectionSelector