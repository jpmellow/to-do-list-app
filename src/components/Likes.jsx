import { useLikes } from "@/services/useLikes";

export function Likes () {
    const { likes, addLike } = useLikes();

    return <button onClick={addLike}
}