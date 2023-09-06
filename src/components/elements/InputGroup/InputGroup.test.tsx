import { render, screen, fireEvent } from '@testing-library/react'
import { Input, Container, InputGroup } from './index'
import '@testing-library/jest-dom'

const caseVariants: { size: 'small' | 'large'; style: string }[] = [
  { size: 'small', style: 'h-[35px] text-xs' },
  { size: 'large', style: 'h-10 text-sm' }
]
const style = 'w-36'

describe('Card correctly', () => {
  test('sould render input group"s input with correct style and handle onChange', () => {
    const handleChange = jest.fn()
    render(
      <Input placeholder="Input" className={style} onChange={handleChange} />
    )

    const inputElement = screen.getByPlaceholderText('Input')
    expect(inputElement).toHaveClass(
      `focus:rounded-cobalt h-full bg-white-smoke px-5 first:rounded-l-lg last:rounded-r-lg focus:outline-cobalt ${style}`
    )

    fireEvent.change(inputElement, {
      target: { value: 'test' }
    })
    expect(handleChange).toHaveBeenCalled()
  })

  test('sould render input group"s container with correct style ', () => {
    render(<Container className={style}>Text</Container>)

    const containerElement = screen.getByText('Text')
    expect(containerElement).toHaveClass(
      `flex h-full items-center justify-center rounded-none bg-cobalt p-2.5 text-center font-bold text-white ${style}`
    )
  })

  test.each(caseVariants)(
    'sould render input group with correct style ',
    ({ size, style }) => {
      render(<InputGroup sizes={size}>Test</InputGroup>)
      const inputGroupelement = screen.getByText('Test')
      expect(inputGroupelement).toHaveClass(
        `flex justify-center items-center rounded-lg p-0 overflow-hidden ${style}`
      )
    }
  )
})
