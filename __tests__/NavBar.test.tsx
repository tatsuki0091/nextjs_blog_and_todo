import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import useEvent from '@testing-library/user-event'
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester'

initTestHelpers()
// 画面遷移のテスト
// 今回はnavbarのヘッダーのリンク先の確認
describe('Navigation by Link', () => {
  it('Should route to selected in navbar', async () => {
    const { page } = await getPage({
      route: '/index',
    })
    render(page)
    useEvent.click(screen.getByTestId('blog-nav'))
    expect(await screen.findByText('blog page')).toBeInTheDocument()
    useEvent.click(screen.getByTestId('comment-nav'))
    expect(await screen.findByText('comment page')).toBeInTheDocument()
    useEvent.click(screen.getByTestId('context-nav'))
    expect(await screen.findByText('context page')).toBeInTheDocument()
    useEvent.click(screen.getByTestId('task-nav'))
    expect(await screen.findByText('todos page')).toBeInTheDocument()
    useEvent.click(screen.getByTestId('home-nav'))
    expect(await screen.findByText('Welcome to Nextjs')).toBeInTheDocument()
  })
})
