import { render, screen } from "@testing-library/react"
import Greet from "./greet";

/**
 * Greet returns the text hello and if a name is passed into the component
 * It should render hello followed by the name
 */

describe('Greet',()=>{
test('Greet renders correctly', ()=>{
    render(<Greet/>);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
});
})
