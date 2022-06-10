import './comment.css';
import { Card } from '@components/UI';

export default function Comment({ comment }) {
    return (
        <li>
            <Card className='card-comment dark elevation-2'>
                <Card className='card-author primary'>
                    <p>{comment.name}</p>
                    <p>{comment.email}</p>
                </Card>
                <p>{comment.body}</p>
            </Card>
        </li>
    );
}
