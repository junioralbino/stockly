import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { getProducts } from "../_data-access/product/get-products";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "../products/_complonents/table-columns";

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      {/* Coluna da Esquerda */}
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de Produtos
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        <Button className="gap-2">
          <PlusIcon size={20} />
          Novo Produto
        </Button>
      </div>
      {/* Coluna da Direita */}
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
};

export default Products;
