import { render, screen } from "@testing-library/react";
import Menu from "./Menu";

describe("Test `Menu` Component ",() =>{
    test("display `This weeks specials!`", () => {
        render(<Menu/>)
        expect(screen.getByText("This weeks specials!")).toBeInTheDocument();
    })

    test("display `online menu` button", () => {
        render(<Menu/>)
        expect(screen.getByRole('button', { name: /online menu/i })).toBeInTheDocument();
    })
})