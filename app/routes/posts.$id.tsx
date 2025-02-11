import { json } from '@remix-run/node';
import { store } from '~/store';
import { postApi } from '~/store/api/postApi';
import type { LoaderFunctionArgs } from "@remix-run/node";


export async function loader({ params }: LoaderFunctionArgs) {
  const postId = params.id;
  
  // Dispatch the query on the server
  await store.dispatch(
    postApi.endpoints.getPostById.initiate(postId ?? '')
  );

  // Get the result from the store
  const result = postApi.endpoints.getPostById.select(postId ?? '')(
    store.getState()
  );

  if (result.error) {
    throw new Error('Failed to load post');
  }

  return json({ post: result.data });
}