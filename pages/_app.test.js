import { render, screen } from "@testing-library/react";
import IndexPage from "./index";
import '@testing-library/jest-dom'


describe('IndexPage', () => {
   it('renders a heading', () => {
      render(<IndexPage />)

      const heading = screen.getByRole('heading', {
      })

   })
})
