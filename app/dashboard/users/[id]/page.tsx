

const users = ({ params }: {
    params: {
        id: string;
    };
}) => {
  return (
    <div>
          <h1>User ID :: {params.id}</h1>
    </div>
  );
};

export default users;
