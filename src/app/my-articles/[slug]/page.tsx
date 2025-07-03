// src/app/my-articles/[slug]/page.tsx
import EditArticlePage from "./EditArticlePage";

export const metadata = {
  title: "Edit Article | Dliverd",
};

export default function Page() {
  return <EditArticlePage />;
}
