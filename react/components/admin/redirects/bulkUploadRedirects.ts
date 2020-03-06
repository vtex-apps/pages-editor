import { splitEvery } from 'ramda'
import { MutableRefObject } from 'react'

const MAX_REDIRECTS_PER_REQUEST = 200
const NUMBER_OF_RETRIES = 3

interface BulkUploadRedirectsArgs {
  data: Redirect[]
  mutation: (data: Redirect[] | string[]) => Promise<void>
  isSave: boolean
  shouldUploadRef: MutableRefObject<boolean>
  updateProgress?: (processed: number) => void
}

export default async function bulkUploadRedirects({
  data,
  mutation,
  isSave,
  shouldUploadRef,
  updateProgress = () => {
    return undefined
  },
}: BulkUploadRedirectsArgs): Promise<{ failedRedirects: Redirect[] }> {
  let failedRedirects: Redirect[] = []

  const redirectBatches = splitEvery(MAX_REDIRECTS_PER_REQUEST, data)

  for (const redirectData of redirectBatches) {
    if (!shouldUploadRef.current) {
      break
    }

    const payload = isSave ? redirectData : redirectData.map(({ from }) => from)

    for (let i = 1; i <= NUMBER_OF_RETRIES; i++) {
      try {
        await mutation(payload)
        break
      } catch (e) {
        await new Promise(res => {
          setTimeout(() => res(), i * 750)
        })
        if (i === NUMBER_OF_RETRIES) {
          failedRedirects = failedRedirects.concat(redirectData)
        }
      }
    }

    updateProgress(redirectData.length)

    await new Promise(res => {
      setTimeout(() => res(), 750)
    })
  }

  return { failedRedirects }
}
