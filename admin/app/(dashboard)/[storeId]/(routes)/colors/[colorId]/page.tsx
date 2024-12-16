import prismadb from "@/lib/prismadb";
import { ColorForm } from "./components/color-form";

const BillboardPage = async ({
  params,
}: {
  params: Promise<{ colorId: string }>;
}) => {
  let color = null;
  const { colorId } = await params;

  if (colorId != "new") {
    color = await prismadb.color.findUnique({
      where: {
        id: colorId,
      },
    });
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
};

export default BillboardPage;
