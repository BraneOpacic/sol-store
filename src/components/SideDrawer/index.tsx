import { useSideDrawer } from "@/hooks/useSideDrawer";

export const SideDrawer: React.FC = () => {
  const {
    isDrawerOpen,
    setIsDrawerOpen,
    productsCart,
    incrementQuantity,
    decrementQuantity,
    totalPrice,
  } = useSideDrawer();

  return (
    <div className="drawer drawer-end z-10">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="relative flex flex-col min-h-full w-96 p-4 bg-base-100 text-base-content h-full">
          <button
            aria-label="close sidebar"
            className="btn btn-sm btn-circle absolute top-2 right-5"
            onClick={() => setIsDrawerOpen(false)}
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold mb-4">You are buying:</h2>
          <div className="flex flex-col overflow-y-auto flex-1">
            <div className="flex-1 space-y-4">
              {productsCart.map(({ name, price, quantity, id }) => (
                <div key={id} className="p-4 bg-neutral rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="text-sm">
                    Total: ${(+price * quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center justify-center mt-2">
                    <div className="flex-1">
                      <button
                        className="btn btn-sm btn-error w-full text-white"
                        onClick={() => decrementQuantity(id)}
                      >
                        -
                      </button>
                    </div>
                    <div className="px-8">
                      <span className="mx-2">{quantity}</span>
                    </div>
                    <div className="flex-1">
                      <button
                        className="btn btn-sm btn-primary w-full text-white"
                        onClick={() => incrementQuantity(id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <p className="text-lg font-bold">Total Price: ${totalPrice}</p>
          </div>
          <button className="btn btn-primary w-full mt-4 text-white">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
