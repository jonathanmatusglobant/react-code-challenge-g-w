import { Button } from '@components/UI';

export default function CounterButton({ incrementCounter }) {
    return (
        <Button onClick={incrementCounter} variant='primary'>
            Increase
        </Button>
    );
}
