import { Button } from '@components/UI';

export default function Item({ item, onRemove }) {
    const onClickItem = () => {
        onRemove(item.id);
    };
    return (
        <Button onClick={onClickItem} variant='secondary'>
            {item.value}
        </Button>
    );
}
