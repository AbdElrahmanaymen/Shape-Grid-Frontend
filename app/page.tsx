/**
 * Renders the Home page.
 * 
 * @returns The JSX element representing the Home page.
 */
import Grid from "./components/grid/grid";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <main className="p-12">
      <Navbar /> {/* Render the Navbar component */}
      <Grid /> {/* Render the Grid component for showing the shapes */}
    </main>
  )
}
