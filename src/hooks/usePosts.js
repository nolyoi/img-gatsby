import useAxios from './useAxios';
import { GET_ALL_POSTS, GET_POST } from '../queries/Post';

const usePosts = (id) => {
    if (id) {
        const response = useAxios(GET_POST, {
            id
        })

        return response.data.Post
    } else {
        const response = useAxios(GET_ALL_POSTS)

        return response.data.allPosts
    }
}

export default usePosts;