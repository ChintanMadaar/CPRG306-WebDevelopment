import { useUserAuth } from "../_utils/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  if (!user) {
    return null; // or a loading spinner if you prefer
  }

  return (
    <div>
      <h1>Shopping List</h1>
      {/* Render the shopping list here */}
    </div>
  );
}
