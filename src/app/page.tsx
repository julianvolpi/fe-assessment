import Navbar from "./(components)/navbar";
import PageRenderer from "./(components)/PageRenderer";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageRenderer slug="home" />
    </>
  );
}
