import type { NextPage } from 'next';
import { preloadTest } from '../todos/page';

const users: NextPage = () => {
    preloadTest();
    return (
        <div>
            <h1>Users Page :: </h1>
        </div>
    );
}

export default users;

