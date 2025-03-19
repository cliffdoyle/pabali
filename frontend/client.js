import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'u6wobw3y', // You need to replace this with your actual Sanity project ID
  dataset: 'production', // or whatever dataset you're using
  apiVersion: '2023-05-03', // use the latest API version
  useCdn: true, // set to false if you want to ensure fresh data
});