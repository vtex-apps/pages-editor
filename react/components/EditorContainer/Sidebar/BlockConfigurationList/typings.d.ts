import { ToastConsumerFunctions } from 'vtex.styleguide'

import { DeleteContentMutationFn } from '../../mutations/DeleteContent'

export interface UseListHandlersParams {
  deleteContent: DeleteContentMutationFn
  iframeRuntime: RenderContext
  intl: ReactIntl.InjectedIntl
  isSitewide: boolean
  serverTreePath: string
  showToast: ToastConsumerFunctions['showToast']
  template: string
}

export type UseListHandlers = (
  params: UseListHandlersParams
) => {
  handleConfigurationCreation: () => void
  handleConfigurationDeletion: () => void
  handleConfigurationOpen: () => void
  handleQuit: () => void
}
