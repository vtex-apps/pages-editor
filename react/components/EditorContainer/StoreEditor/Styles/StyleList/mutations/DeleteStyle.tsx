import React, { Component } from 'react'
import {
  Mutation,
  MutationFunction,
  MutationComponentOptions,
} from 'react-apollo'
import DeleteStyle from '../graphql/DeleteStyle.graphql'

interface DeleteStyleData {
  deleteStyle: {
    id: string
    app: string
    name: string
  }
}

interface DeleteStyleVariables {
  id: string
}

export type DeleteStyleMutationFn = MutationFunction<
  DeleteStyleData,
  DeleteStyleVariables
>

class DeleteStyleMutation extends Component<
  MutationComponentOptions<DeleteStyleData, DeleteStyleVariables>
> {
  public static defaultProps = {
    mutation: DeleteStyle,
  }
  public render() {
    const { children, ...rest } = this.props
    return (
      <Mutation<DeleteStyleData, DeleteStyleVariables> {...rest}>
        {(mutationFn, result) => children(mutationFn, result)}
      </Mutation>
    )
  }
}

export default DeleteStyleMutation
