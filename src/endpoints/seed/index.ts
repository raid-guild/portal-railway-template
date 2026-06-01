import type { Payload, PayloadRequest } from 'payload'

import { seedPortalContent } from './portal'

export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  await seedPortalContent({ payload, req })
}
