import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

describe("Test `Nav` Component ",() =>{
    test("display `Home`", () => {
        render(<Nav/>)
        expect(screen.getByText("Home")).toBeInTheDocument();
    })

    test("display `About`", () => {
        render(<Nav/>)
        expect(screen.getByText("About")).toBeInTheDocument();
    })

    test("display `Services`", () => {
        render(<Nav/>)
        expect(screen.getByText("Services")).toBeInTheDocument();
    })

    test("display `Menu`", () => {
        render(<Nav/>)
        expect(screen.getByText("Menu")).toBeInTheDocument();
    })

    test("display `Reservations`", () => {
        render(<Nav/>)
        expect(screen.getByText("Reservations")).toBeInTheDocument();
    })

    test("display `Order Online`", () => {
        render(<Nav/>)
        expect(screen.getByText("Order Online")).toBeInTheDocument();
    })

    test("display `Login`", () => {
        render(<Nav/>)
        expect(screen.getByText("Login")).toBeInTheDocument();
    })
})