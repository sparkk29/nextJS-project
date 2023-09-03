import type { NextPage } from 'next';


async function getTodoList() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos',
        {
            cache: "no-cache",
            next: { revalidate: 60 } // ||| SEGMENT LEVEL CACHING ::: BACKGROUND REVALIDATION ||| revalidate this segment every 60 seconds
        }
    )
    const data = await res.json()
    return data
}

export function preloadTest() {
    console.log("preloadTest"); 
    void getTodoList();
}

const todoPage: NextPage = async (props) => {

    const todos = await getTodoList ();

    return (
      <div>
        <h1 className="text-4xl text-bold ">Todo Page</h1>
        <div className="grid grid-cols-3  gap-4">
            {todos &&
              Array.isArray(todos) &&
              todos.map((todo: any) => (
                <div key={todo.id} className="border p-5 shadow-lg rounded-lg  ">
                  <h4>{todo.title}</h4>
                </div>
              ))}
        </div>
      </div>
    );
}

export default todoPage;