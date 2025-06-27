import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { computed } from "@angular/core";

const initialWishlist: any = []

export const Wishlist = signalStore(
  { providedIn: 'root' },
  withState({
    myWishlist: initialWishlist
  }),
  withComputed((state) => ({
    myWishlistCount: computed(() => state.myWishlist().length)
  })),
  withMethods((state) => ({
    addToWishlist: (event: Event, product: any) => {
      event.stopPropagation();
      const isInWishlist = state.myWishlist().some((item: any) => item.id === product.id);
      patchState(state, {
        myWishlist: isInWishlist
          ? state.myWishlist().filter((item: any) => item.id !== product.id)
          : [...state.myWishlist(), product]
      });
    },
    removeFromWishlist: (productId: any) => patchState(state, {
      myWishlist: state.myWishlist().filter((i: any) => i.id !== productId)
    }),
    emptyWishlist: () => patchState(state, {
      myWishlist: [],
    })
  }))
)
