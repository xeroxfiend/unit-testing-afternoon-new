import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

it('should not shorten under 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

it('should trim strings longer than 100 characters and add 3 dots', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

it('should count the number of words in a sentence', () => {
    expect(wordCount(posts)).toBe(233)
})

it('should correctly attach a users name to a post', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

it('remove post without a user', () => {
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPosts).not.toContainEqual(deletedPost)
})