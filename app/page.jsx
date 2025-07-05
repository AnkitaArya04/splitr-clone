
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
export default function Home() {
  return (
    <div className="flex flex-col pt-16">
      <section>
        <div>
          <Badge variant="outline" className="bg-green-100 text-green-700">
            Split expenses. Simplify life.
          </Badge>
        </div>
      </section>
    </div>
  );
}
