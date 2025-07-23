import React, {
    createContext,
    useReducer,
    useContext,
    ReactNode,
    Dispatch,
  } from "react";
  
  export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }
  
  type State = {
    items: CartItem[];
  };
  
  type Action =
    | { type: "ADD_ITEM"; payload: CartItem }
    | { type: "REMOVE_ITEM"; payload: { id: string } }
    | { type: "CLEAR_CART" };
  
  function cartReducer(state: State, action: Action): State {
    switch (action.type) {
      case "ADD_ITEM": {
        const existing = state.items.find((i) => i.id === action.payload.id);
        if (existing) {
          return {
            items: state.items.map((i) =>
              i.id === existing.id
                ? { ...i, quantity: i.quantity + action.payload.quantity }
                : i
            ),
          };
        }
        return { items: [...state.items, action.payload] };
      }
      case "REMOVE_ITEM":
        return {
          items: state.items.filter((i) => i.id !== action.payload.id),
        };
      case "CLEAR_CART":
        return { items: [] };
      default:
        return state;
    }
  }
  
  const CartStateContext = createContext<State | undefined>(undefined);
  const CartDispatchContext = createContext<Dispatch<Action> | undefined>(
    undefined
  );
  
  export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });
    return (
      <CartStateContext.Provider value={state}>
        <CartDispatchContext.Provider value={dispatch}>
          {children}
        </CartDispatchContext.Provider>
      </CartStateContext.Provider>
    );
  }
  
  export function useCartState() {
    const ctx = useContext(CartStateContext);
    if (!ctx) throw new Error("useCartState must be inside CartProvider");
    return ctx;
  }
  
  export function useCartDispatch() {
    const ctx = useContext(CartDispatchContext);
    if (!ctx) throw new Error("useCartDispatch must be inside CartProvider");
    return ctx;
  }
  