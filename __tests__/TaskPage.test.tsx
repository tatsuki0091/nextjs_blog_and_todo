import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

initTestHelpers()

const server = setupServer(
  rest.get(
    'https://jsonplaceholder.typicode.com/todos/?_limit=10',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            userId: 3,
            id: 3,
            title: 'static task C',
            completed: true,
          },
          {
            userId: 4,
            id: 4,
            title: 'static task D',
            completed: false,
          },
        ])
      )
    }
  )
)

// モックサーバを起動
beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
  cleanup()
  //   cache.clear()
})
// モックサーバを停止
afterAll(() => {
  server.close()
})

describe('Todo page / getStaticProps', () => {
  it('should render the list of task pre-fetched by getStaticProps', async () => {
    const { page } = await getPage({
      route: '/task-page',
    })
    render(page)
    expect(await screen.findByText('todos page')).toBeInTheDocument()
    expect(screen.getByText('static task C')).toBeInTheDocument()
    expect(screen.getByText('static task D')).toBeInTheDocument()
  })
})
