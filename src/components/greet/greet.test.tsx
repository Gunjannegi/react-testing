import { render, screen } from "@testing-library/react"
import Greet from "./greet";

/**
 * Greet returns the text hello and if a name is passed into the component
 * It should render hello followed by the name
 */

describe('Greet',()=>{
test('Greet renders correctly', ()=>{
    render(<Greet/>);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
});

test('Greet renders with a name',()=>{
    render(<Greet name='Gunjan'/>);
    const textElement = screen.getByText('Hello Gunjan');
    expect(textElement).toBeInTheDocument();
})
})
