import React from 'react';
import usePosts from '../hooks/usePosts';
import useMarkdown from '../hooks/useMarkdown';
import useParams from '../hooks/useParams';

const PostPage = ({ location }) => {
    const params = useParams(location);
    const postData = usePosts(params.postId)
    const converted = useMarkdown(postData.content)

    return (
        <div>
            {postData.title}
        </div>
    )
}

export default PostPage;