import { useRequest } from '@hooks';
import { WEB_SERVICES_CONSTANTS } from '@constants';
import { Card } from '@components/UI';
import './comments.css';
import Comment from './comment';

export default function Comments() {
    const { data: comments, loading, error } = useRequest({ url: WEB_SERVICES_CONSTANTS.COMMENTS_API, method: 'get' });

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error found: {JSON.stringify(error)}</p>;
    }
    return (
        <Card className='card--comments dark'>
            <h1>Post Comments</h1>
            <ul className='comments'>
                {comments?.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
            </ul>
        </Card>
    );
}
