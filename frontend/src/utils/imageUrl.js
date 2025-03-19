// src/utils/imageUrl.js
import { client } from '../client';
import imageUrlBuilder from '@sanity/image-url';

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Function to generate image URLs
export function urlFor(source) {
  return builder.image(source);
}