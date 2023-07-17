import { render, screen,fireEvent} from '@testing-library/react';
import Parent from './Parent';

test('Simple Testing ', () => {
  render(<Parent />);
  
  expect(screen.getByTestId("p1").textContent).toEqual("This is parent component first para");
  expect(screen.getByTestId("p2").textContent).toEqual("This is parent component second para");
  expect(screen.getByTestId("p3").textContent).toEqual("This is parent component third para");
  expect(screen.getByTestId("result").textContent).toEqual("0");
  let buttonRef = screen.getByTestId("b1");
  fireEvent.click(buttonRef);
  //buttonRef.click();
  expect(screen.getByTestId("result").textContent).toEqual("10");
});
