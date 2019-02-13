import debounce from 'lodash.debounce'
import React, { Component, Fragment } from 'react'
import { ApolloConsumer } from 'react-apollo'
import { FormattedMessage, injectIntl } from 'react-intl'
import { WidgetProps } from 'react-jsonschema-form'
import { EXPERIMENTAL_Select } from 'vtex.styleguide'

import { Option, State } from '../../typings/typings'
import { formatOptions } from '../../utils/utils'
import Collections from './queries/Collections.graphql'
import { Collection, Data } from './types/typings'

class CollectionSelector extends Component<
  WidgetProps & ReactIntl.InjectedIntlProps,
  State<Data>
> {
  constructor(props: WidgetProps & ReactIntl.InjectedIntlProps) {
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
      schema: { title, default: defaultValue },
      intl: { formatMessage },
    } = this.props

    const { errors, loading, data } = this.state

    const FieldTitle = () =>
      title ? (
        <FormattedMessage id={title}>
          {text => <span className="w-100 db mb3">{text}</span>}
        </FormattedMessage>
      ) : null

    return (
      <Fragment>
        <FieldTitle />
        <ApolloConsumer>
          {client => {
            if (errors) {
              return <p> Error! </p>
            }

            return (
              <EXPERIMENTAL_Select
                multi={false}
                options={
                  data && data.collectionSearch
                    ? formatOptions(data.collectionSearch)
                    : []
                }
                onChange={(option: Option) => {
                  const value = option ? option.value : defaultValue
                  this.setState({
                    value,
                  })
                  this.props.onChange(value)
                }}
                loading={loading}
                onSearchInputChange={debounce(async input => {
                  if (input.length > 1) {
                    const {
                      data: newData,
                      errors: newErrors,
                      loading: newLoading,
                    } = await client.query<{ collectionSearch: Collection[] }>({
                      query: Collections,
                      variables: {
                        query: input,
                      },
                    })
                    this.setState({
                      data: newData,
                      errors: newErrors,
                      loading: newLoading,
                    })
                  } else {
                    this.setState({
                      data: { collectionSearch: [] as Collection[] },
                      loading: false,
                    })
                  }
                }, 300)}
                noOptionsMessage={({
                  inputValue: input,
                }: {
                  inputValue: string
                }) =>
                  input && input.length > 1
                    ? formatMessage({
                        id:
                          'pages.editor.components.configurations.selector.options',
                      })
                    : formatMessage({
                        id:
                          'pages.editor.components.configurations.selector.minimum',
                      })
                }
                placeholder={formatMessage({
                  id:
                    'pages.editor.components.configurations.selector.placeholder',
                })}
              />
            )
          }}
        </ApolloConsumer>
      </Fragment>
    )
  }
}

export default injectIntl(CollectionSelector)
