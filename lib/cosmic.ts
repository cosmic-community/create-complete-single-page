import { createBucketClient } from '@cosmicjs/sdk'
import type {
  Hero,
  BabydickMeme,
  Tokenomics,
  Roadmap,
  CommunityLinks,
} from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export async function getHero(): Promise<Hero | null> {
  try {
    const response = await cosmic.objects.findOne({ type: 'hero' }).depth(1)
    return response.object as Hero
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch hero')
  }
}

export async function getMemes(): Promise<BabydickMeme[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'babydick-memes' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as BabydickMeme[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch memes')
  }
}

export async function getTokenomics(): Promise<Tokenomics | null> {
  try {
    const response = await cosmic.objects.findOne({ type: 'tokenomics' }).depth(1)
    return response.object as Tokenomics
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch tokenomics')
  }
}

export async function getRoadmap(): Promise<Roadmap | null> {
  try {
    const response = await cosmic.objects.findOne({ type: 'roadmap' }).depth(1)
    return response.object as Roadmap
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch roadmap')
  }
}

export async function getCommunityLinks(): Promise<CommunityLinks | null> {
  try {
    const response = await cosmic.objects.findOne({ type: 'community-links' }).depth(1)
    return response.object as CommunityLinks
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch community links')
  }
}