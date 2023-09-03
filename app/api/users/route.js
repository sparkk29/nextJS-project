export async function GET(request) {
    // return new Response('Hello, world!');

    let users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'Josh Doe' },
    ];

    return new Response(JSON.stringify(users), {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
    });

    }