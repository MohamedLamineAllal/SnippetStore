import { findIndexObject } from 'lib/util'
import fetchSnippets from './fetch-snippets'
import { getSnippetFile } from '../config'
const sander = window.require('sander')

function deleteSnippet (snippet) {
  const snippets = fetchSnippets()

  const snippetIndex = findIndexObject(snippets, 'key', snippet.key)

  if (snippetIndex === -1) {
    throw new Error(`Can't find a snippet with key: ${snippets.key}`)
  }

  snippets.splice(snippetIndex, 1)
  sander.writeFileSync(getSnippetFile(), JSON.stringify(snippets), {
    encoding: 'utf-8'
  })

  return snippetIndex
}

export default deleteSnippet
