// import React from 'react'
import { shortenText } from '../utils/functions'
import { wordCount, attachUserName } from '../../server/utils'
import { shortText, longText, posts, users } from './__data__/testData'

test('shortenText wont alter sting under 100', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

test('shortenText adds ... after 100 characters', () => {
    const shortened = shortenText(longText)

    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

test(`wordCount returns total word count`, () => {
    expect(wordCount(posts)).toBe(233)
})

test('AttachUserName attaches username to post', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

test(`attachUserName removes post with no matching user`, () => {
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPosts).not.toContainEqual(deletedPost)
})