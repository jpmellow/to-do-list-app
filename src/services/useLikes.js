import { create } from "zustand";

export const useLikes = create((set, get) => ({
    likes: 0,

    addLike: ()=> {
        const { likes } = get();
        set({
            likes: likes + 1,
        })
    },

    dislike: () => {
        const { likes } = get();
        set({
            likes: likes - 1,
        })
    },
    }

}))