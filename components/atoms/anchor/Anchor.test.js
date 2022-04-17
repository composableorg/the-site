import { render, screen } from "@testing-library/react";
import { Anchor } from "./Anchor";
import '@testing-library/jest-dom'

describe('Anchor', () => {
    it('renders a single anchor tag', () => {
        const { container } = render(<Anchor anchorText="Foo" />);
        const firstChild = container.firstChild;
        expect(firstChild.tagName).toBe('A');
        expect(container.children.length).toBe(1);
    })

    it('renders the default as Primary', () => {
        const { container } = render(<Anchor anchorText="Foo" />);
        expect(container.firstChild).toHaveClass(Anchor.typeMap[Anchor.defaultProps.type]);
    })

    it('renders the defined classes from the type', () => {
        const { container } = render(<Anchor anchorText="Foo" anchorType={Anchor.type.FOOTER}/>);
        expect(container.firstChild).toHaveClass(Anchor.typeMap[Anchor.type.FOOTER]);
    })

    it('renders the invalid type as the default', () => {
        const { container } = render(<Anchor anchorText="Foo" anchorType={999}/>);
        expect(container.firstChild).toHaveClass(Anchor.typeMap[Anchor.defaultProps.type]);
    })
})
