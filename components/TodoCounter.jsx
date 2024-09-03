function TodoCounter({ total, completed }) {
    return (
        <h1 className={"font-bold text-4xl text-center"}>
            Has completado {completed} de {total} ToDo's
        </h1>
    );
}

export { TodoCounter };