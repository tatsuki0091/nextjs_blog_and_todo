import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

it('Should render hello text', () => {
  // HTMLの構造を取得
  render(<Home />)
  //screen.debug()
  // ブラウザの中に下記が存在するかどうか確認
  expect(screen.getByText('Welcome to Nextjs')).toBeInTheDocument()
})
