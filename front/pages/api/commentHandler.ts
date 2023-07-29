import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from '@sanity/client'
import { isJSDocMemberName } from 'typescript'
import { useState } from 'react'
const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV == 'production',
  token: process.env.SANITY_API_TOKEN,
}
const client = sanityClient(config)

type Data = {
  name: string
}

export default async function commentHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { id, name, email, comment } = JSON.parse(req.body)
  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: id,
      },
      name,
      email,
      comment,
    })
  } catch (err) {
    return res.status(501)
  }
  return res.status(200).json({ name: 'submited' })
}
